global.$ = {
	// Пакеты
	gulp: require("gulp"),
	gulpload: require("gulp-load-plugins")(),
	browserSync: require('browser-sync').create(),

	// Конфигурация
	path: require("./config/path.js"),
	app: require("./config/app.js")
}


// Задачи

const clear = require('./task/clear.js');
const css = require('./task/css.js');
const html = require('./task/html.js');
const pug = require('./task/pug.js');
const scss = require('./task/scss.js');
const js = require('./task/js.js');
const img = require('./task/img.js');
const font = require('./task/font.js');




const watcher = () => {
	$.gulp.watch($.path.pug.watch, pug);
	$.gulp.watch($.path.scss.watch, scss);
	$.gulp.watch($.path.js.watch, js);
	$.gulp.watch($.path.img.watch, img);
	$.gulp.watch($.path.font.watch, font);
}

// Сервер

const server = () => {
	browserSync.init({
		server: {
			baseDir: $.path.root
		}
	})
}


const build = $.gulp.series(
	clear,
	$.gulp.parallel(pug, scss, js, img, font)
);

const dev = $.gulp.series(
	build,
	$.gulp.parallel(watcher, server)
);


// Задачи
exports.clear = clear;
exports.html = html;
exports.css = css;
exports.pug = pug;
exports.scss = scss;
exports.js = js;
exports.img = img;
exports.font = font;


// Сборка
exports.default = $.app.isProd
? build
: dev;