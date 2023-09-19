import { type Route } from "next";
import { ActiveLink } from "@/ui/atoms/ActiveLink";

export const Pagination = ({ pages }: { pages: number }) => {
	return (
		<div className="flex justify-center" aria-label="Pagination">
			{[...Array(pages).keys()].map((page) => {
				const pageNumber = page + 1;
				return (
					<ActiveLink
						key={pageNumber}
						href={`/products/${pageNumber}` as Route}
						className="bover:border-teal-600 border-b-2 border-transparent px-3 text-teal-400 hover:text-teal-600"
					>
						{pageNumber}
					</ActiveLink>
				);
			})}
		</div>
	);
};
