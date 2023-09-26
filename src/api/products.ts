import {
	ProductGetByIdDocument,
	ProductListItemFragment,
	ProductsGetAmountOfDocument,
	ProductsGetAmountOfInCategoryDocument,
	ProductsGetByCategorySlugDocument,
	ProductsGetByCollectionSlugDocument,
	ProductsGetByProvidedValueDocument,
	ProductsGetListDocument,
} from "@/gql/graphql";
import { executeGraphql } from "@/api/graphqlApi";
import { notFound } from "next/navigation";

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
	const category = categories.categories[0];

	if (!category) {
		return { name: "Wrong Category", products: [] };
	}

	return category;
};

export const getNumberOfProductsInCategory = async (categorySlug: string) => {
	const res = await executeGraphql(ProductsGetAmountOfInCategoryDocument, { slug: categorySlug });
	if (!res.productsConnection) {
		throw notFound();
	}

	return res.productsConnection.pageInfo.pageSize || 0;
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

export const getProductsByProvidedValue = async (searchvalue: string) => {
	const result = await executeGraphql(ProductsGetByProvidedValueDocument, {
		searchString: searchvalue,
	});
	const products = result.products;

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
