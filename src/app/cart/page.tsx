import { getCartFromCookies } from "@/api/cart";
import { IncrementProductQuantity } from "@/ui/atoms/IncrementProductQuantity";
import { formatMoney } from "@/utils";
import { redirect } from "next/navigation";

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
									</tr>
								),
						)}
					</tbody>
				</table>
			</div>
		</>
	);
}
