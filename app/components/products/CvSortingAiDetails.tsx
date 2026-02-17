import ProductDetailsLayout from "./ProductDetailsLayout";
import type { ProductDetailsProps } from "@/app/(main)/products/_components/types";

const CvSortingAiDetails = (props: ProductDetailsProps) => {
  return <ProductDetailsLayout {...props} accent="violet" />;
};

export default CvSortingAiDetails;
