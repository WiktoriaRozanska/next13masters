import { executeGraphql } from "@/api/graphqlApi";
import { getProductsByCollectionSlug } from "@/api/products";
import { CollectionGetBySlugDocument, CollectionListItemFragment } from "@/gql/graphql";
import { ProductList } from "@/ui/organisms/ProductList";
import { Metadata } from "next";

export const generateMetadata = async ({ params }: { params: { slug: string } }): Promise<Metadata> => {
	const res = await executeGraphql({ query: CollectionGetBySlugDocument, variables: { slug: params.slug } });
	const collections = res.collections as CollectionListItemFragment[];
	return {
		title: collections[0]?.name || "Undefined collection",
		description: collections[0]?.description || "",
	};
};

export default async function CollectionProducts({ params }: { params: { slug: string } }) {
	const products = await getProductsByCollectionSlug(params.slug);
	const res = await executeGraphql({ query: CollectionGetBySlugDocument, variables: { slug: params.slug } });
	const collections = res.collections as CollectionListItemFragment[];
	return (
		<>
			<h1>{collections[0]?.name || "Collection"}</h1>
			<section className="mx-auto max-w-md p-12 sm:max-w-2xl sm:py-16 md:max-w-4xl lg:max-w-7xl">
				<ProductList products={products} />
			</section>
		</>
	);
}
