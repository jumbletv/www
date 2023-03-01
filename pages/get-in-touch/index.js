import Head from "next/head";
import Navbar from "layout/navbar/Navbar";
import Footer from "layout/footer/Footer";
import { Fragment } from "react";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useRouter } from "next/router";
import Bars from "common/bars/Bars";
import { homeNavBarData } from "data/barData";
import Breadcrumbs from "common/breadcrumbs/Breadcrumbs";
import { Contact } from "components/contact/Contact";

function GetInTouch({}) {
  const router = useRouter();
  const { locale } = router;

  const breadcrumbsLinks = [
    { id: 1, title: "Home", link: "/" },
    {
      id: 2,
      title: `Contact Us`,
      link: `/get-in-touch`,
    },
  ];

  return (
    <Fragment>
      <Head>
        <title>JUMBLE | Get in Touch</title>
      </Head>
      <Navbar />
      <Bars barData={homeNavBarData} />
      <Breadcrumbs links={breadcrumbsLinks} />
      <Contact />
      <Footer />
    </Fragment>
  );
}

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common", "contact"])),
    },
    revalidate: 60,
  };
}
export default GetInTouch;
