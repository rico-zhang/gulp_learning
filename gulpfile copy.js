const { series, parallel } = require("gulp");

const { src, dest } = require("gulp");
const uglify = require("gulp-uglify");
const reanem = require("gulp-rename");

const { watch } = require("gulp");


/* function fn1(cb) {
    console.log("fn1 被执行了");
    cb();
}

function fn2(cb) {
    console.log("fn2 被执行了");
    cb();
}

exports.build = fn1;
exports.default = parallel(fn1, fn2); */

/* exports.default = function(){
    return src("./src/js/*.js")
    .pipe(dest("./dist/js"))
    .pipe(uglify())
    .pipe(rename({extname:".min.js"}))
    .pipe(dest("./dist/js"));
} */

/* watch("src/css/*", {
    delay: 1000
}, function (cb) {
    console.log("文件被监控了");
    cb();
});
exports.default = function (cb) {
    cb();
} */