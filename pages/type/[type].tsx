import Head from "next/head";
import { Navbar } from "layout/Navbar";
import { ArticlesList } from "components/ArticlesList";
import { articlesData } from "data/articlesData";
import { Footer } from "layout/Footer";
import { Fragment } from "react";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useEffect } from "react";
import { useRouter } from "next/router";
import { Bars } from "common/Bars";
import { homeNavBarData } from "data/barData";
import { Breadcrumbs } from "common/Breadcrumbs";
import { useState } from "react";
import JumblogMenu from "components/JumblogMenu";
import { Header } from "layout/Header";
import { LogoBanner } from "common/LogoBanner";
import { articleTypesData } from "data/introData";
import { IntroHeader } from "components/IntroHeader";
import { splitAndCapitalize, splitWord } from "helper/stringHelpers";
import { ArticleDataTypes } from "types/articleList";
import { introHeaderTypes, introHeaderValues } from "types/introHeader";
import { GetStaticProps, GetStaticPaths } from "next";
import { breadcrumsTypes } from "types/breadcrumbs";
import {getTypesBySlug} from "data/loaders/getTypesBySlug";

function ArticleTypePage({ poplulateArticlesData }) {
  const router = useRouter();
  const { locale, query } = router;
  const { type } = query;

  const [articlesByType, setArticlesByType] = useState<ArticleDataTypes[]>([]);
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
      setArticleType(splitWord(type as string));
    }
  };

  const getArticlesByType = () => {
    const articles = [];
    poplulateArticlesData?.forEach((article: ArticleDataTypes) => {
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
  const titleText: string = `JUMBLE | Type ${splitAndCapitalize(
    type as string
  )}`;
  const { id, headerImg, title, detail } = introHeaderData;

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
      <IntroHeader
        id={id}
        headerImg={headerImg}
        title={title}
        detail={detail}
      />
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
export const getStaticPaths: GetStaticPaths = async () => {
  const paths = getTypesBySlug().map((type) => "/type/" + type?.slug);

  return {
    paths: paths,
    fallback: true,
  };
};

export default ArticleTypePage;
