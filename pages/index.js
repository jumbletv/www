import Head from "next/head";
import { Navbar } from "layout/Navbar";
import { Header } from "layout/Header";
import { HeaderText } from "common/HeaderText";
import { Banner } from "common/Banner";
import { HomeProducts } from "components/HomeProducts";
import { QuestionsList } from "common/QuestionsList";
import { ArticlesList } from "components/ArticlesList";
import { articlesData } from "data/articlesData";
import { Footer } from "layout/Footer";
import { supportData } from "data/supportData";
import { faqData } from "data/faqData";
import { Fragment } from "react";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";
import { useEffect } from "react";
import { useRouter } from "next/router";
import { Bars } from "common/Bars";
import { homeNavBarData } from "data/barData";
import { salesData } from "data/products";
import { NotFoundMessage } from "common/NotFoundMessage";

// https://github.com/adrai/next-i18next-static-example/blob/main/pages/index.js

function Home({ poplulateArticlesData, populateProductsData }) {
  const router = useRouter();
  const { locale } = router;
  const { i18n } = useTranslation();

  useEffect(() => {
    i18n.changeLanguage(locale);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [locale]);

  return (
    <Fragment>
      <Head>
        <title>JUMBLE | The Livestream Shopping</title>
      </Head>
      <Navbar />
      <Bars barData={homeNavBarData} />
      <Header headerText="have_fun" locale={locale} shrink={true} />
      <HeaderText />
      <Banner bannerText="upcoming_sales" />
      {populateProductsData ? (
        <HomeProducts productsData={populateProductsData.slice(0, 3)} />
      ) : (
        <NotFoundMessage message="No Product Found" />
      )}
      <Banner bannerText="the_jumblog" />
      {poplulateArticlesData ? (
        <ArticlesList
          articlesData={poplulateArticlesData.slice(0, 10)}
          showBtn={true}
        />
      ) : (
        <NotFoundMessage message="No Article Found" />
      )}
      <Banner bannerText="support" />
      <QuestionsList data={supportData} showBtn={true} />
      <Banner bannerText="FAQS" />
      <QuestionsList data={faqData} showBtn={true} />
      <Footer />
    </Fragment>
  );
}

export async function getStaticProps({ locale }) {
  return {
    props: {
      populateProductsData: salesData,
      poplulateArticlesData: articlesData,
      ...(await serverSideTranslations(locale, ["common", "articles", "faq"])),
    },
    revalidate: 60,
  };
}
export default Home;
