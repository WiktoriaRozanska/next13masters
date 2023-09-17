"use client";

import Link from "next/link";
import clsx from "clsx";
import { usePathname } from "next/navigation";
import { type ReactNode } from "react";

type ActiveLinkProps<T> = {
	href: T | string;
	children: ReactNode;
	className: string;
	activeClassName: string;
};

export const ActiveLink = ({
	href,
	children,
	className,
	activeClassName,
}: {
	href: string;
	children: ReactNode;
	className: string;
	activeClassName: string;
}) => {
	const pathname = usePathname();
	const isActive = pathname === href;
	return (
		<Link href={{ pathname: href }} className={clsx(className, isActive && activeClassName)}>
			{children}
		</Link>
	);
};
