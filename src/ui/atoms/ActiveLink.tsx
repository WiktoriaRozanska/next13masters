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
	className = "text-teal-400 hover:text-teal-600 border-b-2 bover:border-teal-600 border-transparent",
	activeClassName = "border-b-teal-500",
	exact = false,
}: ActiveLinkProps<T>) => {
	const pathname = usePathname();
	const isActive = exact ? pathname === href : pathname.startsWith(href);
	return (
		<Link
			href={{ pathname: href }}
			className={clsx(className, isActive && activeClassName)}
			aria-current={isActive ? true : undefined}
			role="link"
		>
			{children}
		</Link>
	);
};
