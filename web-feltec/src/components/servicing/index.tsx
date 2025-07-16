"use client";

import { useState } from "react";
import { HomeProps } from "@/utils/home.type";
import Image from "next/image";

export default function Services({ object }: HomeProps) {
  const services = object.metadata.services;

  // Estado que guarda o index do card aberto (ou null se nenhum aberto)
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  // Função para alternar o card aberto (toggle)
  function toggleCard(index: number) {
    setOpenIndex((current) => (current === index ? null : index));
  }

  return (
    <section className="py-12 px-4 md:px-12 max-w-7xl mx-auto">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-10">
        CONHEÇA NOSSOS SERVIÇOS
      </h2>

      {/* Grid dos cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {services.map((service, index) => {
          const isOpen = openIndex === index;

          return (
            <div
              key={index}
              className={`bg-white rounded-xl shadow-md border dark:bg-zinc-950 cursor-pointer transition-all duration-300 ease-in-out
                ${isOpen ? "max-h-[500px]" : "max-h-[250px]"} 
                overflow-hidden flex flex-col`}
              onClick={() => toggleCard(index)}
            >
              {/* Imagem e descrição */}
              <div className="relative w-full h-40 rounded-t-lg overflow-hidden">
                <Image
                  src={service.image.imgix_url ?? service.image.url}
                  alt={service.description}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="px-4 py-3">
                <h3 className="text-black dark:text-white font-semibold text-center">{service.description}</h3>
              </div>

              {/* Conteúdo expansível */}
              <div
                className={`px-4 pb-4 text-gray-700 dark:text-gray-300 text-left transition-max-height duration-300 ease-in-out
                  ${isOpen ? "opacity-100 mt-2 max-h-40" : "opacity-0 max-h-0"}`}
                style={{ overflow: "hidden" }}
              >
                {getServiceExplanation(service.description)}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

// Função de explicações de serviços
// Retorna uma string explicativa baseada na descrição do serviço
function getServiceExplanation(description: string): string {
  switch (description) {
    case "Desenvolvimento de sites":
      return "Desenvolvemos sites personalizados, responsivos e modernos, com foco na melhor experiência do usuário, otimização para mecanismos de busca e alta performance para o seu negócio.";
    case "Desenvolvimento de app´s":
      return "Criamos aplicativos móveis sob medida, com interfaces intuitivas, alta performance, segurança e compatibilidade com diferentes plataformas e dispositivos.";
    case "Prototipação":
      return "Transformamos suas ideias em protótipos interativos e funcionais, facilitando a validação e o aprimoramento das funcionalidades antes do desenvolvimento final.";
    case "Manutenção de sistemas":
      return "Oferecemos suporte técnico especializado, atualizações, correções e melhorias contínuas para garantir a estabilidade, segurança e evolução dos seus sistemas.";
    default:
      return "Fornecemos soluções personalizadas e flexíveis, alinhadas às necessidades específicas do seu projeto para maximizar resultados.";
  }
}

// "use client";

// import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";
// import { HomeProps } from "@/utils/home.type";
// import Image from "next/image";
// import Autoplay from "embla-carousel-autoplay";

// export default function Services({ object }: HomeProps) {
//   const services = object.metadata.services;

//   return (
//     <section className="bg-blue-600 py-12 px-4 md:px-12 rounded-2xl mb-10 text-white">
//       <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">
//         Conheça nossos serviços
//       </h2>

//       {/* Carrossel dos serviços */}
//       <Carousel
//         opts={{
//           align: "center",
//           loop: true,
//         }}
//         plugins={[
//           Autoplay({ delay: 4000 }),
//         ]}
//         className="w-full max-w-4xl mx-auto"
//       >
//         <CarouselContent>
//           {services.map((service, index) => (
//             <CarouselItem
//               key={index}
//               className="flex flex-col items-center space-y-4 p-4 md:basis-1/2 lg:basis-1/3"
//             >
//               <div className="w-full h-56 relative rounded-xl overflow-hidden shadow-lg">
//                 <Image
//                   src={service.image.imgix_url}
//                   alt={service.description}
//                   fill
//                   className="object-cover"
//                 />
//               </div>
//               <p className="text-lg text-center font-medium">
//                 {service.description}
//               </p>
//             </CarouselItem>
//           ))}
//         </CarouselContent>
//       </Carousel>
//     </section>
//   );
// }
