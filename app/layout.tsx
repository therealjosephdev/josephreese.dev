import "./globals.css";
import { Roboto_Mono as FontMono } from "next/font/google";
import { ReactNode } from "react";

import { Layout } from "@/components/craft";
import { ThemeProvider } from "@/components/theme-provider";

import { NavBar } from "@/components/navbar";
import Footer from "@/components/footer";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Joseph Reese :: Web3 Developer",
  description:
    "Explore the work of Joseph Reese, a Web3 developer specializing in blockchain technology and decentralized applications.",
};

interface RootLayoutProps {
  children: ReactNode;
}

import { cn } from "@/lib/utils";

const fontMono = FontMono({
  subsets: ["latin"],
  variable: "--font-mono",
});

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <Layout>
      <body
        className={cn(
          "my-6 sm:my-12 font-mono max-w-2xl mx-auto antialiased selection:bg-indigo-500 selection:text-indigo-100",
          "fade-in",
          fontMono.variable
        )}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <NavBar />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </Layout>
  );
}