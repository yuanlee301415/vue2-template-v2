const { defineConfig } = require('@vue/cli-service')
const TerserPlugin = require('terser-webpack-plugin')
const webpack = require('webpack')
const { version } = require('./package.json')

process.env.VUE_APP_VERSION = [version, process.env.VUE_APP_BUILD_VERSION].join('.')
process.env.VUE_APP_BUILD_DATE = new Date().toISOString()

console.log(
    'env:\n',
    JSON.stringify(
        {
            NODE_ENV: process.env.NODE_ENV,
            ENV: process.env.ENV,
            VUE_APP_VERSION: process.env.VUE_APP_VERSION,
            VUE_APP_BUILD_DATE: process.env.VUE_APP_BUILD_DATE
        },
        null,
        2
    )
)

module.exports = defineConfig({
    transpileDependencies: true,
    // 关闭 ESLint 保存编码时的语法检查
    lintOnSave: false,

    // 关闭生产环境 source map
    productionSourceMap: false,

    configureWebpack: {
        name: process.env['VUE_APP_NAME'],
        plugins: [
            new TerserPlugin({
                terserOptions: {
                    compress: {
                        drop_console: true, // 清除 console 语句
                        drop_debugger: true // 清除 debugger 语句
                    }
                }
            })
        ]
    },

    chainWebpack: (config) => {
        // 构建进度
        config.plugin('progress').use(new webpack.ProgressPlugin())
    }
})
