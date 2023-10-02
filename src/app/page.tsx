import { type Metadata } from "next";
import { executeGraphql } from "@/api/graphqlApi";
import { CollectionListItemFragment, CollectionsGetListDocument } from "@/gql/graphql";
import { CollectionList } from "@/ui/organisms/CollectionList";
import { ExampleProductsList } from "@/ui/organisms/ExampleProducts";

export const metadata: Metadata = {
	title: "Sklep internetowy",
};

export default async function Home() {
	const res = await executeGraphql({ query: CollectionsGetListDocument, variables: {} });
	const collections = res.collections as CollectionListItemFragment[];
	return (
		<section>
			<p>Check our collections:</p>
			<CollectionList collections={collections} />
			<br />
			<br />
			<p>Check our most popular items:</p>
			<ExampleProductsList />
		</section>
	);
}
