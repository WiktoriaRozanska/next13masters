import { getProductsByCollectionSlug } from "@/api/products";
import { ProductList } from "@/ui/organisms/ProductList";

export default async function CollectionProducts({ params }: { params: { slug: string } }) {
	const products = await getProductsByCollectionSlug(params.slug);
	console.log("====================================");
	console.log(products);
	return (
		<>
			<p>Collection</p>
			<section className="mx-auto max-w-md p-12 sm:max-w-2xl sm:py-16 md:max-w-4xl lg:max-w-7xl">
				<ProductList products={products} />
			</section>
		</>
	);
}
