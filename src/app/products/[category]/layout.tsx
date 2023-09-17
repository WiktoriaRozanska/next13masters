import { type ReactNode } from "react";

export const generateStaticParams = async () => {
	return [{ category: "kategoria-1" }, { category: "kategoria-2" }];
};

export default function CategoryProductLayout({ children }: { children: ReactNode }) {
	return children;
}
