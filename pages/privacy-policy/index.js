import Head from "next/head";
import Navbar from "layout/navbar/Navbar";
import Footer from "layout/footer/Footer";
import { Fragment } from "react";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useRouter } from "next/router";
import Bars from "common/bars/Bars";
import { jumblogNavBarData } from "data/barData";
import Breadcrumbs from "common/breadcrumbs/Breadcrumbs";
import { PageList } from "common/pageList/PageList";
import Header from "layout/header/Header";
import { PrivacyDetail } from "components/privacyDetail/PrivacyDetail";

function PrivacyPolicy() {
  const breadcrumbsLinks = [
    { id: 1, title: "Home", link: "/" },
    {
      id: 2,
      title: `Privacey Policy`,
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
      <PageList />
      <Footer />
    </Fragment>
  );
}

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common", "privacy"])),
    },
    revalidate: 60,
  };
}
export default PrivacyPolicy;
