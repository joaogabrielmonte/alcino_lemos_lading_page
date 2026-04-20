import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";

export function CtaSection() {
  return (
    <section id="contato" className="section-padding pt-0">
      <Container>
        <Reveal className="rounded-[32px] bg-[#19213c] px-8 py-14 text-center shadow-[0_20px_70px_rgba(25,33,60,0.18)] sm:px-10 sm:py-16 lg:px-14">
          <span className="text-xs font-semibold uppercase tracking-[0.24em] text-[#fff1aa]">
            Contato
          </span>

          <h2 className="mx-auto mt-4 max-w-3xl text-4xl leading-tight text-white sm:text-5xl">
            Fale com o escritório e receba uma orientação inicial com clareza, discrição e atenção técnica.
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-[#eef2f7]">
            Atendimento jurídico para pessoas físicas e empresas, com foco em
            confiança, método e segurança na condução de cada caso.
          </p>

          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href="https://wa.me/5561982636857"
              className="inline-flex min-w-[220px] items-center justify-center rounded-full bg-[#b38a46] px-6 py-4 text-sm font-semibold text-[#19213c] transition hover:opacity-90"
            >
              Chamar no WhatsApp
            </a>

            <a
              href="mailto:alcinolemos.advocacia@gmail.com"
              className="inline-flex min-w-[220px] items-center justify-center rounded-full border border-[rgba(255,241,170,0.25)] px-6 py-4 text-sm font-semibold text-white transition hover:border-[#fff1aa] hover:text-[#fff1aa]"
            >
              Enviar e-mail
            </a>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
