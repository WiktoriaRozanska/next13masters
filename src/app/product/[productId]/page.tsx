export default async function SingleProductPage({
	params,
	searchParams,
}: {
	params: { productId: string };
	searchParams: { [key: string]: string | string[] };
}) {
	const referral = searchParams.referral.toString();
	return (
		<div>
			<h1>Single Product Page</h1>
			{params.productId}
			<br />
			{referral}
		</div>
	);
}
