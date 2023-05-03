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
import type { GetStaticPaths, GetStaticProps } from "next";
import { getBrandsBySlug } from "data/loaders/getBrandsBySlug";
import { breadcrumbsTypes } from "types/breadcrumbs";
import { Brand } from "@/types";

interface SingleBrandProps {
  data: Brand;
}

function SingleBrandPage({ data }: SingleBrandProps) {
  const router = useRouter();
  const { locale, query } = router;

  const {
    name,
    date,
    authorRef: {
      _id: id,
      name: title,
      avatar: { url: headerImg },
      link: authorLink,
      bio: detail,
    },
  } = data;

  const authorData = { id, title, headerImg, authorLink, detail };
  const brandData = { name, date, image: data["main-image"].url, type: "" };

  const breadcrumbsLinks: breadcrumbsTypes[] = [
    { id: 1, title: "Home", link: "/" },
    { id: 2, title: "Brands", link: "/brands/" },
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
      <BrandDetail brandDetail={brandData} author={authorData} />
      <Footer />
    </Fragment>
  );
}

export const getStaticProps: GetStaticProps = async ({ locale, params }) => {
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
    fallback: false,
  };
};

export default SingleBrandPage;
