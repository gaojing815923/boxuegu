//加载本地的gulp
var gulp = require("gulp");
//压缩html
var htmlmin = require("gulp-htmlmin");
//压缩混淆js
var uglify = require("gulp-uglify");
//内容合并
var concat = require("gulp-concat");
//修改文件名
var rename = require("gulp-rename");
//压缩css
var cleanCss = require("gulp-clean-css");
//less编译
var less = require("gulp-less");
//
var htmlReplace = require("gulp-html-replace");

var browserify = require("browserify");
var source = require("vinyl-source-stream");
var buffer = require("vinyl-buffer");

//html处理
gulp.task("html", function() {
    gulp.src(["src/**/*.html", './index.html'])
        .pipe(htmlReplace({
            aside: gulp.src("src/html/common/aside.html"),
            header: gulp.src("src/html/common/header.html"),
            style: gulp.src("src/html/common/style.html")
        }))
        .pipe(htmlmin({
            //这是压缩代码
            collapseWhitespace: true,
            minifyJS: true,
            minifyCSS: true,
            removeComments: true
        }))
        .pipe(gulp.dest("dist"));
})

//less编译
gulp.task("less", function() {
    gulp.src("src/less/index.less")
        .pipe(less())
        .pipe(cleanCss())
        .pipe(gulp.dest("dist/css"));
})

// 配置要打包的第三包路径
var jsLibs = [
    'node_modules/art-template/lib/template-web.js',
    'node_modules/jquery/dist/jquery.js',
    'node_modules/bootstrap/dist/js/bootstrap.js',
    'node_modules/jquery-form/dist/jquery.form.min.js'
];
gulp.task("jsLibs", function() {
    gulp.src(jsLibs)
        .pipe(concat("lib.js"))
        .pipe(gulp.dest("dist/js"));
})

//打包CommonJS模块
jsModules = [
    //首页
    'src/js/index.js',
    //学科分类
    'src/js/category/add.js',
    'src/js/category/edit.js',
    'src/js/category/list.js',
    //课程
    'src/js/course/add.js',
    'src/js/course/edit1.js',
    'src/js/course/edit2.js',
    'src/js/course/edit3.js',
    'src/js/course/list.js',
    //教师
    'src/js/teacher/add.js',
    'src/js/teacher/edit.js',
    'src/js/teacher/list.js',
    'src/js/teacher/profile.js',
    //用户
    'src/js/user/login.js',
    'src/js/user/profile.js',
    'src/js/user/repass.js',

    'src/js/common/common.js',
    'src/js/common/aside.js',
    'src/js/common/header.js'
]
gulp.task('js', function() {
    jsModules.forEach(function(jsPath) {
        pathArr = jsPath.split('/');
        jsName = pathArr.pop();
        pathArr.shift();

        browserify(jsPath).bundle() //打包index.js
            .pipe(source(jsName))
            .pipe(buffer())
            // .pipe(uglify())
            .pipe(gulp.dest('dist/' + pathArr.join('/')));
    })

})


gulp.task("all", function() {
    gulp.run(['html', 'less', 'jsLibs', 'js']);
})


gulp.task("default", function() {
    gulp.run('all');
    gulp.watch('src/**/*.html', function() {
        gulp.run('html');
    });

    gulp.watch('src/**/*.less', function() {
        gulp.run('less');
    });

    gulp.watch('src/**/*.js', function() {
        gulp.run('js');
    });
})