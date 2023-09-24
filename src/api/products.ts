import {
	ProductGetByIdDocument,
	ProductListItemFragment,
	ProductsGetAmountOfDocument,
	ProductsGetByCategorySlugDocument,
	ProductsGetByCollectionSlugDocument,
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

export const getProductsList = async (take = 8, skip = 0) => {
	// const res = await fetch(`https://naszsklep-api.vercel.app/api/products?take=${take}&offset=${offset}`);
	// // const products = (await res.json()) as ProductItemType[]; // dokonujemy typowania danych
	// const productsResponse = (await res.json()) as ProductResponseItem[];
	// const products = productsResponse.map(productResponseItemToProductItemType);
	// // const products = productsResponse.map((product) => productResponseItemToProductItemType(product));
	// return products;
	// ====================================================================================================
	const graphqlResponse = await executeGraphql(ProductsGetListDocument, { take: take, skip: skip });

	return graphqlResponse.products;
};

export const getProductsByCategorySlug = async (categorySlug: string, take = 8, skip = 0) => {
	const categories = await executeGraphql(ProductsGetByCategorySlugDocument, {
		slug: categorySlug,
		take: take,
		skip: skip,
	});
	const products = categories.categories[0]?.products;

	if (!products) {
		return [];
	}

	return products;
};

export const getProductsByCollectionSlug = async (collectionSlug: string) => {
	const collection = await executeGraphql(ProductsGetByCollectionSlugDocument, {
		slug: collectionSlug,
	});
	const products = collection.collections[0]?.products;

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
	const res = await executeGraphql(ProductsGetAmountOfDocument, {});
	if (!res.productsConnection) {
		throw notFound();
	}

	return res.productsConnection.pageInfo.pageSize || 0;
};
