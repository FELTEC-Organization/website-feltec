"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const techs = [
    "/techs/angular.png",
    "/techs/c++.png",
    "/techs/java.png",
    "/techs/vue3.png",
    "/techs/nextjs.png",
    "/techs/postgresql.png",
    "/techs/react.png",
    "/techs/python.png",
    "/techs/mysql.png",
    "/techs/mongodb.png",
    "/techs/csharp.png",
    "/techs/docker.png",
    "/techs/node.png",
    "/techs/git.png",
    "/techs/html2.png",
    "/techs/css.png",
    "/techs/tailwindcss.png",
    "/techs/javascript.png",
    "/techs/ts.png",
];

const rows = 2;

export default function AnimatedTechCarousel() {
    const techRows = Array.from({ length: rows }, (_, rowIndex) =>
        techs.slice(
            rowIndex * Math.ceil(techs.length / rows),
            (rowIndex + 1) * Math.ceil(techs.length / rows)
        )
    );

    return (
        <div className="flex items-start justify-between w-full bg-white px-16 py-16 gap-12">
            {/* Texto à esquerda */}
            <div className="w-1/3">
                <h1 className="text-5xl font-bold text-black leading-tight">
                    Especialistas em <br />
                    <span className="text-blue-600">+20</span> tecnologias
                </h1>
            </div>

            {/* Ícones com máscara de gradiente */}
            <div className="w-2/3 flex flex-col gap-8 overflow-hidden relative">
                {techRows.map((rowTechs, rowIndex) => (
                    <div
                        key={rowIndex}
                        className="w-full overflow-hidden"
                        style={{
                            WebkitMaskImage:
                                "linear-gradient(to right, transparent 0%, black 10%, black 90%, transparent 100%)",
                            maskImage:
                                "linear-gradient(to right, transparent 0%, black 10%, black 90%, transparent 100%)",
                        }}
                    >
                        <motion.div
                            className="flex gap-10"
                            animate={{ x: rowIndex % 2 === 0 ? ["0%", "-100%"] : ["-100%", "0%"] }}
                            transition={{
                                duration: 35,
                                ease: "linear",
                                repeat: Infinity,
                            }}
                        >
                            {rowTechs.concat(rowTechs).map((src, i) => (
                                <div
                                    key={`${rowIndex}-${i}`}
                                    className="w-28 h-28 flex-shrink-0 flex items-center justify-center rounded-full bg-white shadow-lg hover:scale-110 transition-transform duration-300 my-4"
                                >
                                    <div className="w-20 h-20 relative">
                                        <Image
                                            src={src}
                                            alt="Tech Logo"
                                            fill
                                            className="object-contain"
                                        />
                                    </div>
                                </div>
                            ))}
                        </motion.div>
                    </div>
                ))}
            </div>
        </div>
    );
}
