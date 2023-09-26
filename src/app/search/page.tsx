"use client";

import { getProductsByProvidedValue } from "@/api/products";
import { ProductList } from "@/ui/organisms/ProductList";
import { useSearchParams } from "next/navigation";

export default async function SearchPage() {
	// const [searchValue, setSearchValue] = useState("");

	// const handleSearch = (value: string) => {
	// 	// Here, you can access the search value when Enter is pressed
	// 	console.log(value);
	// 	setSearchValue(value);
	// };

	// return (
	// 	// <main className="flex min-h-screen flex-col items-center justify-between p-24">
	// 	// 	<div className="lg:flex-inline z-10 w-full max-w-md items-center justify-between font-mono text-sm">
	// 	// 		<h1 className={"my-10 text-5xl"}>Curious Search</h1>
	// 	// 		<Search onSearch={handleSearch} />
	// 	// 		<h2 className={"mx-2 mt-20 text-2xl underline"}>Searched for:</h2>
	// 	// 		<p className={"m-2 text-2xl"}> {searchValue}</p>
	// 	// 	</div>
	// 	// </main>
	// 	<>
	// 		<p>{searchParams?.greeting}</p>
	// 	</>
	// );
	// console.log(searchParams);
	// console.log(searchParams["value"]);
	// return <h1>{searchParams?.greeting || "Hello!"}</h1>;
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
