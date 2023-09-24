import { notFound } from "next/navigation";
import { getProductsByCategorySlug } from "@/api/products";
import { ProductList } from "@/ui/organisms/ProductList";

export default async function CategoryPageOnPage({
	params,
}: {
	params: { slug: string; pageNumber: number };
}) {
	const products = await getProductsByCategorySlug(params.slug);

	if (!products) {
		return notFound();
	}

	return (
		<>
			<section className="mx-auto max-w-md p-12 sm:max-w-2xl sm:py-16 md:max-w-4xl lg:max-w-7xl">
				To jest strona kategorii {params.slug} i jest to strona {params.pageNumber}
			</section>
		</>
	);
}
