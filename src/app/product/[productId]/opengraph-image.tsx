import { getProductById } from "@/api/products";
import { ProductItemFragment } from "@/gql/graphql";
import { ImageResponse } from "next/server";

export const runtime = "edge";

export default async function OpenGraphImages({ params }: { params: { productId: string } }) {
	const product: ProductItemFragment = await getProductById(params.productId);

	return new ImageResponse(
		(
			<div tw="w-full text-black h-full bg-slate-50 flex items-center justify-start">
				<div tw="flex w-[600px] p-8">
					<img src={product.images[0]?.url || ""} alt="" />
				</div>
				<div tw="flex flex-col w-[400px]">
					<h1 tw="">{product.name}</h1>
					<p>{product.description}</p>
					<p>
						Categories:
						{product.categories.map((category) => {
							return <>{category.name} </>;
						})}
					</p>
				</div>
			</div>
		),
	);
}
