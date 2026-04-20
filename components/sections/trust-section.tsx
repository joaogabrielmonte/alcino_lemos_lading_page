import Image from "next/image";
import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";

const trustItems = [
  "Atendimento personalizado para pessoas físicas e empresas.",
  "Condução jurídica com clareza, discrição e responsabilidade.",
  "Análise técnica orientada por estratégia e segurança jurídica.",
];

export function TrustSection() {
  return (
    <section className="pb-12 sm:pb-16">
      <Container>
        <Reveal className="overflow-hidden rounded-[28px] border border-[rgba(255,241,170,0.16)] bg-[rgba(255,255,255,0.05)] p-3 shadow-[0_12px_40px_rgba(25,33,60,0.16)] sm:p-4">
          <Image
            src="/images/brand-cover.png"
            alt="Arte institucional da marca Alcino Lemos Advocacia"
            width={6250}
            height={2084}
            quality={100}
            className="h-auto w-full rounded-[20px]"
          />
        </Reveal>

        <div className="mt-6 grid gap-4 lg:grid-cols-3">
          {trustItems.map((item, index) => (
            <Reveal
              key={item}
              delay={index * 0.08}
              className="rounded-[24px] border border-[rgba(255,241,170,0.16)] bg-[rgba(255,255,255,0.06)] px-5 py-5 text-sm font-medium leading-7 text-[#eef2f7]"
            >
              {item}
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
