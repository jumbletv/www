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
import JumblogMenu from "components/JumblogMenu";
import { Header } from "layout/Header";
import { LogoBanner } from "common/LogoBanner";
import { IntroHeader } from "components/IntroHeader";
import { splitAndCapitalize } from "helper/stringHelpers";
import { GetStaticProps, GetStaticPaths } from "next";
import { breadcrumbsTypes } from "types/breadcrumbs";
import {getTypesBySlug} from "data/loaders/getTypesBySlug";
import {Type} from "@/types";

interface Props {
  data: Type[];
  articleType: string;
}

function ArticleTypePage({data, }: Props) {
  const router = useRouter();
  const { locale, query } = router;
  const { type } = query;

  const breadcrumbsLinks: breadcrumbsTypes[] = [
    { id: 1, title: "Home", link: "/" },
    { id: 2, title: "The Jumblog", link: "/the-jumblog/page/1" },
    {
      id: 3,
      title: `Article with tag ${data[0]?.name}`,
      link: `/type/${type}`,
    },
  ];
  const titleText: string = `JUMBLE | Type ${splitAndCapitalize(
      type as string
  )}`;

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
        <JumblogMenu activeMenu="FIXME" />
        <IntroHeader
            id={data[0]["_id"]}
            headerImg={data[0]["main-image"]["url"]}
            title={data[0]["name"]}
            detail={data[0]["meta-description"]}
        />
        <ArticlesList articlesData={data[0].relatedPostsRef} showBtn={true} />
        <Footer />
      </Fragment>
  );
}

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  const data = getTypesBySlug();
  //console.log("OOOOOOOOOOOOO =>     ", data);
  return {
    props: {
      data,
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

export default ArticleTypePage;
