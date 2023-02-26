import Head from "next/head";
import Navbar from "layout/navbar/Navbar";
import Banner from "common/banner/Banner";
import HomeProducts from "components/products/homeProducts/HomeProducts";
import TextList from "common/textList/TextList";
import HomeBlogs from "components/blogs/homeBlogs/HomeBlogs";
import { ProductDetail } from "components/productDetail/ProductDetail";
import { homeBlogData } from "data/blogData";
import Footer from "layout/footer/Footer";
import { supportData } from "data/supportData";
import { faqData } from "data/faqData";
import { Fragment } from "react";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Bars from "common/bars/Bars";
import { jumblogNavBarData } from "data/barData";
import Breadcrumbs from "common/breadcrumbs/Breadcrumbs";
import { productsData, influencerData } from "data/products";
import { splitWord, splitAndCapitalize } from "helper/splitWord";
import Header from "layout/header/Header";
import { IntroHeader } from "components/introHeader/IntroHeader";

function InfluencerName({ poplulateInfluencerData, populateProductData }) {
  const router = useRouter();
  const {
    asPath,
    locale,
    query: { influencername },
  } = router;

  console.log(asPath);

  const [influencerData, setInfluencerData] = useState([]);
  const [influencerSales, setInfluencerSales] = useState([]);

  useEffect(() => {
    getInfluencerData();
    getSalesByInfluencer();
  }, [asPath]);

  const getInfluencerData = () => {
    const influencerDataArr = [];
    poplulateInfluencerData?.forEach((influencer) => {
      if (influencer.influencerLink === asPath) {
        influencerDataArr.push(influencer);
      }
    });
    setInfluencerData(influencerDataArr);
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
      <IntroHeader introHeaderData={influencerData} />
      <HomeProducts productsData={influencerSales} />
      <Footer />
    </Fragment>
  );
}

export async function getStaticProps({ locale }) {
  return {
    props: {
      poplulateInfluencerData: influencerData,
      populateProductData: productsData,
      ...(await serverSideTranslations(locale, ["common", "blogs", "faq"])),
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
