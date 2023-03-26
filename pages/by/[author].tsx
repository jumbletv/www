import Head from "next/head";
import { Navbar } from "layout/Navbar";
import { ArticlesList } from "components/ArticlesList";
import { articlesData, ArticleData } from "data/articlesData";
import { Footer } from "layout/Footer";
import { Fragment } from "react";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useRouter } from "next/router";
import { Bars } from "common/Bars";
import { homeNavBarData, BarData } from "data/barData";
import { Breadcrumbs, BreadcrumbLink } from "common/Breadcrumbs";
import { Header } from "layout/Header";
import { LogoBanner } from "common/LogoBanner";
import { IntroHeaderData, IntroHeader } from "components/IntroHeader";
import { articlesByData, IntroData } from "data/introData";
import { splitWord, splitAndCapitalize } from "helper/stringHelpers";
import {getAuthorsBySlug} from "data/loaders/getAuthorsBySlug";
import {Author} from "types/cms/Author";

interface AuthorSingleProps {
  data: Author[];
  author:string;
}

function Author({ data, author }: AuthorSingleProps) {
  const router = useRouter();
  const { locale, query } = router;

  const articlesByAuthor = getAuthorsBySlug().filter(
    (article) => article.slug === author
  );

  const breadcrumbsLinks: BreadcrumbLink[] = [
    { id: 1, title: "Home", link: "/" },
    { id: 2, title: "The Jumblog", link: "/the-jumblog/page/1" },
    {
      id: 3,
      title: `Article by ${splitWord(author)}`,
      link: `/type/${author}`,
    },
  ];

  const titleText = `JUMBLE | Articles by ${splitAndCapitalize(author)}`;

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
      <ArticlesList articlesData={articlesByAuthor} />
      <Footer />
    </Fragment>
  );
}

export async function getStaticProps({ locale, params }: { locale: string; params: { author: string } }) {
  const author = params.author;
  const introHeaderData = getAuthorsBySlug() || {};

  return {
    props: {
      data: getAuthorsBySlug(),
      introHeaderData,
      author,
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
  const paths = getAuthorsBySlug().map((author) => "/by/" + author.slug);

  return {
    paths: paths,
    fallback: true,
  };
}

export default Author;