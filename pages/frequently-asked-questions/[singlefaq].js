import Head from "next/head";
import Navbar from "layout/navbar/Navbar";
import Footer from "layout/footer/Footer";
import { Fragment } from "react";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useEffect } from "react";
import { useRouter } from "next/router";
import Bars from "common/bars/Bars";
import { homeNavBarData } from "data/barData";
import Breadcrumbs from "common/breadcrumbs/Breadcrumbs";
import { useState } from "react";
import { splitWord, splitAndCapitalize } from "helper/splitWord";
import { allFaqData } from "data/faqData";
import Banner from "common/banner/Banner";
import { FaqDetail } from "components/faqDetail/FaqDetail";

function SingleFAq({ populateAllFaqData }) {
  const router = useRouter();
  const {
    locale,
    query: { singlefaq },
    asPath,
  } = router;

  const [faqDetail, setFaqDetail] = useState({});
  const [prevFaq, setPrevFaq] = useState({});
  const [nextFaq, setNextFaq] = useState({});

  useEffect(() => {
    getFaqDetail();
  }, [locale, singlefaq, asPath]);

  console.log(asPath);

  const getFaqDetail = () => {
    populateAllFaqData?.forEach((faq, index) => {
      if (faq.link === asPath) {
        setFaqDetail(faq);
        setPrevFaq(populateAllFaqData[index - 1]);
        setNextFaq(populateAllFaqData[index + 1]);
        return;
      }
    });
  };

  const breadcrumbsLinks = [
    { id: 1, title: "Home", link: "/" },
    { id: 2, title: "Faq", link: "/frequently-asked-questions" },
    {
      id: 3,
      title: `${splitWord(singlefaq)}`,
      link: `/frequently-asked-questions/${singlefaq}`,
    },
  ];

  const titleText = `JUMBLE | Tag ${splitAndCapitalize(singlefaq)}`;

  return (
    <Fragment>
      <Head>
        <title>{titleText}</title>
      </Head>
      <Navbar />
      <Bars barData={homeNavBarData} />
      <Breadcrumbs links={breadcrumbsLinks} />
      <Banner bannerText="FAQS" singleText={false} />
      <FaqDetail faqDetail={faqDetail} prevFaq={prevFaq} nextFaq={nextFaq} />
      <Footer />
    </Fragment>
  );
}

export async function getStaticProps({ locale }) {
  return {
    props: {
      populateAllFaqData: allFaqData,
      ...(await serverSideTranslations(locale, ["common", "faq"])),
    },
    revalidate: 60,
  };
}
export async function getStaticPaths() {
  const faqPaths = allFaqData.map(({ link }) => link);
  return {
    paths: faqPaths,
    fallback: true,
  };
}

export default SingleFAq;
