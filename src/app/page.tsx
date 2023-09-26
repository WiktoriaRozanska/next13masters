import { type Metadata } from "next";
import { executeGraphql } from "@/api/graphqlApi";
import { CollectionListItemFragment, CollectionsGetListDocument } from "@/gql/graphql";
import { CollectionList } from "@/ui/organisms/CollectionList";

export const metadata: Metadata = {
	title: "Sklep internetowy",
};

export default async function Home() {
	const res = await executeGraphql(CollectionsGetListDocument, {});
	const collections = res.collections as CollectionListItemFragment[];
	return (
		<section>
			<p>Check out collections:</p>
			<CollectionList collections={collections} />
		</section>
	);
}
