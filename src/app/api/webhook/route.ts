import { revalidatePath } from "next/cache";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest): Promise<Response> {
	const json: unknown = await request.json();

	if (typeof json === "object" && json && "productId" in json && typeof json.productId === "string") {
		console.log(`Revalidate ${json.productId}`);
		revalidatePath(`/product/${json.productId}`);
		revalidatePath(`/products`);
		return NextResponse.json({ message: "OK" }, { status: 200 });
	}

	return NextResponse.json({ message: "Inavalid body" }, { status: 400 });
}
