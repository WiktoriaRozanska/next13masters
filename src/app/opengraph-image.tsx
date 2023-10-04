import { ImageResponse } from "next/server";

export const runtime = "edge";
export const contentType = "image/png";
export const size = {
	width: 1200,
	height: 630,
};
export const alt = "Open Graph Image";

export default function OpenGraphImages({}) {
	// return new ImageResponse(<div tx="class-a z tailwinda">WIKTORIA TU BYLA</div>);
	return new ImageResponse(
		(
			<div
				tw="w-full text-white h-full flex flex-col items-center justify-center text-8xl"
				style={{
					background: `
				    linear-gradient(
				      90deg,
				      rgb(6,172,214) 0%,
				      rgb(0,0,0) 20%,
				      rgb(0,0,0) 80%,
				      rgb(6,71,255) 100%
				    )`,
				}}
			>
				<p tw="font-sans uppercase m-0 p-0 text-[101px] leading-4">next13</p>
				<p tw="font-serif m-0 p-0 font-black">masters</p>
				<p tw="m-0 mt-2">Sklep</p>
			</div>
		),
	);
}
