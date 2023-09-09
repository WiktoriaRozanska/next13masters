import { type ProductItemType } from "@/ui/types";
import { ProductCoverImage } from "@/ui/atoms/ProductCoverImage";
import { ProductListItemDescription } from "@/ui/atoms/ProductListItemDescription";

type ProductListItemProps = {
	product: ProductItemType;
};

export const ProductListItem = ({ product }: ProductListItemProps) => {
	return (
		<li>
			<article>
				<ProductCoverImage {...product.coverImage} />
				{/* <ProductCoverImage src={product.coverImage.src} alt={product.coverImage.alt} /> */}
				<ProductListItemDescription product={product} />
			</article>
		</li>
	);
};
