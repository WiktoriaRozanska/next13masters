"use client";

import { removeItem } from "@/app/cart/action";
import { useRouter } from "next/navigation";
import { useTransition } from "react";

export const RemoveButton = ({ itemId }: { itemId: string }) => {
	const [isPending, startTransition] = useTransition();
	const router = useRouter();
	return (
		<button
			className="text-red-500 disabled:text-slate-400"
			disabled={isPending}
			onClick={async () => {
				startTransition(async () => {
					await removeItem(itemId);
					router.refresh();
				});
			}}
		>
			Remove
		</button>
	);
};
