"use client";

import Link from "next/link";
import clsx from "clsx";
import { usePathname } from "next/navigation";
import { type ReactNode } from "react";
import { type Route } from "next";

type ActiveLinkProps<T extends Route> = {
	href: T;
	children: ReactNode;
	className?: string;
	activeClassName?: string;
	exact?: boolean;
};

export const ActiveLink = <T extends Route>({
	href,
	children,
	className = "text-blue-400 hover:text-blue-600",
	activeClassName = "underline",
	exact = false,
}: ActiveLinkProps<T>) => {
	const pathname = usePathname();
	console.log(pathname);
	const isActive = exact ? pathname === href : pathname.startsWith(href);
	return (
		<Link href={{ pathname: href }} className={clsx(className, isActive && activeClassName)}>
			{children}
		</Link>
	);
};
