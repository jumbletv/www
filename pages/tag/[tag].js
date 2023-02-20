import Head from "next/head";
import Navbar from "layout/navbar/Navbar";
import HomeBlogs from "components/blogs/homeBlogs/HomeBlogs";
import { homeBlogData } from "data/blogData";
import Footer from "layout/footer/Footer";
import { Fragment } from "react";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";
import { useEffect } from "react";
import { useRouter } from "next/router";
import Bars from "common/bars/Bars";
import { homeNavBarData } from "data/barData";
import Breadcrumbs from "common/breadcrumbs/Breadcrumbs";
import { useState } from "react";

function Home({ poplulateHomeBlogData }) {
  const router = useRouter();
  const { i18n } = useTranslation();
  const { locale, asPath, query } = router;
  const { tag } = query;

  const [blogsByTag, setBlogsByTag] = useState([]);

  useEffect(() => {
    // if (locale) {
    //   i18n.changeLanguage(locale);
    // }
    getBlogsByTag();
  }, [locale]);

  const getBlogsByTag = () => {
    const blogs = [];
    poplulateHomeBlogData?.forEach((blog) => {
      blog.tags.forEach((singleTag) => {
        if (singleTag.tag === tag) {
          blogs.push(blog);
        }
      });
      setBlogsByTag(blogs);
    });
  };

  console.log(blogsByTag);

  const breadcrumbsLinks = [
    { id: 1, title: "Home", link: "/" },
    { id: 2, title: "The Jumblog", link: "/the-jumblog" },
    { id: 3, title: "Article with tag eco", link: "/the-jumblog/news" },
  ];

  return (
    <Fragment>
      <Head>
        <title>JUMBLE | Tag </title>
      </Head>
      <Navbar />
      <Bars barData={homeNavBarData} />
      <Breadcrumbs links={breadcrumbsLinks} />
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
export async function getStaticPaths() {
  const blogPaths = homeBlogData.map((blog) => blog.link);

  return {
    paths: [],
    fallback: true,
  };
}

export default Home;
