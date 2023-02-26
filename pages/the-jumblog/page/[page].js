import Head from "next/head";
import Navbar from "layout/navbar/Navbar";
import HomeBlogs from "components/blogs/homeBlogs/HomeBlogs";
import { homeBlogData } from "data/blogData";
import Footer from "layout/footer/Footer";
import { Fragment } from "react";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useEffect } from "react";
import { useRouter } from "next/router";
import Bars from "common/bars/Bars";
import { jumblogNavBarData } from "data/barData";
import Breadcrumbs from "common/breadcrumbs/Breadcrumbs";
import { useState } from "react";
import { Pagination } from "components/pagination/Pagination";
import JumblogMenu from "components/menus/jumblogMenu/JumblogMenu";
import { itemsPerPage } from "data/pagination";

function ArticlePage({ poplulateHomeBlogData }) {
  const router = useRouter();

  const {
    locale,
    query: { page },
  } = router;

  const [currentArticles, setCurrentArticles] = useState([]);
  const [pageNo, setPageNo] = useState(null);

  const articlesLength = poplulateHomeBlogData?.length;
  const pageCount = Math.ceil(articlesLength / itemsPerPage);

  useEffect(() => {
    getPageNo();
  }, [locale, page]);

  const getPageNo = () => {
    if (page) {
      const newOffset = ((page - 1) * itemsPerPage) % articlesLength;
      const endOffset = newOffset + itemsPerPage;
      const currentArticles = poplulateHomeBlogData?.slice(
        newOffset,
        endOffset
      );
      setCurrentArticles(currentArticles);
      setPageNo(parseInt(page));
    }
  };

  const breadcrumbsLinks = [
    { id: 1, title: "Home", link: "/" },
    { id: 2, title: "The Jumblog", link: "/the-jumblog" },
    { id: 3, title: "News", link: "/type/news" },
    {
      id: 4,
      title: "why sustainable beautiful is here to stay",
      link: "/the-jumblog/why-sustainable-beautiful-is-here-to-stay",
    },
  ];

  return (
    <Fragment>
      <Head>
        <title>JUMBLE | The Jumblog Articles </title>
      </Head>
      <Navbar />
      <Bars barData={jumblogNavBarData} />
      <Breadcrumbs links={breadcrumbsLinks} />
      <JumblogMenu activeMenu="All" />
      <HomeBlogs homeBlogData={currentArticles} />
      {pageNo && (
        <Pagination
          itemsPerPage={itemsPerPage}
          pageCount={pageCount}
          pageNo={pageNo}
          path="the-jumblog"
        />
      )}
      <Footer />
    </Fragment>
  );
}

export async function getStaticProps({ locale }) {
  return {
    props: {
      poplulateHomeBlogData: homeBlogData,
      ...(await serverSideTranslations(locale, ["common", "blogs"])),
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

export default ArticlePage;
