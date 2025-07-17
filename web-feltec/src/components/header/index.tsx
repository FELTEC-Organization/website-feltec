"use client";
import * as React from "react";
import { useCallback, useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import Logo from "../../../public/Logo Feltec.png";
import Options from "../dropDownmenu/dropDownmenu";
import { Menu } from "lucide-react"; // ícone do hambúrguer
import { useTranslation } from "react-i18next";

export default function Header() {
  const { t } = useTranslation();
  const [isTop, setTop] = useState(false);
  const [isMenuOpen, setMenuOpen] = useState(false);

  const handleScroll = useCallback(() => {
    setTop(window.scrollY > 10);
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  return (
    <header
      className={`fixed top-0 z-50 w-full h-16 text-zinc-900 dark:text-white transition-colors duration-300
        ${isTop
          ? "bg-zinc-300/70 dark:bg-zinc-900/70 backdrop-blur-md shadow-2xl shadow-black"
          : "bg-zinc-300 dark:bg-zinc-900"
        }`}
    >
      <div className="w-full h-full mx-auto px-4 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <Image
            src={Logo}
            alt="Feltec Logo"
            width={40}
            height={40}
            className="object-contain"
          />
          <span className="text-xl font-bold text-zinc-900 dark:text-white">FELTEC</span>
        </Link>

        {/* Navegação centralizada em telas grandes */}
        <nav className="hidden lg:flex items-center gap-8 absolute left-1/2 transform -translate-x-1/2">
          <Link href="/#inicio" className="transition-transform duration-700 hover:scale-110">INICIO</Link>
          <Link href="/#servicos" className="transition-transform duration-700 hover:scale-110">SERVIÇOS</Link>
          <Link href="/#contatos" className="transition-transform duration-700 hover:scale-110">CONTATO</Link>
        </nav>

        {/* Dropdown tema - visível em qualquer tela */}
        <div className="hidden lg:block ml-auto">
          <Options />
        </div>

        {/* Botão de menu mobile/tablet */}
        <button
          className="lg:hidden ml-auto"
          onClick={() => setMenuOpen(!isMenuOpen)}
        >
          <Menu size={28} />
        </button>
      </div>

      {/* Menu Mobile */}
      {isMenuOpen && (
        <div className="lg:hidden absolute top-16 w-full bg-zinc-300 dark:bg-zinc-900 flex flex-col items-start px-6 py-4 gap-4 z-50 shadow-md">
          <Link href="/#inicio" onClick={() => setMenuOpen(false)}>{t("Inicio")}</Link>
          <Link href="/#servicos" onClick={() => setMenuOpen(false)}>{t("Servicos")}</Link>
          <Link href="/#contatos" onClick={() => setMenuOpen(false)}>{t("Contato")}</Link>
          <Options />
        </div>
      )}
    </header>
  );
}
