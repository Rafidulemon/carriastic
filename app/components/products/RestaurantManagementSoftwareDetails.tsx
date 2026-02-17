import ProductDetailsLayout from "./ProductDetailsLayout";
import type { ProductDetailsProps } from "@/app/(main)/products/_components/types";

const RestaurantManagementSoftwareDetails = (props: ProductDetailsProps) => {
  return <ProductDetailsLayout {...props} accent="rose" />;
};

export default RestaurantManagementSoftwareDetails;
