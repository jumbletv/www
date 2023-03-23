import Head from "next/head";
import { Navbar } from "layout/Navbar";
import { Header } from "layout/Header";
import { Banner } from "common/Banner";
import { TextList } from "common/TextList";
import { Footer } from "layout/Footer";
import { allFaqData } from "data/faqData";
import { Fragment } from "react";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useRouter } from "next/router";
import { Bars } from "common/Bars";
import { homeNavBarData } from "data/barData";

function FAQs(): JSX.Element {
  const router = useRouter();
  const { locale } = router;

  return (
    <Fragment>
      <Head>
        <title>JUMBLE | Frequently Asked Questions</title>
      </Head>
      <Navbar />
      <Bars barData={homeNavBarData} />
      <Header headerText="FAQs" locale={locale} shrink={false} />
      <Banner bannerText="getting_started" singleText={true} />
      <TextList data={allFaqData.slice(0, 7)} />
      <Banner bannerText="sell_on_jumble" singleText={true} />
      <TextList data={allFaqData.slice(7, 17)} />
      <Banner bannerText="payments" singleText={true} />
      <TextList data={allFaqData.slice(17, 21)} />
      <Banner bannerText="shipping" singleText={true} />
      <TextList data={allFaqData.slice(21, 24)} />
      <Footer />
    </Fragment>
  );
}

export async function getStaticProps({ locale }): Promise<{ props: { [key: string]: any }, revalidate: number }> {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common", "articles", "faq"])),
    },
    revalidate: 60,
  };
}
export default FAQs;
