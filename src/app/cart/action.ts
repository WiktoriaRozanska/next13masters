"use server";

import { executeGraphql } from "@/api/graphqlApi";
import { CartSetProductQuantityDocument } from "@/gql/graphql";

export const changeItemQuantity = (itemId: string, quantity: number) => {
	return executeGraphql({ query: CartSetProductQuantityDocument, variables: { itemId, quantity } });
};
