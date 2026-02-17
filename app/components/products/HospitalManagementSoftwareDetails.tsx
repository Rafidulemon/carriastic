import ProductDetailsLayout from "./ProductDetailsLayout";
import type { ProductDetailsProps } from "@/app/(main)/products/_components/types";

const HospitalManagementSoftwareDetails = (props: ProductDetailsProps) => {
  return <ProductDetailsLayout {...props} accent="teal" />;
};

export default HospitalManagementSoftwareDetails;
