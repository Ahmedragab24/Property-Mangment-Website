import type { Metadata } from "next";
import Navbar from "@/components/layout/Navbar";
import { ThemeProvider } from "@/components/layout/theme-provider";
import ScrollUp from "@/components/layout/ScrollUp";
import Footer from "@/components/layout/Footer";
import circle from "/src/public/images/transparent circle.png";
import Image from "next/image";
import ProviderRedux from "./layoutRedux";
import { Toaster } from "@/components/ui/toaster";
import "./globals.css";

export const metadata: Metadata = {
  title: "PropEase",
  description:
    "PropEase, the world's leading real estate rental company, acts as an intermediary between landlord and tenant, saving time and effort for both.",
  icons: "/favicon.ico",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased font-montse">
        <ProviderRedux>
          <ThemeProvider
            attribute="class"
            defaultTheme="dark"
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
                priority
                className="fixed -top-10 -left-48 blur-3xl -z-10"
              />
              <Image
                src={circle}
                alt="circle"
                width={500}
                height={500}
                priority
                className="fixed -bottom-36 -right-48 blur-3xl -z-10"
              />
              {children}
            </div>
            <ScrollUp />
            <Footer />
            <Toaster />
          </ThemeProvider>
        </ProviderRedux>
      </body>
    </html>
  );
}
