const webpack = require("webpack");

module.exports = function(name) {
	return {
		output: {
			library: name,
			libraryTarget: "umd",
			filename: `${name}.js`
		},
		module: {
			loaders: [
				{
					test: /\.js$/,
					exclude: /node_modules/,
					loader: "babel",
					query: {
						compact: false
					}
				}
			]
		},
	};
};
