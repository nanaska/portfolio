import React from "react";
import Head from "next/head";

import { Header } from "../components/Header";
import "../styles/base.css";
import { ThemeProvider } from "next-themes";

const App: React.FC = ({ Component, pageProps }: any) => {
  return (
    <div className="container">
      <Head>
        {
          <script
            async
            src={`https://www.googletagmanager.com/gtag/js?id=G-YXLJHRMD71`}
          ></script>
        }
        {
          <script
            dangerouslySetInnerHTML={{
              __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('globals', 'G-YXLJHRMD71');
            `,
            }}
          ></script>
        }
      </Head>
      <ThemeProvider>
        <Header />

        <Component {...pageProps} />
      </ThemeProvider>
    </div>
  );
};

export default App;
