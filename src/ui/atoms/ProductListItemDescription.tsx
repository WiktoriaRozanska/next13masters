import { ProductListItemFragment } from "@/gql/graphql";
import { formatMoney } from "@/utils";

type ProductListItemProps = {
	product: ProductListItemFragment;
};

export const ProductListItemDescription = ({ product }: ProductListItemProps) => {
	return (
		<div className="mt-2 flex justify-between">
			<div>
				<h3 className="text-sm font-semibold text-gray-700">{product.name}</h3>
				{product.categories[0] && (
					<p className="text-sm text-gray-500">
						<span className="sr-only">Kategoria:</span> {product.categories[0].name}
					</p>
				)}
			</div>
			<p className="text-sm font-medium text-gray-900">
				<span>Cena:</span> {formatMoney(product.price)}
			</p>
		</div>
	);
};
