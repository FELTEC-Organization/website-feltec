"use client";
import { useTranslation } from "react-i18next";
import React from "react";
import {
  DropdownMenuSub,
  DropdownMenuSubTrigger,
  DropdownMenuSubContent,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";

const LanguageSelector: React.FC = () => {
  const { i18n } = useTranslation();

  const handleChangeLanguage = (lang: string) => {
    i18n.changeLanguage(lang);
  };

  return (
    <DropdownMenuSub>
      <DropdownMenuSubTrigger>🌐 Idioma</DropdownMenuSubTrigger>
      <DropdownMenuSubContent>
        <DropdownMenuItem onClick={() => handleChangeLanguage("pt")}>
          🇧🇷 Português (PT)
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => handleChangeLanguage("en")}>
          🇺🇸 English (EN)
        </DropdownMenuItem>
        {/* Se quiser adicionar mais idiomas: */}
        {/* <DropdownMenuItem onClick={() => handleChangeLanguage("es")}>
          🇪🇸 Español (ES)
        </DropdownMenuItem> */}
      </DropdownMenuSubContent>
    </DropdownMenuSub>
  );
};

export default LanguageSelector;
