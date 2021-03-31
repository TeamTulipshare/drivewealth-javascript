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
		filename: "drivewealth.js",
	},
	devtool: "#inline-source-map",
	module: {

//change "loaders to rules" for backwards compatiblity 
// https://stackoverflow.com/questions/49370849/configuration-module-has-an-unknown-property-loaders
		// change laoder: babel to babel-loader
		//
		rules: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				loader: "babel-loader",
				query: {
					compact: false,
					presets: ["es2015"],
					plugins: [
						"add-module-exports",
						"transform-flow-strip-types",
						"transform-class-properties",
					],
				},
			},
		],
	},
	plugins: [
		new webpack.BannerPlugin(banner),
	],
};
