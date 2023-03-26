import Head from "next/head";
import { useRouter } from "next/router";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";
import { Fragment } from "react";
import { Navbar } from "layout/Navbar";
import { Footer } from "layout/Footer";
import { ArticlesList } from "components/ArticlesList";
import { NotFoundMessage } from "common/NotFoundMessage";
import { Bars } from "common/Bars";
import { Breadcrumbs } from "common/Breadcrumbs";
import { Pagination } from "components/Pagination";
import JumblogMenu from "components/JumblogMenu";
import { articlesData } from "data/articlesData";
import { itemsPerPage } from "data/pagination";
import { jumblogNavBarData } from "data/barData";
import { BlogPost, breadcrumbsTypes } from "types";
import { getBlogPostsBySlug } from "data/loaders/getBlogPostsBySlug";

interface Props {
  populateArticlesData: BlogPost[];
}

export async function getStaticProps({ locale }) {
  return {
    props: {
      populateArticlesData: getBlogPostsBySlug(),
      ...(await serverSideTranslations(locale, [
        "common",
        "articles",
        "article-types",
      ])),
    },
    revalidate: 60,
  };
}

export async function getStaticPaths() {
  const articlesData = getBlogPostsBySlug();
  const pageCount = Math.ceil(articlesData.length / itemsPerPage);

  const paths = Array(pageCount)
    .fill("")
    .map((_, index) => ({ params: { page: (index + 1).toString() } }));

  return {
    paths: paths,
    fallback: true,
  };
}

function JumblogHomePage({ populateArticlesData }: Props) {
  const router = useRouter();
  const { t } = useTranslation("articles");

  const {
    locale,
    query: { page },
  } = router;

  const articlesLength = populateArticlesData?.length;
  const pageCount = Math.ceil(articlesLength / itemsPerPage);

  const newOffset =
    ((parseInt(page as string) - 1) * itemsPerPage) % articlesLength;
  const endOffset = newOffset + itemsPerPage;
  const currentArticles = populateArticlesData?.slice(newOffset, endOffset);
  const currentPageNo = parseInt(page as string);

  const breadcrumbsLinks: breadcrumbsTypes[] = [
    { id: 1, title: t("breadcrumbHome"), link: "/" },
    { id: 2, title: t("breadcrumbBlog"), link: "/the-jumblog/page/1" },
    {
      id: 3,
      title: t("breadcrumbPage", { pageNumber: page }),
      link: `/the-jumblog/page/${page}`,
    },
  ];

  const pageTitle: string = t("pageTitleJumblog");

  return (
    <Fragment>
      <Head>
        <title>{pageTitle}</title>
      </Head>
      <Navbar />
      <Bars barData={jumblogNavBarData} />
      <Breadcrumbs links={breadcrumbsLinks} />
      <JumblogMenu activeMenu="all" />
      {currentArticles.length > 0 ? (
        <ArticlesList articlesData={currentArticles} showBtn={true} />
      ) : (
        <NotFoundMessage message={t("noArticleFound")} />
      )}
      {currentPageNo && (
        <Pagination
          pageCount={pageCount}
          pageNo={currentPageNo}
          path="the-jumblog"
        />
      )}
      <Footer />
    </Fragment>
  );
}

export default JumblogHomePage;
