---
title: 整体架构及介绍
date: 2022-09-22 15:39:13
---

<h3>整体架构及介绍</h3>

<img class='images' src="../public/icon/yonghu.svg" alt="来自依赖包的图片">
<i class='text'>Mars2D</i>
<img class='imagess' src="../public/icon/shijian.svg" alt="来自依赖包的图片">
<i class='text'>30/6/2023</i>
<img class='imagess' src="../public/icon/liulan.svg" alt="来自依赖包的图片">
<i class='text'>0</i>

## 1. Mars2D 的组成

平台主要由： SDK 类库、功能示例、项目模板 共 3 大部分组成。这些资料均免费开放，并可下载离线本地使用。

|   组成   |                                   获取方式                                   |                       相关资料                        |            备注            |
| :------: | :--------------------------------------------------------------------------: | :---------------------------------------------------: | :------------------------: |
| SDK 类库 |                        [免费下载](/start/download.md)                        |     [API 文档](http://mars2d.cn/apidoc.html#Map)      |       免费无限制使用       |
| 功能示例 | [Github 开源](/mapIntel/open.md)、[在线体验](http://marsgis.cn/example.html) | [功能清单(页面左下侧)](http://mars2d.cn/example.html) |  包含 400+功能示例及源码   |
| 项目模板 |                       [Github 开源](/mapIntel/open.md)                       |                                                       | 面向不同技术栈做的项目模板 |

> 正常开发流程：免费下载 SDK、参考开源的“功能示例、项目模板”进行开发即可。

## 2. SDK 类库介绍

Mars2D 平台开发的 SDK 所有类及方法均以 mars2d 开头命名，`mars2d.*` 为平台框架的默认命名空间，所有用到的类及方法都是通过`mars2d.*`来调用。 开发时尽量不要使用 `mars2d` 来定义自己的变量或类名、方法名，避免框架无法正常使用。

### 3.1 SDK 主类库

|  包名  |                                                                                  当前版本                                                                                   |                      CDN 地址                      |                                                                             下载量                                                                              |     备注      |
| :----: | :-------------------------------------------------------------------------------------------------------------------------------------------------------------------------: | :------------------------------------------------: | :-------------------------------------------------------------------------------------------------------------------------------------------------------------: | :-----------: |
| mars2d | <a target="_black" href="https://www.npmjs.com/package/mars2d"><img alt="Npm version" src="https://img.shields.io/npm/v/mars2d.svg?style=flat&amp;logo=npm&amp;label="></a> | [cdn](https://www.jsdelivr.com/package/npm/mars2d) | <a target="_black" href="https://www.npmjs.com/package/mars2d"><img alt="Npm downloads" src="https://img.shields.io/npm/dt/mars2d?style=flat&amp;logo=npm"></a> | Mars2D 主类库 |

### 3.2 SDK 插件库（可选）

部分插件没有合并在主库中，方便不同场景下按需使用
| 包名 | 当前版本 | CDN 地址 | 下载量|备注|
| :-----: | :-----: | :----: |:----: |:----: |
| mars2d-echarts |<a target="_black" href="https://www.npmjs.com/package/mars2d-echarts"><img alt="Npm version" src="https://img.shields.io/npm/v/mars2d-echarts.svg?style=flat&amp;logo=npm&amp;label="></a> | [cdn](https://www.jsdelivr.com/package/npm/mars2d-echarts) |<a target="_black" href="https://www.npmjs.com/package/mars2d-echarts"><img alt="Npm downloads" src="https://img.shields.io/npm/dt/mars2d-echarts?style=flat&amp;logo=npm"></a> |echarts 可视化插件|
| mars2d-mapv |<a target="_black" href="https://www.npmjs.com/package/mars2d-mapv"><img alt="Npm version" src="https://img.shields.io/npm/v/mars2d-mapv.svg?style=flat&amp;logo=npm&amp;label="></a> | [cdn](https://www.jsdelivr.com/package/npm/mars2d-mapv) |<a target="_black" href="https://www.npmjs.com/package/mars2d-mapv"><img alt="Npm downloads" src="https://img.shields.io/npm/dt/mars2d-mapv?style=flat&amp;logo=npm"></a> |mapv 可视化插件|
| mars2d-esri |<a target="_black" href="https://www.npmjs.com/package/mars2d-esri"><img alt="Npm version" src="https://img.shields.io/npm/v/mars2d-esri.svg?style=flat&amp;logo=npm&amp;label="></a> | [cdn](https://www.jsdelivr.com/package/npm/mars2d-esri) |<a target="_black" href="https://www.npmjs.com/package/mars2d-esri"><img alt="Npm downloads" src="https://img.shields.io/npm/dt/mars2d-esri?style=flat&amp;logo=npm"></a> |esri 服务插件|
| mars2d-widget |<a target="_black" href="https://www.npmjs.com/package/mars2d-widget"><img alt="Npm version" src="https://img.shields.io/npm/v/mars2d-widget.svg?style=flat&amp;logo=npm&amp;label="></a> | [cdn](https://www.jsdelivr.com/package/npm/mars2d-widget) |<a target="_black" href="https://www.npmjs.com/package/mars2d-widget"><img alt="Npm downloads" src="https://img.shields.io/npm/dt/mars2d-widget?style=flat&amp;logo=npm"></a> |原生 js 下的 widget 模块化插件|

### 3.3 SDK 的架构

少数包放在二级包下，清单如下：

```js
mars2d.layer.*      //图层,比如 mars2d.layer.GraphicLayer
mars2d.graphic.*    //矢量对象,比如 mars2d.graphic.Marker
mars2d.control.*    //控件
mars2d.query.*      //服务查询
mars2d.thing.*      //管理或分析
```

其他类都在 mars2d 一级包下面

```js
mars2d.*  //比如 mars2d.PointUtil
```

## 3. 功能示例

见[下载运行功能示例](http://mars2d.cn/doc.html#project/example-vue)章节介绍。

## 4. 项目模板

见[基础项目 Vue 版介绍](http://mars2d.cn/doc.html#project/jcxm-vue)章节介绍。
