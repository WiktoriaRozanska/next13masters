import { executeGraphql } from "@/api/graphqlApi";
import { getNumberOfProductsInCategory, getProductsByCategorySlug } from "@/api/products";
import { CategoryGetBySlugDocument, CategoryItemFragment } from "@/gql/graphql";
import { Pagination } from "@/ui/molecules/Pagination";
import { ProductList } from "@/ui/organisms/ProductList";
import { Metadata } from "next";

export const generateMetadata = async ({
	params,
}: {
	params: { slug: string; pageNumber: number };
}): Promise<Metadata> => {
	const res = await executeGraphql({ query: CategoryGetBySlugDocument, variables: { slug: params.slug } });
	const category = res.categories as CategoryItemFragment[];
	return {
		title: category[0]?.name || "Undefined category",
		description: category[0]?.description || "",
	};
};

export default async function CategoryProductsOnPage({
	params,
}: {
	params: { slug: string; pageNumber: number };
}) {
	const PER_PAGE = 4;
	const pagination = params.pageNumber - 1;
	const category = await getProductsByCategorySlug(params.slug, PER_PAGE, pagination * PER_PAGE);
	const numberOfProducts = await getNumberOfProductsInCategory(params.slug);
	return (
		<>
			<h2>{category.name}</h2>
			<section className="mx-auto max-w-md p-12 sm:max-w-2xl sm:py-16 md:max-w-4xl lg:max-w-7xl">
				<ProductList products={category.products} />
			</section>
			<Pagination
				pages={Math.ceil(numberOfProducts / PER_PAGE)}
				basePath={`categories/${params.slug}`}
			></Pagination>
		</>
	);
}
