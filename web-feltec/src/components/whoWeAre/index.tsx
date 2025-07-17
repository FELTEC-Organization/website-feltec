"use client";

import {
  Target,
  Eye,
  ShieldCheck,
  Handshake,
} from "lucide-react";

export default function WhoWeAre() {
  return (
    <section className="py-16 px-4 md:px-12 max-w-7xl mx-auto space-y-20">
      
      {/* Título e mensagem institucional humanizada */}
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <h2 className="text-3xl md:text-4xl font-bold text-primary">Quem Somos</h2>
        <p className="text-lg text-muted-foreground">
          Mais do que uma empresa de tecnologia, a Feltec é feita por pessoas que acreditam na inovação como força transformadora. Nossa essência está em criar, evoluir e colaborar lado a lado com clientes, parceiros e a sociedade.
        </p>
        <p className="text-lg text-muted-foreground">
          Valorizamos conexões reais, ética em cada entrega e propósito em cada linha de código.
        </p>
      </div>

      {/* Cards com ícones minimalistas */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {[
          {
            icon: <Target className="w-8 h-8 text-primary mx-auto" />,
            title: "Missão",
            description:
              "Conectar tecnologia e propósito para gerar impacto positivo, com soluções que facilitam e elevam o dia a dia das pessoas e empresas.",
          },
          {
            icon: <Eye className="w-8 h-8 text-primary mx-auto" />,
            title: "Visão",
            description:
              "Ser reconhecida como uma referência em qualidade e compromisso na construção de soluções digitais inteligentes.",
          },
          {
            icon: <ShieldCheck className="w-8 h-8 text-primary mx-auto" />,
            title: "Valores",
            description:
              "Integridade, confiança, humildade, segurança, respeito e responsabilidade.",
          },
          {
            icon: <Handshake className="w-8 h-8 text-primary mx-auto" />,
            title: "Social",
            description:
              "Promover um mundo melhor com nossos conhecimentos técnicos, e propragar a responsabilidade social.",
          },
        ].map((item, index) => (
          <div
            key={index}
            className="p-6 border border-muted rounded-2xl bg-background text-center shadow-sm hover:shadow-md transition space-y-3"
          >
            {item.icon}
            <h3 className="text-lg font-semibold">{item.title}</h3>
            <p className="text-muted-foreground text-sm">{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
