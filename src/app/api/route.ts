import { NextRequest, NextResponse } from "next/server";

// export const runtime = "edge";
// export const dynamic = true;
// export const dynamicParams = true;
// export const revalidate = 60;

export async function GET(_request: NextRequest): Promise<Response> {
	// return new Response(JSON.stringify("Hello, world!"), {
	// 	headers: { "content-type": "application/json" },
	// 	status: 200,
	// });
	return NextResponse.json("Hello, world!");
}
