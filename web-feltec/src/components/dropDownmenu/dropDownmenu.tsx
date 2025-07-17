"use client";

import { ThemeButton } from "../themechange/themeButton";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import { useTranslation } from "react-i18next";
import { Button } from "../ui/button";
import { Settings } from "lucide-react";

const LanguageSelector: React.FC = () => {
  const { i18n } = useTranslation();

  const handleChangeLanguage = (lang: string) => {
    i18n.changeLanguage(lang);
  };

  return (
    <div className="flex items-center gap-4">
      {/* Botão de tema (claro/escuro) */}
      <ThemeButton />

      {/* Menu suspenso de idiomas */}
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="outline" size="icon">
            <Settings className="h-4 w-4" />
          </Button>
        </DropdownMenuTrigger>

        <DropdownMenuContent className="w-56">
          <DropdownMenuItem onClick={() => handleChangeLanguage("pt")}>
            🇧🇷 Português (PT)
          </DropdownMenuItem>
          <DropdownMenuItem onClick={() => handleChangeLanguage("en")}>
            🇺🇸 English (EN)
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};

export default LanguageSelector;
