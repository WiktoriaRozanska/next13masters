import Link from "next/link";
import { type ProductItemType } from "@/ui/types";
import { ProductCoverImage } from "@/ui/atoms/ProductCoverImage";
import { ProductListItemDescription } from "@/ui/atoms/ProductListItemDescription";

type ProductListItemProps = {
	product: ProductItemType;
};

export const ProductListItem = ({ product }: ProductListItemProps) => {
	return (
		<li>
			<Link href={`/product/${product.id}`}>
				<article>
					<ProductCoverImage {...product.coverImage} />
					{/* <ProductCoverImage src={product.coverImage.src} alt={product.coverImage.alt} /> */}
					<ProductListItemDescription product={product} />
				</article>
			</Link>
		</li>
	);
};
