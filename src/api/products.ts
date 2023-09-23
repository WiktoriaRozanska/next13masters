import { type ProductItemType } from "@/ui/types";

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
	const res = await fetch(
		"https://api-eu-central-1-shared-euc1-02.hygraph.com/v2/clihaom3j03ep01te1dg24yp5/master",
		{
			method: "POST",
			body: JSON.stringify({
				query: /* GraphQL */ `
					query GetProductsList {
						products(first: 10) {
							id
							name
							description
							images {
								url
							}
							price
						}
					}
				`,
			}),
			headers: { "Content-Type": "application/json" },
		},
	);

	type GraphQLResponse<T> =
		| { data?: undefined; errors: { message: string }[] }
		| { data: T; errors?: undefined };

	type ProductsGraphqlResponse = {
		products: {
			id: string;
			name: string;
			description: string;
			images: {
				url: string;
			}[];
			price: number;
		}[];
	};

	const graphqlResponse = (await res.json()) as GraphQLResponse<ProductsGraphqlResponse>;

	if (graphqlResponse.errors) {
		throw TypeError(graphqlResponse.errors[0].message);
	}

	return graphqlResponse.data.products.map((product) => {
		return {
			id: product.id,
			category: "",
			name: product.name,
			price: product.price,
			description: product.description,
			coverImage: {
				src: product.images[0].url,
				alt: product.name,
			},
		};
	});
};

export const getNumberOfProducts = async () => {
	const res = await fetch(`https://naszsklep-api.vercel.app/api/products`);
	const productsResponse = (await res.json()) as ProductResponseItem[];
	return productsResponse.length;
};

export const getProductById = async (id: ProductResponseItem["id"]) => {
	const res = await fetch(`https://naszsklep-api.vercel.app/api/products/${id}`);
	const productResponse = (await res.json()) as ProductResponseItem;
	return productResponseItemToProductItemType(productResponse);
};

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
