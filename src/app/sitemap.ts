import { MetadataRoute } from "next";

export default function (): MetadataRoute.Sitemap {
	return [
		{
			url: "/",
			lastModified: new Date().toISOString(),
		},
	];
}
