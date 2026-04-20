"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Container } from "@/components/ui/container";
import { navigationLinks } from "@/constants/navigation";

export function Navbar() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const isActiveLink = (href: string) => {
    if (href === "/") {
      return pathname === "/";
    }

    return pathname.startsWith(href);
  };

  return (
    <header className="sticky top-0 z-50 border-b border-[rgba(255,241,170,0.14)] bg-[rgba(25,33,60,0.92)] backdrop-blur-xl">
      <Container className="flex h-20 items-center justify-between gap-6">
        <Link href="/" className="flex items-center">
          <Image
            src="/images/logo-transparent.png"
            alt="Logo Alcino Lemos Advocacia"
            width={918}
            height={774}
            className="h-auto w-[56px] sm:w-[68px]"
            priority
          />
        </Link>

        <nav className="hidden items-center gap-8 lg:flex">
          {navigationLinks.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`text-sm font-medium transition ${
                isActiveLink(item.href)
                  ? "text-[#fff1aa]"
                  : "text-[#eef2f7] hover:text-[#fff1aa]"
              }`}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <Link
            href="/contato"
            className="hidden items-center justify-center rounded-full bg-[#b38a46] px-5 py-3 text-sm font-semibold text-[#19213c] transition hover:opacity-90 sm:inline-flex"
          >
            Agendar consulta
          </Link>

          <button
            type="button"
            className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-[rgba(255,241,170,0.20)] text-[#fff1aa] lg:hidden"
            onClick={() => setIsMenuOpen((current) => !current)}
            aria-expanded={isMenuOpen}
            aria-label="Abrir menu"
          >
            {isMenuOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </Container>

      {isMenuOpen ? (
        <>
          <button
            type="button"
            className="fixed inset-0 top-20 z-40 bg-[rgba(6,10,22,0.32)] lg:hidden"
            aria-label="Fechar menu"
            onClick={() => setIsMenuOpen(false)}
          />

          <div className="absolute inset-x-0 top-full z-50 px-4 pt-4 lg:hidden">
            <div className="mx-auto w-full max-w-[var(--container-width)] rounded-[24px] border border-[rgba(255,241,170,0.14)] bg-[rgba(20,28,52,0.98)] p-4 shadow-[0_24px_60px_rgba(5,10,22,0.32)] backdrop-blur-2xl">
              <nav className="flex flex-col gap-3">
                {navigationLinks.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={`rounded-2xl px-4 py-3 text-sm font-medium transition ${
                      isActiveLink(item.href)
                        ? "bg-[rgba(255,241,170,0.10)] text-[#fff1aa]"
                        : "text-[#eef2f7]"
                    }`}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.label}
                  </Link>
                ))}

                <Link
                  href="/contato"
                  className="mt-1 inline-flex items-center justify-center rounded-full bg-[#b38a46] px-5 py-3 text-sm font-semibold text-[#19213c]"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Agendar consulta
                </Link>
              </nav>
            </div>
          </div>
        </>
      ) : null}
    </header>
  );
}
