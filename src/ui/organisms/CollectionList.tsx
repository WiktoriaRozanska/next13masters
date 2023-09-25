import { CollectionListItemFragment } from "@/gql/graphql";
import { CollectionListItem } from "@/ui/molecules/CollectionListItem";

export const CollectionList = ({ collections }: { collections: CollectionListItemFragment[] }) => {
	return (
		<ul className="m:grid smd:grid-cols-2 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
			{collections.map((collection) => {
				return <CollectionListItem key={collection.id} collection={collection} />;
			})}
		</ul>
	);
};
