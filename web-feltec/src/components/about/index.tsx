"use client";

import { useTranslation } from "react-i18next";
import { HomeProps } from "@/utils/home.type";
import Image from "next/image";

export function About({ object }: HomeProps) {
  const { t } = useTranslation();

  return (
    <section className="w-full flex flex-col md:flex-row items-center md:items-start gap-6 m-8 pt-14 max-w-[1280px] mx-auto">
      <article className="flex flex-col justify-center w-full md:w-1/2 gap-3">
        <h1 className="text-[34px] font-bold">{t("about")}</h1>
        <p className="leading-[150%] text-justify">
          {t("about_description")}
        </p>
      </article>

      <div className="relative w-full md:w-1/2 h-[300px] md:h-[370px] rounded-[8px] overflow-hidden">
        <Image
          className="object-cover rounded-[8px]"
          src={object.metadata.about.banner.url}
          alt="Imagem ilustrativa sobre a empresa"
          quality={100}
          fill={true}
          sizes="(max-width: 768px) 100vw, 50vw"
        />
      </div>
    </section>
  );
}
