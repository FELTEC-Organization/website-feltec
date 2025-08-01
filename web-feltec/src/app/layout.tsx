import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/header";
import { ThemeProvider } from "../components/themechange/themeProvider";
import I18nProvider from "@/i18n/I18nProvider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Feltec - Soluções em TI",
  description: "Feltec website",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta name="google-site-verification" content="nrxnEojxOirKFaPWsRCH6cbOwnMzVcuH6cgnvGT2pfU" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >

        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <I18nProvider>
            <Header />
            {children}
          </I18nProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
