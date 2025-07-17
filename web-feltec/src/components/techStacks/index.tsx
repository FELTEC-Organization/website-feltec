"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Tooltip, TooltipContent, TooltipTrigger } from "../ui/tooltip";

const techs = [
  { src: "/techs/angular.png", label: "Angular" },
  { src: "/techs/c++.png", label: "C++" },
  { src: "/techs/java.png", label: "Java" },
  { src: "/techs/vue.png", label: "Vue.js" },
  { src: "/techs/nextjs.png", label: "Next.js" },
  { src: "/techs/postgresql.png", label: "PostgreSQL" },
  { src: "/techs/react.png", label: "React" },
  { src: "/techs/python.png", label: "Python" },
  { src: "/techs/mysql.png", label: "MySQL" },
  { src: "/techs/mongodb.png", label: "MongoDB" },
  { src: "/techs/csharp.png", label: "C#" },
  { src: "/techs/docker.png", label: "Docker" },
  { src: "/techs/node.png", label: "Node.js" },
  { src: "/techs/git.png", label: "Git" },
  { src: "/techs/html2.png", label: "HTML" },
  { src: "/techs/css.png", label: "CSS" },
  { src: "/techs/tailwindcss.png", label: "Tailwind CSS" },
  { src: "/techs/javascript.png", label: "JavaScript" },
  { src: "/techs/typescript.png", label: "TypeScript" },
  { src: "/techs/postman.png", label: "Postman" },
  { src: "/techs/material-ui.png", label: "Material UI" },
  { src: "/techs/figma.png", label: "Figma" },
  { src: "/techs/nestjs.png", label: "NestJS" },
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
    <div className="flex flex-col md:flex-row items-start justify-between w-full px-4 md:px-16 py-12 gap-12">
      {/* Texto à esquerda */}
      <div className="w-full md:w-1/3 text-center md:text-left">
        <h1 className="text-3xl md:text-5xl font-bold text-black dark:text-white leading-tight">
          Especialistas em <br />
          <span className="text-blue-600">+20</span> tecnologias
        </h1>
      </div>

      {/* Ícones com máscara de gradiente */}
      <div className="w-full md:w-2/3 flex flex-col gap-8 overflow-hidden relative">
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
              className="flex gap-6 md:gap-10"
              animate={{
                x: rowIndex % 2 === 0 ? ["0%", "-100%"] : ["-100%", "0%"],
              }}
              transition={{
                duration: 35,
                ease: "linear",
                repeat: Infinity,
              }}
            >
              {rowTechs.concat(rowTechs).map((tech, i) => (
                <Tooltip key={`${rowIndex}-${i}`}>
                  <TooltipTrigger asChild>
                    <div className="w-20 h-20 md:w-28 md:h-28 flex-shrink-0 flex items-center justify-center rounded-full bg-feltec-light dark:bg-feltec-dark shadow-lg hover:scale-110 transition-transform duration-300 my-2">
                      <div className="w-14 h-14 md:w-20 md:h-20 relative">
                        <Image
                          src={tech.src}
                          alt={tech.label}
                          fill
                          className="object-contain"
                        />
                      </div>
                    </div>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>{tech.label}</p>
                  </TooltipContent>
                </Tooltip>
              ))}
            </motion.div>
          </div>
        ))}
      </div>
    </div>
  );
}
