import { ActiveLink } from "@/ui/atoms/ActiveLink";
import { SearchInput } from "@/ui/atoms/SearchInput";

import { ShoppingCart } from "lucide-react";
import { getCartFromCookies } from "@/api/cart";
import { Search } from "../molecules/Search";
import { SignInButton, SignedIn, SignedOut, UserButton } from "@clerk/nextjs";

export default async function Navigation() {
	const cart = await getCartFromCookies();
	const quantity = cart?.orderItems.length || 0;

	return (
		<nav className="m-0 bg-teal-50 p-3">
			<ul className="mt-2 flex justify-center space-x-4">
				<li>
					<ActiveLink href="/" exact={true}>
						Home
					</ActiveLink>
				</li>
				<ActiveLink href="/cart">
					<ShoppingCart size={24} />
					<span className="ml-2 text-sm font-medium">{quantity}</span>
					<span className="sr-only">items in cart, view bag</span>
				</ActiveLink>
				<li>
					<ActiveLink href="/products">All</ActiveLink>
				</li>
				{/* <li>
							<ActiveLink href="/collections/">Collections</ActiveLink>
						</li> */}
				<li>
					<ActiveLink href="/categories/t-shirts">T-Shirts</ActiveLink>
				</li>
				<li>
					<ActiveLink href="/categories/hoodies">Hoodies</ActiveLink>
				</li>
				<li>
					<ActiveLink href="/categories/accessories">Accessories</ActiveLink>
				</li>
			</ul>
			<Search />
			<div>
				<SignedIn>
					<UserButton />
				</SignedIn>
				<SignedOut>
					<SignInButton />
				</SignedOut>
			</div>
		</nav>
	);
}
