import { ProductList } from "@/ui/organisms/ProductList";
import { type ProductItemType } from "@/ui/types";

const products: ProductItemType[] = [
	{
		id: "1",
		name: "Koszulka",
		category: "Odzież",
		price: 29.99,
		coverImage: {
			src: "https://tailwindui.com/img/ecommerce-images/category-page-02-image-card-02.jpg",
			alt: "Koszulka",
		},
	},
	{
		id: "2",
		name: "Buty",
		category: "Obuwie",
		price: 59.99,
		coverImage: {
			src: "https://tailwindui.com/img/ecommerce-images/category-page-01-image-card-01.jpg",
			alt: "Buty",
		},
	},
	{
		id: "3",
		name: "Kurtka",
		category: "Odzież",
		price: 129.99,
		coverImage: {
			src: "https://tailwindui.com/img/ecommerce-images/category-page-03-image-card-03.jpg",
			alt: "Kurtka",
		},
	},
	{
		id: "4",
		name: "Zegarek",
		category: "Akcesoria",
		price: 299.99,
		coverImage: {
			src: "https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-04.jpg",
			alt: "Zegarek",
		},
	},
];

export default function Page() {
	return (
		<section className="mx-auto max-w-md p-12 sm:max-w-2xl sm:py-16 md:max-w-4xl lg:max-w-7xl">
			<ProductList products={products} />
		</section>
	);
}
