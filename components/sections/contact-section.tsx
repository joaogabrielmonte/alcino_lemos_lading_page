import Image from "next/image";
import { Mail, MessageCircle } from "lucide-react";
import Link from "next/link";
import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";

const contactChannels = [
  {
    title: "WhatsApp",
    icon: MessageCircle,
    description:
      "Canal direto para iniciar a conversa e apresentar os pontos principais da demanda.",
    href: "https://wa.me/5561982636857",
    label: "Conversar pelo WhatsApp",
    detail: "(61) 98263-6857",
  },
  {
    title: "E-mail",
    icon: Mail,
    description:
      "Envie uma mensagem com as informações iniciais para receber retorno com orientação objetiva.",
    href: "mailto:alcinolemos.advocacia@gmail.com",
    label: "Enviar e-mail",
    detail: "alcinolemos.advocacia@gmail.com",
  },
];

export function ContactSection() {
  return (
    <section className="section-padding pt-0">
      <Container>
        <div className="grid gap-6 lg:grid-cols-[1.05fr_0.95fr]">
          <Reveal className="rounded-[32px] border border-[rgba(25,33,60,0.08)] bg-white p-8 shadow-[0_12px_40px_rgba(25,33,60,0.06)] sm:p-10">
            <span className="text-sm font-semibold uppercase tracking-[0.25em] text-[#b38a46]">
              Atendimento
            </span>

            <h2 className="mt-4 text-4xl leading-tight text-[#19213c] sm:text-5xl">
              Canais diretos para iniciar o atendimento com clareza e agilidade.
            </h2>

            <p className="mt-6 max-w-2xl text-base leading-8 text-[#4f5b70]">
              Entre em contato pelo canal mais conveniente e apresente sua demanda
              para receber uma orientação inicial.
            </p>

            <div className="mt-10 grid gap-4 sm:grid-cols-2">
              <div className="rounded-2xl bg-[#f7f4ef] p-5">
                <span className="text-[11px] uppercase tracking-[0.20em] text-[#b38a46]">
                  Localização
                </span>
                <p className="mt-2 text-sm leading-7 text-[#19213c]">
                  Brasília - DF
                </p>
              </div>

              <div className="rounded-2xl bg-[#f7f4ef] p-5">
                <span className="text-[11px] uppercase tracking-[0.20em] text-[#b38a46]">
                  Horário
                </span>
                <p className="mt-2 text-sm leading-7 text-[#19213c]">
                  Segunda a sexta, com atendimento agendado
                </p>
              </div>
            </div>
          </Reveal>

          <div className="grid gap-6">
            <Reveal
              delay={0.08}
              className="overflow-hidden rounded-[32px] border border-[rgba(25,33,60,0.08)] bg-white shadow-[0_12px_40px_rgba(25,33,60,0.06)]"
            >
              <Image
                src="/images/email-signature.png"
                alt="Assinatura visual do escritório com dados de contato"
                width={1876}
                height={543}
                className="h-full w-full object-cover"
              />
            </Reveal>

            <div className="grid gap-6 md:grid-cols-2">
              {contactChannels.map((channel, index) => (
                <Reveal
                  key={channel.title}
                  delay={index * 0.08 + 0.12}
                  className="rounded-[32px] border border-[rgba(25,33,60,0.08)] bg-white p-8 shadow-[0_12px_40px_rgba(25,33,60,0.06)]"
                >
                  <channel.icon aria-hidden="true" size={24} className="mb-5 text-[#76551f]" />
                  <h3 className="text-2xl text-[#19213c]">{channel.title}</h3>

                  <p className="mt-4 text-base leading-8 text-[#4f5b70]">
                    {channel.description}
                  </p>

                  <p className="mt-4 break-all text-sm font-semibold text-[#19213c]">{channel.detail}</p>

                  <Link
                    href={channel.href}
                    className="mt-6 inline-flex items-center justify-center rounded-full bg-[#19213c] px-6 py-4 text-sm font-semibold text-white transition hover:bg-[#10172c]"
                  >
                    {channel.label}
                  </Link>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
