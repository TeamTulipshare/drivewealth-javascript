const webpack = require("webpack");
const pkg = require("./package.json");
const banner = `
	${pkg.name} - ${pkg.description}
	Author: ${pkg.author}
	Version: v${pkg.version}
	Url: ${pkg.homepage}
	License(s): ${pkg.license}
`;

module.exports = {
	output: {
		library: "drivewealth",
		libraryTarget: "umd",
		filename: `drivewealth.js`,
	},
	devtool: "#inline-source-map",
	module: {
		loaders: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				loader: "babel",
				query: {
					compact: false,
					presets: ["es2015"],
					plugins: [
						"add-module-exports",
						"transform-flow-strip-types",
					],
				},
			},
		],
	},
	plugins: [
		new webpack.BannerPlugin(banner),
	],
};
