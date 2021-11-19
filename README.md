# 网易云音乐

**特别声明：本项目中的展示图片归网易云所有。如果侵权，请联系删除。**

请联系QQ``122874722``。

## 环境要求

需要 NodeJS 12.22.0+ 环境

![](./src/assets/design-sketch/npm-6.14.8.svg)
![](./src/assets/design-sketch/node-12.22.0.svg)

## 简介

本项目是一个仿写网易云PC端网站项目。

后端接口部分使用 Binaryify 的 NodeJS 版 API项目。

项目使用线上地址，如果线上地址不可用，需将网易云API项目下载到本地，并安装依赖运行，
更改 .env.development 文件中的代理地址，更改为API项目ip地址。

网易云API项目github地址: [https://github.com/Binaryify/NeteaseCloudMusicApi](https://github.com/Binaryify/NeteaseCloudMusicApi)。

网易云API接口文档地址: [https://binaryify.github.io/NeteaseCloudMusicApi/#/](https://binaryify.github.io/NeteaseCloudMusicApi/#/)。

## 项目使用技术栈

本项目使用到的技术栈如下：
* Vue全家桶
* Vue3 Composition Api
* TypeScript

## 加入项目

如果想加入本项目开发，需将项目fork到自己的仓库下，功能开发完成后，提PR即可。

## 运行

启动项目

```
yarn install
```

```
yarn serve
```

项目打包

```
yarn build
```

## 效果图

![](./src/assets/design-sketch/home.png)

## 写在最后

* [The MIT License (MIT)](https://github.com/xlz122/NeteaseCloudMusic/blob/master/LICENSE)
* 本项目仅用于学习使用，切勿用于商业用途，否则产生的法律后果与作者无关。
