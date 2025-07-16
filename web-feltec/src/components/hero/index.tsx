import Image from "next/image";

interface HeroProps {
  heading: string;
  buttonUrl: string;
  buttonTitle: string;
  bannerUrl: string;
}

export function Hero({ heading, bannerUrl, buttonTitle, buttonUrl }: HeroProps) {
  const [firstLine, ...restLines] = heading.split('\n');
  const restText = restLines.join(' ');

  return (
    <main className="w-full relative flex items-center h-[30rem] md:h-[30rem]">
      {/* Container do conteúdo alinhado à esquerda com padding responsivo */}
      <div className="absolute left-4 md:left-16 max-w-xl z-20 text-white drop-shadow-lg px-4 md:px-0">
        <h1>
          {/* Tamanhos responsivos para os textos */}
          <p className="text-4xl md:text-6xl font-bold leading-tight">{firstLine}</p>
          <p className="text-2xl md:text-4xl font-semibold leading-snug mt-2">{restText}</p>
        </h1>
        <a
          target="_blank"
          href={buttonUrl}
          className="inline-block mt-6 bg-blue-600 hover:bg-blue-800 text-white font-semibold px-6 py-3 rounded-md transition"
          rel="noreferrer"
        >
          {buttonTitle}
        </a>
      </div>

      {/* Imagem de fundo com opacidade */}
      <div className="relative w-full h-full">
        <Image
          alt={heading}
          src={bannerUrl}
          priority
          quality={100}
          fill
          style={{ objectFit: "cover", filter: "brightness(0.5)" }}
          sizes="100vw"
        />
      </div>
    </main>
  );
}
