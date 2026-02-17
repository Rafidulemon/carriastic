import type { ReactNode } from "react";

export type ProductDetails = {
  slug: string;
  title: string;
  tag: string;
  summary: string;
  description: string;
  imageAlt: string;
  highlights: string[];
  features: string[];
  benefits: string[];
  technologyStack: string[];
  gif?: string;
  banner?: string;
};

export type ProductDetailsSectionsCopy = {
  highlightsLabel: string;
  featuresLabel: string;
  benefitsLabel: string;
  stackLabel: string;
  stackBadgeLabel: string;
  modulesLabel: string;
  useCasesLabel: string;
  integrationsLabel: string;
  metricsLabel: string;
  deliveryLabel: string;
  supportLabel: string;
  moreProductsLabel: string;
};

export type ProductDetailsCopy = {
  label: string;
  backLabel: string;
  primaryCta: string;
  secondaryCta: string;
  demoForm?: Record<string, unknown>;
  sections: ProductDetailsSectionsCopy;
  notFound?: {
    title: string;
    description: string;
    cta: string;
  };
};

export type ProductDetailExtras = {
  modules?: Array<{ title: string; description: string }>;
  useCases?: Array<{ title: string; description: string }>;
  integrations?: string[];
  metrics?: Array<{ value: string; label: string; description?: string }>;
  implementation?: Array<{
    title: string;
    description: string;
    duration?: string;
  }>;
  support?: string[];
};

export type CtaCopy = {
  label: string;
  headline: string;
  description: string;
  primaryCta: string;
  secondaryCta: string;
};

export type ProductDetailsProps = {
  product: ProductDetails;
  detailsCopy: ProductDetailsCopy;
  extras?: ProductDetailExtras;
  blurDataUrl: string;
  ctaCopy: CtaCopy;
  productsList: ProductDetails[];
  accent?: AccentKey;
};

export type AccentKey =
  | "plum"
  | "teal"
  | "amber"
  | "indigo"
  | "rose"
  | "emerald"
  | "cyan"
  | "slate"
  | "violet";

export type HelperCard = {
  title: string;
  description: string;
  icon?: ReactNode;
};
