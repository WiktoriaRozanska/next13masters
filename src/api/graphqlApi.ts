import { TypedDocumentString } from "@/gql/graphql";

export const executeGraphql = async <TResult, TVariables>(
	query: TypedDocumentString<TResult, TVariables>,
	variables: TVariables,
): Promise<TResult> => {
	if (!process.env.GRAPHQL_SCHEMA) {
		throw TypeError("GRAPHQL_SCHEMA is not defined");
	}

	const res = await fetch(process.env.GRAPHQL_SCHEMA as string, {
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
