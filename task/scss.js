const sass = require('gulp-sass')(require("sass"));

// Обработка SCSS
const scss = () => {
    
    return $.gulp.src($.path.scss.src, { sourcemaps: $.app.isDev })
			.pipe($.gulpload.plumber({
				errorHandler: $.gulpload.notify.onError(error => ({
					title: "SCSS",
					message: error.message
				}))
			}))
            .pipe($.gulpload.sassGlob())
            .pipe(sass())
			.pipe($.gulpload.autoprefixer())
			.pipe($.gulpload.groupCssMediaQueries())
			.pipe($.gulpload.size({ title: "main.css" }))
			.pipe($.gulp.dest($.path.scss.dest, { sourcemaps: $.app.isDev }))
			.pipe($.gulpload.rename({ suffix: ".min" }))
			.pipe($.gulpload.csso())
			.pipe($.gulpload.size({ title: "main.min.css" }))
			.pipe($.gulp.dest($.path.scss.dest, { sourcemaps: $.app.isDev }))
			.pipe($.browserSync.stream());
}

module.exports = scss;