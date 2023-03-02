import Head from "next/head";
import Navbar from "layout/navbar/Navbar";
import { Articles } from "components/articles/articles/Articles";
import { articlesData } from "data/articlesData";
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
import { splitWord, splitAndCapitalize } from "helper/splitWord";

function Tag({ poplulateArticlesData }) {
  const router = useRouter();
  const {
    locale,
    query: { tag },
  } = router;

  const [articlesByTag, setArticlesByTag] = useState([]);

  useEffect(() => {
    getArticlesByTag();
  }, [locale, tag]);

  const getArticlesByTag = () => {
    const articles = [];
    poplulateArticlesData?.forEach((article) => {
      article.tags.forEach((singleTag) => {
        if (singleTag.tag === splitWord(tag)) {
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
      title: `Article with tag ${splitWord(tag)}`,
      link: `/type/${tag}`,
    },
  ];

  const titleText = `JUMBLE | Tag ${splitAndCapitalize(tag)}`;

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
      <Articles articlesData={articlesByTag} />
      <Footer />
    </Fragment>
  );
}

export async function getStaticProps({ locale }) {
  return {
    props: {
      poplulateArticlesData: articlesData,
      ...(await serverSideTranslations(locale, ["common", "articles"])),
    },
    revalidate: 60,
  };
}
export async function getStaticPaths() {
  let tagPaths = [];
  articlesData.forEach((blog) =>
    blog.tags.forEach((tag) => tagPaths.push(tag.url))
  );

  return {
    paths: tagPaths,
    fallback: true,
  };
}

export default Tag;
