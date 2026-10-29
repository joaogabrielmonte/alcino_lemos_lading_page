import { CtaSection } from "@/components/sections/cta-section";
import { FaqSection } from "@/components/sections/faq-section";
import { PageIntro } from "@/components/sections/page-intro";

export default function FaqPage() {
  return (
    <main id="conteudo" tabIndex={-1}>
      <PageIntro
        eyebrow="FAQ"
        title="Informações objetivas para esclarecer as dúvidas mais comuns antes do atendimento."
        description="Reunimos respostas diretas para facilitar o primeiro contato e tornar o início do atendimento mais claro."
        ctaHref="/contato"
        ctaLabel="Ainda tenho dúvidas"
        imageSrc="/images/faq-portrait.jpg"
        imageAlt="Retrato institucional usado na página de perguntas frequentes"
      />

      <div className="bg-[#f7f4ef]">
        <FaqSection />
      </div>

      <CtaSection />
    </main>
  );
}
