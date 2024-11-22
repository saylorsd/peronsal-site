import Layout from "./layout";
import { ReactElement } from "react";
import type { AppProps } from "next/app";

import "./globals.css";
import "./code.css";
import localFont from "next/font/local";

const mono = localFont({
  src: [
    {
      path: "./BerkeleyMonoVariable-Regular.woff2",
      style: "regular",
    },
    {
      path: "./BerkeleyMonoVariable-Italic.woff2",
      style: "italic",
    },
  ],
  display: "swap",
  variable: "--font-berkeley-mono",
});

export default function MyApp({
  Component,
  pageProps,
}: AppProps): ReactElement {
  return (
    <main className={mono.className}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </main>
  );
}
