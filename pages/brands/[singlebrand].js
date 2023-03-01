import Head from "next/head";
import Navbar from "layout/navbar/Navbar";
import { brandsData } from "data/brands";
import Footer from "layout/footer/Footer";
import { Fragment } from "react";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useEffect } from "react";
import { useRouter } from "next/router";
import Bars from "common/bars/Bars";
import { homeNavBarData } from "data/barData";
import Breadcrumbs from "common/breadcrumbs/Breadcrumbs";
import { useState } from "react";
import { splitWord } from "helper/splitWord";
import { articlesByData } from "data/introData";
import { BrandDetail } from "components/brandDetail/BrandDetail";

function SingleBrand({ poplulateBrandsData, populateAutherData }) {
  const router = useRouter();

  const {
    locale,
    asPath,
    query: { singlebrand },
  } = router;

  const [singleBrand, setSingleBrand] = useState({});
  const [brandAuther, setBrandAuther] = useState({});

  useEffect(() => {
    getSingleBrand();
  }, [locale, router]);

  const getSingleBrand = () => {
    poplulateBrandsData?.forEach((brand) => {
      if (brand?.link === asPath) {
        setSingleBrand(brand);
        populateAutherData?.forEach((auther) => {
          if (auther.autherLink === brand.by) {
            setBrandAuther(auther);
            return;
          }
        });
      }
    });
  };

  const breadcrumbsLinks = [
    { id: 1, title: "Home", link: "/" },
    { id: 2, title: "Brands", link: "/brands/page/1" },
    { id: 3, title: `${splitWord(singlebrand)}`, link: `${asPath}` },
  ];
  const titleText = `JUMBLE | Brands ${splitWord(singlebrand)}`;

  return (
    <Fragment>
      <Head>
        <title>{titleText}</title>
      </Head>
      <Navbar />
      <Bars barData={homeNavBarData} />
      <Breadcrumbs links={breadcrumbsLinks} />
      <BrandDetail brandDetail={singleBrand} auther={brandAuther} />
      <Footer />
    </Fragment>
  );
}

export async function getStaticProps({ locale }) {
  return {
    props: {
      poplulateBrandsData: brandsData,
      populateAutherData: articlesByData,
      ...(await serverSideTranslations(locale, ["common", "brands"])),
    },
    revalidate: 60,
  };
}
export async function getStaticPaths() {
  const brandPaths = brandsData.map(({ link }) => link);

  return {
    paths: brandPaths,
    fallback: true,
  };
}

export default SingleBrand;
