"use client";

import { experimental_useFormStatus as useFormStatus } from "react-dom";

export const AddReviewButton = () => {
	const formStatus = useFormStatus();

	return (
		<button
			type="submit"
			disabled={formStatus.pending}
			className="mx-20 my-4 rounded-2xl bg-teal-800 px-6 py-3 font-semibold text-white hover:bg-teal-700 disabled:cursor-wait disabled:bg-slate-600"
		>
			Add review
		</button>
	);
};
