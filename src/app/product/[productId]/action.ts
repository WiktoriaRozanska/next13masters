"use server";

import { executeGraphql } from "@/api/graphqlApi";
import { ReviewCreateDocument } from "@/gql/graphql";
// import { ReviewCreateDocument } from "@/gql/graphql";

export async function handleReviewAction(formData: FormData) {
	"use server";
	const productId = formData.get("productId") as string;
	const headline = formData.get("headline") as string;
	const content = formData.get("content") as string;
	const rating = Number(formData.get("rating"));
	const name = formData.get("name") as string;
	const email = formData.get("email") as string;

	console.log("sending review...");
	const res = await executeGraphql({
		query: ReviewCreateDocument,
		variables: { productId, headline, content, rating, name, email },
	});
	console.log(res);
	console.log("review sent");
}
