import Header from "@/components/header";
import Image from "next/image";
import capa from "../../public/capa-pagina.png";

export default function Home() {
  return (
    <div>
      <main>
        <div>
          <Header />
        </div>
        <div className="absolute inset-0 xl:hidden">
          <Image
            src={capa}
            alt="capa da pagina"
            fill
            className="object-cover blur-sm"
          />
        </div>
      </main>
      <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center">
        ISSO VAI SER O FOOTER
      </footer>
    </div>
  );
}
