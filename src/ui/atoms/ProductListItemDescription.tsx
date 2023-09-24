import { formatMoney } from "@/utils";
import { type FragmentType, getFragmentData, graphql } from "@/gql";

const ProductListItemDescription_Product = graphql(/* GraphQL */ `
	fragment ProductListItemDescription_Product on Product {
		name
		categories(first: 1) {
			name
		}
		price
	}
`);

type ProductListItemDescriptionProps = {
	product: FragmentType<typeof ProductListItemDescription_Product>;
};

export const ProductListItemDescription = (props: ProductListItemDescriptionProps) => {
	const { name, categories, price } = getFragmentData(ProductListItemDescription_Product, props.product);
	return (
		<div className="mt-2 flex justify-between">
			<div>
				<h3 className="text-sm font-semibold text-gray-700">{name}</h3>
				{categories[0] && (
					<p className="text-sm text-gray-500">
						<span className="sr-only">Kategoria:</span> {categories[0].name}
					</p>
				)}
			</div>
			<p className="text-sm font-medium text-gray-900">
				<span>Cena:</span> {formatMoney(price)}
			</p>
		</div>
	);
};
