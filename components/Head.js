import React from "react";
import Head from "next/head";


export default () => {
  return (
    <div>
      <Head>
        <link
          rel="stylesheet"
          href="//cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.2.12/semantic.min.css"
        />
        <title> React Storefront </title>
      </Head>
      <style jsx global>{`
        body {
          background: #3e4c62;
        }
        a {
          color: white;
        }
      `}</style>
    </div>
  );
};
