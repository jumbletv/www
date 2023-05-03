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
import JumblogMenu from "components/JumblogMenu";
import { Header } from "layout/Header";
import { LogoBanner } from "common/LogoBanner";
import { IntroHeader } from "components/IntroHeader";
import type { GetStaticPaths, GetStaticProps } from "next";
import { breadcrumbsTypes } from "types/breadcrumbs";
import {getTypesBySlug} from "data/loaders/getTypesBySlug";
import {BlogPost, Type} from "@/types";
import { getBlogPostsByTypeSlug } from "@/data/loaders/getBlogPostsBySlug";
import { MetaSEO } from "@/components/MetaSEO";

interface Props {
  data: Type;
  articles: BlogPost[];
}

function ArticlesTypePage({data, articles, }: Props) {
  const router = useRouter();
  const { locale, query } = router;

  const breadcrumbsLinks: breadcrumbsTypes[] = [
    { id: 1, title: "Home", link: "/" },
    { id: 2, title: "The Jumblog", link: "/the-jumblog" },
    {
      id: 3,
      title: `Articles with tag ${data.name}`,
      link: `/type/${data.slug}`,
    },
  ];
  const metaTitle: string = `${data.name} | Jumble`;

  return (
      <Fragment>
        <Head>
          <MetaSEO
              title={metaTitle}
              description={data["meta-description"]}
              image={data["main-image"]["url"]}
          />
        </Head>
        <Navbar />
        <Bars barData={homeNavBarData} />
        <Breadcrumbs links={breadcrumbsLinks} />
        <Header headerText="THE JUMBLOG" />
        <LogoBanner />
        <JumblogMenu activeMenu="FIXME" />
        <IntroHeader
            id={data["_id"]}
            headerImg={data["main-image"]["url"]}
            title={data["name"]}
            detail={data["meta-description"]}
        />
        <ArticlesList articlesData={articles} showBtn={true} />
        <Footer />
      </Fragment>
  );
}

export const getStaticProps: GetStaticProps = async ({ locale, params }) => {
  const { slug } = params;
  const data = getTypesBySlug(slug as string)[0];
  const articlesByType = getBlogPostsByTypeSlug(slug as string)

  return {
    props: {
      data,
      articlesByType,
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
    fallback: false,
  };
};

export default ArticlesTypePage;
