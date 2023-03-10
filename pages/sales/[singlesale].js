import Head from "next/head";
import { Navbar } from "layout/navbar/Navbar";
import { Banner } from "common/banner/Banner";
import { TextList } from "common/textList/TextList";
import { ArticlesList } from "components/articles/articlesList/ArticlesList";
import { ProductDetail } from "components/productDetail/ProductDetail";
import { articlesData } from "data/articlesData";
import { Footer } from "layout/footer/Footer";
import { supportData } from "data/supportData";
import { faqData } from "data/faqData";
import { Fragment } from "react";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { Bars } from "common/bars/Bars";
import { jumblogNavBarData } from "data/barData";
import { Breadcrumbs } from "common/breadcrumbs/Breadcrumbs";
import { salesData, influencerData } from "data/products";
import { splitWord, splitAndCapitalize } from "helper/splitWord";

function SingleSale({
  poplulateArticlesData,
  populateProductsData,
  poplulateInfluencerData,
}) {
  const router = useRouter();
  const {
    asPath,
    query: { singlesale },
  } = router;

  const [singleSale, setSingleSale] = useState();
  const [influencerData, setInfluencerData] = useState();

  useEffect(() => {
    getSingleSale();
    getInfluencerData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [asPath, singleSale]);

  const getSingleSale = () => {
    populateProductsData?.forEach((product) => {
      if (product.productLink === asPath) {
        setSingleSale(product);
      }
    });
  };

  const getInfluencerData = () => {
    poplulateInfluencerData?.forEach((influencer) => {
      influencer.products.forEach(({ productLink }) => {
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
      title: `${splitWord(singlesale)}`,
      link: `/sales/${singlesale}`,
    },
  ];

  const titleText = `JUMBLE | Sale ${splitAndCapitalize(singlesale)}`;

  return (
    <Fragment>
      <Head>
        <title>{titleText}</title>
      </Head>
      <Navbar />
      <Bars barData={jumblogNavBarData} />
      <Breadcrumbs links={breadcrumbsLinks} />
      {singleSale && (
        <ProductDetail product={singleSale} influencerData={influencerData} />
      )}
      <Banner bannerText="related_posts" />
      <ArticlesList articlesData={poplulateArticlesData} showBtn={true} />
      <Banner bannerText="support" />
      <TextList data={supportData} />
      <Banner bannerText="FAQS" />
      <TextList data={faqData} />
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

export async function getStaticPaths() {
  let productsPaths = [];
  salesData.forEach(({ productLink }) => productsPaths.push(productLink));

  return {
    paths: productsPaths,
    fallback: true,
  };
}

export default SingleSale;
