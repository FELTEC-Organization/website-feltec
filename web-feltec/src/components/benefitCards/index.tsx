"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Image from "next/image";
import beneficios from "../../../public/beneficios.png";
import Container from "@/components/container";

export default function BenefitsSection() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });

  return (
    <Container>
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 50 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.7 }}
        className="flex flex-col items-center justify-center gap-8 py-16"
      >
        <h2 className="text-3xl font-bold text-center">
          Benefícios de trabalhar conosco
        </h2>
        <Image
          src={beneficios}
          alt="Benefícios de trabalhar conosco"
          className="w-full max-w-2xl"
        />
      </motion.div>
    </Container>
  );
}
