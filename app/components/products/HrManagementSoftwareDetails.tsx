import ProductDetailsLayout from "./ProductDetailsLayout";
import type { ProductDetailsProps } from "@/app/(main)/products/_components/types";

const HrManagementSoftwareDetails = (props: ProductDetailsProps) => {
  return <ProductDetailsLayout {...props} accent="emerald" />;
};

export default HrManagementSoftwareDetails;
