import { ProductListItem } from "@/ui/molecules/ProductListItem";
import { ProductListItemFragment } from "@/gql/graphql";

export const ProductList = ({ products }: { products: ProductListItemFragment[] }) => {
	return (
		<ul
			className="m:grid smd:grid-cols-3 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4"
			data-testid="products-list"
		>
			{products.map((product) => {
				return <ProductListItem key={product.id} product={product} />;
			})}
		</ul>
	);
};
