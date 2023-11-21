//sever level 专注于配置和启动
const app = require('./app')
const config = require('./src/config')
const dbLoader = require('./src/loader/db')
//应用中有需要等待的异步操作，如初始化数据库连接，读取配置文件，需要使用 async await
async function startServer() {
  
  await dbLoader(config.DB_URI)
  app.listen(config.port, (error) => {
    if (error) {
      console.error('Error starting the server:', error);
      process.exit(1)
      return
    }
    console.log(`✅✅✅ Server is running on port ${config.port}`);
  })
}

startServer()