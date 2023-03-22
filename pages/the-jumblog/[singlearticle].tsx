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
import { ArticleDetail } from "components/articleDetail/ArticleDetail";
import { useState } from "react";
import { splitWord } from "helper/splitWord";
import { articlesByData } from "data/introData";
import { ArticleDataTypes, articleDataValues } from "types/articleList";
import { authorDataTypes, authorDataValues } from "types/introHeader";
import { GetStaticProps, GetStaticPaths } from "next";
import { breadcrumsTypes } from "types/breadcrumbs";

function SingleArticle({ poplulateArticlesData, populateauthorData }) {
  const router = useRouter();

  const {
    locale,
    asPath,
    query: { singlearticle },
  } = router;

  const [singleArticle, setSingleArticle] =
    useState<ArticleDataTypes>(articleDataValues);
  const [articleType, setArticleType] = useState<string>("");
  const [articleauthor, setArticleauthor] =
    useState<authorDataTypes>(authorDataValues);

  useEffect(() => {
    getSingleBlog();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [locale, router]);

  const getSingleBlog = () => {
    poplulateArticlesData?.forEach((article: ArticleDataTypes) => {
      if (article?.link === asPath) {
        setSingleArticle(article);
        setArticleType(article.type);
        populateauthorData?.forEach((author: authorDataTypes) => {
          if (author.authorLink === article.by) {
            setArticleauthor(author);
          }
        });
      }
    });
  };

  const breadcrumbsLinks: breadcrumsTypes[] = [
    { id: 1, title: "Home", link: "/" },
    { id: 2, title: "The Jumblog", link: "/the-jumblog/page/1" },
    { id: 3, title: `${articleType}`, link: `/type/${articleType}` },
    {
      id: 4,
      title: splitWord(singlearticle as string),
      link: `/the-jumblog/${singlearticle}`,
    },
  ];
  const titleText: string = `JUMBLE | Article ${splitWord(
    singlearticle as string
  )}`;

  return (
    <Fragment>
      <Head>
        <title>{titleText}</title>
      </Head>
      <Navbar />
      <Bars barData={homeNavBarData} />
      <Breadcrumbs links={breadcrumbsLinks} />
      {singleArticle && (
        <ArticleDetail articleDetail={singleArticle} author={articleauthor} />
      )}
      <ArticlesList articlesData={poplulateArticlesData} />
      <Footer />
    </Fragment>
  );
}

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  return {
    props: {
      poplulateArticlesData: articlesData,
      populateauthorData: articlesByData,
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
  const blogPaths = articlesData.map((blog) => blog.link);

  return {
    paths: blogPaths,
    fallback: true,
  };
};

export default SingleArticle;
