"use client";

import {
  Target,
  Eye,
  ShieldCheck,
  Handshake,
} from "lucide-react";
import { useTranslation } from "react-i18next";

export default function WhoWeAre() {
  const { t } = useTranslation();

  const items = [
    {
      icon: <Target className="w-8 h-8 text-primary mx-auto" />,
      title: t("whoWeAre.mission.title"),
      description: t("whoWeAre.mission.description"),
    },
    {
      icon: <Eye className="w-8 h-8 text-primary mx-auto" />,
      title: t("whoWeAre.vision.title"),
      description: t("whoWeAre.vision.description"),
    },
    {
      icon: <ShieldCheck className="w-8 h-8 text-primary mx-auto" />,
      title: t("whoWeAre.values.title"),
      description: t("whoWeAre.values.description"),
    },
    {
      icon: <Handshake className="w-8 h-8 text-primary mx-auto" />,
      title: t("whoWeAre.social.title"),
      description: t("whoWeAre.social.description"),
    },
  ];

  return (
    <section className="py-16 px-4 md:px-12 max-w-7xl mx-auto space-y-20">
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <h2 className="text-3xl md:text-4xl font-bold text-primary">{t("whoWeAre.title")}</h2>
        <p className="text-lg text-muted-foreground">{t("whoWeAre.description1")}</p>
        <p className="text-lg text-muted-foreground">{t("whoWeAre.description2")}</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {items.map((item, index) => (
          <div
            key={index}
            className="p-6 border border-muted bg-white rounded-2xl dark:bg-zinc-950 text-center shadow-sm hover:shadow-md transition space-y-3"
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
