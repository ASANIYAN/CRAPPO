import { Html, Head, Main, NextScript } from "next/document";
import Script from "next/script";


//loading fontawesome script before page becomes interactive
export default function Document() {
    return (<Html>
                <Head></Head>
                <body>
                    <Main />
                    <NextScript />
                    <Script
                     src="https://kit.fontawesome.com/bde7e588ca.js" 
                     crossOrigin="anonymous"
                     strategy="beforeInteractive"
                    ></Script>
                </body>
               </Html>)
    
}