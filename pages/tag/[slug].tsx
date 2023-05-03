import Head from "next/head";
import { Navbar } from "layout/Navbar";
import { ArticlesList } from "components/ArticlesList";
import { articlesData } from "data/articlesData";
import { Footer } from "layout/Footer";
import { Fragment } from "react";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useRouter } from "next/router";
import { Bars } from "common/Bars";
import { homeNavBarData } from "data/barData";
import { Breadcrumbs } from "common/Breadcrumbs";
import { Header } from "layout/Header";
import { LogoBanner } from "common/LogoBanner";
import { splitWord } from "helper/stringHelpers";
import type { GetStaticPaths, GetStaticProps } from "next";
import { getTagsBySlug } from "data/loaders/getTagsBySlug";
import { useTranslation } from "next-i18next";

interface TagProps {
  articlesByTag: Array<any>;
  tagTitle: string;
}

const TagPage = ({ articlesByTag, tagTitle }: TagProps) => {
  const { t } = useTranslation("common");
  const router = useRouter();
  const breadcrumbsLinks = [
    { id: 1, title: t("home"), link: "/" },
    { id: 2, title: t("jumblog"), link: "/the-jumblog/page/1" },
    { id: 3, title: `${t("tag")} ${tagTitle}`, link: router.asPath },
  ];

  return (
    <Fragment>
      <Head>
        <title>{t("jumble")} | {tagTitle}</title>
      </Head>
      <Navbar />
      <Bars barData={homeNavBarData} />
      <Breadcrumbs links={breadcrumbsLinks} />
      <Header headerText={t("jumblog")} />
      <LogoBanner />
      <ArticlesList articlesData={articlesByTag} showBtn={true} />
      <Footer />
    </Fragment>
  );
};

export const getStaticProps: GetStaticProps = async ({ locale, params }) => {
  const tag = params?.tag as string;
  const articlesByTag = articlesData.filter((article) =>
    article.tags.some((t) => splitWord(t.tag) === tag)
  );

  return {
    props: {
      articlesByTag,
      ...(await serverSideTranslations(locale, ["common", "articles"])),
    },
    revalidate: 60,
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = getTagsBySlug().map((tag) => "/tag/" + tag?.slug);

  return {
    paths,
    fallback: false,
  };
};

export default TagPage;