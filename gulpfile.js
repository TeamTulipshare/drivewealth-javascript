const gulp = require("gulp");
const webpack = require("webpack-stream");
const sourcemaps = require("gulp-sourcemaps");
const rename = require("gulp-rename");
const uglify = require("gulp-uglify");
const gutil = require("gulp-util");
const foreach = require("gulp-foreach");

gulp.task("build", () => {
	return gulp.src("src/index.js")
		.pipe(webpack(require("./webpack.config.js")))
		.pipe(gulp.dest("./lib"))
		.pipe(sourcemaps.init({ loadMaps: true }))
		.pipe(uglify({
			preserveComments: "license",
			compress: {
				/*eslint-disable */
				negate_iife: false
				/*eslint-enable */
			}
		}).on("error", gutil.log))
		.pipe(rename("drivewealth.min.js"))
		.pipe(sourcemaps.write("./"))
		.pipe(gulp.dest("lib/"));
});

gulp.task("build-httpImpls-node", () => {
	return gulp.src([
		"src/httpImpls/request.js"
	])
		.pipe(gulp.dest("./lib/httpImpls"))
		.pipe(sourcemaps.init({ loadMaps: true }))
		.pipe(uglify({
			compress: {
				/*eslint-disable */
				negate_iife: false
				/*eslint-enable */
			}
		}).on("error", gutil.log))
		.pipe(rename({ suffix: ".min" }))
		.pipe(sourcemaps.write("./"))
		.pipe(gulp.dest("lib/httpImpls/"));
});

gulp.task("build-httpImpls-web", () => {
	return gulp.src([
		"src/httpImpls/fetch.js"
	])
		.pipe(foreach(function (stream, file){
			return stream
				.pipe(webpack(require("./webpack.config.httpImpls.js")(file.path.match(/.+\/(.+).js/)[1])))
				.pipe(gulp.dest("./lib/httpImpls"))
				.pipe(sourcemaps.init({ loadMaps: true }))
				.pipe(uglify({
					compress: {
						/*eslint-disable */
						negate_iife: false
						/*eslint-enable */
					}
				}).on("error", gutil.log))
				.pipe(rename({ suffix: ".min" }))
				.pipe(sourcemaps.write("./"))
				.pipe(gulp.dest("lib/httpImpls/"));
		}));
});

gulp.task("watch", () => gulp.watch(["src/**", "examples/**", "test/**"], ["build"]));
