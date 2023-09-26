"use client";

import { executeGraphql } from "@/api/graphqlApi";
import { ProductItemFragment, ProductsListByProvidedValueDocument } from "@/gql/graphql";
import { exec } from "child_process";
import { useState } from "react";

export const SearchInput = ({ getSearchResult }) => {
	const [query, setQuery] = useState("");

	const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		console.log(query);
		const response = await executeGraphql(ProductsListByProvidedValueDocument, { searchString: query });
		const products = response.products as ProductItemFragment[];
		getSearchResult(products);
	};

	return (
		<div className="my-20 text-center">
			<form onSubmit={handleSubmit}>
				<input
					className="rounded-full border-2 border-black px-3 py-2 text-black"
					type="text"
					placeholder="Search..."
					value={query}
					onChange={(e) => setQuery(e.target.value)}
				/>
				<button className="rounded-full bg-black px-3 py-2 text-white hover:bg-black/60" type="submit">
					Search
				</button>
			</form>
		</div>
	);
};
