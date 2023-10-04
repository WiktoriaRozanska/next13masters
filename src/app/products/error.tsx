"use client";

export default function ErrorPage({
	error,
	reset,
}: {
	error: Error & { digest: string };
	reset: () => void;
}) {
	return (
		<div className="flex h-screen w-screen items-center justify-center">
			<div className="h-12 w-12 animate-bounce bg-red-300">ERROR {error.digest}</div>
		</div>
	);
}
