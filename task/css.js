
// // Плагины
// const plumber = require('gulp-plumber');
// const notify = require('gulp-notify');
// const concat = require('gulp-concat');
// const cssimport = require('gulp-cssimport');
// const autoprefixer = require('gulp-autoprefixer');
// const csso = require('gulp-csso');
// const rename = require('gulp-rename');
// const size = require('gulp-size');
// const groupCssMediaQueries = require('gulp-group-css-media-queries');


// Обработка CSS
const css = () => {
    
    return $.gulp.src($.path.css.src, { sourcemaps: $.app.isDev })
			.pipe($.gulpload.plumber({
				errorHandler: $.gulpload.notify.onError(error => ({
					title: "CSS",
					message: error.message
				}))
			}))
			.pipe($.gulpload.concat("main.css"))
			.pipe($.gulpload.cssimport())
			.pipe($.gulpload.autoprefixer())
			.pipe($.gulpload.groupCssMediaQueries())
			.pipe($.gulpload.size({ title: "main.css" }))
			.pipe($.gulp.dest($.path.css.dest, { sourcemaps: $.app.isDev }))
			.pipe($.gulpload.rename({ suffix: ".min" }))
			.pipe($.gulpload.csso())
			.pipe($.gulpload.size({ title: "main.min.css" }))
			.pipe($.gulp.dest($.path.css.dest, { sourcemaps: $.app.isDev }))
			.pipe($.browserSync.stream());
}

module.exports = css;