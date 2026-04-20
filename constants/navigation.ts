export type NavigationLink = {
  label: string;
  href: string;
};

export const navigationLinks: NavigationLink[] = [
  { label: "Início", href: "/" },
  { label: "Áreas de Atuação", href: "/areas-de-atuacao" },
  { label: "Sobre", href: "/sobre" },
  { label: "Atendimento", href: "/atendimento" },
  { label: "FAQ", href: "/faq" },
  { label: "Contato", href: "/contato" },
];
