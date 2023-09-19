// export const generateStaticParams = async ({ params }: { params: { pageNumber: string } }) => {};
export default function CategoryProductPage({
	params,
}: {
	params: { category: string; pageNumber: string };
}) {
	return (
		<>
			<h1>Jestes na stronie {params.pageNumber}</h1>
		</>
	);
}
