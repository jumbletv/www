import Head from "next/head";
import { Navbar } from "layout/navbar/Navbar";
import { ArticlesList } from "components/articles/articlesList/ArticlesList";
import { articlesData } from "data/articlesData";
import { Footer } from "layout/footer/Footer";
import { Fragment } from "react";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useEffect } from "react";
import { useRouter } from "next/router";
import { Bars } from "common/bars/Bars";
import { homeNavBarData } from "data/barData";
import { Breadcrumbs } from "common/breadcrumbs/Breadcrumbs";
import { useState } from "react";
import { Header } from "layout/header/Header";
import { LogoBanner } from "common/logoBanner/LogoBanner";
import { IntroHeader } from "components/introHeader/IntroHeader";
import { articlesByData } from "data/introData";
import { splitWord, splitAndCapitalize } from "helper/splitWord";

function Auther({ poplulateArticlesData }) {
  const router = useRouter();
  const { locale, query, asPath } = router;
  const { auther } = query;

  const [articlesByAuther, setArticlesByAuther] = useState([]);
  const [introHeaderData, setIntroHeaderData] = useState({});

  useEffect(() => {
    getArticlesByAuther();
    getTypeHeaderData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [locale, auther]);

  const getArticlesByAuther = () => {
    const articles = [];
    poplulateArticlesData?.forEach((article) => {
      if (article.by === asPath) {
        articles.push(article);
      }
      setArticlesByAuther(articles);
    });
  };

  const getTypeHeaderData = () => {
    articlesByData.forEach((article) => {
      if (article.autherLink === asPath) {
        setIntroHeaderData(article);
      }
    });
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
      <ArticlesList articlesData={articlesByAuther} />
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
  let autherPaths = [];
  articlesData.forEach((blog) => blog.by);

  return {
    paths: autherPaths,
    fallback: true,
  };
}

export default Auther;
