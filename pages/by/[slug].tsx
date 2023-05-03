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
import {getAuthorsBySlug} from "data/loaders/getAuthorsBySlug";
import {Author} from "types/cms/Author";
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
                id={data[0]["_id"]}
                headerImg={data[0]["avatar"]["url"]}
                title={data[0]["name"]}
                detail={data[0]["bio"]}
            />
            <ArticlesList articlesData={data[0].relatedPostsRef} showBtn={true}/>
            <Footer/>
        </Fragment>
    );
}

export const getStaticProps: GetStaticProps = async ({ locale, params}) => {
    const data = getAuthorsBySlug(params.slug as string);
    //console.log("Author =====> ", data)
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
        fallback: false,
    };
}

export default SingleAuthorPage;