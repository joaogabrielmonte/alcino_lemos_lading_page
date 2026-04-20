import { CtaSection } from "@/components/sections/cta-section";
import { PageIntro } from "@/components/sections/page-intro";
import { PracticeAreasSection } from "@/components/sections/practice-areas-section";

export default function PracticeAreasPage() {
  return (
    <main>
      <PageIntro
        eyebrow="Áreas de atuação"
        title="Atuação jurídica orientada por profundidade técnica e estratégia."
        description="Cada demanda exige leitura cuidadosa do contexto, avaliação precisa dos riscos e definição do caminho jurídico mais adequado."
        ctaHref="/contato"
        ctaLabel="Quero falar sobre meu caso"
        imageSrc="/images/logo-mockup.png"
        imageAlt="Mockup do logo Alcino Lemos Advocacia"
      />

      <div className="bg-[#f7f4ef]">
        <PracticeAreasSection />
      </div>

      <CtaSection />
    </main>
  );
}
