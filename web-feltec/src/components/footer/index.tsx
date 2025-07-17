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
    <footer className="bg-zinc-900 text-gray-300 px-6 py-6 text-sm">
      {/* Container principal com grid adaptável */}
      <div className="max-w-10/12 mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        <div className="flex flex-col items-center gap-4 text-center">
          {/* LOGO + TEXTO */}
          <Link href="/" className="flex items-center gap-3">
            <Image
              src={Logo}
              alt="Feltec Logo"
              width={80}
              height={80}
              className="object-contain"
            />
            <span className="text-white text-4xl font-bold">FELTEC</span>
          </Link>

          {/* ÍCONES SOCIAIS - ALINHADOS AO CENTRO */}
          <div className="flex gap-4 justify-center text-feltec-primary-light">
            <SocialIcon
              href="https://github.com/FELTEC-Organization"
              icon={<Github size={30} />}
              label="GitHub"
            />
            <SocialIcon
              href="https://www.instagram.com/feltec_solutions"
              icon={<Instagram size={30} />}
              label="Instagram"
            />
            <SocialIcon
              href="https://linkedin.com/company/feltec-solutions-it"
              icon={<Linkedin size={30} />}
              label="LinkedIn"
            />
          </div>
        </div>

        {/* CONTATOS */}
        <div className="flex flex-col gap-4">
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

        {/* MAPA */}
        <div className="rounded-md overflow-hidden border border-zinc-700 lg:max-w-96">
          <iframe
            title="Mapa Feltec"
            src="https://maps.google.com/maps?q=Av.%20Itavuvu,%2011777,%20Sorocaba,%20SP&t=&z=13&ie=UTF8&iwloc=&output=embed"
            width="100%"
            height="100%"
            loading="lazy"
            className="border-0"
          />
        </div>
      </div>

      {/* DIVISOR */}
      <hr className="my-6 border-zinc-700" />

      {/* COPYRIGHT */}
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center text-xs text-zinc-500">
        <span>
          © {new Date().getFullYear()} FELTEC. Todos os direitos reservados.
        </span>
        <span>Desenvolvido pela equipe FELTEC</span>
      </div>
    </footer>
  );
}

// Componente de item de contato
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
    <div className="flex items-start gap-3">
      <div className="mt-1 text-feltec-primary-light">{icon}</div>
      <div>
        <h4 className="font-semibold text-white leading-tight">{title}</h4>
        {isLink ? (
          <a href={linkHref} className="hover:underline text-zinc-300">
            {text}
          </a>
        ) : (
          <p className="text-zinc-400">{text}</p>
        )}
      </div>
    </div>
  );
}

// Componente de ícone de rede social com hover
function SocialIcon({
  href,
  icon,
  label,
}: {
  href: string;
  icon: React.ReactNode;
  label: string;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className="hover:text-blue-600 transition-colors"
    >
      {icon}
    </a>
  );
}
