import Head from "next/head";
import { Navbar } from "layout/Navbar";
import { HomeProducts } from "components/HomeProducts";
import { Footer } from "layout/Footer";
import { Fragment } from "react";
import { useRouter } from "next/router";
import { Bars } from "common/Bars";
import { jumblogNavBarData } from "data/barData";
import { Breadcrumbs } from "common/Breadcrumbs";
import { salesData, influencerData } from "data/products";
import { splitWord, splitAndCapitalize } from "helper/stringHelpers";
import { Header } from "layout/Header";
import { IntroHeader } from "components/IntroHeader";
import { NotFoundMessage } from "common/NotFoundMessage";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { getInfluencersBySlug } from "data/loaders/getInfluencersBySlug";
import { GetStaticPaths, GetStaticProps } from "next";
import {Influencer} from "@/types";

interface SingleInfluencerProps {
  data: Influencer
}

function SingleInfluencerPage({data}: SingleInfluencerProps) {
  const router = useRouter();
  const {locale, query} = router;

  const breadcrumbsLinks = [
    { id: 1, title: "Home", link: "/" },
    { id: 2, title: "Upcoming Sales", link: "/sales/page/1" },
    {
      id: 3,
      title: `Sales By ${data.name}`,
      link: `/influencer/${data.slug}`,
    },
  ];
  const titleText = `JUMBLE | influencer ${data.name}`;

  const { id, headerImg, title, detail } = influencerData || {};

  return (
      <Fragment>
        <Head>
          <title>{titleText}</title>
        </Head>
        <Navbar />
        <Bars barData={jumblogNavBarData} />
        <Breadcrumbs links={breadcrumbsLinks} />
        <Header
            headerText="featured_sales"
            locale={locale as string}
            shrink={false}
        />
        {influencerData ? (
            <IntroHeader
                id={id}
                headerImg={headerImg}
                title={title}
                detail={detail}
            />
        ) : (
            <NotFoundMessage message="No author Found" />
        )}
        {influencerSales.length ? (
            <HomeProducts productsData={influencerSales} showBtn />
        ) : (
            <NotFoundMessage message="This author has no sales at the moment" />
        )}
        <Footer />
      </Fragment>
  );
}

export async function getStaticProps({ locale }: { locale: string }) {
  return {
    props: {
      poplulateInfluencerData: influencerData,
      populateProductData: salesData,
      ...(await serverSideTranslations(locale, ["common", "article-types"])),
    },
    revalidate: 60,
  };
}

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = getInfluencersBySlug().map((inf) => "/influencer/" + inf?.slug);

  return {
    paths: paths,
    fallback: true,
  };
};

export default SingleInfluencerPage;
