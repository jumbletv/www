import Head from "next/head";
import { Navbar } from "layout/navbar/Navbar";
import { brandsData } from "data/brands";
import { Footer } from "layout/footer/Footer";
import { Fragment, useState } from "react";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useRouter } from "next/router";
import { Bars } from "common/bars/Bars";
import { homeNavBarData } from "data/barData";
import { Breadcrumbs } from "common/breadcrumbs/Breadcrumbs";
import { splitWord } from "helper/splitWord";
import { articlesByData } from "data/introData";
import { BrandDetail } from "components/brandDetail/BrandDetail";

function SingleBrand({ poplulateBrandsData, populateauthorData }) {
  const router = useRouter();

  const {
    locale,
    asPath,
    query: { singlebrand },
  } = router;

  const [singleBrand, setSingleBrand] = useState({});
  const [brandauthor, setBrandauthor] = useState({});

  const singleBrandData = poplulateBrandsData?.find(
    (brand) => brand?.link === asPath
  );
  const brandauthorData = populateauthorData?.find(
    (author) => author.authorLink === singleBrandData?.by
  );

  const breadcrumbsLinks = [
    { id: 1, title: "Home", link: "/" },
    { id: 2, title: "Brands", link: "/brands/page/1" },
    { id: 3, title: `${splitWord(singlebrand as string)}`, link: `${asPath}` },
  ];
  const titleText = `JUMBLE | Brands ${splitWord(singlebrand as string)}`;

  return (
    <Fragment>
      <Head>
        <title>{titleText}</title>
      </Head>
      <Navbar />
      <Bars barData={homeNavBarData} />
      <Breadcrumbs links={breadcrumbsLinks} />
      <BrandDetail brandDetail={singleBrandData} author={brandauthorData} />
      <Footer />
    </Fragment>
  );
}

export async function getStaticProps({ locale }) {
  return {
    props: {
      poplulateBrandsData: brandsData,
      populateauthorData: articlesByData,
      ...(await serverSideTranslations(locale, [
        "common",
        "brands",
        "article-types",
      ])),
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
