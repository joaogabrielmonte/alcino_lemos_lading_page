import { AboutSection } from "@/components/sections/about-section";
import { CtaSection } from "@/components/sections/cta-section";
import { PageIntro } from "@/components/sections/page-intro";

export default function AboutPage() {
  return (
    <main>
      <PageIntro
        eyebrow="Sobre"
        title="Um escritório guiado por seriedade, clareza e compromisso com cada cliente."
        description="A relação com o cliente é conduzida com escuta, responsabilidade e solidez técnica em todas as etapas do atendimento."
        ctaHref="/contato"
        ctaLabel="Entrar em contato"
        imageSrc="/images/about-portrait.jpg"
        imageAlt="Retrato do advogado Alcino Lemos"
      />

      <div className="bg-[#f7f4ef]">
        <AboutSection />
      </div>

      <CtaSection />
    </main>
  );
}
