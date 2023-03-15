import '../styles/globals.css';
import type { AppProps } from 'next/app';
import Layout from '../components/Layout';
import '@fortawesome/fontawesome-svg-core/styles.css'; //importing font awesome css
import { config } from '@fortawesome/fontawesome-svg-core';
config.autoAddCss = false;
import { RestProvider } from '../context/context';
import { SessionProvider } from "next-auth/react"
export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
    <SessionProvider session={pageProps.session}>
      <RestProvider>
        <Layout title="Dearlu Fashion">
          <Component {...pageProps} />
        </Layout>
      </RestProvider>
      </SessionProvider>
    </>
  );
}
