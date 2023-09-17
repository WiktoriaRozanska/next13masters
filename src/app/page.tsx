import { type Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
	title: "Sklep internetowy",
};

export default function Home() {
	return <Link href="/products">Zobacz liste naszych produktów</Link>;
}
