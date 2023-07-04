---
title: 获取SDK库
date: 2022-09-22 15:39:13
---

<h3> 获取 Mars2D SDK类库 </h3>

<img class='images' src="../public/icon/yonghu.svg" alt="来自依赖包的图片">
<i class='text'>Mars2D</i>
<img class='imagess' src="../public/icon/shijian.svg" alt="来自依赖包的图片">
<i class='text'>30/6/2023</i>
<img class='imagess' src="../public/icon/liulan.svg" alt="来自依赖包的图片">
<i class='text'>0</i>

Mars2D 提供了多种获取 SDK 类库的方式，你可以根据项目的实际情况和技术栈选择以下任意一种方式安装。

- 从 npm 安装
- 从 CDN 引入
- 从 Mars2D 官网 下载
  接下来我们将分别介绍这些安装方式，以及下载后的目录结构。

## 1.从 npm 获取

使用 Node 环境下的现代 web 前端技术栈时，可以使用 npm 或 cnpm 或 yarn 等方式来安装 mars2d 包

```sh
//安装mars2d主库
npm install mars2d --save

//安装mars2d插件（按需安装）
npm install mars2d-esri --save
```

安装后在相关使用文件中引入使用即可

```js
import "mars2d/dist/mars2d.css";
import * as mars2d from "mars2d";

//导入mars2d插件（按需使用，需要先npm install）
import "mars2d-esri";
```

详见在项目中引入[在项目中引入 Mars2D](/start/import.md)， 您也可以参考[vue 最简项目模板](https://github.com/marsgis/mars2d-vue-template)

## 2. 从 CDN 获取

在 html 的 head 标签中引入 Mars2D 包相关 CDN 资源.

### 2.1 可以选用[ unpkg.com](https://unpkg.com/)的 CDN 服务

```js
<!--引入leaflet基础lib-->
<link rel="stylesheet" href="https://unpkg.com/leaflet/dist/leaflet.css" />
<script src="https://unpkg.com/leaflet/dist/leaflet.js" crossorigin=""></script>

<!--引入mars2d库lib-->
<link href="https://unpkg.com/mars2d/dist/mars2d.css" rel="stylesheet" type="text/css" />
<script src="https://unpkg.com/mars2d/dist/mars2d.js" type="text/javascript" ></script>


<!--引入mars2d库插件lib（按需引入）-->
<script src="https://unpkg.com/mars2d-esri/dist/mars2d-esri.js" type="text/javascript" ></script>

```

### 2.2 可以选用[jsDelivr](https://www.jsdelivr.com/package/npm/mars2d)的 CDN 服务

```js
<!--引入leaflet基础lib-->
<link rel="stylesheet" href="https://unpkg.com/leaflet/dist/leaflet.css" />
<script src="https://unpkg.com/leaflet/dist/leaflet.js" crossorigin=""></script>

<!--引入mars2d库lib-->
<link href="https://cdn.jsdelivr.net/npm/mars2d/dist/mars2d.css" rel="stylesheet" type="text/css" />
<script src="https://cdn.jsdelivr.net/npm/mars2d/dist/mars2d.js" type="text/javascript"></script>

<!--引入mars2d库插件lib（按需引入）-->
<!-- <script src="https://cdn.jsdelivr.net/npm/mars2d-esri/dist/mars2d-esri.js" type="text/javascript" ></script>  -->

```
<a class="text" target="_black" href="https://www.jsdelivr.com/package/npm/mars2d">
<img alt="CDN流量" src="https://img.shields.io/jsdelivr/npm/hy/mars2d?label=年下载量&style=flat&logo=jsDelivr">
</a>
<a class="text" target="_black" href="https://www.isdelivr.com/package/npm/mars2d">
<img alt="CDN流量" src="https://img.shields.io/jsdelivr/npm/hm/mars2d?label=月下载量&style=flat&logo=jsDelivr">
</a>

### 2.3 可以选用Mars2D官网的CDN服务
```js
<!--引入leaflet基础lib-->
<link rel="stylesheet" href="http://mars2d.cn/lib/leaflet/leaflet.css" />
<script src="http://mars2d.cn/lib/leaflet/leaflet.js" crossorigin=""></script>

<!--引入mars2d库lib-->
<link href="http://mars2d.cn/lib/mars2d/mars2d.css" rel="stylesheet" type="text/css" />
<script src="http://mars2d.cn/lib/mars2d/mars2d.js" type="text/javascript" ></script>

<!--引入mars2d库插件lib（按需引入）-->
<script src="http://mars2d.cn/lib/mars2d/plugins/esri/mars2d-esri.js" type="text/javascript" ></script>
```

引入后在相关使用文件中直接使用`window.mars2d`对象即可,传统技术栈可以参考[原生 JS 最简项目模板](https://github.com/marsgis/mars2d-es5-template)。

## 3. 从 Mars2D 官网 下载获取

可以在[Mars2D 官网](http://mars2d.cn/download.html)下载 “mars2d-sdk.rar”离线包 后在本地项目中引入相对路径资源来使用。

将下载的 SDK 放在项目目录内，使用方式与上面 2 种基本相同，区别在于 url 路径是本地项目的相对路径。

> 如果您有购买 Mars2D 源码版，在收到 `mars2d-sdk源码版.rar` 交付文件后，是相同的使用方式。

### 3.1 类似 CDN 的 head 静态资源方式引入

```js
<!--引入leaflet基础lib-->
<link rel="stylesheet" href="./lib/leaflet/leaflet.css" />
<script src="./lib/leaflet/leaflet.js" ></script>

<!--引入mars2d库lib-->
<link href="./lib/mars2d/dist/mars2d.css" rel="stylesheet" type="text/css" />
<script src="./lib/mars2d/dist/mars2d.js" type="text/javascript" ></script>

<!--引入mars2d库插件lib（按需引入）-->
<script src="./lib/mars2d/plugins/esri/mars2d-esri.js" type="text/javascript" ></script>

```

### 3.2 类似 npm 的 import 方式导入

方式 1：需改动源码<br />
将离线包放在任意目录下，按相对路径修改 mars2d 的引入处，如下：

```js
import "./lib/mars2d/mars2d.css";
import * as mars2d from "./lib/mars2d/mars2d.js";
```

方式 2：无需改动源码，修改配置(建议)

- 配置后，无需改动源码，在项目代码中使用时与使用 npm 包是一样的方式，如 `import * as mars2d from "mars2d"`;

- 将 npm 安装后的 node_modules/mars2d/下的所有文件拷贝一份放在`packages/mars2d/`目录。

- 将`mars2d-sdk.rar`离线包内文件 覆盖至`packages/mars2d/dist/`目录下。

- 修改`package.json`中 mars2d 包配置为：`"mars2d": "file:packages/mars2d"`,

- vite 时需要排除

```js
build: {
  commonjsOptions: {
    //默认内部只处理了node_modules，需要将"packages/"也标识处理
    include: /node_modules|packages/
  },
  //已忽略其他配置
}
```

![配置图][1]

- 如果引入本地版本`build`编译很慢时，可以按下面配置修改`babel.config.js`

```js
module.exports = {
  //已忽略其他配置
  ignore: [
    "packages/mars2d/dist/mars2d.js", //改成自己的本地地址
  ],
};
```

[1]: ../public/image/start-download-import.jpg
