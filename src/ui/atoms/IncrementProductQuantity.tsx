"use client";

import { changeItemQuantity } from "@/app/cart/action";
import { experimental_useOptimistic as useOptymistic } from "react";

export const IncrementProductQuantity = ({ quantity, itemId }: { quantity: number; itemId: string }) => {
	const [optymisticQuantity, useOptymisticQuantityt] = useOptymistic(quantity);
	return (
		<form>
			{optymisticQuantity}
			<button
				className="ml-2 h-8 w-8 rounded-xl border bg-slate-50"
				formAction={async () => {
					useOptymisticQuantityt(optymisticQuantity + 1);
					await changeItemQuantity(itemId, optymisticQuantity + 1);
				}}
			>
				+
			</button>
		</form>
	);
};
