const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave:false,

  css: {
    // css预设器配置项
    loaderOptions: {
      scss:{
        additionalData: `@import "./src/styles/style.scss";`//主入口css文件路径
      }
    }
  },

})
