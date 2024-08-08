import "./globals.css";
import { Manrope as FontSans } from "next/font/google";
import { Literata as FontSerif } from "next/font/google";
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

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

const fontSerif = FontSerif({
  subsets: ["latin"],
  variable: "--font-serif",
});

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <Layout>
      <body
        className={cn(
          "my-6 sm:my-12 font-sans max-w-2xl mx-auto antialiased selection:bg-indigo-500 selection:text-indigo-100",
          "fade-in",
          fontSans.variable
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