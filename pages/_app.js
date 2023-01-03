import Head from 'next/head';
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <>
        <Head>
            <meta property="og:image:type" content="image/jpeg" />
            <meta key="ogType" property="og:type" content="website" />  
            <meta key="description" name="description" content="Heavy psych, primitive FM static noise" />
            <meta key="ogDescription" property="og:description" content="Heavy psych, primitive FM static noise" />
            <meta key="fbShare" property="og:image" content="https://d38ekezks43s3u.cloudfront.net/socialShare.jpg" />
            <meta key="twitterShare" name="twitter:image" content="https://d38ekezks43s3u.cloudfront.net/socialShare.jpg" />
        </Head>
        <Component {...pageProps} />
    </>
  )
}

export default MyApp
