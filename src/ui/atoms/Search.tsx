import React, { ChangeEvent, useState, useEffect } from "react";
import debounce from "lodash.debounce";

export type SearchProps = {
	onSearch: (value: string) => void;
};

export const Search = (props: SearchProps) => {
	const { onSearch } = props;
	const [value, setValue] = useState("");

	const searchHandler = (event: ChangeEvent<HTMLInputElement>) => {
		const { target } = event;
		setValue(target.value);
	};

	useEffect(() => {
		if (value !== "") {
			const debouncedSearch = debounce(onSearch, 500);
			debouncedSearch(value);
			return () => {
				debouncedSearch.cancel();
			};
		}
	}, [value, onSearch]);

	const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
		if (event.key === "Enter") {
			event.preventDefault(); // Prevent default form submission
			onSearch(value);
		}
	};

	const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault(); // Prevent default form submission
		onSearch(value);
	};

	return (
		<form onSubmit={handleSubmit}>
			<div className="relative w-full text-gray-600">
				<input
					type="search"
					name="search"
					placeholder="Enter search..."
					className="h-10 w-full rounded-full border-black bg-white px-5 pr-10 text-sm focus:outline-none"
					value={value}
					onChange={searchHandler}
					onKeyDown={handleKeyDown}
					role="searchbox"
				/>
			</div>
		</form>
	);
};
