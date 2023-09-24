import {
	ProductGetByIdDocument,
	ProductListItemFragment,
	ProductsGetByCategorySlugDocument,
	ProductsGetListDocument,
} from "@/gql/graphql";
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

export const getProductsList = async (take = 20, offset = 0) => {
	// const res = await fetch(`https://naszsklep-api.vercel.app/api/products?take=${take}&offset=${offset}`);
	// // const products = (await res.json()) as ProductItemType[]; // dokonujemy typowania danych
	// const productsResponse = (await res.json()) as ProductResponseItem[];
	// const products = productsResponse.map(productResponseItemToProductItemType);
	// // const products = productsResponse.map((product) => productResponseItemToProductItemType(product));
	// return products;
	// ====================================================================================================
	const graphqlResponse = await executeGraphql(ProductsGetListDocument, {});

	return graphqlResponse.products;
};

export const getProductsByCategorySlug = async (categorySlug: string) => {
	const categories = await executeGraphql(ProductsGetByCategorySlugDocument, { slug: categorySlug });
	const products = categories.categories[0]?.products;

	if (!products) {
		return [];
	}

	return products;
};

export const getProductById = async (id: ProductListItemFragment["id"]) => {
	const res = await executeGraphql(ProductGetByIdDocument, { id: id });

	if (!res.product) {
		throw notFound();
	}

	return res.product;
};

export const getNumberOfProducts = async () => {
	const res = await fetch(`https://naszsklep-api.vercel.app/api/products`);
	const productsResponse = (await res.json()) as ProductResponseItem[];
	return productsResponse.length;
};
