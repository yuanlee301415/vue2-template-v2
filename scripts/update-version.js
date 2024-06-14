/*
 * 更新内部版本号
 */

const fs = require('fs')
const path = require('path')

function updateVersion() {
    const envPath = path.resolve('.env')
    const envText = fs.readFileSync(envPath, 'utf-8')
    if (!envText) return console.error('[updateVersion]:: 读取.env文件失败')

    const reg = /(VUE_APP_BUILD_VERSION\s+=\s+)(\d+)/m
    const match = envText.match(reg)
    if (!match || !match[2]) return console.error('[updateVersion]:: 匹配 VUE_APP_BUILD_VERSION 失败')

    const newVer = Number(match[2]) + 1
    fs.writeFileSync(envPath, envText.replace(reg, `$1${newVer}`), 'utf-8')

    console.log(`
    \n--------------------[UpdateVersion]:: Success--------------------
    \nNew Version: ${newVer}
    \n-------------------------------------------------------------------
    `)
}

updateVersion()
