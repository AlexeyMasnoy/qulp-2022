const fonter = require('gulp-fonter-unx');

// Обработка FONT
const font = () => {
    
	return $.gulp.src($.path.font.src)
		.pipe($.gulpload.plumber({
			errorHandler: $.gulpload.notify.onError(error => ({
				title: "FONT",
				message: error.message
			}))
		}))
		.pipe($.gulpload.newer($.path.font.dest))
		.pipe(fonter($.app.fonter))
		.pipe($.gulp.dest($.path.font.dest))
		.pipe($.gulpload.ttf2woff2())
		.pipe($.gulp.dest($.path.font.dest))
		.pipe($.browserSync.stream());
}

module.exports = font;