import {
	CartFragment,
	CartGetByIdDocument,
	CartCreateDocument,
	ProductGetByIdDocument,
	CartAddProductDocument,
	CartAddOrUpdateOrderDocument,
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

export async function addToCart(orderId: string, productId: string, cart: CartFragment) {
	const { product } = await executeGraphql({ query: ProductGetByIdDocument, variables: { id: productId } });
	if (!product) {
		throw new Error("Product not found");
	}

	//znalezc czy produkt jest juz w koszyku
	const orderItem = cart.orderItems.find((p) => p.product?.id === productId);
	//TODO: tutaj bedzie zmiana na upsert
	await executeGraphql({
		query: CartAddOrUpdateOrderDocument,
		variables: {
			orderId: orderId,
			orderTotal: (cart?.total ?? 0) + product.price,
			productId: productId,
			total: (orderItem?.total ?? 0) + 1,
			orderItemId: orderItem?.id || "",
			quantity: (orderItem?.quantity ?? 0) + 1,
		},

		next: {
			tags: ["cart"],
		},
		cache: "no-store",
	});
}
