const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  publicPath: '/vuejs-apartments/',
  // publicPath: process.env.NODE_ENV === 'production'
  //   ? '/vuejs-apartments/'
  //   : '/'
})
