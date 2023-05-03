import Head from "next/head";
import { Navbar } from "layout/Navbar";
import { ArticlesList } from "components/ArticlesList";
import { articlesData } from "data/articlesData";
import { Footer } from "layout/Footer";
import { Fragment, useEffect, useState } from "react";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useRouter } from "next/router";
import { Bars } from "common/Bars";
import { homeNavBarData } from "data/barData";
import { Breadcrumbs } from "common/Breadcrumbs";
import { Header } from "layout/Header";
import { LogoBanner } from "common/LogoBanner";
import { splitWord, splitAndCapitalize } from "helper/stringHelpers";
import type { GetStaticPaths, GetStaticProps } from "next";
import {getTagsBySlug} from "data/loaders/getTagsBySlug";
import { IntroHeader } from "@/components/IntroHeader";

interface TagProps {
  populateArticlesData: Array<any>;
}

export default function Tag({ populateArticlesData }: TagProps) {
  const router = useRouter();
  const {
    locale,
    query: { tag },
  } = router;

  const [articlesByTag, setArticlesByTag] = useState([]);

  useEffect(() => {
    getArticlesByTag();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [locale, tag]);

  const getArticlesByTag = () => {
    const articles = [];
    populateArticlesData?.forEach((article) => {
      article.tags.forEach((singleTag) => {
        if (singleTag.tag === splitWord(tag as string)) {
          articles.push(article);
        }
      });
      setArticlesByTag(articles);
    });
  };

  const breadcrumbsLinks = [
    { id: 1, title: "Home", link: "/" },
    { id: 2, title: "The Jumblog", link: "/the-jumblog/page/1" },
    {
      id: 3,
      title: `Article with tag ${splitWord(tag as string)}`,
      link: `/tag/${tag}`,
    },
  ];

  const titleText = `JUMBLE | Tag ${splitAndCapitalize(tag as string)}`;

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
      <ArticlesList articlesData={articlesByTag} showBtn={true} />
      <Footer />
    </Fragment>
  );
}

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  return {
    props: {
      populateArticlesData: articlesData,
      ...(await serverSideTranslations(locale, ["common", "articles"])),
    },
    revalidate: 60,
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = getTagsBySlug().map((tag) => "/tag/" + tag?.slug);

  return {
    paths: paths,
    fallback: false,
  };
};