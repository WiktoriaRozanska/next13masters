"use client";

import { changeItemQuantity } from "@/app/cart/action";
import { experimental_useOptimistic as useOptymistic } from "react";
import { useRouter } from "next/navigation";

export const IncrementAndDecremenProductQuantity = ({
	quantity,
	itemId,
}: {
	quantity: number;
	itemId: string;
}) => {
	const router = useRouter();
	const [optymisticQuantity, useOptymisticQuantityt] = useOptymistic(quantity);
	return (
		<form>
			<button
				data-testid="decrement"
				className="ml-2 h-8 w-8 rounded-xl border bg-slate-50"
				formAction={async () => {
					useOptymisticQuantityt(optymisticQuantity - 1);
					await changeItemQuantity(itemId, optymisticQuantity - 1);
					if (optymisticQuantity - 1 === 0) {
						router.refresh();
					}
				}}
			>
				-
			</button>
			{optymisticQuantity}
			<button
				data-testid="increment"
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
