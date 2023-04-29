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
});
