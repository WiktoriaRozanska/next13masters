"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { ChangeEvent } from "react";

const oprtions = ["variant"];

export const VariantSelector = ({
	variants,
}: {
	variants: { __typename: string; id: string; name: string }[];
}) => {
	const router = useRouter();
	const pathname = usePathname();
	const searchParams = useSearchParams();

	const onSelect = (event: ChangeEvent<HTMLSelectElement>) => {
		const current = new URLSearchParams(Array.from(searchParams.entries()));

		const value = event.target.value.trim();

		if (!value) {
			current.delete("selected");
		} else {
			current.set("selected", event.target.value);
		}

		const search = current.toString();
		const query = search ? `?${search}` : "";
		router.push(`${pathname}${query}`);
	};

	return (
		<>
			{variants.length >= 1 && (
				<>
					<label htmlFor="variant">Select your variant</label>
					<select name="variant" id="variant" onChange={onSelect}>
						{variants &&
							variants.map((variant) => {
								return <option value={variant.name}>{variant.name}</option>;
							})}
					</select>
				</>
			)}
		</>
	);
};
