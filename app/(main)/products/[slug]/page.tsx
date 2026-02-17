"use client";

import Link from "next/link";
import { useParams } from "next/navigation";
import productsEn from "@/public/locales/en/products.json";
import productsBn from "@/public/locales/bn/products.json";
import { productDetailsExtras } from "@/app/constants/productDetailsExtras";
import { productDetailsExtrasBn } from "@/app/constants/productDetailsExtras.bn";
import { useLanguage } from "../../../i18n/LanguageProvider";
import PortfolioWebsiteDetails from "@/app/components/products/PortfolioWebsiteDetails";
import HrManagementSoftwareDetails from "@/app/components/products/HrManagementSoftwareDetails";
import HospitalManagementSoftwareDetails from "@/app/components/products/HospitalManagementSoftwareDetails";
import CvSortingAiDetails from "@/app/components/products/CvSortingAiDetails";
import AiChatbotImplementationDetails from "@/app/components/products/AiChatbotImplementationDetails";
import ECommerceWebsiteDetails from "@/app/components/products/ECommerceWebsiteDetails";
import RestaurantManagementSoftwareDetails from "@/app/components/products/RestaurantManagementSoftwareDetails";
import CloudKitchenAppDetails from "@/app/components/products/CloudKitchenAppDetails";
import CustomSoftwareDevelopmentDetails from "@/app/components/products/CustomSoftwareDevelopmentDetails";
import type { ProductDetails } from "@/app/(main)/products/_components/types";

const blurDataUrl =
  "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mP8/x8AAwMB/6XKZQAAAABJRU5ErkJggg==";

const ProductDetailsPage = () => {
  const { t, locale } = useLanguage();
  const { slug } = useParams();
  const details = t.productsPage.details;
  const productsData = locale === "bn" ? productsBn : productsEn;
  const slugValue = Array.isArray(slug) ? slug[0] : slug;
  const product = (productsData.items as ProductDetails[]).find(
    (item) => item.slug === slugValue
  );
  const extras =
    locale === "bn"
      ? productDetailsExtrasBn[slugValue as string]
      : productDetailsExtras[slugValue as string];
  const hasExtras = Boolean(extras);

  const productComponentMap = {
    "portfolio-website": PortfolioWebsiteDetails,
    "hr-management-software": HrManagementSoftwareDetails,
    "hospital-management-software": HospitalManagementSoftwareDetails,
    "cv-sorting-ai": CvSortingAiDetails,
    "ai-chatbot-implementation": AiChatbotImplementationDetails,
    "e-commerce-website": ECommerceWebsiteDetails,
    "restaurant-management-software": RestaurantManagementSoftwareDetails,
    "cloud-kitchen-app": CloudKitchenAppDetails,
    "custom-software-development": CustomSoftwareDevelopmentDetails,
  } as const;

  const DetailsComponent = slugValue && productComponentMap[slugValue as keyof typeof productComponentMap]
    ? productComponentMap[slugValue as keyof typeof productComponentMap]
    : PortfolioWebsiteDetails;

  if (!product) {
    return (
      <section className="relative mx-auto flex w-full max-w-[1200px] flex-col items-center gap-6 px-6 py-6 md:py-12 md:px-10 text-center">
        <span className="text-[11px] uppercase tracking-[0.35em] text-primary">
          {details.label}
        </span>
        <h1 className="text-[30px] font-semibold text-slate-900 md:text-[42px] font-spaceGrotesk">
          {details.notFound.title}
        </h1>
        <p className="max-w-[620px] text-[16px] text-slate-600 md:text-[18px]">
          {details.notFound.description}
        </p>
        <Link
          href="/products"
          className="inline-flex items-center justify-center rounded-full border border-primary/25 bg-white px-6 py-3 text-[15px] font-semibold text-primary shadow-[0_12px_24px_rgba(55,0,84,0.12)] transition duration-200 ease-out hover:-translate-y-0.5"
        >
          {details.notFound.cta}
        </Link>
      </section>
    );
  }

  return (
    <DetailsComponent
      product={product}
      detailsCopy={details}
      extras={hasExtras ? extras : undefined}
      blurDataUrl={blurDataUrl}
      ctaCopy={t.productsPage.cta}
      productsList={productsData.items as ProductDetails[]}
    />
  );
};

export default ProductDetailsPage;
