function defaultTask(cb) {
  console.log('执行default任务')
  cb()
}
// 任何导出（export）的函数都将注册到 gulp 的任务（task）系统中。
export default defaultTask
