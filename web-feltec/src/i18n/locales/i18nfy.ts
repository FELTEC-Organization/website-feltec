import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import enTranslation from "./en.json";
import ptTranslation from "./pt.json";

const resources = {
  en: { translation: enTranslation },
  pt: { translation: ptTranslation },
};

i18n.use(initReactI18next).init({
  resources,
  debug: true,
  lng: "pt",
  fallbackLng: "en",
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
