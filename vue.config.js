const { defineConfig } = require("@vue/cli-service");

process.env.VUE_APP_SEMANTIC_VERSION = require("./package.json").version;
process.env.VUE_APP_BUILD_DATE = new Date().toISOString();

console.log(
  "env:\n",
  JSON.stringify(
    {
      NODE_ENV: process.env.NODE_ENV,
      ENV: process.env.ENV,
      VUE_APP_SEMANTIC_VERSION: process.env.VUE_APP_SEMANTIC_VERSION,
      VUE_APP_BUILD_DATE: process.env.VUE_APP_BUILD_DATE,
    },
    null,
    2
  )
);

module.exports = defineConfig({
  transpileDependencies: true,
  // 关闭 ESLint 保存编码时的语法检查
  lintOnSave: false,

  configureWebpack: {
    name: process.env["VUE_APP_NAME"],
  },
});
