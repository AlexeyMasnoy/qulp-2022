const { src, dest } = require('gulp');

// Конфигурация
const path = require("../config/path.js");
const app = require("../config/app.js");

// Плагины
const plumber = require('gulp-plumber');
const notify = require('gulp-notify');
const htmlmin = require('gulp-htmlmin');
const fileinclude = require("gulp-file-include");
const size = require("gulp-size");

const html= () => {
    
    return src(path.html.src)
			.pipe(plumber({
				errorHandler: notify.onError(error => ({
					title: "HTML",
					message: error.message
				}))
			}))
            .pipe(fileinclude())
			.pipe(size({
                title: "До сжатия"
			}))
            .pipe(htmlmin(app.html))
            .pipe(size({
                title: "После сжатия"
			}))
			.pipe(dest(path.root));
}

module.exports = html;