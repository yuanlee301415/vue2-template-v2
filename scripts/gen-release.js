/*
 * 生成 Release 文件
 */

const fs = require('fs')
const path = require('path')

function generateRelease() {
    const envPath = path.resolve('.env')
    const envText = fs.readFileSync(envPath, 'utf-8')
    if (!envText) return console.error('[generateRelease]:: 读取.env文件失败')

    const reg = /VUE_APP_BUILD_VERSION\s+=\s+(\d+)/m
    const match = envText.match(reg)
    if (!match || !match[1]) return console.error('[generateRelease]:: 匹配 VUE_APP_BUILD_VERSION 失败')

    const time = new Date()
    const buildTime = `${time.getFullYear()}/${time.getMonth() + 1}/${time.getDate()} ${time.getHours()}:${time.getMinutes()}:${time.getSeconds()}`
    const text = [`VERSION: ${[process.env.npm_package_version, match[1]].join('.')}`, `BUILD_TIME: ${buildTime}`].join('\n')
    fs.writeFileSync(path.resolve('dist/release'), text, 'utf-8')

    console.log(`
    \n--------------------[GenerateRelease]:: Success--------------------
    \n${text}
    \n-------------------------------------------------------------------
    `)
}

generateRelease()
