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

const beneficios = [
    {
        titulo: "Expertise e tecnologia de ponta",
        descricao: "Tenha acesso a conhecimento especializado, tecnologias avançadas e tendências do mercado.",
    },
    {
        titulo: "Redução de Custos",
        descricao: "Terceirizar resulta em uma economia significativa nos custos operacionais e de pessoal.",
    },
    {
        titulo: "Foco no Core Business",
        descricao: "Deixe o TI nas mãos de especialistas e foque no que realmente importa.",
    },
    {
        titulo: "Mais Segurança",
        descricao: "Profissionais preparados para proteger sua infraestrutura e dados.",
    },
    {
        titulo: "Atualização Constante",
        descricao: "Equipe sempre atualizada com as melhores práticas do mercado.",
    },
    {
        titulo: "Escalabilidade",
        descricao: "Adapte sua TI conforme seu crescimento, de forma flexível e rápida.",
    },
];

export default function Beneficios() {
    return (
        <div className="w-screen min-h-screen flex flex-col items-center justify-center space-y-10 p-6 m-4">
            <h2 className="text-2xl font-semibold text-center max-w-2xl dark:text-white">
                Quais são os benefícios que a terceirização de TI traz para seu negócio?
            </h2>
            <div className="relative w-full max-w-7xl overflow-visible">
                <Carousel opts={{ align: "start" }} orientation="horizontal" className="w-full relative">
                    <CarouselContent className="">
                        {beneficios.map((beneficio, index) => (
                            <CarouselItem key={index} className="basis-[300px] md:basis-[350px] lg:basis-[400px]">
                                <motion.div
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.98 }}
                                    className="p-2"
                                >
                                    <Card className="min-h-[340px] flex flex-col justify-between items-center rounded-2xl border border-muted shadow-md transition hover:shadow-lg dark:bg-neutral-900 dark:bg-[#014aaa]">
                                        <CardContent className="flex flex-col gap-4 p-6 text-center justify-center items-center m-4">
                                            <BadgeCheck className="w-6 h-6 text-green-600" />
                                            <span className="text-2xl font-bold text-primary dark:text-green-400"></span>
                                            <h3 className="text-lg font-semibold dark:text-white">{beneficio.titulo}</h3>
                                            <p className="p-4 text-sm text-muted-foreground dark:text-gray-400">
                                                {beneficio.descricao}
                                            </p>
                                        </CardContent>
                                    </Card>
                                </motion.div>
                            </CarouselItem>
                        ))}
                    </CarouselContent>
                    <CarouselPrevious className="absolute top-1/2 -translate-y-1/2 left-0 z-10 flex px-1 m-3" />
                    <CarouselNext className="absolute top-1/2 -translate-y-1/2 right-0 z-10 flex px-1 m-3" />
                </Carousel>
            </div>
        </div>
    );
}