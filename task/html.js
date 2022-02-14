// Плагины
// const plumber = require('gulp-plumber');
const htmlmin = require('htmlmin');
const fileinclude = require("gulp-file-include");
// const size = require("gulp-size");
const webphtml = require("gulp-webp-html");

// Обработка HTML

const html= () => {
    
    return $.gulp.src($.path.html.src)
			.pipe($.gulpload.plumber({
				errorHandler: $.gulpload.notify.onError(error => ({
					title: "HTML",
					message: error.message
				}))
			}))
            .pipe(fileinclude())
			.pipe(webphtml())
			.pipe($.gulpload.size({
                title: "До сжатия"
			}))
            .pipe(htmlmin($.app.html))
            .pipe($.gulpload.size({
                title: "После сжатия"
			}))
			.pipe($.gulp.dest($.path.root))
			.pipe($.browserSync.stream());
}

module.exports = html;