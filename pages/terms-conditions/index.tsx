import Head from "next/head";
import { Navbar } from "layout/Navbar";
import { Footer } from "layout/Footer";
import { Fragment } from "react";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useRouter } from "next/router";
import { Bars } from "common/Bars";
import { jumblogNavBarData } from "data/barData";
import { Breadcrumbs } from "common/Breadcrumbs";
import { MorePages } from "common/MorePages";
import { Header } from "layout/Header";
import { TermsDetail } from "components/TermsDetail";

function TermsConditions(): JSX.Element {
  const router = useRouter();
  const { locale } = router;

  const breadcrumbsLinks = [
    { id: 1, title: "Home", link: "/" },
    {
      id: 2,
      title: `Terms and Conditions of Sale`,
      link: `/terms-conditions`,
    },
  ];

  return (
    <Fragment>
      <Head>
        <title>JUMBLE | Terms and Conditions</title>
      </Head>
      <Navbar />
      <Bars barData={jumblogNavBarData} />
      <Breadcrumbs links={breadcrumbsLinks} />
      <Header headerText="Terms and Conditions" locale={locale} shrink={true} />
      <TermsDetail />
      <MorePages />
      <Footer />
    </Fragment>
  );
}

export async function getStaticProps({ locale }: { locale: string }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common", "terms"])),
    },
    revalidate: 60,
  };
}
export default TermsConditions;
