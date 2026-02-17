import ProductDetailsLayout from "./ProductDetailsLayout";
import type { ProductDetailsProps } from "@/app/(main)/products/_components/types";

const ECommerceWebsiteDetails = (props: ProductDetailsProps) => {
  return <ProductDetailsLayout {...props} accent="amber" />;
};

export default ECommerceWebsiteDetails;
