"use client";

import { getProductsByProvidedValue } from "@/api/products";
import { ProductListItemFragment } from "@/gql/graphql";
import { ProductList } from "@/ui/organisms/ProductList";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

export default function SearchPage() {
	const searchParams = useSearchParams();
	const searchValue = searchParams.get("query");

	const [data, setData] = useState([] as ProductListItemFragment[]);
	useEffect(() => {
		getProductsByProvidedValue(searchValue || "").then((data) => setData(data));
	});

	return (
		<>
			<section className="mx-auto max-w-md p-12 sm:max-w-2xl sm:py-16 md:max-w-4xl lg:max-w-7xl">
				{!data.length && <h1>No products found that meet your criteria</h1>}
				<ProductList products={data} />
			</section>
		</>
	);
}
