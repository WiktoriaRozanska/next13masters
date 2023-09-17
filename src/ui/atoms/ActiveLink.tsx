"use client";

import Link from "next/link";
import clsx from "clsx";
import { usePathname } from "next/navigation";
import { type ReactNode } from "react";

export const ActiveLink = ({ href, children }: { href: string; children: ReactNode }) => {
	const pathname = usePathname();
	const isActive = pathname === href;
	return (
		// <Link href={href} className={clsx("text-blue-400 hover:text-blue-600", isActive && `underline`)}>
		<Link href={href} className={clsx("text-blue-400 hover:text-blue-600", { underline: isActive })}>
			{children}
		</Link>
	);
};
