import Head from "next/head";
import { Fragment, useEffect } from "react";
import { useRouter } from "next/router";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";
import { Navbar } from "layout/Navbar";
import { Header } from "layout/Header";
import { HeaderText } from "common/HeaderText";
import { Banner } from "common/Banner";
import { HomeSales } from "@/components/HomeSales";
import { QuestionsList } from "common/QuestionsList";
import { ArticlesList } from "components/ArticlesList";
import { Footer } from "layout/Footer";
import { supportData } from "data/supportData";
import { faqData } from "data/faqData";
import { Bars } from "common/Bars";
import { homeNavBarData } from "data/barData";
import { NotFoundMessage } from "common/NotFoundMessage";
import { getLastSales } from "@/data/loaders/getSalesBySlug";
import { getLastBlogPosts } from "@/data/loaders/getBlogPostsBySlug";
import { BlogPost, Sale } from "@/types";
import { GetStaticProps } from "next";

interface HomeProps {
  sales: Sale[];
  articles: BlogPost[];
}

export default function Home({ sales, articles }: HomeProps) {
  const router = useRouter();
  const { locale } = router;
  const { i18n } = useTranslation();

  useEffect(() => {
    i18n.changeLanguage(locale);
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
      {sales ? (
        <HomeSales featuredSales={sales} />
      ) : (
        <NotFoundMessage message="No Product Found" />
      )}
      <Banner bannerText="the_jumblog" />
      {articles ? (
        <ArticlesList articlesData={articles} showBtn={true} />
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

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  const sales = getLastSales(3);
  const articles = getLastBlogPosts(10);

  return {
    props: {
      sales,
      articles,
      ...(await serverSideTranslations(locale, [
        "common",
        "articles",
        "faq",
      ])),
    },
    revalidate: 60,
  };
}