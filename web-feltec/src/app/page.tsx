import Image from "next/image";
import beneficios from "../../public/beneficios.png";
import { getDataHome } from "@/utils/actions/get-data";
import { useEffect, useState } from "react";
import { HomeProps } from "@/utils/home.type";
import { Hero } from "@/components/hero";
import Container from "@/components/container";
import { About } from "@/components/about";
import Services from "@/components/servicing";
import Footer from "@/components/footer";
import AnimatedTechCarousel from "@/components/techStacks";
import WhoWeAre from "@/components/whoWeAre";
import BenefitsSection from "@/components/benefitCards";
import AnimatedSection from "@/components/animatedSection";

export default async function Home() {
  const { object }: HomeProps = await getDataHome();

  return (
    <div>
      <main className="dark:text-white dark:bg-black pt-16">
        {/*Seção capa  */}
        <section id="inicio">
          <Hero
            heading={object.metadata.heading}
            buttonTitle={object.metadata.cta_button.title}
            buttonUrl={object.metadata.cta_button.url}
            bannerUrl={object.metadata.banner.url}
          />
        </section>

        {/*Seção sobre  */}
        <AnimatedSection>
          <Container>
            <About object={object} />
          </Container>
        </AnimatedSection>

        {/* Seção serviços */}
        <AnimatedSection>
          <section id="servicos">
            <Services object={object} />
          </section>
        </AnimatedSection>

        {/* Seção quem somos  */}
        <AnimatedSection>
          <WhoWeAre />
        </AnimatedSection>

        {/*Seção tecnologias */}
        <AnimatedSection>
          <AnimatedTechCarousel />
        </AnimatedSection>

        {/*Seção benefícios  */}
        <AnimatedSection>
          <BenefitsSection />
        </AnimatedSection>
      </main>

      {/* Seção footer/contatos */}
      <section id="contatos">
        <Footer object={object} />
      </section>
    </div>
  );
}
