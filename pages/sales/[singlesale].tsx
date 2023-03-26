import Head from "next/head";
import { Navbar } from "layout/Navbar";
import { Banner } from "common/Banner";
import { QuestionsList } from "common/QuestionsList";
import { ArticlesList } from "components/ArticlesList";
import { ProductDetail } from "components/ProductDetail";
import { articlesData } from "data/articlesData";
import { Footer } from "layout/Footer";
import { supportData } from "data/supportData";
import { faqData } from "data/faqData";
import { Fragment, useEffect, useState } from "react";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useRouter } from "next/router";
import { Bars } from "common/Bars";
import { jumblogNavBarData } from "data/barData";
import { Breadcrumbs } from "common/Breadcrumbs";
import { salesData, influencerData } from "data/products";
import { splitWord, splitAndCapitalize } from "helper/stringHelpers";
import { NotFoundMessage } from "common/NotFoundMessage";
import {getBrandsBySlug} from "data/loaders/getBrandsBySlug";
import {getSalesBySlug} from "data/loaders/getSalesBySlug";
import {GetStaticPaths} from "next";

interface SingleSaleProps {
  poplulateArticlesData: any[];
  populateProductsData: any[];
  poplulateInfluencerData: any[];
}

function SingleSale({
  poplulateArticlesData,
  populateProductsData,
  poplulateInfluencerData,
}: SingleSaleProps): JSX.Element {
  const router = useRouter();
  const {
    asPath,
    query: { singlesale },
  } = router;

  const [singleSale, setSingleSale] = useState<any>();
  const [influencerData, setInfluencerData] = useState<any>();

  useEffect(() => {
    getSingleSale();
    getInfluencerData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [asPath, singleSale]);

  const getSingleSale = () => {
    populateProductsData?.forEach((product: any) => {
      if (product.productLink === asPath) {
        setSingleSale(product);
      }
    });
  };

  const getInfluencerData = () => {
    poplulateInfluencerData?.forEach((influencer: any) => {
      influencer.products.forEach(({ productLink }: any) => {
        if (productLink === asPath) {
          setInfluencerData(influencer);
        }
      });
    });
  };

  const breadcrumbsLinks = [
    { id: 1, title: "Home", link: "/" },
    { id: 2, title: "Sales", link: "/sales/page/1" },
    {
      id: 3,
      title: `${splitWord(singlesale as string)}`,
      link: `/sales/${singlesale}`,
    },
  ];

  const titleText = `JUMBLE | Sale ${splitAndCapitalize(singlesale as string)}`;

  return (
    <Fragment>
      <Head>
        <title>{titleText}</title>
      </Head>
      <Navbar />
      <Bars barData={jumblogNavBarData} />
      <Breadcrumbs links={breadcrumbsLinks} />
      {singleSale ? (
        <ProductDetail product={singleSale} influencerData={influencerData} />
      ) : (
        <NotFoundMessage message="Product Not Found" />
      )}
      <Banner bannerText="related_posts" />
      <ArticlesList articlesData={poplulateArticlesData} showBtn={true} />
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
