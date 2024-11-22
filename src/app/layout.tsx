import type { Metadata } from "next";
import "./global.css";
import "./code.css";
import { Header } from "@/components/header";
import localFont from "next/font/local";

export const metadata: Metadata = {
  title: "Steve Saylor",
  description: "Website for Steve Saylor, full stack developer",
  generator: "Next.js",
  applicationName: "Next.js",
  referrer: "origin-when-cross-origin",
  keywords: [
    "developer",
    "Next.js",
    "React",
    "TypeScript",
    "GIS",
    "geospatial",
    "civic technology",
  ],
  authors: [{ name: "Steve Saylor" }],
  publisher: "Steve Saylor",
};

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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${mono.variable} `}>
      <body className="pb-12">
        <div className="container mx-auto max-w-3xl  px-[1ch]">
          <Header />
          <main className="mt-12">{children}</main>
        </div>
      </body>
    </html>
  );
}
