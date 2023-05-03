import { Fragment } from "react";
import Head from "next/head";
import { useRouter } from "next/router";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";
import type { GetStaticPaths, GetStaticProps } from "next";
import { Navbar } from "layout/Navbar";
import { Footer } from "layout/Footer";
import { ArticlesList } from "components/ArticlesList";
import { ArticleDetail } from "components/ArticleDetail";
import { Bars } from "common/Bars";
import { Breadcrumbs } from "common/Breadcrumbs";
import { homeNavBarData } from "data/barData";
import { getBlogPostsBySlug } from "data/loaders/getBlogPostsBySlug";
import { BlogPost, breadcrumbsTypes,} from "types";
import { MetaSEO } from "@/components/MetaSEO";

function SingleArticlePage({ data }: {data: BlogPost}) {
  const router = useRouter();
  const { t } = useTranslation("articles");

  const {
    locale,
    query: { singleArticleSlug },
  } = router;

  const breadcrumbsLinks: breadcrumbsTypes[] = [
    { id: 1, title: t("breadcrumbHome"), link: "/" },
    { id: 2, title: t("breadcrumbBlog"), link: "/the-jumblog" },
    {
      id: 3,
      title: t(`breadcrumb${data?.typeRef.name}`),
      link: `/type/${data.slug}`,
    },
    {
      id: 4,
      title: `${data.name}`,
      link: `/the-jumblog/${data.slug}`,
    },
  ];

  return (
      <Fragment>
        <Head>
          <MetaSEO
              title={data["meta-title"]}
              description={data["meta-description"]}
              image={data["main-image"]["url"]}
          />
        </Head>
        <Navbar />
        <Bars barData={homeNavBarData} />
        <Breadcrumbs links={breadcrumbsLinks} />
        {data && (
            <ArticleDetail article={data} />
        )}
        <ArticlesList articlesData={data.relatedPostsRef} showBtn={true} />
        <Footer />
      </Fragment>
  );
}

export const getStaticProps: GetStaticProps = async ({ locale, params }) => {
  const { slug } = params;
  const data = getBlogPostsBySlug(slug as string)[0];

  return {
    props: {
      data,
      ...(await serverSideTranslations(locale, [
        "common",
        "articles",
        "article-types",
      ])),
    },
    revalidate: 60,
  };
};

export const getStaticPaths: GetStaticPaths = () => {
  const paths = getBlogPostsBySlug().map((article) => "/the-jumblog/" + article?.slug);

  return {
    paths: paths,
    fallback: false,
  };
};

export default SingleArticlePage;
