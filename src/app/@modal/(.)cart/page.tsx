import { getCartFromCookies } from "@/api/cart";
import { Overlay } from "./Overlay";

export default async function ModalCart() {
	const cart = await getCartFromCookies();
	return (
		<>
			<Overlay />
			<div className="absolute right-0 top-0 z-40 h-screen w-full max-w-sm bg-white">
				<ul>{cart && cart.orderItems.map((item) => <li key={item.id}>{item.product?.name}</li>)}</ul>
			</div>
		</>
	);
}
