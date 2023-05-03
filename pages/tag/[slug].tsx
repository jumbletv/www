import Head from "next/head";
import { Navbar } from "layout/Navbar";
import { ArticlesList } from "components/ArticlesList";
import { Footer } from "layout/Footer";
import { Fragment } from "react";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useRouter } from "next/router";
import { Bars } from "common/Bars";
import { homeNavBarData } from "data/barData";
import { Breadcrumbs } from "common/Breadcrumbs";
import { Header } from "layout/Header";
import { LogoBanner } from "common/LogoBanner";
import type { GetStaticPaths, GetStaticProps } from "next";
import { getTagsBySlug } from "data/loaders/getTagsBySlug";
import { useTranslation } from "next-i18next";
import { Tag } from "@/types";
import { getBlogPostsByTagSlug } from "@/data/loaders/getBlogPostsBySlug";
import { MetaSEO } from "@/components/MetaSEO";

const ArticlesByTagPage = ({ data }: {data: Tag}) => {
  const { t } = useTranslation("common");
  const router = useRouter();
  const breadcrumbsLinks = [
    { id: 1, title: t("home"), link: "/" },
    { id: 2, title: t("jumblog"), link: "/the-jumblog" },
    { id: 3, title: `${t("tag")} ${data.name}`, link: router.asPath },
  ];

  return (
    <Fragment>
      <Head>
        <MetaSEO
          title={data.name}
          description={data.description}
          image={data.icon.url}
        />
      </Head>
      <Navbar />
      <Bars barData={homeNavBarData} />
      <Breadcrumbs links={breadcrumbsLinks} />
      <Header headerText={t("jumblog")} />
      <LogoBanner />
      <ArticlesList articlesData={data.relatedPostsRef} showBtn={true} />
      <Footer />
    </Fragment>
  );
};

export const getStaticProps: GetStaticProps = async ({ locale, params }) => {
  const { slug } = params;
  const data = getTagsBySlug(slug as string)[0];
  const articlesByTag = getBlogPostsByTagSlug(slug as string)

  return {
    props: {
      data,
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

export default ArticlesByTagPage;