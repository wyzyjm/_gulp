import {
  scripts_task, // js
  images_task, // 图片
  sass_task, // sass
} from './gulpfile/task.js'
import { series, parallel, watch, task } from 'gulp'

const watch_options = {
  ignoreInitial: false, // 初次监听立即执行
  events: 'all', // 监控事件: 'add'、'addDir'、'change'、'unlink'、'unlinkDir'、'ready'、'error'。此外，还有一个 'all' 事件，它表示除 'ready' 和 'error' 之外的所有事件。
  queue: false, // 队列：true、false。默认为 true。如果为 true，则任务将排队，并且不会同时运行。如果为 false，则任务将同时运行。
  delay: 500, // 延迟, 默认延迟200ms, 避免同时更改许多文件时, 过早的启动task
}

function watchFiles() {
  watch('./src/**/*.js', watch_options, scripts_task)
  watch('./src/img**/*', watch_options, images_task)
  // watch('./src/scss/**/*.scss', watch_options, sass_task)
}
task('build', watchFiles)
