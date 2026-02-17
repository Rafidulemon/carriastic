import ProductDetailsLayout from "./ProductDetailsLayout";
import type { ProductDetailsProps } from "@/app/(main)/products/_components/types";

const CustomSoftwareDevelopmentDetails = (props: ProductDetailsProps) => {
  return <ProductDetailsLayout {...props} accent="slate" />;
};

export default CustomSoftwareDevelopmentDetails;
