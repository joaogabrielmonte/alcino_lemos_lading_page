import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";

type PageIntroProps = {
  eyebrow: string;
  title: string;
  description: string;
  ctaHref?: string;
  ctaLabel?: string;
  imageSrc?: string;
  imageAlt?: string;
};

export function PageIntro({
  eyebrow,
  title,
  description,
  ctaHref,
  ctaLabel,
  imageSrc,
  imageAlt,
}: PageIntroProps) {
  return (
    <section className="pb-10 pt-16 sm:pb-14 sm:pt-20">
      <Container>
        <div className="grid gap-8 rounded-[32px] border border-[rgba(255,241,170,0.16)] bg-[rgba(255,255,255,0.04)] px-8 py-10 shadow-[0_20px_70px_rgba(9,14,28,0.20)] sm:px-10 sm:py-12 lg:grid-cols-[1fr_420px] lg:px-14">
          <Reveal>
            <span className="text-xs font-semibold uppercase tracking-[0.24em] text-[#fff1aa]">
              {eyebrow}
            </span>

            <h1 className="mt-5 max-w-4xl text-4xl leading-tight text-white sm:text-5xl lg:text-6xl">
              {title}
            </h1>

            <p className="mt-6 max-w-3xl text-base leading-8 text-[#eef2f7] sm:text-lg">
              {description}
            </p>

            {ctaHref && ctaLabel ? (
              <Link
                href={ctaHref}
                className="mt-8 inline-flex items-center justify-center rounded-full bg-[#b38a46] px-6 py-4 text-sm font-semibold text-[#19213c] transition hover:opacity-90"
              >
                {ctaLabel}
              </Link>
            ) : null}
          </Reveal>

          {imageSrc ? (
            <Reveal delay={0.12} className="overflow-hidden rounded-[28px] border border-[rgba(255,241,170,0.14)] bg-[rgba(255,255,255,0.06)]">
              <Image
                src={imageSrc}
                alt={imageAlt ?? title}
                width={1200}
                height={1200}
                className="h-full w-full object-cover"
              />
            </Reveal>
          ) : null}
        </div>
      </Container>
    </section>
  );
}
