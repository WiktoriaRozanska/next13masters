import {
	CartFragment,
	CartGetByIdDocument,
	CartCreateDocument,
	ProductGetByIdDocument,
	CartAddProductDocument,
} from "@/gql/graphql";
import { cookies } from "next/headers";
import { executeGraphql } from "@/api/graphqlApi";

export async function getOrCreateCart(): Promise<CartFragment> {
	const existingCart = await getCartFromCookies();
	if (existingCart) {
		return existingCart;
	}

	const cart = await createCart();
	if (!cart.createOrder) {
		throw new Error("Cannot create cart");
	}
	cookies().set("cartId", cart.createOrder.id);
	return cart.createOrder;
}

export async function getCartFromCookies() {
	const cartId = cookies().get("cartId")?.value;
	if (cartId) {
		const cart = await executeGraphql({
			query: CartGetByIdDocument,
			variables: { id: cartId },
			next: { tags: ["cart"] },
			cache: "no-store",
		});
		if (cart.orders[0]) {
			return cart.orders[0];
		}
	}
}

export function createCart() {
	return executeGraphql({ query: CartCreateDocument, variables: {}, cache: "no-store" });
}

export async function addToCart(orderId: string, productId: string) {
	const { product } = await executeGraphql({ query: ProductGetByIdDocument, variables: { id: productId } });
	if (!product) {
		throw new Error("Product not found");
	}
	await executeGraphql({
		query: CartAddProductDocument,
		variables: { orderId, productId, total: product.price },
		cache: "no-store",
	});
}
