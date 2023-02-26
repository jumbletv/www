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
import { homeNavBarData } from "data/barData";
import Breadcrumbs from "common/breadcrumbs/Breadcrumbs";
import { useState } from "react";
import Header from "layout/header/Header";
import LogoBanner from "common/logoBanner/LogoBanner";
import { IntroHeader } from "components/introHeader/IntroHeader";
import { articlesByData } from "data/introData";
import { splitWord, splitAndCapitalize } from "helper/splitWord";

function Auther({ poplulateHomeBlogData }) {
  const router = useRouter();
  const { locale, query, asPath } = router;
  const { auther } = query;

  const [blogsByAuther, setBlogsByAuther] = useState([]);
  const [introHeaderData, setIntroHeaderData] = useState([]);

  useEffect(() => {
    getBlogsByAuther();
    getTypeHeaderData();
  }, [locale, auther]);

  const getBlogsByAuther = () => {
    const blogs = [];
    poplulateHomeBlogData?.forEach((blog) => {
      if (blog.by === asPath) {
        blogs.push(blog);
      }
      setBlogsByAuther(blogs);
    });
  };

  const getTypeHeaderData = () => {
    const headerTypeArr = [];
    articlesByData.forEach((article) => {
      if (article.by === asPath) {
        headerTypeArr.push(article);
      }
    });
    setIntroHeaderData(headerTypeArr);
  };

  const breadcrumbsLinks = [
    { id: 1, title: "Home", link: "/" },
    { id: 2, title: "The Jumblog", link: "/the-jumblog/page/1" },
    {
      id: 3,
      title: `Article by ${splitWord(auther)}`,
      link: `/type/${auther}`,
    },
  ];

  const titleText = `JUMBLE | Articles by ${splitAndCapitalize(auther)}`;

  return (
    <Fragment>
      <Head>
        <title>{titleText}</title>
      </Head>
      <Navbar />
      <Bars barData={homeNavBarData} />
      <Breadcrumbs links={breadcrumbsLinks} />
      <Header headerText="THE JUMBLOG" />
      <LogoBanner />
      <IntroHeader introHeaderData={introHeaderData} />
      <HomeBlogs homeBlogData={blogsByAuther} />
      <Footer />
    </Fragment>
  );
}

export async function getStaticProps({ locale }) {
  return {
    props: {
      poplulateHomeBlogData: homeBlogData,
      ...(await serverSideTranslations(locale, ["common", "blogs", "intro"])),
    },
    revalidate: 60,
  };
}
export async function getStaticPaths() {
  let autherPaths = [];
  homeBlogData.forEach((blog) => blog.by);

  return {
    paths: autherPaths,
    fallback: true,
  };
}

export default Auther;
