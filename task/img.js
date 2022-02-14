const gulpif = require('gulp-if');

// Обработка IMG
const img = () => {
    
    return $.gulp.src($.path.img.src)
			.pipe($.gulpload.plumber({
				errorHandler: $.gulpload.notify.onError(error => ({
					title: "IMG",
					message: error.message
				}))
			}))
			.pipe($.gulpload.newer($.path.img.dest))
			.pipe($.gulpload.webp())
			.pipe($.gulp.dest($.path.img.dest))
			.pipe($.gulp.src($.path.img.src))
			.pipe($.gulpload.newer($.path.img.dest))
			.pipe(gulpif($.app.isProd, $.gulpload.imagemin($.app.imagemin)))
			.pipe($.gulp.dest($.path.img.dest))
			.pipe($.browserSync.stream());
}

module.exports = img;