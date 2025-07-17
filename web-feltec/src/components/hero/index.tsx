import Image from "next/image";

interface HeroProps {
  firstLine: string;
  restText: string;
  buttonUrl: string;
  buttonTitle: string;
  bannerUrl: string;
}

export function Hero({ firstLine, restText, bannerUrl, buttonTitle, buttonUrl }: HeroProps) {
  return (
    <main className="w-full relative flex items-center h-[30rem] md:h-[30rem]">
      {/* Container do conteúdo alinhado à esquerda com padding responsivo */}
      <div className="absolute left-4 md:left-16 max-w-xl z-20 text-white drop-shadow-lg px-4 md:px-0">
        <h1>
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
          alt={firstLine + " " + restText}
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
