import { executeGraphql } from "@/api/graphqlApi";
import {
	CategoryGetByIdDocument,
	CategoryItemFragment,
	CollectionGetByIdDocument,
	CollectionListItemFragment,
} from "@/gql/graphql";
import { revalidatePath } from "next/cache";
import { NextRequest, NextResponse } from "next/server";

type WebhookBody = {
	operation: string;
	categories: [{ id: string }];
	collections: [{ id: string }];
	data: {
		id: string;
	};
};

export async function POST(request: NextRequest): Promise<Response> {
	const json: WebhookBody = await request.json();
	const productId = json.data.id;
	console.log(productId);
	console.log("====================================");
	if (productId) {
		console.log(`Revalidate /product/${productId}`);
		revalidatePath(`/product/${productId}`);

		console.log(`Revalidate /products`);
		revalidatePath(`/products`);

		const collections = json.collections;
		collections.forEach(async (collection) => {
			const res = await executeGraphql({
				query: CollectionGetByIdDocument,
				variables: { collectionId: collection.id },
			});
			const current_collection = res.collections as CollectionListItemFragment[];
			console.log(`Revalidate /collections/${current_collection[0]?.slug}`);
			revalidatePath(`/collections/${current_collection[0]?.slug}`);
		});

		json.categories.forEach(async (category) => {
			const res = await executeGraphql({
				query: CategoryGetByIdDocument,
				variables: { categoryId: category.id },
			});
			const current_category = res.categories as CategoryItemFragment[];
			console.log(`Revalidate /categories/${current_category[0]?.slug}`);
			revalidatePath(`/categories/${current_category[0]?.slug}`);
		});
		return NextResponse.json({ message: "OK" }, { status: 200 });
	}

	return NextResponse.json({ message: "Inavalid body" }, { status: 400 });
}
