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
import {Brand} from "@/types";

interface SingleBrandProps {
  data: Brand
}

function SingleBrandPage({data}: SingleBrandProps) {
  const router = useRouter();

  const {
    locale,
    query: { singleBrandSlug },
  } = router;

  const brandAuthor = data.authorRef.name || "";

  const breadcrumbsLinks: breadcrumbsTypes[] = [
    { id: 1, title: "Home", link: "/" },
    { id: 2, title: "Brands", link: "/brands/page/1" },
    {
      id: 3,
      title: data.name,
      link: `/brands/${data.slug}`,
    },
  ];
  const titleText: string = `JUMBLE | Brands ${data.name}`;

  return (
      <Fragment>
        <Head>
          <title>{titleText}</title>
        </Head>
        <Navbar />
        <Bars barData={homeNavBarData} />
        <Breadcrumbs links={breadcrumbsLinks} />
        <BrandDetail brandDetail={data} author={brandAuthor} />
        <Footer />
      </Fragment>
  );
}

export const getStaticProps: GetStaticProps = async ({ locale , params}) => {
  const data = getBrandsBySlug(params.slug as string)[0];

  return {
    props: {
      data,
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
