import { ContactSection } from "@/components/sections/contact-section";
import { PageIntro } from "@/components/sections/page-intro";

export default function ContactPage() {
  return (
    <main id="conteudo" tabIndex={-1}>
      <PageIntro
        eyebrow="Contato"
        title="Entre em contato com o escritório e apresente sua demanda com clareza."
        description="O atendimento inicial pode ser feito por WhatsApp ou e-mail, com orientação objetiva e postura profissional desde o primeiro retorno."
        ctaHref="https://wa.me/5561982636857"
        ctaLabel="Conversar pelo WhatsApp"
        imageSrc="/images/brand-mockup.png"
        imageAlt="Mockup institucional da marca Alcino Lemos"
      />

      <div className="bg-[#f7f4ef]">
        <ContactSection />
      </div>
    </main>
  );
}
