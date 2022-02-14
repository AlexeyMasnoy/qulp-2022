// Обработка PUG
const pug = () => {
    
    return $.gulp.src($.path.pug.src)
			.pipe($.gulpload.plumber({
				errorHandler: $.gulpload.notify.onError(error => ({
					title: "PUG",
					message: error.message
				}))
			}))
			.pipe($.gulpload.pug($.app.pug))
			// .pipe(webphtml())
			.pipe($.gulp.dest($.path.pug.dest))
			.pipe($.browserSync.stream());
}

module.exports = pug;