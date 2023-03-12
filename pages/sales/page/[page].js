import Head from "next/head";
import { Navbar } from "layout/navbar/Navbar";
import { Header } from "layout/header/Header";
import HomeProducts from "components/products/homeProducts/HomeProducts";
import { Footer } from "layout/footer/Footer";
import { Fragment, useState } from "react";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useEffect } from "react";
import { useRouter } from "next/router";
import { Bars } from "common/bars/Bars";
import { homeNavBarData } from "data/barData";
import { salesData } from "data/products";
import { Pagination } from "components/pagination/Pagination";
import { salesPerPage } from "data/pagination";
import { NotFoundMessage } from "common/notFoundMessage/NotFoundMessage";

function Sales({ poplulateProductsData }) {
  const router = useRouter();
  const {
    locale,
    query: { page },
  } = router;

  const [pageNo, setPageNo] = useState(null);
  const [currentSales, setCurrentSales] = useState([]);

  const salesLength = poplulateProductsData?.length;
  const pageCount = Math.ceil(salesLength / salesPerPage);

  useEffect(() => {
    getPageNo();
    // eslint-disable-next-line react-hooks/exhaustive-deps
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
      {currentSales ? (
        <HomeProducts productsData={currentSales} />
      ) : (
        <NotFoundMessage message="No Sale Found" />
      )}
      {pageNo ? (
        <Pagination pageCount={pageCount} pageNo={pageNo} path="sales" />
      ) : (
        <NotFoundMessage message="No Such Page Found" />
      )}
      <Footer />
    </Fragment>
  );
}

export async function getStaticProps({ locale }) {
  return {
    props: {
      poplulateProductsData: salesData,
      ...(await serverSideTranslations(locale, ["common", "articles"])),
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
