import ProductDetailsLayout from "./ProductDetailsLayout";
import type { ProductDetailsProps } from "@/app/(main)/products/_components/types";

const PortfolioWebsiteDetails = (props: ProductDetailsProps) => {
  return <ProductDetailsLayout {...props} accent="indigo" />;
};

export default PortfolioWebsiteDetails;
