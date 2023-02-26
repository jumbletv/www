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
import JumblogMenu from "components/menus/jumblogMenu/JumblogMenu";
import Header from "layout/header/Header";
import LogoBanner from "common/logoBanner/LogoBanner";
import { articleTypesData } from "data/introData";
import { IntroHeader } from "components/introHeader/IntroHeader";
import { splitAndCapitalize, splitWord } from "helper/splitWord";

function Type({ poplulateHomeBlogData }) {
  const router = useRouter();
  const { locale, query } = router;
  const { type } = query;

  const [blogsByType, setBlogsByType] = useState([]);
  const [introHeaderData, setIntroHeaderData] = useState([]);
  const [articleType, setArticleType] = useState("");

  useEffect(() => {
    getBlogsByTag();
    getTypeHeaderData();
    getArticleType();
  }, [locale, type, articleType]);

  const getArticleType = () => {
    if (type) {
      setArticleType(splitWord(type));
    }
  };

  const getBlogsByTag = () => {
    const blogs = [];
    poplulateHomeBlogData?.forEach((blog) => {
      if (blog.type === articleType) {
        blogs.push(blog);
      }
    });
    setBlogsByType(blogs);
  };

  const getTypeHeaderData = () => {
    const headerTypeArr = [];
    articleTypesData.forEach((article) => {
      if (article.type.toLocaleLowerCase() === articleType) {
        headerTypeArr.push(article);
      }
    });
    setIntroHeaderData(headerTypeArr);
  };

  const breadcrumbsLinks = [
    { id: 1, title: "Home", link: "/" },
    { id: 2, title: "The Jumblog", link: "/the-jumblog" },
    {
      id: 3,
      title: `Article with tag ${articleType} `,
      link: `/type/${type}`,
    },
  ];
  const titleText = `JUMBLE | Type ${splitAndCapitalize(type)}`;

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
      <JumblogMenu activeMenu={articleType} />
      <IntroHeader introHeaderData={introHeaderData} />
      <HomeBlogs homeBlogData={blogsByType} />
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
  const blogPaths = homeBlogData.map((blog) => blog.link);

  return {
    paths: [],
    fallback: true,
  };
}

export default Type;
