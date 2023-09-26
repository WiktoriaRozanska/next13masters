"use client";

import { executeGraphql } from "@/api/graphqlApi";
import { ProductItemFragment, ProductsListByProvidedValueDocument } from "@/gql/graphql";
import { SearchInput } from "@/ui/atoms/SearchInpit";
import { ProductList } from "@/ui/organisms/ProductList";
import { useEffect, useState } from "react";

export default function SearchPage() {
	const [products, setPorducts] = useState([] as ProductItemFragment[]);

	useEffect(() => {
		const getProducts = async () => {
			const res = await executeGraphql(ProductsListByProvidedValueDocument, { searchString: result });
			const products = res.products as ProductItemFragment[];
			setPorducts(products);
		};

		getProducts();
	}, []);

	return (
		<>
			<SearchInput getSearchResult={(results) => setPorducts(results)} />
			<p>Have you found what you are looking for?</p>
			<ProductList products={products} />
		</>
	);
}
