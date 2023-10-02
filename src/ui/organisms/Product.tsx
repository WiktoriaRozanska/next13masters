import { ProductItemFragment } from "@/gql/graphql";
import { ProductCounter } from "@/ui/atoms/ProductCounter";
import { ProductCoverImage } from "@/ui/atoms/ProductCoverImage";
import { formatMoney } from "@/utils";
import { VariantSelector } from "../atoms/VariantSelector";
import { AddToCartButton } from "../atoms/AddToCartButton";
import { getOrCreateCart, addToCart } from "@/api/cart";
import { revalidatePath } from "next/cache";

type ProductItemProps = {
	product: ProductItemFragment;
};

export const Product = ({ product }: ProductItemProps) => {
	async function addToCartAction(formData: FormData) {
		"use server";

		const cart = await getOrCreateCart();
		await addToCart(cart.id, formData.get("productId") as string);

		revalidatePath("/");
	}

	return (
		<div className="flex flex-col justify-between gap-16 lg:flex-row lg:items-center">
			<div className="flex flex-col gap-6 lg:w-2/4">
				{product.images[0] && <ProductCoverImage src={product.images[0].url} alt="" />}
			</div>

			{/* ABOUT */}
			<div className="flex flex-col gap-4 lg:w-2/4">
				<div>
					<h1>{product.name}</h1>
					<p>{product.description}</p>
				</div>
				<p className="text-sm font-medium text-teal-700">
					<span>Price:</span> {formatMoney(product.price)}
				</p>
				{/* Tutaj dodac opcje */}
				{product.variants && <VariantSelector variants={product.variants} />}
				<div className="flex flex-row items-center gap-16">
					<ProductCounter />
					<form action={addToCartAction}>
						<input type="hidden" name="productId" value={product.id} />
						<AddToCartButton />
					</form>
				</div>
			</div>
		</div>
	);
};
