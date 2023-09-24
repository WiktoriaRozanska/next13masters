import Link from "next/link";
import { ProductCoverImage } from "@/ui/atoms/ProductCoverImage";
import { CollectionListItemFragment } from "@/gql/graphql";

type CollectionListItemProps = {
	collection: CollectionListItemFragment;
};

export const CollectionListItem = ({ collection }: CollectionListItemProps) => {
	return (
		<li>
			<Link href={`/collections/${collection.slug}`}>
				<article>
					{collection.image && <ProductCoverImage src={collection.image.url} alt="" />}
					<p>{collection.name}</p>
				</article>
			</Link>
		</li>
	);
};
