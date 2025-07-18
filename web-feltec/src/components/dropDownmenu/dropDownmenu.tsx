"use client";

import { useTranslation } from "react-i18next";
import Image from "next/image";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import { Button } from "../ui/button";
import { ThemeButton } from "../themechange/themeButton";
import { ChevronDown } from "lucide-react";

const LanguageSelector: React.FC = () => {
  const { i18n } = useTranslation();
  const currentLang = i18n.language;

  // Bandeira atual
  const flag = currentLang === "pt" ? "/flag/br.png" : "/flag/us.png";
  const label = currentLang === "pt" ? "PT" : "EN";

  const handleChangeLanguage = (lang: string) => {
    i18n.changeLanguage(lang);
  };

  return (
    <div className="flex items-center gap-4">
      {/* Botão de alternância de tema */}
      <ThemeButton />

      {/* Menu de idiomas */}
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="outline" className="flex items-center gap-2 px-3 py-2 bg-white text-black  dark:bg-black dark:text-white">
            {/* Bandeira */}
            <Image src={flag} alt={label} width={20} height={14} />

            {/* Sigla do idioma */}
            <span className="text-sm font-medium">{label}</span>

            {/* Ícone seta para baixo */}
            <ChevronDown className="w-4 h-4" />
          </Button>
        </DropdownMenuTrigger>

        <DropdownMenuContent align="end" className="w-40">
          <DropdownMenuItem onClick={() => handleChangeLanguage("pt")}>
            <Image src="/flag/br.png" alt="Português" width={20} height={14} className="mr-2" />
            Português
          </DropdownMenuItem>
          <DropdownMenuItem onClick={() => handleChangeLanguage("en")}>
            <Image src="/flag/us.png" alt="English" width={20} height={14} className="mr-2" />
            English
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};

export default LanguageSelector;
