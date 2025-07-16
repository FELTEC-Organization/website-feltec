import Image from "next/image";
import sobre from "../../public/elemento-sobre.png";
import beneficios from "../../public/beneficios.png";
import { getDataHome } from "@/utils/actions/get-data";
// import "../i18n/locales/i18nfy";
// import { Trans, useTranslation } from "react-i18next";
import { useEffect, useState } from "react";
import { HomeProps } from "@/utils/home.type";
import { Hero } from "@/components/hero";
import Container from "@/components/container";
import { About } from "@/components/about";
import Services from "@/components/servicing";
import Footer from "@/components/footer";
import AnimatedTechCarousel from "@/components/techStacks";

export default async function Home() {
  const { object }: HomeProps = await getDataHome();

  return (
    <div>
      <main className="dark:text-white dark:bg-black pt-16">
        {/*Seção capa  */}
        <Hero
          heading={object.metadata.heading}
          buttonTitle={object.metadata.cta_button.title}
          buttonUrl={object.metadata.cta_button.url}
          bannerUrl={object.metadata.banner.url}
        />

        {/*Seção sobre  */}
        <Container>
          <About object={object} />
        </Container>

        {/* Seção serviços */}
        <Services object={object} />

        {/* Seção quem somos  */}
        <section className="bg-yellow-600 mb-6">
          <h2 className="">QUEM SOMOS</h2>
          <p>
            A Feltec Solutions IT é uma empresa especializada em soluções
            tecnológicas sob medida, atuando com foco em desenvolvimento web,
            mobile e prototipação de sistemas. Unimos inovação, performance e
            experiência do usuário para entregar projetos eficientes, seguros e
            de alto impacto. Com uma equipe dedicada e apaixonada por
            tecnologia, ajudamos empresas a evoluírem digitalmente, oferecendo
            serviços personalizados que acompanham as tendências e necessidades
            do mercado atual
          </p>
          <Image src={sobre} alt="Quem somos" className="object-contain" />
        </section>

        {/*Seção tecnologias */}
        <AnimatedTechCarousel />

        {/*Seção benefícios  */}
        <section className="bg-red-600 mb-6">
          <Image src={beneficios} alt="sobre" className="object-contain" />
        </section>
      </main>

      <Footer object={object} />
    </div>
  );
}
