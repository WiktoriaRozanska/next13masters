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
		const params = new URLSearchParams(window.location.search);
		const queryParam = params.get("query");
		if (value !== "" && queryParam == value) {
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
					className="h-10 w-full rounded-full bg-white px-5 pr-10 text-sm focus:outline-none"
					value={value}
					onChange={searchHandler}
					onKeyDown={handleKeyDown}
					role="searchbox"
				/>
				<button type="submit" className="absolute right-0 top-0 mr-4 mt-3">
					<svg className="h-4 w-4 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
						<path
							fillRule="evenodd"
							d="M13.53 14.47a8 8 0 111.414-1.414l3.96 3.96a1 1 0 01-1.414 1.414l-3.96-3.96zM8 14a6 6 0 100-12 6 a 6 0 000 12z"
							clipRule="evenodd"
						/>
					</svg>
				</button>
			</div>
		</form>
	);
};
