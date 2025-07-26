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
  title: "Feltec Solutions TI",
  description: "Soluções digitais sob medida para o seu negócio.",
  icons: {
    icon: "/favicon.png",
  },
  openGraph: {
    title: "Feltec Solutions",
    description: "Soluções digitais sob medida para o seu negócio.",
    url: "https://feltecsolutions.com.br",
    siteName: "Feltec Solutions",
    images: [
      {
        url: "/favicon.png",
        width: 1200,
        height: 630,
        alt: "Feltec Solutions",
      },
    ],
    locale: "pt_BR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Feltec Solutions",
    description: "Soluções digitais sob medida para o seu negócio.",
    images: ["/favicon.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
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
