"use server";

import { executeGraphql } from "@/api/graphqlApi";
import { CartRemoveProductDocument, CartSetProductQuantityDocument } from "@/gql/graphql";
import { cookies } from "next/headers";

export const changeItemQuantity = (itemId: string, quantity: number) => {
	return executeGraphql({ query: CartSetProductQuantityDocument, variables: { itemId, quantity } });
};

export const removeItem = (itemId: string) => {
	return executeGraphql({ query: CartRemoveProductDocument, variables: { itemId: itemId } });
};

export async function handlePaymentAction() {
	"use server";
	cookies().set("cartId", "");
	// stripe payment
}
