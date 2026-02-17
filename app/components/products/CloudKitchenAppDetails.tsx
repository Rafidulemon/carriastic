import ProductDetailsLayout from "./ProductDetailsLayout";
import type { ProductDetailsProps } from "@/app/(main)/products/_components/types";

const CloudKitchenAppDetails = (props: ProductDetailsProps) => {
  return <ProductDetailsLayout {...props} accent="cyan" />;
};

export default CloudKitchenAppDetails;
