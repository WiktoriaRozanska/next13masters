import { getProductsList } from "@/api/products";
import { SuggestedProductsList } from "@/ui/organisms/SuggestedProductsList";

// const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

export const SuggestedProductList = async ({}) => {
	const products = await getProductsList();
	// await sleep(500);
	return <SuggestedProductsList products={products.slice(-4)} />;
};
