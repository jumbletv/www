import Head from "next/head";
import { Navbar } from "layout/navbar/Navbar";
import { ArticlesList } from "components/articles/articlesList/ArticlesList";
import { articlesData } from "data/articlesData";
import { Footer } from "layout/footer/Footer";
import { Fragment, useEffect, useState } from "react";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useRouter } from "next/router";
import { Bars } from "common/bars/Bars";
import { jumblogNavBarData } from "data/barData";
import { Breadcrumbs } from "common/breadcrumbs/Breadcrumbs";
import { Pagination } from "components/pagination/Pagination";
import JumblogMenu from "components/menus/jumblogMenu/JumblogMenu";
import { itemsPerPage } from "data/pagination";
import { NotFoundMessage } from "common/notFoundMessage/NotFoundMessage";

interface Props {
  poplulateArticlesData: Array<any>;
}

function JumblogHome({ poplulateArticlesData }: Props) {
  const router = useRouter();

  const {
    locale,
    query: { page },
  } = router;

  const [currentArticles, setCurrentArticles] = useState<Array<any>>([]);
  const [pageNo, setPageNo] = useState<number | null>(null);

  const articlesLength = poplulateArticlesData?.length;
  const pageCount = Math.ceil(articlesLength / itemsPerPage);

  useEffect(() => {
    getPageNo();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [locale, page]);

  const getPageNo = () => {
    if (page) {
      const newOffset = ((page - 1) * itemsPerPage) % articlesLength;
      const endOffset = newOffset + itemsPerPage;
      const currentArticles = poplulateArticlesData?.slice(
        newOffset,
        endOffset
      );
      setCurrentArticles(currentArticles);
      setPageNo(parseInt(page as string));
    }
  };

  const breadcrumbsLinks = [
    { id: 1, title: "Home", link: "/" },
    { id: 2, title: "The Jumblog", link: "/the-jumblog/page/1" },
    { id: 3, title: `Page ${page}`, link: `/the-jumblog/page/${page}` },
  ];

  return (
    <Fragment>
      <Head>
        <title>JUMBLE | The Jumblog Articles </title>
      </Head>
      <Navbar />
      <Bars barData={jumblogNavBarData} />
      <Breadcrumbs links={breadcrumbsLinks} />
      <JumblogMenu activeMenu="all" />
      {currentArticles ? (
        <ArticlesList articlesData={currentArticles} />
      ) : (
        <NotFoundMessage message="No Article Found" />
      )}
      {pageNo && (
        <Pagination pageCount={pageCount} pageNo={pageNo} path="the-jumblog" />
      )}
      <Footer />
    </Fragment>
  );
}

export async function getStaticProps({ locale }) {
  return {
    props: {
      poplulateArticlesData: articlesData,
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
  return {
    paths: [],
    fallback: true,
  };
}

export default JumblogHome;
