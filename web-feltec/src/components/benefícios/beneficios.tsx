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

interface Beneficio {
    titulo: string;
    descricao: string;
}

const beneficios: Beneficio[] = [
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
<div className="relative w-full bg-white dark:bg-[#0a0a0a] py-16">
    <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <h2 className="text-2xl md:text-3xl font-bold text-center text-gray-900 dark:text-white mb-12">
            Quais são os benefícios que a terceirização de TI traz para seu negócio?
        </h2>

        <div className="relative w-full flex justify-center">
            <Carousel
                opts={{ align: "center" }}
                className="w-full relative"
            >
                <CarouselContent className="gap-6">
                    {beneficios.map((beneficio, index) => (
                        <CarouselItem
                            key={index}
                            className="basis-[90%] sm:basis-1/2 md:basis-1/3"
                        >
                            <motion.div
                                whileHover={{ scale: 1.03 }}
                                className="h-full"
                            >
                                <Card className="h-full bg-gray-50 dark:bg-[#0f172a] border border-gray-200 dark:border-gray-800 rounded-xl shadow-md">
                                    <CardContent className="flex flex-col gap-4 p-6 h-[300px]">
                                        <div className="flex justify-center">
                                            <BadgeCheck className="w-8 h-8 text-green-500" />
                                        </div>
                                        <h3 className="text-lg font-bold text-center text-gray-900 dark:text-white">
                                            {beneficio.titulo}
                                        </h3>
                                        <p className="text-gray-600 dark:text-gray-300 text-center">
                                            {beneficio.descricao}
                                        </p>
                                    </CardContent>
                                </Card>
                            </motion.div>
                        </CarouselItem>
                    ))}
                </CarouselContent>

                {/* SETAS FORA DOS CARDS, SEM CORTAR */}
                <CarouselPrevious className=" hidden md:flex absolute top-1/2 -translate-y-1/2 left-0 -translate-x-1/2 z-20 bg-white dark:bg-gray-800 shadow-lg rounded-full h-10 w-10" />
                <CarouselNext className=" hidden md:flex absolute top-1/2 -translate-y-1/2 right-0 translate-x-1/2 z-20 bg-white dark:bg-gray-800 shadow-lg rounded-full h-10 w-10" />
            </Carousel>
        </div>
    </div>
</div>
    );
}