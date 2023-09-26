import { TypedDocumentString } from "@/gql/graphql";

export const executeGraphql = async <TResult, TVariables>(
	query: TypedDocumentString<TResult, TVariables>,
	variables: TVariables,
	// ...variables: TVariables extends Record<string, never> ? [] : [TVariables]
): Promise<TResult> => {
	const schemaUrl = process.env.GRAPHQL_SCHEMA || process.env.NEXT_PUBLIC_GRAPHQL_SCHEMA;
	if (!schemaUrl) {
		throw TypeError("GRAPHQL_SCHEMA is not defined");
	}

	const res = await fetch(schemaUrl as string, {
		method: "POST",
		body: JSON.stringify({
			query,
			variables,
		}),
		headers: { "Content-Type": "application/json" },
	});

	type GraphQLResponse<T> =
		| { data?: undefined; errors: { message: string }[] }
		| { data: T; errors?: undefined };

	const graphqlResponse = (await res.json()) as GraphQLResponse<TResult>;

	if (graphqlResponse.errors) {
		console.log(graphqlResponse.errors);

		throw TypeError(`GraphQL Error`, { cause: graphqlResponse.errors });
	}

	return graphqlResponse.data;
};
