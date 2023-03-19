import Head from 'next/head';
import React from 'react';
import Heading from '../components/Heading';
import Footer from '../components/Footer';
import { useRouter } from 'next/router';

export default function Layout({ title, children }) {
  const router = useRouter();
  return (
    <>
      <div className="">
        <Head>
          <title>{title ? title : 'Dearlu Fashion'}</title>
          <meta name="description" content="Dearlu Fashion Store" />
          <link rel="icon" href="/dlu.png" />
        </Head>
        {router.pathname !== '/404' && router.pathname !== '/404' && (
          <Heading />
        )}
        <main className="">{children}</main>
        {router.pathname !== '/404' && router.pathname !== '/404' && <Footer />}
      </div>
    </>
  );
}
