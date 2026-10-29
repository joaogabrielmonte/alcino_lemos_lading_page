"use client";

import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";

export function HeroSection() {
  return (
    <section id="inicio" className="pb-10 pt-16 sm:pb-14 sm:pt-20">
      <Container>
        <div className="grid gap-8 rounded-[32px] border border-[rgba(255,241,170,0.16)] bg-[rgba(255,255,255,0.04)] px-5 py-5 shadow-[0_20px_70px_rgba(9,14,28,0.20)] sm:px-10 sm:py-12 lg:grid-cols-[1fr_420px] lg:px-14">
          <Reveal
            delay={0.12}
            className="order-2 overflow-hidden rounded-[28px] border border-[rgba(255,241,170,0.14)] bg-[rgba(255,255,255,0.06)] lg:order-2"
          >
            <Image
              src="/images/hero-portrait.jpg"
              alt="Retrato do advogado Alcino Lemos em estúdio"
              width={1200}
              height={1500}
              className="aspect-[4/4.2] h-full w-full object-cover object-[center_12%] sm:aspect-[4/3.9] lg:aspect-[4/4.25]"
              priority
            />
          </Reveal>

          <Reveal className="order-1 max-w-4xl px-1 pb-2 pt-1 sm:px-0 lg:order-1">
            <span className="text-xs font-semibold uppercase tracking-[0.24em] text-[#fff1aa]">
              Início
            </span>

            <h1 className="mt-5 max-w-4xl text-4xl leading-tight text-white sm:text-5xl lg:text-6xl">
              Atuação jurídica pautada por clareza, técnica e confiança.
            </h1>

            <p className="mt-6 max-w-3xl text-base leading-8 text-[#eef2f7] sm:text-lg">
              O escritório atende pessoas físicas e empresas com análise cuidadosa,
              comunicação objetiva e condução segura em cada etapa da demanda.
            </p>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <Link
                href="/contato"
                className="inline-flex items-center justify-center rounded-full bg-[#b38a46] px-6 py-4 text-sm font-semibold text-[#19213c] transition hover:opacity-90"
              >
                Agendar consulta
              </Link>

              <Link
                href="/sobre"
                className="inline-flex items-center justify-center rounded-full border border-[rgba(255,241,170,0.24)] px-6 py-4 text-sm font-semibold text-white transition hover:border-[#fff1aa] hover:text-[#fff1aa]"
              >
                Conhecer o escritório
              </Link>
            </div>

            <div className="mt-10 grid gap-4 sm:grid-cols-2">
              <div className="rounded-2xl border border-[rgba(255,241,170,0.14)] bg-[rgba(255,255,255,0.04)] p-4">
                <span className="text-[11px] uppercase tracking-[0.22em] text-[#d9c88e]">
                  Atendimento
                </span>
                <p className="mt-2 text-sm leading-7 text-white">
                  Escuta qualificada, orientação objetiva e acompanhamento próximo
                  ao cliente.
                </p>
              </div>

              <div className="rounded-2xl border border-[rgba(255,241,170,0.14)] bg-[rgba(255,255,255,0.04)] p-4">
                <span className="text-[11px] uppercase tracking-[0.22em] text-[#d9c88e]">
                  Estratégia
                </span>
                <p className="mt-2 text-sm leading-7 text-white">
                  Análise jurídica consistente para orientar decisões com mais
                  segurança.
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
