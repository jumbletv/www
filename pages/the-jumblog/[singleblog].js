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
import BlogDetail from "components/blogDetail/BlogDetail";
import { useState } from "react";
import { splitWord } from "helper/splitWord";
import { articlesByData } from "data/introData";

function SingleArticle({ poplulateHomeBlogData, populateAutherData }) {
  const router = useRouter();

  const {
    locale,
    asPath,
    query: { singleblog },
  } = router;

  const [singleBlog, setSingleBlog] = useState([]);
  const [articleType, setArticleType] = useState("");
  const [articleAuther, setArticleAuther] = useState([]);
  useEffect(() => {
    getSingleBlog();
  }, [locale, router]);

  const getSingleBlog = () => {
    const articleAutherArr = [];
    poplulateHomeBlogData?.forEach((blog) => {
      if (blog?.link === asPath) {
        setSingleBlog(blog);
        setArticleType(blog.type);
        populateAutherData?.forEach((auther) => {
          if (auther.by === blog.by) {
            articleAutherArr.push(auther);
          }
        });
        setArticleAuther(articleAutherArr);
        return;
      }
    });
  };

  const breadcrumbsLinks = [
    { id: 1, title: "Home", link: "/" },
    { id: 2, title: "The Jumblog", link: "/the-jumblog/page/1" },
    { id: 3, title: `${articleType}`, link: `/type/${articleType}` },
    {
      id: 4,
      title: splitWord(singleblog),
      link: `/the-jumblog/${singleblog}`,
    },
  ];
  const titleText = `JUMBLE | Article ${splitWord(singleblog)}`;

  return (
    <Fragment>
      <Head>
        <title>{titleText}</title>
      </Head>
      <Navbar />
      <Bars barData={homeNavBarData} />
      <Breadcrumbs links={breadcrumbsLinks} />
      <BlogDetail blog={singleBlog} auther={articleAuther} />
      <HomeBlogs homeBlogData={poplulateHomeBlogData} />
      <Footer />
    </Fragment>
  );
}

export async function getStaticProps({ locale }) {
  return {
    props: {
      poplulateHomeBlogData: homeBlogData,
      populateAutherData: articlesByData,
      ...(await serverSideTranslations(locale, ["common", "blogs"])),
    },
    revalidate: 60,
  };
}
export async function getStaticPaths() {
  const blogPaths = homeBlogData.map((blog) => blog.link);

  return {
    paths: blogPaths,
    fallback: true,
  };
}

export default SingleArticle;
