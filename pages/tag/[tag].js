import Head from "next/head";
import Navbar from "layout/navbar/Navbar";
import HomeBlogs from "components/blogs/homeBlogs/HomeBlogs";
import { homeBlogData } from "data/blogData";
import Footer from "layout/footer/Footer";
import { Fragment } from "react";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useEffect } from "react";
import { useRouter } from "next/router";
import Bars from "common/bars/Bars";
import { homeNavBarData } from "data/barData";
import Breadcrumbs from "common/breadcrumbs/Breadcrumbs";
import { useState } from "react";
import Header from "layout/header/Header";
import LogoBanner from "common/logoBanner/LogoBanner";
import { splitWord, splitAndCapitalize } from "helper/splitWord";

function Tag({ poplulateHomeBlogData }) {
  const router = useRouter();
  const {
    locale,
    query: { tag },
  } = router;

  const [blogsByTag, setBlogsByTag] = useState([]);

  useEffect(() => {
    getBlogsByTag();
  }, [locale, tag]);

  const getBlogsByTag = () => {
    const blogs = [];
    poplulateHomeBlogData?.forEach((blog) => {
      blog.tags.forEach((singleTag) => {
        if (singleTag.tag === splitWord(tag)) {
          blogs.push(blog);
        }
      });
      setBlogsByTag(blogs);
    });
  };

  const breadcrumbsLinks = [
    { id: 1, title: "Home", link: "/" },
    { id: 2, title: "The Jumblog", link: "/the-jumblog/page/1" },
    {
      id: 3,
      title: `Article with tag ${splitWord(tag)}`,
      link: `/type/${tag}`,
    },
  ];

  const titleText = `JUMBLE | Tag ${splitAndCapitalize(tag)}`;

  return (
    <Fragment>
      <Head>
        <title>{titleText}</title>
      </Head>
      <Navbar />
      <Bars barData={homeNavBarData} />
      <Breadcrumbs links={breadcrumbsLinks} />
      <Header headerText="THE JUMBLOG" />
      <LogoBanner />
      <HomeBlogs homeBlogData={blogsByTag} />
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
  let tagPaths = [];
  homeBlogData.forEach((blog) =>
    blog.tags.forEach((tag) => tagPaths.push(tag.url))
  );

  return {
    paths: tagPaths,
    fallback: true,
  };
}

export default Tag;
