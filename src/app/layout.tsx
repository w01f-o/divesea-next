import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import { ReactNode } from "react";
import NextTopLoader from "nextjs-toploader";
import "@w01f-o/react-grid-layout/css";
import Header from "@/components/Widgets/Header/Header";
import "@/styles/vars.scss";
import "@/styles/global.scss";
import Footer from "@/components/Widgets/Footer/Footer";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  preload: false,
});

export const metadata: Metadata = {
  title: "DiveSea",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <NextTopLoader showSpinner={false} color={"#141416"} />
        <Header />
        <main>{children}</main>
        <Footer />
        <div id="portal-root"></div>
      </body>
    </html>
  );
}
