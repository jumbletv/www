import Head from "next/head";
import { Navbar } from "layout/navbar/Navbar";
import { Header } from "layout/header/Header";
import { HeaderText } from "common/headerText/HeaderText";
import { Banner } from "common/banner/Banner";
import HomeProducts from "components/products/homeProducts/HomeProducts";
import { TextList } from "common/textList/TextList";
import { ArticlesList } from "components/articles/articlesList/ArticlesList";
import { articlesData } from "data/articlesData";
import { Footer } from "layout/footer/Footer";
import { supportData } from "data/supportData";
import { faqData } from "data/faqData";
import { Fragment } from "react";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";
import { useEffect } from "react";
import { useRouter } from "next/router";
import { Bars } from "common/bars/Bars";
import { homeNavBarData } from "data/barData";
import { salesData } from "data/products";

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
      <HomeProducts productsData={populateProductsData.slice(0, 3)} />
      <Banner bannerText="the_jumblog" />
      <ArticlesList
        articlesData={poplulateArticlesData.slice(0, 10)}
        showBtn={true}
      />
      <Banner bannerText="support" />
      <TextList data={supportData} showBtn={true} />
      <Banner bannerText="FAQS" />
      <TextList data={faqData} showBtn={true} />
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
