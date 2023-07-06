---
title: 开发环境搭建
date: 2022-09-22 15:39:13
---

## 开发环境搭建

<div class='headStyle'>
<img class='images' src="../public/icon/yonghu.svg" alt="来自依赖包的图片">
<i class='text'>Mars2D</i>
<img class='imagess' src="../public/icon/shijian.svg" alt="来自依赖包的图片">
<i class='text'>30/6/2023</i>
<img class='imagess' src="../public/icon/liulan.svg" alt="来自依赖包的图片">
<span class='text' id="busuanzi_container_page_pv">
  <span id="busuanzi_value_page_pv"></span>
</span>
</div>

利用 Mars2D 进行二次开发属于 Web 前端开发范畴，本章教程是基于通用情况下的推荐搭建的开发环境。

Web 前端刚入门的朋友，常常想选择一个快速、好用、**流行**（其实我也不知道为什么要流行，或许是在技术的路上，工程师希望自己走在主流的路上？）的 IDE（Integrated Development Environment：集成开发环境）。IDE 重要么？重要也不重要。不重要是因为：它只是一个工具，我们更应该关注的是需求、逻辑、算法、知识等。重要是因为：它是一个工具，工欲善其事必先利其器，工具选好了常常能够达到事半功倍的效果。

这些工具为后续讲解开发中所涉及到的工具，也是我们推荐的，建议您安装使用。 如果您对 Web 前端范畴技术栈有足够了解，并有其他习惯的工具也可以忽略安装。

## 1. 开发工具清单

需要安装（部署）的软件主要包括以下几种：
| 分类 | 名称 | 下载 |
| :--------: | :--------: | :----------------: |
| 开发环境 | Node | [下载](https://nodejs.cn/download/) |
| IDE | VS Code | [下载](https://code.visualstudio.com/Download) |
| Web 服务器 | nginx | [下载](https://nodejs.cn/download/) |
| 浏览器 | Chrome | [下载](https://www.google.cn/chrome/) |

> 建议使用这些我们推荐的工具来使用 Mars2D, 相关开发工具请根据您机器的操作系统下载对应版本进行安装.

## 2 Node 环境安装

- Node.js 是一个基于 Chrome V8 引擎的 JavaScript 运行环境。
- Node.js 使用了一个事件驱动、非阻塞式 I/O 的模型，使其轻量又高效。
- Node.js 的包管理器 npm，是全球最大的开源库生态系统。
- 简单的说 Node.js 就是运行在服务端的 JavaScript。

请确认开发机器安装有 Node 环境。可以从[ Node 下载地址](https://nodejs.cn/download/)下载安装 Node，安装完成后，控制台输入下面命令，检查版本信息，确认是否安装成功。

```nodejs
node -v  # 查看node版本
npm -v   # 查看npm版本
```

![配置图][1]

### 2.1 安装 nvm (可选)

当多个项目并行时，由于创建的时间或人为选择等因素，各个项目里有着差异的 node 版本，这样我们在不同的项目里需要切换不同版本的 Node.js，所以 nvm 应运而生。 安装 nvm 前需要卸载已有的 node，再从[nvm-windows](https://github.com/coreybutler/nvm-windows)下载安装即可。

### 2.2 安装 nrm

nrm(npm registry manager )是 npm 的镜像源管理工具，有时候国外资源太慢，使用这个就可以快速地在 npm 源间切换 在控制台按下面输入命令：

```nodejs
npm i -g nrm
nrm ls
nrm use taobao
```

其中执行命令 nrm ls 查看可选的源带\*的是当前使用的源，use 命令可以切换源。

## 3 VS Code 编辑器安装

Visual Studio Code 简称 VS Code，是一款免费开源的现代化轻量级代码编辑器，支持几乎所有主流的开发语言的语法高亮、智能代码补全、自定义热键、括号匹配、代码片段、代码对比 Diff、GIT 等特性。有大量的插件可选安装，使用方便易用，建议使用，当然如果您有更习惯和熟练的工具，也可以用自己熟悉的 IDE 工具。

从 [官网下载地址](https://code.visualstudio.com/Download)下载安装即可。

### 3.1 安装插件

请安装以下 VS Code 插件，没有特殊原因，都建议安装下：

- [Chinese (Simplified) Language Pack](https://marketplace.visualstudio.com/items?itemName=MS-CEINTL.vscode-language-pack-zh-hans)：中文汉化包，方便国内用户操作。
- [Live Server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer)：启动一个本地的 Http 服务器，原生 JS 项目时修改代码后页面会实时自动重载。
- [Git History](https://marketplace.visualstudio.com/items?itemName=donjayamanne.githistory)：方便查看对比 Git 历史记录。
- [EditorConfig for Visual Studio Code](https://marketplace.visualstudio.com/items?itemName=EditorConfig.EditorConfig)：统一项目内代码风格(`.editorconfig`文件配置)。
- [Prettier - Code formatter](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)： 统一项目内代码格式化的方式(`.prettierrc`文件配置)。
- [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)： 统一项目内代码规范(`.eslintrc.js`、`.eslintignore`等文件配置)。
  ![配置图][2]

## 4 Nginx 服务

我们在 Mars2D 开发中，一些地图、地形、模型数据都是比较庞大的数据，需要发布为独立的 HTTP 服务方便各个项目使用。发布服务的工具我们建议的是 nginx。

nginx 是轻量级的 Web 服务器/反向代理服务器。其特点是占有内存少，并发能力强。可用于瓦片底图、地形数据、模型等产品用到的各类数据的服务发布。更多细节和教程可以参看[Nginx 资料](https://www.baidu.com/s?wd=nginx)

您可以在[Nginx 官方下载地址](http://nginx.org/en/download.html)下载安装，但安装后需要自行加相关允许跨域等配置。

也可以直接下载[Mars2D 版 Nginx 下载地址](http://data.mars2d.cn/tool/nginx.rar)，这个版本是 window 版，并已设置允许跨域等相关配置，拿来即用。
![配置图][3]

## 5 Chrome 浏览器

建议使用[Chrome 谷歌浏览器](https://www.google.cn/chrome/)的最新版本进行开发和调试。

[1]: ../public/image/start-env-node.jpg
[2]: ../public/image/start-env-vscode.jpg
[3]: ../public/image/start-env-nginx.jpg
