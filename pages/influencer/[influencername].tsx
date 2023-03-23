import Head from "next/head";
import { Navbar } from "layout/Navbar";
import HomeProducts from "components/HomeProducts";
import { Footer } from "layout/Footer";
import { Fragment, useEffect, useState } from "react";
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


interface InfluencerProps {
  poplulateInfluencerData: any;
  populateProductData: any;
}

function InfluencerName({
  poplulateInfluencerData,
  populateProductData,
}: InfluencerProps) {
  const router = useRouter();
  const {
    asPath,
    locale,
    query: { influencername },
  } = router;

  const [influencerData, setInfluencerData] = useState<any>({});
  const [influencerSales, setInfluencerSales] = useState<any[]>([]);

  useEffect(() => {
    getInfluencerData();
    getSalesByInfluencer();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [asPath]);

  const getInfluencerData = () => {
    poplulateInfluencerData?.forEach((influencer: any) => {
      if (influencer.influencerLink === asPath) {
        setInfluencerData(influencer);
      }
    });
  };

  const getSalesByInfluencer = () => {
    const influencerSalesArr: any[] = [];
    populateProductData?.forEach((product: any) => {
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
      title: `Sales By ${splitWord(influencername as string)}`,
      link: `/influencer/${influencername}`,
    },
  ];
  const titleText = `JUMBLE | influencer ${splitAndCapitalize(
    influencername as string
  )}`;

  return (
    <Fragment>
      <Head>
        <title>{titleText}</title>
      </Head>
      <Navbar />
      <Bars barData={jumblogNavBarData} />
      <Breadcrumbs links={breadcrumbsLinks} />
      <Header headerText="featured_sales" locale={locale as string} shrink={false} />
      {influencerData ? (
        <IntroHeader introHeaderData={influencerData} />
      ) : (
        <NotFoundMessage message="No author Found" />
      )}
      {influencerSales ? (
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
