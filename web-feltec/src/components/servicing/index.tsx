"use client";

import { useState } from "react";
import { HomeProps } from "@/utils/home.type";
import Image from "next/image";
import { useTranslation } from "react-i18next";

export default function Services({ object }: HomeProps) {
  const services = object.metadata.services;
  const { t } = useTranslation();

  const [openIndex, setOpenIndex] = useState<number | null>(null);

  function toggleCard(index: number) {
    setOpenIndex((current) => (current === index ? null : index));
  }

  function getServiceTitleKey(description: string): string {
  switch (description) {
    case "Desenvolvimento de sites":
      return "services.web";
    case "Desenvolvimento de app´s":
      return "services.mobile";
    case "Prototipação":
      return "services.prototype";
    case "Manutenção de sistemas":
      return "services.maintenance";
    default:
      return "services.default";
  }
}

  return (
    <section className="py-12 px-4 md:px-12 max-w-7xl mx-auto">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-10">
        {t("services.title")}
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6">
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
              <div className="relative w-full h-40 rounded-t-lg overflow-hidden">
                <Image
                  src={service.image.imgix_url ?? service.image.url}
                  alt={service.description}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="px-4 py-3">
                <h3 className="text-black dark:text-white font-semibold text-center">
                  {t(getServiceTitleKey(service.description))}
                </h3>
              </div>

              <div
                className={`px-4 pb-4 text-gray-700 dark:text-gray-300 text-left transition-max-height duration-300 ease-in-out
                  ${isOpen ? "opacity-100 mt-2 max-h-62" : "opacity-0 max-h-0"}`}
                style={{ overflow: "hidden" }}
              >
                {t(getServiceKey(service.description))}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

// Mapeia a descrição para a chave da tradução
function getServiceKey(description: string): string {
  switch (description) {
    case "Desenvolvimento de sites":
      return "services.web_explanation";
    case "Desenvolvimento de app´s":
      return "services.mobile_explanation";
    case "Prototipação":
      return "services.prototype_explanation";
    case "Manutenção de sistemas":
      return "services.maintenance_explanation";
    default:
      return "services.default_explanation";
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
