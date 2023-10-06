"use server";

import { executeGraphql } from "@/api/graphqlApi";
import { ReviewCreateDocument } from "@/gql/graphql";
import { revalidateTag } from "next/cache";
// import { ReviewCreateDocument } from "@/gql/graphql";

export async function handleReviewAction(
	productId: string,
	headline: string,
	content: string,
	rating: number,
	name: string,
	email: string,
) {
	"use server";

	console.log("sending review...");
	const res = await executeGraphql({
		query: ReviewCreateDocument,
		variables: { productId, headline, content, rating, name, email },
		next: { tags: ["review"] },
	});
	console.log(res);
	console.log("review sent");
	console.log("revalidate review");
}
