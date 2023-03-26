import Head from "next/head";
import { Navbar } from "layout/Navbar";
import { Footer } from "layout/Footer";
import { useEffect, useState } from "react";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useRouter } from "next/router";
import { Bars } from "common/Bars";
import { homeNavBarData } from "data/barData";
import { Breadcrumbs } from "common/Breadcrumbs";
import { splitWord, splitAndCapitalize } from "@/helper/stringHelpers";
import { allFaqData } from "data/faqData";
import { Banner } from "common/Banner";
import { Faq, FaqDetail } from "components/FaqDetail";

interface SingleFaqProps {
  populateAllFaqData: Faq[];
}

function SingleFAq({ populateAllFaqData }: SingleFaqProps): JSX.Element {
  const router = useRouter();
  const {
    locale,
    query: { singlefaq },
    asPath,
  } = router;

  const [faqDetail, setFaqDetail] = useState<Faq>();
  const [prevFaq, setPrevFaq] = useState<Faq>();
  const [nextFaq, setNextFaq] = useState<Faq>();
  useEffect(() => {
    getFaqDetail();
  }, [locale, singlefaq, asPath]);

  const getFaqDetail = (): void => {
    populateAllFaqData?.forEach((faq: Faq, index: number) => {
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
      title: `${splitWord(singlefaq as string)}`,
      link: `/frequently-asked-questions/${singlefaq}`,
    },
  ];

  const titleText = `JUMBLE | Tag ${splitAndCapitalize(singlefaq as string)}`;

  return (
    <>
      <Head>
        <title>{titleText}</title>
      </Head>
      <Navbar />
      <Bars barData={homeNavBarData} />
      <Breadcrumbs links={breadcrumbsLinks} />
      <Banner bannerText="FAQS" singleText={false} />
      <FaqDetail faqDetail={faqDetail} prevFaq={prevFaq} nextFaq={nextFaq} />
      <Footer />
    </>
  );
}

export async function getStaticProps({
  locale,
}: {
  locale: string;
}): Promise<{ props: SingleFaqProps; revalidate: number }> {
  return {
    props: {
      populateAllFaqData: allFaqData,
      ...(await serverSideTranslations(locale, ["common", "faq"])),
    },
    revalidate: 60,
  };
}

export async function getStaticPaths(): Promise<{
  paths: string[];
  fallback: boolean;
}> {
  const faqPaths = allFaqData.map(({ link }) => link);
  return {
    paths: faqPaths,
    fallback: true,
  };
}

export default SingleFAq;
