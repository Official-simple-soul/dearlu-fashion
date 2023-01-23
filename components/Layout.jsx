import Head from 'next/head';
import React from 'react';
import Heading from '../components/Heading';
import Footer from '../components/Footer'
export default function Layout({ title, children }) {
  return (
    <>
      <div className="">
        <Head>
          <title>{title ? title : 'Dearlu Fashion'}</title>
          <meta name="description" content="Dearlu Fashion Store" />
          <link rel="icon" href="/dlu.png" />
        </Head>
        <Heading />
        <main className="">{children}</main>
      </div>
      <Footer />
    </>
  );
}
