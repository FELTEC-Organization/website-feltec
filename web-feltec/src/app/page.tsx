"use client";

import React, { useState, useEffect } from "react";
import HomeComponent from "../components/home/index";
import { getDataHome } from "@/utils/actions/get-data";
import Lottie from "lottie-react";
import loadingAnimation from "../../public/loading.json";
import Head from "next/head";

export default function Home() {
  const [object, setObject] = useState(null);

  useEffect(() => {
    getDataHome().then((data) => setObject(data.object));
  }, []);

  const seo = {
    title: "Desenvolvimento Web e Mobile em São Paulo | Feltec Solutions",
    description: "Soluções de TI para empresas: sites, sistemas e apps sob medida. Atendemos São Paulo e todo o Brasil.",
    image: "https://www.feltecsolutions.com.br/Logo Feltec.png",
    url: "https://www.feltecsolutions.com.br/",
  };

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Feltec Solutions IT",
    "url": seo.url,
    "logo": `${seo.url}${seo.image}`,
    "sameAs": [
      "https://linkedin.com/company/feltec-solutions-it",
      "https://www.instagram.com/feltec_solutions?igsh=MTUzd2FqaWY0NTMxYQ=="
    ],
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+55-15-9812-3418",
      "contactType": "customer service",
      "areaServed": "BR",
      "availableLanguage": ["Portuguese", "English"]
    }
  };

  return (
    <>
      <Head>
        <title>{seo.title}</title>
        <meta name="description" content={seo.description} />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content={seo.title} />
        <meta property="og:description" content={seo.description} />
        <meta property="og:image" content={seo.image} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={seo.url} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={seo.title} />
        <meta name="twitter:description" content={seo.description} />
        <meta name="twitter:image" content={seo.image} />
        <link rel="icon" href="/favicon.ico" />
        <link rel="canonical" href="https://www.feltecsolutions.com.br/" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </Head>

      {object ? (
        <HomeComponent object={object} />
      ) : (
        <div className="flex justify-center items-center h-screen">
          <Lottie
            animationData={loadingAnimation}
            loop={true}
            style={{ width: 150, height: 150 }}
          />
        </div>
      )}
    </>
  );
}