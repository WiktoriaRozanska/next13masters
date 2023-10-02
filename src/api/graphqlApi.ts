import { TypedDocumentString } from "@/gql/graphql";

export const executeGraphql = async <TResult, TVariables>({
	query,
	variables,
	next,
	cache,
	headers,
}: {
	query: TypedDocumentString<TResult, TVariables>;
	variables: TVariables;
	next?: NextFetchRequestConfig;
	cache?: RequestCache;
	headers?: HeadersInit;
}): Promise<TResult> => {
	const schemaUrl = process.env.GRAPHQL_SCHEMA || process.env.NEXT_PUBLIC_GRAPHQL_SCHEMA;
	const access_token = process.env.GRAPHQL_ACCESS_TOKEN || process.env.NEXT_PUBLIC_GRAPHQL_ACCESS_TOKEN; //TODO: remove this
	if (!schemaUrl) {
		throw TypeError("GRAPHQL_SCHEMA is not defined");
	}

	const res = await fetch(schemaUrl as string, {
		method: "POST",
		body: JSON.stringify({
			query,
			variables,
		}),
		headers: {
			...headers,
			"Content-Type": "application/json",
			Authorization: `Bearer ${access_token}`,
		},
		next,
		cache,
	});

	type GraphQLResponse<T> =
		| { data?: undefined; errors: { message: string }[] }
		| { data: T; errors?: undefined };

	const graphqlResponse = (await res.json()) as GraphQLResponse<TResult>;

	if (graphqlResponse.errors) {
		console.log("GraphQL Error");
		console.log(graphqlResponse.errors);

		throw TypeError(`GraphQL Error`, { cause: graphqlResponse.errors });
	}

	return graphqlResponse.data;
};
