"use client";
import Header from "@/components/header";
import Image from "next/image";
import capa from "../../public/capa-pagina.png";
import sobre from "../../public/elemento-sobre.png";
import desenvolvimento from "../../public/desenvolvimento.png";
import apps from "../../public/apps.png";
import proto from "../../public/prototipação.png";
import manuten from "../../public/manutenção.png";
import tecnologias from "../../public/tecnologias.png";
import "../i18n/locales/i18nfy";
import { Trans, useTranslation } from "react-i18next";
import Beneficios from "@/components/benefícios/beneficios";

export default function Home() {
  const { t } = useTranslation();
  return (
    <div>
      <main className="dark:text-white dark:bg-black">
        <div>
          <Header />
        </div>
        {/*Seção capa  */}
        <section className="relative inset-0">
          <Image src={capa} alt="capa da pagina" className="object-contain " />
          <h2 className="dark:text-black text-3xl font-bold text-left mb-6 4k:text-4xl top-0">
            {t("title.title")}
          </h2>
          <p>
            impulsione seus resultados com os nossos serviços especializados
          </p>
          <button className="dark:text-black">Entre em contato</button>
        </section>

        {/*Seção sobre  */}
        <section>
          <h2>Sobre</h2>
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
          <Image src={sobre} alt="sobre" className="object-contain" />
        </section>
        {/* Seção serviços */}
        <section>
          <h2>Conheça nossos serviços</h2>
          <Image
            src={desenvolvimento}
            alt="Desenvolvimento de sites"
            className="object-contain"
          />

          <Image
            src={apps}
            alt="Desenvolvimento de apps"
            className="object-contain"
          />

          <Image src={proto} alt="Prototipação" className="object-contain" />

          <Image src={manuten} alt="Manutenção" className="object-contain" />
        </section>
        {/* Seção quem somos  */}
        <section>
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
        <section>
          <h2>Nossas especialidades</h2>
          <Image
            src={tecnologias}
            alt="tecnologias"
            className="object-contain"
          />
        </section>
        {/*Seção benefícios  */}
       <Beneficios />
      </main>
      <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center">
        FOOTER
      </footer>
    </div>
  );
}
