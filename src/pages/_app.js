import '@/styles/globals.css'
import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
import Prevent from "./prevent";
config.autoAddCss = false;

import Head from 'next/head';

export default function App({ Component, pageProps }) {
	return (
		<>
		  <Head>
		    <title>Seoul Food - Authentic Korean Takeaway in Namibia</title> 
		    <meta name="robots" content="noindex"/>
		  </Head>
		  <Prevent />
		  <Component {...pageProps} />
		</>
		);
	}