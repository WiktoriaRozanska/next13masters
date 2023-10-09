import Navigation from "@/ui/organisms/Navigation";
import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import React from "react";
import { ClerkProvider } from "@clerk/nextjs";

const inter = Inter({ subsets: ["latin", "latin-ext"] });

export const metadata: Metadata = {
	title: "Products",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<ClerkProvider>
			<html lang="pl">
				<body className={inter.className}>
					<Navigation />
					<section className="mx-auto max-w-md p-12 sm:max-w-2xl sm:py-16 md:max-w-4xl lg:max-w-7xl">
						{children}
					</section>
					<footer>
						<p className="text-center text-sm text-gray-500">© 2023</p>
					</footer>
				</body>
			</html>
		</ClerkProvider>
	);
}
