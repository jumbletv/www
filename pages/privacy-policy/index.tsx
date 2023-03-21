import Head from "next/head";
import { Navbar } from "layout/navbar/Navbar";
import { Footer } from "layout/footer/Footer";
import { Fragment } from "react";
import { GetStaticProps } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { Bars } from "common/bars/Bars";
import { jumblogNavBarData } from "data/barData";
import { Breadcrumbs } from "common/breadcrumbs/Breadcrumbs";
import { MorePages } from "common/morePages/MorePages";
import { Header } from "layout/header/Header";
import { PrivacyDetail } from "components/privacyDetail/PrivacyDetail";

interface PrivacyPolicyProps {
  locale: string;
}

export default function PrivacyPolicy({ locale }: PrivacyPolicyProps) {
  const breadcrumbsLinks = [
    { id: 1, title: "Home", link: "/" },
    {
      id: 2,
      title: `Privacy Policy`,
      link: `/privacy-policy`,
    },
  ];

  return (
    <Fragment>
      <Head>
        <title>Privacy Policy & Data Protection</title>
      </Head>
      <Navbar />
      <Bars barData={jumblogNavBarData} />
      <Breadcrumbs links={breadcrumbsLinks} />
      <Header headerText="Privacy Policy" />
      <PrivacyDetail />
      <MorePages />
      <Footer />
    </Fragment>
  );
}

export const getStaticProps: GetStaticProps<PrivacyPolicyProps> = async ({ locale }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common", "privacy"])),
      locale,
    },
    revalidate: 60,
  };
};
