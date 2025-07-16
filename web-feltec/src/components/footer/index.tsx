"use client";

import { HomeProps } from "@/utils/home.type";
import Image from "next/image";
import Logo from "../../../public/Logo Feltec.png";
import {
  MapPin,
  Mail,
  Phone,
  AlarmClock,
  Github,
  Instagram,
  Linkedin,
} from "lucide-react";
import Link from "next/link";

export default function Footer({ object }: HomeProps) {
  const contact = object.metadata.contact;

  return (
    <footer className="bg-zinc-900 text-gray-300 py-6 px-4 w-full text-sm">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 items-start">
        
        {/* Logo + redes sociais - Centralizado e compacto */}
        <div className="flex flex-col items-center text-center gap-20">
          <Link href="/" className="flex items-center gap-2">
            <Image
              src={Logo}
              alt="Feltec Logo"
              width={70}
              height={70}
              className="object-contain"
            />
            <span className="text-white text-4xl font-bold">FELTEC</span>
          </Link>

          <div className="flex gap-4 text-blue-500">
            <a
              href="https://github.com/FELTEC-Organization"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
            >
              <Github size={20} />
            </a>
            <a
              href="https://instagram.com/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
            >
              <Instagram size={20} />
            </a>
            <a
              href="https://linkedin.com/company/feltec-solutions-it"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <Linkedin size={20} />
            </a>
          </div>
        </div>

        {/* Contatos com ícones - Compactado */}
        <div className="flex flex-col gap-3">
          <ContactItem
            icon={<MapPin size={16} />}
            title="Endereço"
            text={contact.address}
          />
          <ContactItem
            icon={<Mail size={16} />}
            title="Email"
            text={contact.email}
            isLink
            linkHref={`mailto:${contact.email}`}
          />
          <ContactItem
            icon={<Phone size={16} />}
            title="Telefone"
            text={contact.phone}
            isLink
            linkHref={`tel:${contact.phone.replace(/\D/g, "")}`}
          />
          <ContactItem
            icon={<AlarmClock size={16} />}
            title="Funcionamento"
            text={contact.time}
          />
        </div>

        {/* Mapa - Altura reduzida */}
        <div className="rounded-md overflow-hidden border w-full h-[140px]">
          <iframe
            title="Mapa Feltec"
            src="https://maps.google.com/maps?q=Av.%20Itavuvu,%2011777,%20Sorocaba,%20SP&t=&z=13&ie=UTF8&iwloc=&output=embed"
            width="100%"
            height="100%"
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>

      {/* Linha divisória fina */}
      <hr className="border-zinc-700 my-4" />

      {/* Rodapé simples e pequeno */}
      <div className="max-w-7xl mx-auto flex justify-between text-xs text-zinc-500 flex-wrap">
        <span>© {new Date().getFullYear()} FELTEC, todos direitos reservados.</span>
        <span>Desenvolvido por equipe FELTEC</span>
      </div>
    </footer>
  );
}

// Componente auxiliar para itens de contato
function ContactItem({
  icon,
  title,
  text,
  isLink = false,
  linkHref = "",
}: {
  icon: React.ReactNode;
  title: string;
  text: string;
  isLink?: boolean;
  linkHref?: string;
}) {
  return (
    <div className="flex items-start gap-2">
      <div className="mt-[2px] text-blue-500">{icon}</div>
      <div>
        <h4 className="font-semibold text-white leading-tight">{title}</h4>
        {isLink ? (
          <a href={linkHref} className="hover:underline leading-tight">
            {text}
          </a>
        ) : (
          <p className="leading-tight">{text}</p>
        )}
      </div>
    </div>
  );
}
