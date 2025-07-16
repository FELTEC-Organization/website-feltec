"use client";
import * as React from "react";
import { useCallback, useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import Logo from "../../../public/Logo Feltec.png";
import DropdownMenuCheckboxes from "../dropDownmenu/dropDownmenu";

export default function Header() {
  const [isTop, setTop] = useState(false);

  const handleScroll = useCallback(() => {
    setTop(window.scrollY > 10);
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  return (
    <header
      className={`fixed top-0 z-90 w-full h-16 text-zinc-900 dark:text-white shadow transition-colors duration-300
        ${
          isTop
            ? "bg-zinc-300/70 dark:bg-zinc-900/70 backdrop-blur-md shadow-2xl shadow-black"
            : "bg-zinc-300 dark:bg-zinc-900"
        }`}
    >
      <div className="w-full h-full grid grid-cols-4 items-center justify-between">
        {/* Área do logo + FELTEC */}
        <span className="w-60 h-10 flex items-center justify-start font-bold text-2xl pl-4">
          <Link href="/" className="flex items-center gap-2">
            <Image
              src={Logo}
              alt="Feltec Logo"
              width={50}
              height={50}
              className="object-contain"
            />
            {/* Texto ao lado da logo */}
            <span className="text-zinc-900 dark:text-white">FELTEC</span>
          </Link>
        </span>

        <nav className="flex items-center gap-8 ml-auto col-span-3 pr-4">
          <Link href="/" className="transition-transform duration-[700ms] hover:scale-115">HOME</Link>
          <Link href="/#servicos" className="transition-transform duration-[700ms] hover:scale-115">SERVIÇOS</Link>
          <Link href="/#contatos" className="transition-transform duration-[700ms] hover:scale-115">CONTATO</Link>
          <div className="text-zinc-900 dark:text-white"></div>
          <DropdownMenuCheckboxes />
        </nav>
      </div>
    </header>
  );
}
