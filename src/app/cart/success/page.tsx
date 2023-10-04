import { redirect } from "next/navigation";

export default async function CartSuccessPage({ searchParams }: { searchParams: { sessionId?: string } }) {
	if (!searchParams.sessionId) {
		redirect("/");
	}

	//stripe here
	return (
		<div>
			<h1>Payment successful</h1>
			<p>Thank you for your purchase!</p>
		</div>
	);
}
