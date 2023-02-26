import Head from "next/head";
import Navbar from "layout/navbar/Navbar";
import Header from "layout/header/Header";
import HomeProducts from "components/products/homeProducts/HomeProducts";
import Footer from "layout/footer/Footer";
import { Fragment, useState } from "react";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";
import { useEffect } from "react";
import { useRouter } from "next/router";
import Bars from "common/bars/Bars";
import { homeNavBarData } from "data/barData";
import { productsData } from "data/products";
import { Pagination } from "components/pagination/Pagination";
import { salesPerPage } from "data/pagination";

function Sales({ poplulateProductsData }) {
  const router = useRouter();
  const {
    locale,
    query: { page },
  } = router;
  const { i18n } = useTranslation();

  const [pageNo, setPageNo] = useState(null);
  const [currentSales, setCurrentSales] = useState([]);

  const salesLength = poplulateProductsData?.length;
  const pageCount = Math.ceil(salesLength / salesPerPage);

  useEffect(() => {
    // i18n.changeLanguage(locale);
    getPageNo();
  }, [locale, page]);

  const getPageNo = () => {
    if (page) {
      const newOffset = ((page - 1) * salesPerPage) % salesLength;
      const endOffset = newOffset + salesPerPage;
      const currentSales = poplulateProductsData?.slice(newOffset, endOffset);
      setCurrentSales(currentSales);
      setPageNo(parseInt(page));
    }
  };

  const titleText = `JUMBLE | Sales Page ${page}`;

  return (
    <Fragment>
      <Head>
        <title>{titleText}</title>
      </Head>
      <Navbar />
      <Bars barData={homeNavBarData} />
      <Header headerText="upcoming_sales" locale={locale} shrink={false} />
      <HomeProducts productsData={currentSales} />
      {pageNo && (
        <Pagination
          itemsPerPage={salesPerPage}
          pageCount={pageCount}
          pageNo={pageNo}
          path="sales"
        />
      )}
      <Footer />
    </Fragment>
  );
}

export async function getStaticProps({ locale }) {
  return {
    props: {
      poplulateProductsData: productsData,
      ...(await serverSideTranslations(locale, ["common", "blogs"])),
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
export default Sales;
