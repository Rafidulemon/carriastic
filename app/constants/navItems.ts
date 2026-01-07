import { Translation } from "../i18n/translations";

export type NavItem = {
  href: string;
  label: string;
};

export const getNavItems = (t: Translation): NavItem[] => [
  { href: "/", label: t.nav.home },
  { href: "/about", label: t.nav.about },
  { href: "/services", label: t.nav.services },
  { href: "/ai", label: t.nav.ai },
  { href: "/products", label: t.nav.products },
  { href: "/blogs", label: t.nav.blog },
  { href: "/career", label: t.nav.career },
];
