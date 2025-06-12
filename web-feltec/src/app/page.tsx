import Header from "@/components/header";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <main>
        <div>
          <Header />
        </div>
      </main>
      <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center">
        FOOTER 
      </footer>
    </div>
  );
}
