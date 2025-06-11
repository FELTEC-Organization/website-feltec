"use client";
import { Search, Bell, Info, ChevronDown, ChevronUp } from "lucide-react";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { useCallback, useState } from "react";
import Image from "next/image";
import Logo from "../../../public/Logo Feltec.png";
import { ThemeButton } from "../themechange/themeButton";

export default function Header() {
  return (
    <header className="w-full h-16 bg-nc-base-600 text-white shadow bg-feltec-primary-dark">
      <div className="flex justify-end">
        <ThemeButton />
      </div>
      <div className="w-full h-full grid grid-cols-4 items-center justify-between ">
        <span className=" w-40 h-10 flex items-center justify-center font-bold text-2xl">
          <Image
            src={Logo}
            alt="Feltec Logo"
            className="w-full h-full object-contain"
          />
          FELTEC
        </span>

        <div className="flex items-center gap-2 ml-auto col-span-2">
          <Button className="p-2 rounded bg-nc-base-800 hover:bg-nc-base-400">
            HOME
          </Button>
          <Button className="p-2 rounded bg-nc-base-800 hover:bg-nc-base-400">
            SERVIÇOS
          </Button>
          <Button className="p-2 rounded bg-nc-base-800 hover:bg-nc-base-400">
            CONTATO
          </Button>
        </div>
      </div>
    </header>
  );
}
