import Link from "next/link";
import { Container } from "@/components/ui/container";
import { navigationLinks } from "@/constants/navigation";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-[rgba(255,241,170,0.14)] py-10 text-white">
      <Container>
        <div className="flex flex-col gap-8 md:flex-row md:items-start md:justify-between">
          <div>
            <h3 className="font-display text-2xl text-white">
              Alcino Lemos Advocacia
            </h3>
            <p className="mt-3 max-w-xl text-sm leading-7 text-[#eef2f7]">
              Assessoria jurídica com seriedade, precisão técnica e atendimento
              próximo para pessoas físicas e empresas.
            </p>
          </div>

          <nav className="grid gap-3 text-sm text-[#eef2f7] sm:grid-cols-2">
            {navigationLinks.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="transition hover:text-[#fff1aa]"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="text-sm leading-7 text-[#eef2f7]">
            <p>Brasília - DF</p>
            <a
              href="mailto:alcinolemos.advocacia@gmail.com"
              className="transition hover:text-[#fff1aa]"
            >
              alcinolemos.advocacia@gmail.com
            </a>
            <br />
            <a
              href="https://wa.me/5561982636857"
              className="transition hover:text-[#fff1aa]"
            >
              (61) 98263-6857
            </a>
          </div>
        </div>

        <div className="mt-8 border-t border-[rgba(255,241,170,0.14)] pt-6 text-sm text-[#d9c88e]">
          © {currentYear} Alcino Lemos Advocacia. Todos os direitos reservados.
        </div>
      </Container>
    </footer>
  );
}
