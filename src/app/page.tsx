import Link from "next/link";

export default function Home() {
	return (
		<section className="mx-auto max-w-md p-12 sm:max-w-2xl sm:py-16 md:max-w-4xl lg:max-w-7xl">
			<Link href="/products">Zobacz liste naszych produktów</Link>
		</section>
	);
}
