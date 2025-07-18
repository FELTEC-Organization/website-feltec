"use client";

import { motion } from "framer-motion";
import { BadgeCheck } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { useTranslation } from "react-i18next";

type Benefit = {
  titulo: string;
  descricao: string;
};

export default function BenefitCards() {
  const { t } = useTranslation();
  const benefits = t("benefits.items", { returnObjects: true }) as Benefit[];
  const sectionTitle = t("benefits.title");

  return (
    <section
      aria-label="Benefícios"
      className="flex flex-col items-center py-20 px-4 sm:px-8 lg:px-12 space-y-12"
    >
      <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-center max-w-4xl leading-tight dark:text-white mb-8">
        {sectionTitle}
      </h2>

      <div className="relative w-full max-w-screen-xl mx-auto">
        <Carousel opts={{ align: "start" }} className="w-full">
          <CarouselContent className="px-1 sm:px-2 md:px-3 lg:px-4 gap-4">
            {benefits.map((benefit, idx) => (
              <CarouselItem
                key={idx}
                className="
                  flex-none
                  basis-full
                  sm:basis-1/2
                  md:basis-1/3
                  max-w-full
                  sm:max-w-1/2
                  md:max-w-1/3
                "
              >
                <motion.div
                  whileTap={{ scale: 0.98 }}
                  className="h-full"
                  style={{ transformOrigin: "center", willChange: "transform" }}
                >
                  <Card className="flex flex-col justify-between items-center w-full h-full rounded-2xl border border-muted shadow-md transition hover:shadow-lg dark:bg-neutral-900">
                    <CardContent className="flex flex-col items-center text-center gap-4 p-6">
                      <BadgeCheck className="w-8 h-8 sm:w-9 sm:h-9 text-green-600" />
                      <h3 className="text-lg font-semibold dark:text-white">
                        {benefit.titulo}
                      </h3>
                      <p className="text-sm sm:text-base text-muted-foreground dark:text-gray-400">
                        {benefit.descricao}
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>
              </CarouselItem>
            ))}
          </CarouselContent>

          <CarouselPrevious
            aria-label="Benefícios anteriores"
            className="
              absolute top-1/2 left-2 sm:left-3
              -translate-y-1/2 z-30
              p-2 sm:p-3
              rounded-full
              bg-white/90 dark:bg-neutral-800/90
              hover:bg-white dark:hover:bg-neutral-700
              shadow-md transition
            "
          />
          <CarouselNext
            aria-label="Próximos benefícios"
            className="
              absolute top-1/2 right-2 sm:right-3
              -translate-y-1/2 z-30
              p-2 sm:p-3
              rounded-full
              bg-white/90 dark:bg-neutral-800/90
              hover:bg-white dark:hover:bg-neutral-700
              shadow-md transition
            "
          />
        </Carousel>
      </div>
    </section>
  );
}
