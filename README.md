# vue-ele
##git remote add origin https://github.com/yesixuan/vue-elementUI.git

> 一个集成了elementUI的vue脚手架

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

For detailed explanation on how things work, checkout the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).

###2017-4-9

####如何添加VUE对sass的支持
``` bash
cnpm install node-sass  --save

cnpm install --save-dev sass-loader style-loader css-loader
```
打开webpack.base.config.js在loaders里面加上  module -- rules (vue2.0)
{
  test: /\.scss$/,
  loaders: ["style", "css", "sass"]
},