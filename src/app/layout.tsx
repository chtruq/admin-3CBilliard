"use client";

import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";
import Head from "next/head";
import { AuthProvider } from "@/context/authContext";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <AuthProvider>
        {/* <Head>
        <link rel="icon" href="/favicon.ico" />
      </Head> */}
        {/* <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/3C-Icon.png" />
      </head> */}
        <body className={inter.className}>{children}</body>
        <Toaster />
      </AuthProvider>
    </html>
  );
}
