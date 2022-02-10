const { watch, series, parallel } = require('gulp');
const browserSync = require('browser-sync').create();

// Задачи

const clear = require('./task/clear.js');
const pug = require('./task/pug.js');
const css = require('./task/css.js');

// Конфигурация
const path = require("./config/path.js");


const watcher = () => {
	watch(path.pug.watch, pug).on("all", browserSync.reload);
	watch(path.css.watch, css).on("all", browserSync.reload);
}

// Сервер

const server = () => {
	browserSync.init({
		server: {
			baseDir: path.root
		}
	})
}

// Задачи
exports.pug = pug;
exports.css = css;


// Сборка
exports.dev = series(
	clear,
	parallel(pug, css),
	parallel(watcher, server)
);