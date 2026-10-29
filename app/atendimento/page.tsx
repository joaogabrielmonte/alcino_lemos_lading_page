import { CtaSection } from "@/components/sections/cta-section";
import { PageIntro } from "@/components/sections/page-intro";
import { ProcessSection } from "@/components/sections/process-section";

export default function AtendimentoPage() {
  return (
    <main id="conteudo" tabIndex={-1}>
      <PageIntro
        eyebrow="Atendimento"
        title="Um processo de atendimento estruturado para conduzir cada caso com segurança."
        description="Do primeiro contato ao acompanhamento da demanda, cada etapa é organizada para oferecer clareza, previsibilidade e confiança."
        ctaHref="/contato"
        ctaLabel="Agendar atendimento"
        imageSrc="/images/service-portrait.jpg"
        imageAlt="Retrato institucional para a página de atendimento"
      />

      <div className="bg-[#f7f4ef]">
        <ProcessSection />
      </div>

      <CtaSection />
    </main>
  );
}
