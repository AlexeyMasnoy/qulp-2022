// Плагины
const webpack = require('webpack-stream');


// Обработка JS
const js = () => {
    
    return $.gulp.src($.path.js.src, { sourcemaps: $.app.isDev })
			.pipe($.gulpload.plumber({
				errorHandler: $.gulpload.notify.onError(error => ({
					title: "JS",
					message: error.message
				}))
			}))
			.pipe($.gulpload.babel())
			.pipe(webpack($.app.webpack))
			.pipe($.gulp.dest($.path.js.dest, { sourcemaps: $.app.isDev }))
			.pipe($.browserSync.stream());
}

module.exports = js;