import { getCartFromCookies } from "@/api/cart";
import { IncrementProductQuantity } from "@/ui/atoms/IncrementProductQuantity";
import { RemoveButton } from "@/ui/atoms/RemoveButton";
import { formatMoney } from "@/utils";
import { redirect } from "next/navigation";
import { handlePaymentAction } from "@/app/cart/action";

export default async function CartPage() {
	const cart = await getCartFromCookies();
	if (!cart || !cart.orderItems) {
		redirect("/");
	}

	return (
		<>
			<div className="mt-10">
				<table>
					<thead>
						<tr>
							<th>Product</th>
							<th>Quantity</th>
							<th>Price</th>
							<th></th>
						</tr>
					</thead>
					<tbody>
						{cart.orderItems.map(
							(item) =>
								item.product && (
									<tr key={item.id}>
										<td>{item.product.name}</td>
										<td className="text-center">
											<IncrementProductQuantity quantity={item.quantity} itemId={item.id} />
										</td>
										<td>{formatMoney(item.product.price / 100)}</td>
										<td>
											<RemoveButton itemId={item.id} />
										</td>
									</tr>
								),
						)}
					</tbody>
				</table>
				<form action={handlePaymentAction}>
					<button
						type="submit"
						className="mt-4 w-full max-w-xs rounded-md border bg-slate-950 py-2 text-white shadow-sm"
					>
						Pay
					</button>
				</form>
			</div>
		</>
	);
}
