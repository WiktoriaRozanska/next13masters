"use client";
import { useState } from "react";

export const ProductCounter = () => {
	const [counter, setCounter] = useState(0);
	return (
		<div className="flex flex-row items-center">
			<button
				className="rounded-lg bg-gray-200 px-5 py-2 text-xl text-teal-700"
				onClick={() => setCounter((counter) => counter - 1)}
			>
				-
			</button>
			<input readOnly value={counter} className="rounded-lg px-5 py-2 text-slate-900" />
			<button
				className="rounded-lg bg-gray-200 px-5 py-2 text-xl text-teal-700"
				onClick={() => setCounter((counter) => counter + 1)}
			>
				+
			</button>
		</div>
	);
};
