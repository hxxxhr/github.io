---
title: 整体架构及介绍
date: 2022-09-22 15:39:13
---
<h3>整体架构及介绍</h3>

## 1. Mars2D 的组成

平台主要由： SDK 类库、功能示例、项目模板 共 3 大部分组成。这些资料均免费开放，并可下载离线本地使用。

|   组成   |                          获取方式                           |                   相关资料                   |            备注            |
| :------: | :---------------------------------------------------------: | :------------------------------------------: | :------------------------: |
| SDK 类库 |                        [免费下载]()                         | [API 文档](http://mars2d.cn/apidoc.html#Map) |       免费无限制使用       |
| 功能示例 | [Github 开源]()、[在线体验](http://marsgis.cn/example.html) |  [功能清单(页面左下侧)](http://mars2d.cn/example.html)   |  包含 400+功能示例及源码   |
| 项目模板 |                       [Github 开源]()                       |                                              | 面向不同技术栈做的项目模板 |

> 正常开发流程：免费下载 SDK、参考开源的“功能示例、项目模板”进行开发即可。

## 2. SDK 类库介绍

Mars2D 平台开发的 SDK 所有类及方法均以 mars2d 开头命名，`mars2d.*` 为平台框架的默认命名空间，所有用到的类及方法都是通过`mars2d.*`来调用。 开发时尽量不要使用 `mars2d` 来定义自己的变量或类名、方法名，避免框架无法正常使用。

### 3.1 SDK主类库
| 包名 | 当前版本 | CDN地址 | 下载量|备注|
| :-----: | :-----: | :----: |:----: |:----: |
| mars2d |  | [cdn](https://www.jsdelivr.com/package/npm/mars2d) | |Mars2D主类库|

### 3.2 SDK插件库（可选）
部分插件没有合并在主库中，方便不同场景下按需使用
| 包名 | 当前版本 | CDN地址 | 下载量|备注|
| :-----: | :-----: | :----: |:----: |:----: |
| mars2d-echarts	 |  | [cdn](https://www.jsdelivr.com/package/npm/mars2d-echarts) | |echarts可视化插件|
| mars2d-mapv	 |  | [cdn](https://www.jsdelivr.com/package/npm/mars2d-mapv) | |mapv可视化插件|
| mars2d-esri	 |  | [cdn](https://www.jsdelivr.com/package/npm/mars2d-esri) | |esri服务插件|
| mars2d-widget		 |  | [cdn](https://www.jsdelivr.com/package/npm/mars2d-widget) | |原生js下的widget模块化插件|

### 3.3 SDK的架构
少数包放在二级包下，清单如下：
```js
mars2d.layer.*      //图层,比如 mars2d.layer.GraphicLayer
mars2d.graphic.*    //矢量对象,比如 mars2d.graphic.Marker
mars2d.control.*    //控件 
mars2d.query.*      //服务查询
mars2d.thing.*      //管理或分析
```
其他类都在mars2d一级包下面

```js
mars2d.*  //比如 mars2d.PointUtil
```

## 3. 功能示例
见[下载运行功能示例]()章节介绍。

## 4. 项目模板
见[基础项目Vue版介绍]()章节介绍。