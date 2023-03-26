import Head from "next/head";
import { Navbar } from "layout/Navbar";
import { Footer } from "layout/Footer";
import { Fragment } from "react";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useRouter } from "next/router";
import { Bars } from "common/Bars";
import { homeNavBarData } from "data/barData";
import { Breadcrumbs } from "common/Breadcrumbs";
import { BrandDetail } from "components/BrandDetail";
import { GetStaticProps, GetStaticPaths } from "next";
import { getBrandsBySlug } from "data/loaders/getBrandsBySlug";
import { breadcrumbsTypes } from "types/breadcrumbs";

function SingleBrandPage({ singleBrand }) {
  const router = useRouter();

  const {
    locale,
    query: { singleBrandSlug },
  } = router;

  const brandAuthor = singleBrand.authorRef.name || "";

  const breadcrumbsLinks: breadcrumbsTypes[] = [
    { id: 1, title: "Home", link: "/" },
    { id: 2, title: "Brands", link: "/brands/page/1" },
    {
      id: 3,
      title: singleBrand.name,
      link: `/brands/${singleBrand.slug}`,
    },
  ];
  const titleText: string = `JUMBLE | Brands ${singleBrand.name}`;

  return (
      <Fragment>
        <Head>
          <title>{titleText}</title>
        </Head>
        <Navbar />
        <Bars barData={homeNavBarData} />
        <Breadcrumbs links={breadcrumbsLinks} />
        <BrandDetail brandDetail={singleBrand} author={brandAuthor} />
        <Footer />
      </Fragment>
  );
}

export const getStaticProps: GetStaticProps = async ({ locale , params}) => {
  const { singleBrandSlug } = params;
  const singleBrand = getBrandsBySlug(singleBrandSlug as string)[0];

  return {
    props: {
      singleBrand,
      ...(await serverSideTranslations(locale, [
        "common",
        "brands",
        "article-types",
      ])),
    },
    revalidate: 60,
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = getBrandsBySlug().map((brand) => "/brands/" + brand?.slug);

  return {
    paths: paths,
    fallback: true,
  };
};

export default SingleBrandPage;
