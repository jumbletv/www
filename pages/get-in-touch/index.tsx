import Head from "next/head";
import { Navbar } from "layout/Navbar";
import { Footer } from "layout/Footer";
import { Fragment } from "react";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { Bars } from "common/Bars";
import { homeNavBarData } from "data/barData";
import { Breadcrumbs } from "common/Breadcrumbs";
import { Contact } from "components/Contact";

interface Props {
  locale: string;
}

function GetInTouch({ locale }: Props) {
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

export async function getStaticProps({ locale }: Props) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common", "contact"])),
    },
    revalidate: 60,
  };
}

export default GetInTouch;