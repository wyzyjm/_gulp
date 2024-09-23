// Did you forget to signal async completion? // 是因为task 没有return 返回值: cb() | promise | stream

const { series, parallel, watch, task } = require('gulp')
const {
  default_task,
  uglify_task,
  uglify_es_task,
  scripts_task, // js
  images_task, // 图片
  sass_task, // sass
} = require('./task.js')

// 任何导出（export）的函数都将注册到 gulp 的任务（task）系统中。
// exports.default = default_task // 默认任务

// 监听文件变化
watch(
  'src/**/*.js',
  {
    ignoreInitial: false, // 初次监听立即执行
    events: 'all', // 监控事件: 'add'、'addDir'、'change'、'unlink'、'unlinkDir'、'ready'、'error'。此外，还有一个 'all' 事件，它表示除 'ready' 和 'error' 之外的所有事件。
    queue: false, // 队列：true、false。默认为 true。如果为 true，则任务将排队，并且不会同时运行。如果为 false，则任务将同时运行。
    delay: 500, // 延迟, 默认延迟200ms, 避免同时更改许多文件时, 过早的启动task
  },
  series(scripts_task)
)
// const build = parallel(styles, scripts, images)
// task('default', build)
// function watchFiles() {
//   watch('../src/**/*.js', scripts_task)
//   watch('../src/img**/*', images_task)
//   watch('../src/scss/**/*.scss', sass_task)
// }
// task('build', watchFiles)
