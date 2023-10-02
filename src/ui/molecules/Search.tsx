"use client";

import { useRouter } from "next/navigation";
import { SearchInput } from "@/ui/atoms/SearchInput";

export const Search = () => {
	const router = useRouter();
	const handleSearch = (value: string) => {
		router.push(`/search?query=${value}`);
	};

	return <SearchInput onSearch={handleSearch} />;
};
