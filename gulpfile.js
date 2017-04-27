var gulp = require( "gulp" );
var webpack = require( "webpack-stream" );
var sourcemaps = require( "gulp-sourcemaps" );
var rename = require( "gulp-rename" );
var uglify = require( "gulp-uglify" );
var gutil = require("gulp-util");
var foreach = require("gulp-foreach");

gulp.task( "build", function() {
	return gulp.src( "src/index.js" )
		.pipe( webpack( require( "./webpack.config.js" ) ) )
		.pipe( gulp.dest( "./lib" ) )
		.pipe( sourcemaps.init( { loadMaps: true } ) )
		.pipe( uglify( {
			preserveComments: "license",
			compress: {
				/*eslint-disable */
				negate_iife: false
				/*eslint-enable */
			}
		} ).on("error", gutil.log) )
		.pipe( rename( "drivewealth.min.js" ) )
		.pipe( sourcemaps.write( "./" ) )
		.pipe( gulp.dest( "lib/" ) );
} );

gulp.task("build-httpImpls-node", function() {
	return gulp.src([
		"src/httpImpls/request.js"
	])
		.pipe( gulp.dest( "./lib/httpImpls" ) )
		.pipe( sourcemaps.init( { loadMaps: true } ) )
		.pipe( uglify( {
			compress: {
				/*eslint-disable */
				negate_iife: false
				/*eslint-enable */
			}
		} ).on("error", gutil.log) )
		.pipe( rename( { suffix: ".min" } ) )
		.pipe( sourcemaps.write( "./" ) )
		.pipe( gulp.dest( "lib/httpImpls/" ) );
});

gulp.task("build-httpImpls-web", function() {
	return gulp.src([
		"src/httpImpls/fetch.js"
	])
		.pipe(foreach(function (stream, file){
			return stream
				.pipe( webpack( require( "./webpack.config.httpImpls.js" )(file.path.match(/.+\/(.+).js/)[1]) ) )
				.pipe( gulp.dest( "./lib/httpImpls" ) )
				.pipe( sourcemaps.init( { loadMaps: true } ) )
				.pipe( uglify( {
					compress: {
						/*eslint-disable */
						negate_iife: false
						/*eslint-enable */
					}
				} ).on("error", gutil.log) )
				.pipe( rename( { suffix: ".min" } ) )
				.pipe( sourcemaps.write( "./" ) )
				.pipe( gulp.dest( "lib/httpImpls/" ) );
		}));
});

gulp.task("watch", ["build"], () => gulp.watch(["src/**", "examples/**"], ["build"]));
