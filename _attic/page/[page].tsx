import Head from "next/head";
import {Navbar} from "layout/Navbar";
import {Footer} from "layout/Footer";
import {Fragment, useEffect, useState} from "react";
import {serverSideTranslations} from "next-i18next/serverSideTranslations";
import {useRouter} from "next/router";
import {Bars} from "common/Bars";
import {jumblogNavBarData} from "data/barData";
import {Pagination} from "components/Pagination";
import {brandsPerPage} from "data/pagination";
import {Header} from "layout/Header";
import {Brands} from "components/Brands";
import {brandsData} from "data/brands";
import {getBrandsBySlug} from "data/loaders/getBrandsBySlug";

interface Props {
    poplulateBrandsData: typeof brandsData;
}

export default function BrandsWeLike({poplulateBrandsData}: Props) {
    const router = useRouter();

    const {
        locale,
        query: {page},
    } = router;

    const [currentBrands, setCurrentBrands] = useState<typeof brandsData>([]);
    const [pageNo, setPageNo] = useState<number | null>(null);

    const articlesLength = poplulateBrandsData?.length;
    const pageCount = Math.ceil(articlesLength / brandsPerPage);

    useEffect(() => {
        getPageNo();
// eslint-disable-next-line react-hooks/exhaustive-deps
    }, [locale, page]);

    const getPageNo = () => {
        if (page) {
            const newOffset = ((Number(page) - 1) * brandsPerPage) % articlesLength;
            const endOffset = newOffset + brandsPerPage;
            const currentBrands = poplulateBrandsData?.slice(newOffset, endOffset);
            setCurrentBrands(currentBrands);
            setPageNo(parseInt(page as string));
        }
    };

    return (
        <Fragment>
            <Head>
                <title>JUMBLE | Brands </title>
            </Head>
            <Navbar/>
            <Bars barData={jumblogNavBarData}/>
            <Header headerText="brands_we_like" locale={locale as string} shrink={true}/>
            <Brands brands={currentBrands}/>
            {pageNo && (
                <Pagination pageCount={pageCount} pageNo={pageNo} path="brands"/>
            )}
            <Footer/>
        </Fragment>
    );
}

export async function getStaticProps({locale}: { locale: string }) {
    return {
        props: {
            poplulateBrandsData: brandsData,
            ...(await serverSideTranslations(locale, ["common", "brands"])),
        },
        revalidate: 60,
    };
}

export async function getStaticPaths() {
    const paths = getBrandsBySlug().map((brand) => "/brands/" + brand.slug);
    return {
        paths,
        fallback: true,
    };
}
