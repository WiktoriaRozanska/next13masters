import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ActiveLink } from "@/ui/atoms/ActiveLink";

const inter = Inter({ subsets: ["latin", "latin-ext"] });

export const metadata: Metadata = {
	title: "Products",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang="pl">
			<body className={inter.className}>
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
						<li>
							<ActiveLink href="/collections">Collections</ActiveLink>
						</li>
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
				</nav>
				<section className="mx-auto max-w-md p-12 sm:max-w-2xl sm:py-16 md:max-w-4xl lg:max-w-7xl">
					{children}
				</section>
				<footer>
					<p className="text-center text-sm text-gray-500">© 2023</p>
				</footer>
			</body>
		</html>
	);
}
