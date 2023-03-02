import Head from "next/head";
import Navbar from "layout/navbar/Navbar";
import Footer from "layout/footer/Footer";
import { Fragment } from "react";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useEffect } from "react";
import { useRouter } from "next/router";
import Bars from "common/bars/Bars";
import { jumblogNavBarData } from "data/barData";
import { useState } from "react";
import { Pagination } from "components/pagination/Pagination";
import { brandsPerPage } from "data/pagination";
import Header from "layout/header/Header";
import { Brands } from "components/brands/Brands";
import { brandsData } from "data/brands";

function BrandsWeLike({ poplulateBrandsData }) {
  const router = useRouter();

  const {
    locale,
    query: { page },
  } = router;

  const [currentBrands, setCurrentBrands] = useState([]);
  const [pageNo, setPageNo] = useState(null);

  const articlesLength = poplulateBrandsData?.length;
  const pageCount = Math.ceil(articlesLength / brandsPerPage);

  useEffect(() => {
    getPageNo();
  }, [locale, page]);

  const getPageNo = () => {
    if (page) {
      const newOffset = ((page - 1) * brandsPerPage) % articlesLength;
      const endOffset = newOffset + brandsPerPage;
      const currentBrands = poplulateBrandsData?.slice(newOffset, endOffset);
      setCurrentBrands(currentBrands);
      setPageNo(parseInt(page));
    }
  };

  return (
    <Fragment>
      <Head>
        <title>JUMBLE | Brands </title>
      </Head>
      <Navbar />
      <Bars barData={jumblogNavBarData} />
      <Header headerText="brands_we_like" locale={locale} shrink={true} />
      <Brands brands={currentBrands} />
      {pageNo && (
        <Pagination
          itemsPerPage={brandsPerPage}
          pageCount={pageCount}
          pageNo={pageNo}
          path="brands"
        />
      )}
      <Footer />
    </Fragment>
  );
}

export async function getStaticProps({ locale }) {
  return {
    props: {
      poplulateBrandsData: brandsData,
      ...(await serverSideTranslations(locale, ["common", "brands"])),
    },
    revalidate: 60,
  };
}
export async function getStaticPaths() {
  return {
    paths: [],
    fallback: true,
  };
}

export default BrandsWeLike;
