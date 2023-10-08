"use server";

import { executeGraphql } from "@/api/graphqlApi";
import { CartRemoveProductDocument, CartSetProductQuantityDocument } from "@/gql/graphql";
import { revalidateTag } from "next/cache";
import { cookies } from "next/headers";

export const changeItemQuantity = async (itemId: string, quantity: number) => {
	if (quantity > 0) {
		return executeGraphql({ query: CartSetProductQuantityDocument, variables: { itemId, quantity } });
	}

	if (quantity === 0) {
		await removeItem(itemId);
	}

	revalidateTag("cart");
};

export const removeItem = (itemId: string) => {
	return executeGraphql({ query: CartRemoveProductDocument, variables: { itemId: itemId } });
};

export async function handlePaymentAction() {
	"use server";
	cookies().set("cartId", "");
	// stripe payment
}
