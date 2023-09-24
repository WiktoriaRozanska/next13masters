import { executeGraphql } from "@/api/graphqlApi";
import { CollectionListItemFragment, CollectionsGetListDocument } from "@/gql/graphql";
import { CollectionList } from "@/ui/organisms/CollectionList";

export default async function Collections() {
	const res = await executeGraphql(CollectionsGetListDocument, {});
	const collections = res.collections as CollectionListItemFragment[];
	return (
		<>
			<p>Our collections:</p>
			<CollectionList collections={collections} />
		</>
	);
}
