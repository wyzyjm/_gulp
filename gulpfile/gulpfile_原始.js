var gulp = require('gulp')

gulp.task('default', function () {
  console.log('hello gulp')
  gulp.src('./src/**/*.js').pipe(gulp.dest('dist'))
})
gulp.task('uglify', function () {
  console.log('执行uglify任务')
})
gulp.task('minify', function () {
  console.log('执行minify任务')
})
// 异步
gulp.task('async', function () {
  console.log('执行async 同步任务') // 先执行
  setTimeout(() => {
    console.log('执行async任务')
  }, 1000)
})

// 对文件进行 监听
// gulp.parallel: 正序执行
gulp.watch('./src/*.js', gulp.parallel('async', 'uglify', 'minify'))
