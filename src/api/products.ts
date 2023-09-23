import {
	ProductGetByIdDocument,
	ProductsGetByCategorySlugDocument,
	ProductsGetListDocument,
} from "@/gql/graphql";
import { type ProductItemType } from "@/ui/types";
import { executeGraphql } from "@/api/graphqlApi";
import { notFound } from "next/navigation";

type ProductResponseItem = {
	id: string;
	title: string;
	price: number;
	description: string;
	category: string;
	rating: Rating;
	image: string;
	longDescription: string;
};

type Rating = {
	rate: number;
	count: number;
};

export const getProductsList = async (take = 20, offset = 0): Promise<ProductItemType[]> => {
	// const res = await fetch(`https://naszsklep-api.vercel.app/api/products?take=${take}&offset=${offset}`);
	// // const products = (await res.json()) as ProductItemType[]; // dokonujemy typowania danych
	// const productsResponse = (await res.json()) as ProductResponseItem[];
	// const products = productsResponse.map(productResponseItemToProductItemType);
	// // const products = productsResponse.map((product) => productResponseItemToProductItemType(product));
	// return products;
	// ====================================================================================================
	const graphqlResponse = await executeGraphql(ProductsGetListDocument, {});

	return graphqlResponse.products.map((product) => {
		return {
			id: product.id,
			name: product.name,
			price: product.price,
			description: product.description,
			category: product.categories[0]?.name || "",
			coverImage: {
				src: product.images[0]?.url || "",
				alt: product.name,
			},
		};
	});
};

export const getProductsByCategorySlug = async (categorySlug: string): Promise<ProductItemType[]> => {
	const categories = await executeGraphql(ProductsGetByCategorySlugDocument, { slug: categorySlug });
	const products = categories.categories[0]?.products;

	if (!products) {
		return [];
	}

	return products?.map((product) => {
		return {
			id: product.id,
			name: product.name,
			price: product.price,
			description: product.description,
			category: product.categories[0]?.name || "",
			coverImage: {
				src: product.images[0]?.url || "",
				alt: product.name,
			},
		};
	});
};

export const getProductById = async (id: string): Promise<ProductItemType> => {
	const res = await executeGraphql(ProductGetByIdDocument, { id: id });

	if (!res.product) {
		throw notFound();
	}

	return {
		id: res.product.id,
		name: res.product.name,
		price: res.product.price,
		description: res.product.description,
		category: res.product.categories[0]?.name || "",
		coverImage: {
			src: res.product.images[0]?.url || "",
			alt: res.product.name,
		},
	};
};

export const getNumberOfProducts = async () => {
	const res = await fetch(`https://naszsklep-api.vercel.app/api/products`);
	const productsResponse = (await res.json()) as ProductResponseItem[];
	return productsResponse.length;
};

// export const getProductById = async (id: ProductResponseItem["id"]) => {
// 	const res = await fetch(`https://naszsklep-api.vercel.app/api/products/${id}`);
// 	const productResponse = (await res.json()) as ProductResponseItem;
// 	return productResponseItemToProductItemType(productResponse);
// };

const productResponseItemToProductItemType = (product: ProductResponseItem): ProductItemType => {
	return {
		id: product.id,
		name: product.title,
		category: product.category,
		price: product.price,
		coverImage: {
			src: product.image,
			alt: product.title,
		},
		description: product.description,
	};
};
