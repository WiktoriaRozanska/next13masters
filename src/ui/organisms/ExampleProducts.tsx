import { getProductsList } from "@/api/products";
import { ProductList } from "@/ui/organisms/ProductList";

export const ExampleProductsList = async ({}) => {
	const products = await getProductsList();
	return <ProductList products={products.slice(-4)} />;
};
