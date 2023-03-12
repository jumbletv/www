import Head from "next/head";
import { Navbar } from "layout/navbar/Navbar";
import HomeProducts from "components/products/homeProducts/HomeProducts";
import { Footer } from "layout/footer/Footer";
import { Fragment } from "react";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { Bars } from "common/bars/Bars";
import { jumblogNavBarData } from "data/barData";
import { Breadcrumbs } from "common/breadcrumbs/Breadcrumbs";
import { salesData, influencerData } from "data/products";
import { splitWord, splitAndCapitalize } from "helper/splitWord";
import { Header } from "layout/header/Header";
import { IntroHeader } from "components/introHeader/IntroHeader";
import { NotFoundMessage } from "common/notFoundMessage/NotFoundMessage";

function InfluencerName({ poplulateInfluencerData, populateProductData }) {
  const router = useRouter();
  const {
    asPath,
    locale,
    query: { influencername },
  } = router;

  const [influencerData, setInfluencerData] = useState({});
  const [influencerSales, setInfluencerSales] = useState([]);

  useEffect(() => {
    getInfluencerData();
    getSalesByInfluencer();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [asPath]);

  const getInfluencerData = () => {
    poplulateInfluencerData?.forEach((influencer) => {
      if (influencer.influencerLink === asPath) {
        setInfluencerData(influencer);
      }
    });
  };

  const getSalesByInfluencer = () => {
    const influencerSalesArr = [];
    populateProductData?.forEach((product) => {
      if (product.influencerLink === asPath) {
        influencerSalesArr.push(product);
      }
    });
    setInfluencerSales(influencerSalesArr);
  };

  const breadcrumbsLinks = [
    { id: 1, title: "Home", link: "/" },
    { id: 2, title: "Upcoming Sales", link: "/sales/page/1" },
    {
      id: 3,
      title: `Sales By ${splitWord(influencername)}`,
      link: `/influencer/${influencername}`,
    },
  ];
  const titleText = `JUMBLE | influencer ${splitAndCapitalize(influencername)}`;

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
        <IntroHeader introHeaderData={influencerData} />
      ) : (
        <NotFoundMessage message="No Auther Found" />
      )}
      {influencerSales ? (
        <HomeProducts productsData={influencerSales} />
      ) : (
        <NotFoundMessage message="This Auther has no sales at the moment" />
      )}
      <Footer />
    </Fragment>
  );
}

export async function getStaticProps({ locale }) {
  return {
    props: {
      poplulateInfluencerData: influencerData,
      populateProductData: salesData,
      ...(await serverSideTranslations(locale, ["common", "article-types"])),
    },
    revalidate: 60,
  };
}

export async function getStaticPaths() {
  const influencerPaths = influencerData.map(
    ({ influencerLink }) => influencerLink
  );

  return {
    paths: influencerPaths,
    fallback: true,
  };
}

export default InfluencerName;
