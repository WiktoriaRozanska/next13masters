import { getProductsByCategorySlug } from "@/api/products";
import { ProductList } from "@/ui/organisms/ProductList";

export default async function CategoryProductsOnPage({
	params,
}: {
	params: { slug: string; pageNumber: number };
}) {
	const PER_PAGE = 8;
	const pagination = params.pageNumber - 1;
	const category = await getProductsByCategorySlug(params.slug, PER_PAGE, pagination * PER_PAGE);
	return (
		<>
			<h1>{category.name}</h1>
			<section className="mx-auto max-w-md p-12 sm:max-w-2xl sm:py-16 md:max-w-4xl lg:max-w-7xl">
				<ProductList products={category.products} />
			</section>
		</>
	);
}
