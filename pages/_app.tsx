import React from "react";
import Head from "next/head";

import { globals } from "../globals";
import { Header } from "../components/Header";
import "../styles/base.css";
import { ThemeProvider } from "next-themes";

const App: React.FC = ({ Component, pageProps }: any) => {
  return (
    <div className="container">
      <Head>
        {globals.googleAnalyticsId && (
          <script
            async
            src={`https://www.googletagmanager.com/gtag/js?id=${globals.googleAnalyticsId}`}
          ></script>
        )}
        {globals.googleAnalyticsId && (
          <script
            dangerouslySetInnerHTML={{
              __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('globals', '${globals.googleAnalyticsId}');
            `,
            }}
          ></script>
        )}
      </Head>
      <ThemeProvider>
        <Header />

        <Component {...pageProps} />
      </ThemeProvider>
    </div>
  );
};

export default App;
