---
title: 在已有项目中集成Mars2D
date: 2022-09-22 15:39:13
---

<h3> 在已有项目中集成Mars2D </h3>

<img class='images' src="../public/icon/yonghu.svg" alt="来自依赖包的图片">
<i class='text'>Mars2D</i>
<img class='imagess' src="../public/icon/shijian.svg" alt="来自依赖包的图片">
<i class='text'>30/6/2023</i>
<img class='imagess' src="../public/icon/liulan.svg" alt="来自依赖包的图片">
<i class='text'>0</i>

在阅读本节前，建议您已阅读：

- [获取 Mars2D SDK 类库](/start/download.md) ：了解 sdk 的不同下载及安装方式
- [开源仓库清单](/mapIntel/open.md)：下载一些模版代码阅读或参考下<br />
  再尝试将 mars2d 集成到自己的项目中。

<h3> 1. 引入Mars2D类库 </h3>

可以根据您自己的技术栈使用情况[获取 Mars2DSDK 类库](/start/download.md) 进行下载或引入 Mars2D 库到自己的项目中去使用。

## 方式 1：head 静态资源方式引入

在 html 的 head 标签中引入 Cesium 官方包和 Mars2D 包相关资源，此方法比较简单，不会出现各类集成问题，引入资源后在代码即可通过`window.mars2d`来使用相关 mars2d 类及方法。

## 方式 2： import 方式导入

使用 Node 环境下的现代 web 前端技术栈时，可以使用 npm 等来安装 mars2d 包并 import 导入后来使用。

```js
//引入npm版本时
import "mars2d/dist/mars2d.css";
import * as mars2d from "mars2d";

//引入下载的本地版本时
// import './lib/mars2d/mars2d.css'
// import * as mars2d from './lib/mars2d/mars2d.js'

//导入mars2d插件（按需使用，需要先npm install）
import "mars2d-esri";

//可以绑定下vue原型链，可以全局使用
Vue.prototype.mars2d = mars2d;

//在具体使用的vue等文件中
//直接使用 this.mars2d 进行相关调用。
```

### 2. 新建 div 容器

在需要呈现地图的页面或相关组件中，加上 div 容器，并注意设置 div 的 css 高宽样式。

```html
<div id="mars2dContainer" class="mars2d-container"></div>
```

## 3. 使用 mars2d.Map 方法创建地图

使用[Map 地图类](http://mars2d.cn/api/Map.html)类创建二维地图场景。

```js
var mapOptions = {}; //支持的参数请看API文档：http://mars2d.cn/api/Map.html
var map = new mars2d.Map("mars2dContainer", mapOptions);
```
