import { Fragment } from "react";
import Head from "next/head";
import { useRouter } from "next/router";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { GetStaticProps, GetStaticPaths } from "next";

import { ProductDetail } from "components/ProductDetail";
import { ArticlesList } from "components/ArticlesList";
import { QuestionsList } from "common/QuestionsList";
import { Banner } from "common/Banner";
import { NotFoundMessage } from "common/NotFoundMessage";
import { Navbar } from "layout/Navbar";
import { Footer } from "layout/Footer";
import { Bars } from "common/Bars";
import { Breadcrumbs } from "common/Breadcrumbs";

import { salesData } from "data/products";
import { articlesData } from "data/articlesData";
import { faqData } from "data/faqData";
import { supportData } from "data/supportData";

import { getSalesBySlug } from "data/loaders/getSalesBySlug";

import { Product, Influencer } from "types";

interface Props {
  salesData: Product[];
  articlesData: Article[];
  faqData: FAQ[];
  supportData: Question[];
  influencerData: Influencer[];
}

function SingleSale({
                      salesData,
                      articlesData,
                      faqData,
                      supportData,
                      influencerData,
                    }: Props): JSX.Element {
  const router = useRouter();
  const {
    asPath,
    query: { singlesale },
  } = router;

  const singleSale = salesData.find(
      (sale) => sale.productLink === asPath
  ) as Product | undefined;

  const influencerDataForSale = influencerData.find(
      (influencer) =>
          influencer.products.find((product) => product.productLink === asPath)
  );

  const breadcrumbsLinks = [
    { id: 1, title: "Home", link: "/" },
    { id: 2, title: "Sales", link: "/sales/page/1" },
    {
      id: 3,
      title: singlesale,
      link: `/sales/${singlesale}`,
    },
  ];

  const titleText = `JUMBLE | Sale ${singlesale}`;

  return (
      <Fragment>
        <Head>
          <title>{titleText}</title>
        </Head>
        <Navbar />
        <Bars barData={jumblogNavBarData} />
        <Breadcrumbs links={breadcrumbsLinks} />
        {singleSale ? (
            <ProductDetail
                product={singleSale}
                influencerData={influencerDataForSale}
            />
        ) : (
            <NotFoundMessage message="Product Not Found" />
        )}
        <Banner bannerText="related_posts" />
        <ArticlesList articlesData={articlesData} showBtn={true} />
        <Banner bannerText="support" />
        <QuestionsList data={supportData} />
        <Banner bannerText="FAQS" />
        <QuestionsList data={faqData} />
        <Footer />
      </Fragment>
  );
}

export async function getStaticProps({ locale }) {
  return {
    props: {
      populateProductsData: salesData,
      poplulateArticlesData: articlesData,
      poplulateInfluencerData: influencerData,
      ...(await serverSideTranslations(locale, [
        "common",
        "articles",
        "faq",
        "article-types",
        "products",
      ])),
    },
    revalidate: 60,
  };
}

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = getSalesBySlug().map((sale) => "/brands/" + sale?.slug);

  return {
    paths: paths,
    fallback: true,
  };
}

export default SingleSale;
