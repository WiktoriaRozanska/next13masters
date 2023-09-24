import { getNumberOfProducts, getProductsList } from "@/api/products";
import { ProductList } from "@/ui/organisms/ProductList";

export const generateStaticParams = async () => {
	const numberOfProducts = await getNumberOfProducts();
	const numberOfPages = Math.ceil(numberOfProducts / 8);
	return [...Array(numberOfPages).keys()].map((page) => ({ pageNumber: (page + 1).toString() }));
};

export default async function PaginatedProductPage({ params }: { params: { pageNumber: number } }) {
	const PER_PAGE = 8;
	const pagination = params.pageNumber - 1;
	const products = await getProductsList(PER_PAGE, pagination * PER_PAGE);
	return (
		<>
			<section className="mx-auto max-w-md p-12 sm:max-w-2xl sm:py-16 md:max-w-4xl lg:max-w-7xl">
				<ProductList products={products} />
			</section>
		</>
	);
}
