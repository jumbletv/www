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


interface authorProps {
  poplulateArticlesData: ArticleData[];
}

function author({ poplulateArticlesData }: authorProps) {
  const router = useRouter();
  const { locale, query, asPath } = router;
  const { author } = query;

  const [articlesByauthor, setArticlesByauthor] = useState<ArticleData[]>([]);
  const [introHeaderData, setIntroHeaderData] = useState<IntroHeaderData>({});

  useEffect(() => {
    getArticlesByAuthor();
    getTypeHeaderData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [locale, author]);

  const getArticlesByAuthor = () => {
    const articles: ArticleData[] = [];
    poplulateArticlesData?.forEach((article: ArticleData) => {
      if (article.by === asPath) {
        articles.push(article);
      }
      setArticlesByauthor(articles);
    });
  };

  const getTypeHeaderData = () => {
    articlesByData.forEach((article: IntroData) => {
      if (article.authorLink === asPath) {
        setIntroHeaderData(article);
      }
    });
  };

  const breadcrumbsLinks: BreadcrumbLink[] = [
    { id: 1, title: "Home", link: "/" },
    { id: 2, title: "The Jumblog", link: "/the-jumblog/page/1" },
    {
      id: 3,
      title: `Article by ${splitWord(author as string)}`,
      link: `/type/${author}`,
    },
  ];

  const titleText = `JUMBLE | Articles by ${splitAndCapitalize(author as string)}`;

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
      <ArticlesList articlesData={articlesByauthor} />
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
  let authorPaths = [];
  articlesData.forEach((blog) => blog.by);

  return {
    paths: authorPaths,
    fallback: true,
  };
}

export default author;
