const expressLoader = require('./express')

const init = async (app) => {
  await expressLoader(app)
  console.log('✅ Express Initialized')
}

module.exports={init}