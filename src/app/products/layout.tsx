import { Pagination } from "@/ui/molecules/Pagination";
import { getNumberOfProducts } from "@/api/products";

export default async function ProductsPage({ children }: { children: React.ReactNode }) {
	const PER_PAGE = 20;
	const numberOfProducts = await getNumberOfProducts();
	return (
		<>
			{children}
			<section>
				<Pagination pages={Math.ceil(numberOfProducts / PER_PAGE)}></Pagination>
			</section>
		</>
	);
}
