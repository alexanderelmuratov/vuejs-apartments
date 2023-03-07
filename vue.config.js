const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  // publicPath: "/vuejs-apartments/",
  transpileDependencies: true,
  publicPath: process.env.NODE_ENV === 'production'
    ? '/vuejs-apartments/'
    : '/'
})


// module.exports = {
// publicPath: "/vuejs-apartments/",
// }