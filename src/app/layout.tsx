import type { Metadata } from "next";
// import localFont from "next/font/local";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import { ThemeProvider } from "@/components/layout/theme-provider";
import ScrollUp from "@/components/layout/ScrollUp";
import Footer from "@/components/layout/Footer";
import circle from "@/assets/images/transparent circle.png";
import Image from "next/image";
import ProviderRedux from "./layoutRedux";

// const geistSans = localFont({
//   src: "./fonts/GeistVF.woff",
//   variable: "--font-geist-sans",
//   weight: "100 900",
// });
// const geistMono = localFont({
//   src: "./fonts/GeistMonoVF.woff",
//   variable: "--font-geist-mono",
//   weight: "100 900",
// });

export const metadata: Metadata = {
  title: "Real State",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className={` antialiased font-montse`}>
        <ProviderRedux>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <Navbar />
            <div>
              <Image
                src={circle}
                alt="circle"
                width={500}
                height={500}
                className="fixed -top-10 -left-48 blur-3xl -z-10"
              />
              <Image
                src={circle}
                alt="circle"
                width={500}
                height={500}
                className="fixed -bottom-36 -right-48 blur-3xl -z-10"
              />
              {children}
            </div>
            <ScrollUp />
            <Footer />
          </ThemeProvider>
        </ProviderRedux>
      </body>
    </html>
  );
}
