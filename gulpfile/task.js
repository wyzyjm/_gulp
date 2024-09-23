import { src, dest } from 'gulp'
import uglify from 'gulp-uglify'
import uglifyEs from 'gulp-uglify-es'
import rename from 'gulp-rename' // 重命名
import babel from 'gulp-babel' // babel处理
import imagemin from 'gulp-imagemin' // 图片
import plumber from 'gulp-plumber' // 错误
import sass from 'gulp-sass'
import cleanCSS from 'gulp-clean-css'
import concat from 'gulp-concat'

// 编译Sass
function sass_task() {
  return src('src/scss/**/*.scss')
    .pipe(plumber())
    .pipe(sass().on('error', sass.logError))
    .pipe(cleanCSS())
    .pipe(rename({ suffix: '.min' }))
    .pipe(dest('build/css'))
}

// 压缩和合并JavaScript
function scripts_task() {
  return src('src/**/*.js')
    .pipe(plumber())
    .pipe(concat('main.min.js'))
    .pipe(uglify({ compress: true }))
    .pipe(dest('build/js'))
}
// 压缩图片
function images_task() {
  return src('src/img/**/*').pipe(imagemin()).pipe(dest('build/img'))
}
export {
  scripts_task, // js
  images_task, // 图片
  sass_task, // sass
}
