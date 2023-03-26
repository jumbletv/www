import { Fragment } from "react";
import Head from "next/head";
import { useRouter } from "next/router";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";
import { GetStaticProps, GetStaticPaths } from "next";
import { Navbar } from "layout/Navbar";
import { Footer } from "layout/Footer";
import { ArticlesList } from "components/ArticlesList";
import { ArticleDetail } from "components/ArticleDetail";
import { Bars } from "common/Bars";
import { Breadcrumbs } from "common/Breadcrumbs";
import { homeNavBarData } from "data/barData";
import { getBlogPostsBySlug } from "data/loaders/getBlogPostsBySlug";
import { splitWord } from "helper/stringHelpers";
import {
    Author,
    BlogPost,
    Type,
    Tag,
  breadcrumbsTypes,
} from "types";

function SingleArticlePage({ singleArticle }) {
  const router = useRouter();
  const { t } = useTranslation("articles");

  const {
    locale,
    query: { singleArticleSlug },
  } = router;

  const articleType = singleArticle?.typeRef.name || "";
  const articleAuthor = singleArticle.authorRef.name || "";

  const breadcrumbsLinks: breadcrumbsTypes[] = [
    { id: 1, title: t("breadcrumbHome"), link: "/" },
    { id: 2, title: t("breadcrumbBlog"), link: "/the-jumblog/page/1" },
    {
      id: 3,
      title: t(`breadcrumb${articleType}`),
      link: `/type/${articleType}`,
    },
    {
      id: 4,
      title: splitWord(singleArticleSlug as string),
      link: `/the-jumblog/${singleArticleSlug}`,
    },
  ];

  const pageTitle: string = t("pageTitle", {
    articleName: splitWord(singleArticleSlug as string),
  });

  return (
      <Fragment>
        <Head>
          <title>{pageTitle}</title>
        </Head>
        <Navbar />
        <Bars barData={homeNavBarData} />
        <Breadcrumbs links={breadcrumbsLinks} />
        {singleArticle && (
            <ArticleDetail articleDetail={singleArticle} author={articleAuthor} />
        )}
        <ArticlesList articlesData={singleArticle.relatedPostsRef} showBtn={true} />
        <Footer />
      </Fragment>
  );
}

export const getStaticProps: GetStaticProps = async ({ locale, params }) => {
  const { singleArticleSlug } = params;
  const singleArticle = getBlogPostsBySlug(singleArticleSlug as string)[0];

  return {
    props: {
      singleArticle,
      ...(await serverSideTranslations(locale, [
        "common",
        "articles",
        "article-types",
      ])),
    },
    revalidate: 60,
  };
};

export const getStaticPaths: GetStaticPaths = () => {
  const paths = getBlogPostsBySlug().map((article) => "/the-jumblog/" + article?.slug);

  return {
    paths: paths,
    fallback: true,
  };
};

export default SingleArticlePage;
