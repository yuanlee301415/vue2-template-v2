const { defineConfig } = require('@vue/cli-service')
const TerserPlugin = require('terser-webpack-plugin')
const webpack = require('webpack')
const { version } = require('./package.json')
const path = require('path')

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
        if (process.env.NODE_ENV === 'production') {
            // 代码拆分
            config.optimization.splitChunks({
                chunks: 'all',
                cacheGroups: {
                    libs: {
                        name: 'chunk-libs',
                        test: /[\\/]node_modules[\\/]/,
                        priority: 10,
                        chunks: 'initial'
                    },
                    components: {
                        name: 'chunk-components',
                        test: path.resolve(__dirname, 'src/components'),
                        priority: 20,
                        reuseExistingChunk: true // 如果当前 chunk 包含已从主 bundle 中拆分出的模块，则它将被重用，而不是生成新的模块。
                    },
                    elementUI: {
                        name: 'chunk-elementUI',
                        test: /[\\/]node_modules[\\/]element-ui/,
                        priority: 100
                    }
                }
            })
        }
    }
})
