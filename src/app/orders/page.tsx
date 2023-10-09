import { executeGraphql } from "@/api/graphqlApi";
import { OrdersGetByEmailDocument } from "@/gql/graphql";
import { currentUser } from "@clerk/nextjs";

export default async function OrderPage() {
	const user = await currentUser();
	const email = user?.emailAddresses[0]?.emailAddress;

	if (!email) {
		return <div>Not logged in</div>;
	}

	const orders = await executeGraphql({ query: OrdersGetByEmailDocument, variables: { email } });
	return <div>{JSON.stringify(orders)}</div>;
}
