import Head from "next/head";
import { Navbar } from "layout/navbar/Navbar";
import { Header } from "layout/header/Header";
import { Banner } from "common/banner/Banner";
import { TextList } from "common/textList/TextList";
import { Footer } from "layout/footer/Footer";
import { allFaqData } from "data/faqData";
import { Fragment } from "react";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useRouter } from "next/router";
import { Bars } from "common/bars/Bars";
import { homeNavBarData } from "data/barData";

function FAQs() {
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

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common", "articles", "faq"])),
    },
    revalidate: 60,
  };
}
export default FAQs;
