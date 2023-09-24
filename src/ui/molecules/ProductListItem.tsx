import Link from "next/link";
import { ProductCoverImage } from "@/ui/atoms/ProductCoverImage";
import { ProductListItemDescription } from "@/ui/atoms/ProductListItemDescription";
import { ProductListItemFragment } from "@/gql/graphql";

type ProductListItemProps = {
	product: ProductListItemFragment;
};

export const ProductListItem = ({ product }: ProductListItemProps) => {
	return (
		<li>
			<Link href={`/product/${product.id}`}>
				<article>
					{product.images[0] && <ProductCoverImage src={product.images[0]?.url} alt="" />}
					{/* <ProductCoverImage src={product.coverImage.src} alt={product.coverImage.alt} /> */}
					<ProductListItemDescription product={product} />
				</article>
			</Link>
		</li>
	);
};
