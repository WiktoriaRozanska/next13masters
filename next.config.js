const withMDX = require("@next/mdx")();
/** @type {import('next').NextConfig} */
const nextConfig = {
	pageExtensions: ["ts", "tsx", "mdx"],
	experimental: {
		typedRoutes: true,
		mdxRs: true,
	},
};

module.exports = nextConfig;
module.exports = withMDX(nextConfig);
