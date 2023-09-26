"use client";

import { getProductsByProvidedValue } from "@/api/products";
import { ProductList } from "@/ui/organisms/ProductList";
import { useSearchParams } from "next/navigation";

export default async function SearchPage() {
	const searchParams = useSearchParams();
	const searchValue = searchParams.get("query");
	const products = await getProductsByProvidedValue(searchValue || "");

	return (
		<>
			<section className="mx-auto max-w-md p-12 sm:max-w-2xl sm:py-16 md:max-w-4xl lg:max-w-7xl">
				{!products.length && <h1>No products found that meet your criteria</h1>}
				<ProductList products={products} />
			</section>
		</>
	);
}
