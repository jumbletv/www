import Head from "next/head";
import type { AppProps } from 'next/app'
import Script from "next/script";
import "../styles/globals.scss";
import { appWithTranslation } from "next-i18next";
import Link from "next/link";

const GTM_ID = "G-ML611WKTDX";

const MyApp = ({ Component, pageProps }: AppProps) => (
  <>
    <Head>
      <base href="https://jumble.tv"/>
      <title>Jumble</title>
      <meta name="description" content="Welcome to Jumble" />
      <link rel="icon" href="/favicon.ico" />
      <meta property="fb:pages" content="129470460842567" key="fb:pages" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="robots" content="index, follow" />
      <meta name="twitter:card" content="summary_large_image" key="twitter:card" />
      <meta name="google-site-verifcation" content="6muraSWnCczAPKrxxOhCWYfjV_L_TGZJriT2_t6qkQ8" key="google-site-verifcation" />
      <meta name="facebook-domain-verification" content="89jgud46ziv537rj1w4uwizjw94jp1" />
      <Link rel="theme-color" href="#8DD0F6" />
    </Head>
    <Script id="google-tag-manager" strategy="afterInteractive">
      {`
        (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
        new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
        j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
        'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
        })(window,document,'script','dataLayer','${GTM_ID}');
      `}
    </Script>
  <Component {...pageProps} />
  </>
);

export default appWithTranslation(MyApp);
