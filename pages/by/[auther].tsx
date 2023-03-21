import Head from "next/head";
import { Navbar } from "layout/navbar/Navbar";
import { ArticlesList } from "components/articles/articlesList/ArticlesList";
import { articlesData, ArticleData } from "data/articlesData";
import { Footer } from "layout/footer/Footer";
import { Fragment, useEffect, useState } from "react";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useRouter } from "next/router";
import { Bars } from "common/bars/Bars";
import { homeNavBarData, BarData } from "data/barData";
import { Breadcrumbs, BreadcrumbLink } from "common/breadcrumbs/Breadcrumbs";
import { Header } from "layout/header/Header";
import { LogoBanner } from "common/logoBanner/LogoBanner";
import { IntroHeaderData, IntroHeader } from "components/introHeader/IntroHeader";
import { articlesByData, IntroData } from "data/introData";
import { splitWord, splitAndCapitalize } from "helper/splitWord";

interface AutherProps {
  poplulateArticlesData: ArticleData[];
}

function Auther({ poplulateArticlesData }: AutherProps) {
  const router = useRouter();
  const { locale, query, asPath } = router;
  const { auther } = query;

  const [articlesByAuther, setArticlesByAuther] = useState<ArticleData[]>([]);
  const [introHeaderData, setIntroHeaderData] = useState<IntroHeaderData>({});

  useEffect(() => {
    getArticlesByAuther();
    getTypeHeaderData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [locale, auther]);

  const getArticlesByAuther = () => {
    const articles: ArticleData[] = [];
    poplulateArticlesData?.forEach((article: ArticleData) => {
      if (article.by === asPath) {
        articles.push(article);
      }
      setArticlesByAuther(articles);
    });
  };

  const getTypeHeaderData = () => {
    articlesByData.forEach((article: IntroData) => {
      if (article.autherLink === asPath) {
        setIntroHeaderData(article);
      }
    });
  };

  const breadcrumbsLinks: BreadcrumbLink[] = [
    { id: 1, title: "Home", link: "/" },
    { id: 2, title: "The Jumblog", link: "/the-jumblog/page/1" },
    {
      id: 3,
      title: `Article by ${splitWord(auther as string)}`,
      link: `/type/${auther}`,
    },
  ];

  const titleText = `JUMBLE | Articles by ${splitAndCapitalize(auther as string)}`;

  return (
    <Fragment>
      <Head>
        <title>{titleText}</title>
      </Head>
      <Navbar />
      <Bars barData={homeNavBarData as BarData[]} />
      <Breadcrumbs links={breadcrumbsLinks} />
      <Header headerText="THE JUMBLOG" />
      <LogoBanner />
      <IntroHeader introHeaderData={introHeaderData} />
      <ArticlesList articlesData={articlesByAuther} />
      <Footer />
    </Fragment>
  );
}

export async function getStaticProps({ locale }: { locale: string }) {
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
