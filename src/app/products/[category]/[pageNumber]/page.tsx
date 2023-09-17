export const generateStaticParams = async ({ params }: { params: { category: string } }) => {
	if (params.category === "kategoria-1") {
		return [{ pageNumber: "1" }, { pageNumber: "2" }, { pageNumber: "3" }];
	} else {
		return [{ pageNumber: "1" }, { pageNumber: "2" }];
	}
};

export default function CategoryProductPage({
	params,
}: {
	params: { category: string; pageNumber: string };
}) {
	return (
		<>
			<h1>
				Produkty z kategorii {params.category} na stronie {params.pageNumber}
			</h1>
		</>
	);
}
