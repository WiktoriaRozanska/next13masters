import { Suspense } from "react";
import { type Metadata } from "next";
import { getProductById, getProductsList } from "@/api/products";
import { ProductCoverImage } from "@/ui/atoms/ProductCoverImage";
import { ProductListItemDescription } from "@/ui/atoms/ProductListItemDescription";
import { SuggestedProductList } from "@/ui/organisms/SuggestedProduct";

export const generateStaticParams = async () => {
	const products = await getProductsList();
	return products.map((product) => ({ productId: product.id }));
};

export const generateMetadata = async ({ params }: { params: { productId: string } }): Promise<Metadata> => {
	const product = await getProductById(params.productId);
	return {
		title: `Produkt - ${product.name}`,
		description: product.description,
	};
};

export default async function SingleProductPage({ params }: { params: { productId: string } }) {
	const product = await getProductById(params.productId);
	return (
		<>
			<article className="max-w-xs">
				<ProductCoverImage {...product.coverImage} />
				<ProductListItemDescription product={product} />
			</article>
			<aside>
				<Suspense fallback={"Ładowanie..."}>
					<SuggestedProductList />
				</Suspense>
			</aside>
		</>
	);
}
