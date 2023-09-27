"use client";

import { ActiveLink } from "@/ui/atoms/ActiveLink";
import { Search } from "@/ui/atoms/Search";
import { usePathname, useRouter } from "next/navigation";

export default function Navigation() {
	const router = useRouter();
	const pathname = usePathname();

	const handleSearch = (value: string) => {
		router.push(`/search?query=${value}`);
	};
	return (
		<nav>
			<ul className="mt-2 flex justify-center space-x-4">
				<li>
					<ActiveLink href="/" exact={true}>
						Home
					</ActiveLink>
				</li>
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
			<Search onSearch={handleSearch} />
		</nav>
	);
}
