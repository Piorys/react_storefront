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
        <link href="https://fonts.googleapis.com/css?family=Kaushan+Script" rel="stylesheet"/>
        <title> Storefront </title>
      </Head>
      <style jsx global>{`
        body {
          background: white;
        }
        a {
          color: white;
        }
      `}</style>
    </div>
  );
};
