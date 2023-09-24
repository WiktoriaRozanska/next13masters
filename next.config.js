const withMDX = require("@next/mdx")();
/** @type {import('next').NextConfig} */
const nextConfig = {
	pageExtensions: ["ts", "tsx", "mdx"],
	experimental: {
		typedRoutes: true,
		mdxRs: true,
	},
	images: {
		domains: ["media.graphassets.com"],
	},
	// redirects: async () => {
	// 	return [
	// 		{
	// 			source: "/products",
	// 			destination: "/products/1",
	// 			permanent: false,
	// 		},
	// 	];
	// },
};

module.exports = nextConfig;
module.exports = withMDX(nextConfig);
