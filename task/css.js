const { src, dest } = require('gulp');

// Конфигурация
const path = require("../config/path.js");

// Плагины
const plumber = require('gulp-plumber');
const notify = require('gulp-notify');
const concat = require('gulp-concat');
const cssimport = require('gulp-cssimport');


// Обработка CSS
const css = () => {
    
    return src(path.css.src)
			.pipe(plumber({
				errorHandler: notify.onError(error => ({
					title: "CSS",
					message: error.message
				}))
			}))
			.pipe(concat("main.css"))
			.pipe(cssimport())
			.pipe(dest(path.css.dest));
}

module.exports = css;