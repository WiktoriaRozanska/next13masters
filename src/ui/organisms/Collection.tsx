import { ProductListItemFragment } from "@/gql/graphql";
import { ProductCounter } from "@/ui/atoms/ProductCounter";
import { ProductCoverImage } from "@/ui/atoms/ProductCoverImage";
import { formatMoney } from "@/utils";

type CollectionItemProps = {
	collection: CollectionFragment;
};

export const Product = ({ product }: ProductListItemProps) => {
	return (
		<div className="flex flex-col justify-between gap-16 lg:flex-row lg:items-center">
			<div className="flex flex-col gap-6 lg:w-2/4">
				{product.images[0] && <ProductCoverImage src={product.images[0].url} alt="" />}
			</div>

			{/* ABOUT */}
			<div className="flex flex-col gap-4 lg:w-2/4">
				<div>
					<h1>{product.name}</h1>
					<p>{product.description}</p>
				</div>
				<p className="text-sm font-medium text-teal-700">
					<span>Price:</span> {formatMoney(product.price)}
				</p>
				<div className="flex flex-row items-center gap-16">
					<ProductCounter />
					<button className="rounded-xl bg-teal-800 px-6 py-3 font-semibold text-white">Add to Cart</button>
				</div>
			</div>
		</div>
	);
};
