import { Suspense } from "react";
import { type Metadata } from "next";
import { getProductById, getProductsList } from "@/api/products";
import { SuggestedProductList } from "@/ui/organisms/SuggestedProduct";
import { Product } from "@/ui/molecules/Product";

export const generateStaticParams = async () => {
	const products = await getProductsList();
	return products.map((product) => ({ productId: product.id }));
};

export const generateMetadata = async ({ params }: { params: { productId: string } }): Promise<Metadata> => {
	const product = await getProductById(params.productId);
	return {
		title: `${product.name} - Shop`,
		description: product.description,
		openGraph: {
			title: `${product.name} - Shop`,
			description: product.description,
			images: [{ url: product.coverImage.src, alt: product.coverImage.alt }],
		},
	};
};

export default async function SingleProductPage({ params }: { params: { productId: string } }) {
	const product = await getProductById(params.productId);
	return (
		<>
			<article className="mx-auto max-w-7xl p-8">
				<Product product={product} />
			</article>
			<aside>
				<br />
				<p>Suggested items</p>
				<Suspense fallback={"Ładowanie..."}>
					<SuggestedProductList />
				</Suspense>
			</aside>
		</>
	);
}
