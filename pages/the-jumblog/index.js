import Head from "next/head";
import Navbar from "layout/navbar/Navbar";
import Header from "layout/header/Header";
import HomeBlogs from "components/blogs/homeBlogs/HomeBlogs";
import { homeBlogData } from "data/blogData";
import Footer from "layout/footer/Footer";
import { Fragment } from "react";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";
import { useEffect } from "react";
import { useRouter } from "next/router";
import Breadcrumbs from "common/breadcrumbs/Breadcrumbs";
import { jumblogNavBarData } from "data/barData";
import Bars from "common/bars/Bars";
import LogoBanner from "common/logoBanner/LogoBanner";
import JumblogMenu from "components/menus/jumblogMenu/JumblogMenu";

function Home({ poplulateHomeBlogData }) {
  const router = useRouter();
  const { locale } = router;
  const { i18n } = useTranslation();

  useEffect(() => {
    i18n.changeLanguage(locale);
  }, [locale]);

  const breadcrumbsLinks = [
    { id: 1, title: "Home", link: "/" },
    { id: 2, title: "The Jumblog", link: "/the-jumblog" },
    { id: 3, title: "All", link: "/the-jumblog" },
  ];

  return (
    <Fragment>
      <Head>
        <title>JUMBLE | The Jumblog</title>
      </Head>
      <Navbar />
      <Bars barData={jumblogNavBarData} />
      <Breadcrumbs links={breadcrumbsLinks} />
      <Header headerText="THE JUMBLOG" />
      <LogoBanner />
      <JumblogMenu activeMenu={1} />
      <HomeBlogs homeBlogData={poplulateHomeBlogData} />
      <Footer />
    </Fragment>
  );
}

export async function getStaticProps({ locale }) {
  return {
    props: {
      poplulateHomeBlogData: homeBlogData,
      ...(await serverSideTranslations(locale, ["common", "blogs"])),
    },
    revalidate: 60,
  };
}
export default Home;
