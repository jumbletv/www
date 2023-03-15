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
import JumblogMenu from "components/menus/jumblogMenu/JumblogMenu";
import { Header } from "layout/header/Header";
import { LogoBanner } from "common/logoBanner/LogoBanner";
import { articleTypesData } from "data/introData";
import { IntroHeader } from "components/introHeader/IntroHeader";
import { splitAndCapitalize, splitWord } from "helper/splitWord";
import { articleDataTypes } from "types/articleList";
import { introHeaderTypes, introHeaderValues } from "types/introHeader";
import { GetStaticProps, GetStaticPaths } from "next";
import { breadcrumsTypes } from "types/breadcrumbs";

function ArticleTypePage({ poplulateArticlesData }) {
  const router = useRouter();
  const { locale, query } = router;
  const { type } = query;

  const [articlesByType, setArticlesByType] = useState<articleDataTypes[]>([]);
  const [introHeaderData, setIntroHeaderData] =
    useState<introHeaderTypes>(introHeaderValues);
  const [articleType, setArticleType] = useState<string>("");

  useEffect(() => {
    getArticlesByType();
    getTypeHeaderData();
    getArticleType();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [locale, type, articleType]);

  const getArticleType = () => {
    if (type) {
      setArticleType(splitWord(type));
    }
  };

  const getArticlesByType = () => {
    const articles = [];
    poplulateArticlesData?.forEach((article: articleDataTypes) => {
      if (article.type === articleType) {
        articles.push(article);
      }
    });
    setArticlesByType(articles);
  };

  const getTypeHeaderData = () => {
    articleTypesData.forEach((article: introHeaderTypes) => {
      if (article.type.toLocaleLowerCase() === articleType) {
        setIntroHeaderData(article);
      }
    });
  };

  const breadcrumbsLinks: breadcrumsTypes[] = [
    { id: 1, title: "Home", link: "/" },
    { id: 2, title: "The Jumblog", link: "/the-jumblog/page/1" },
    {
      id: 3,
      title: `Article with tag ${articleType}`,
      link: `/type/${type}`,
    },
  ];
  const titleText: string = `JUMBLE | Type ${splitAndCapitalize(type)}`;

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
      <ArticlesList articlesData={articlesByType} />
      <Footer />
    </Fragment>
  );
}

export const getStaticProps: GetStaticProps = async ({ locale }) => {
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
};
export const getStaticPaths: GetStaticPaths = () => {
  return {
    paths: [],
    fallback: true,
  };
};

export default ArticleTypePage;
