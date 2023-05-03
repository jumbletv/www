import Head from "next/head";
import { Navbar } from "layout/Navbar";
import { Footer } from "layout/Footer";
import { Fragment } from "react";
import { useRouter } from "next/router";
import { Bars } from "common/Bars";
import { jumblogNavBarData } from "data/barData";
import { Breadcrumbs } from "common/Breadcrumbs";
import { influencerData } from "data/products";
import { Header } from "layout/Header";
import { IntroHeader } from "components/IntroHeader";
import { NotFoundMessage } from "common/NotFoundMessage";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { getInfluencersBySlug } from "data/loaders/getInfluencersBySlug";
import type { GetStaticPaths, GetStaticProps } from "next";
import { Influencer } from "@/types";

interface SingleInfluencerProps {
  data: Influencer;
}

function SingleInfluencerPage({ data }: SingleInfluencerProps) {
  const router = useRouter();
  const { locale } = router;

  const breadcrumbsLinks = [
    { id: 1, title: "Home", link: "/" },
    { id: 2, title: "Upcoming Sales", link: "/sales/" },
    {
      id: 3,
      title: `Sales By ${data.name}`,
      link: `/influencer/${data.slug}`,
    },
  ];
  const titleText = `JUMBLE | influencer ${data.name}`;

  return (
    <Fragment>
      <Head>
        <title>{titleText}</title>
      </Head>
      <Navbar />
      <Bars barData={jumblogNavBarData} />
      <Breadcrumbs links={breadcrumbsLinks} />
      <Header headerText="featured_sales" locale={locale} shrink={false} />
      {influencerData ? (
        <IntroHeader
          id={data["_id"]}
          headerImg={data["profil-pic"].url}
          title={data["name"]}
          detail={data["bio"]}
        />
      ) : (
        <NotFoundMessage message="No author Found" />
      )}
      {/* {influencerSales.length ? (
        <HomeProducts productsData={influencerSales} showBtn />
      ) : (
        <NotFoundMessage message="This author has no sales at the moment" />
      )} */}
      <Footer />
    </Fragment>
  );
}

export const getStaticProps: GetStaticProps = async ({ locale, params }) => {
  const data = getInfluencersBySlug(params.slug as string)[0];

  return {
    props: {
      data,
      ...(await serverSideTranslations(locale, ["common", "article-types"])),
    },
    revalidate: 60,
  };
}

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = getInfluencersBySlug().map((inf) => "/influencer/" + inf?.slug);

  return {
    paths: paths,
    fallback: false,
  };
};

export default SingleInfluencerPage;
