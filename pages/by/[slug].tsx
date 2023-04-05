import Head from "next/head";
import {Navbar} from "layout/Navbar";
import {ArticlesList} from "components/ArticlesList";
import {articlesData, ArticleData} from "data/articlesData";
import {Footer} from "layout/Footer";
import {Fragment} from "react";
import {serverSideTranslations} from "next-i18next/serverSideTranslations";
import {useRouter} from "next/router";
import {Bars} from "common/Bars";
import {homeNavBarData, BarData} from "data/barData";
import {Breadcrumbs, BreadcrumbLink} from "common/Breadcrumbs";
import {Header} from "layout/Header";
import {LogoBanner} from "common/LogoBanner";
import {IntroHeaderData, IntroHeader} from "components/IntroHeader";
import {articlesByData, IntroData} from "data/introData";
import {splitWord, splitAndCapitalize} from "helper/stringHelpers";
import {getAuthorsBySlug} from "data/loaders/getAuthorsBySlug";
import {Author} from "types/cms/Author";
import {getAuthorIntroHeader} from "@/data/loaders/getIntroHeader";
import {GetStaticPaths, GetStaticProps} from "next";

interface SingleAuthorProps {
    data: Author;
}

function SingleAuthorPage({data}: SingleAuthorProps) {
    const router = useRouter();
    const {locale, query} = router;

    const breadcrumbsLinks: BreadcrumbLink[] = [
        {id: 1, title: "Home", link: "/"},
        {id: 2, title: "The Jumblog", link: "/the-jumblog/page/1"},
        {
            id: 3,
            title: `Article by ${data.name}`,
            link: `/by/${data.slug}`,
        },
    ];

    const titleText = `JUMBLE | Articles by ${data.name}`;

    const {id, headerImg, title, detail} = getAuthorIntroHeader(data);

    return (
        <Fragment>
            <Head>
                <title>{titleText}</title>
            </Head>
            <Navbar/>
            <Bars barData={homeNavBarData as BarData[]}/>
            <Breadcrumbs links={breadcrumbsLinks}/>
            <Header headerText="THE JUMBLOG"/>
            <LogoBanner/>
            <IntroHeader
                id={id}
                headerImg={headerImg}
                title={title}
                detail={detail}
            />
            <ArticlesList articlesData={data[0].relatedPostsRef} showBtn={true}/>
            <Footer/>
        </Fragment>
    );
}

export const getStaticProps: GetStaticProps = async ({ locale, params}) => {
    const data = getAuthorsBySlug(params.slug as string);

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
}

export const getStaticPaths: GetStaticPaths = async () => {
    const paths = getAuthorsBySlug().map((author) => "/by/" + author?.slug);

    return {
        paths: paths,
        fallback: true,
    };
}

export default SingleAuthorPage;
