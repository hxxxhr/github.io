---
title: Mars2D介绍
date: 2022-09-22 15:39:13
---

<h3> Mars2D 介绍 </h3>

## Mars2D 是什么？

`Mars2D地理信息平台` 是[火星科技](http://marsgis.cn/)研发的一款免费的二维地图客户端开发平台，基于[Leaflet](https://leafletjs.com/)优化提升与 B/S 架构设计，支持多行业扩展的轻量级高效能 GIS 开发平台，提供了全新的大数据可视化、实时流数据可视化功能，通过本平台可快速实现浏览器和移动端上美观、流畅的地图呈现与空间分析，完成平台在不同行业的灵活应用。

功能体验: [Mars2D 官网](http://mars2d.cn/)<br />
开发资料: [API 文档](http://mars2d.cn/api/Map.html)&nbsp;&nbsp;[开发教程](http://mars2d.cn/dev/guide/)<br />
开源代码: [Github 开源代码](https://github.com/marsgis/mars2d)&nbsp;&nbsp;[Gitee 开源代码(国内)](https://gitee.com/marsgis/mars2d)

## 反馈问题及技术交流

> 在阅读教程时，如有`任何问题`或`建议意见`可以随时反馈给我们 ，谢谢！

## Mars2D 的发展历程

`2017年9月`发布第一个版本，至今已发展 5 年多，一直在优化和迭代新版本和功能，进步永不停歇。

## Mars2D 在 GIS 体系中的定位

GIS 的三层划分（数据、服务、客户端）：
![配置图][1]
Mars2D 属于“客户端”层面的 “Web 浏览器端”+“二维” 的应用开发平台

## Mars2D 的整体组成

平台主要由： **SDK 类库、功能示例、项目模板**共 3 大部分组成。这些资料均免费开放，并可下载离线本地使用。
| 组成 | 获取方式 | 相关资料 | 备注 |
| :--------: | :-----: | :----: | :----: |
| SDK 类库 | [免费下载]() | [API 文档](http://mars2d.cn/apidoc.html#Map) |免费无限制使用|
| 功能示例 | [Github 开源]() 、[在线体验](http://marsgis.cn/example.html) | [功能清单](http://mars2d.cn/example.html)(页面左下侧)|包含 400+功能示例及源码|
| 项目模板 | [Github 开源]() | |面向不同技术栈做的项目模板|

> 正常开发流程：免费下载 SDK、参考开源的“功能示例、项目模板”进行开发即可。

## Mars2D 涉及的付费服务

考虑到我们团队的长久生存及可持续发展，我们也提供几项付费的部分内容和增值服务，付费可以让我们产品做得更好、更长久，也感谢您的支持和选择。
| 购买模块 | 相关说明 | 交付资料 |
| :--------: | :-----: | :----: |
| [项目模板](http://mall.marsgis.cn/#/product-list?platform=mars2d&category=project&type=) | 提供一些[“样板房”项目](http://mars2d.cn/template.html),更换数据加上业务即可快速项目交付 | 项目源码包（除 SDK 外） |
| [技术指导(按月)](http://mall.marsgis.cn/#/product/service-monthly) | 建立一对一“微信群”，按月提供相关技术咨询及指导服务 |提供咨询服务 |
| [SDK 类库码源](http://mall.marsgis.cn/#/product/mars2d-sdkcode) | 正常开发及项目应用均不需要 SDK 源码，如特殊需要，可以选购 |SDK 源码包|

> 所有价格公开透明、明码标价，所有客户一视同仁的方式，如有需要[自行选购](http://mall.marsgis.cn/#/product-list?platform=mars2d&category=&type=)

## Mars2D 可以做什么？

通过 Mars2D 提供的 Javascript API，可以实现以下功能：

### 1.  地图场景可视化

提供多种时空数据，包括影像、矢量、大数据等各类数据的叠加融合、支持包括 OGC、MapBox、ArcGIS、PGIS 等标准服务与数据的接入加载。逼真地呈现多种类型的地理信息可视化地图场景。
![配置图][2] 
### 2. 多坐标系支持

提供了 ESPG3857、ESPG4326、ESPG4490 等各类坐标系或任意 proj4 定义的二维平面坐标系场景。提供了瓦片底图纠偏加偏、矢量数据加偏纠偏等坐标系的转换应用支持。
![配置图][3] 
### 3. 数据标绘与管理

提供支持包括图标点、运动点、文本、DIV 点、圆、线、面、矩形、图片、军事标绘等多种矢量数据的标绘的使用与管理，提供多图层的标绘管理、提供矢量数据的统一风格的 API 调用和 style 样式设置，可导出导入标准 GeoJSON 格式数据
![配置图][4] 
### 4. 地图工具控件

提供了 Popup 鼠标单击弹窗、Tooltip 鼠标移入弹窗、右键菜单的内置工具，可以方便的对地图、图层、数据进行绑定和交互。提供了状态栏、鱼骨导航、鹰眼地图、比例尺、分屏比对、卷帘比对等多种场景工具。
![配置图][5] 
### 5. 分析及可视化

提供了包括距离、面积、角度等多种量算分析功能；提供缓冲分析、最近点、离散点等值线面等客户端分析功能；提供 Mapv、Echarts 等可视化库的引入呈现。
![配置图][6] 
### 6. 高度兼容第三方

提供对 ArcGIS、OGC、SuperMap、各类在线地图、百度高德服务等各类第 3 方地图与服务的全面支持。提供对 truf、heatmap、mapv、echarts 等常用可视化库和开源库的功能接入集成，避免用户的重复学习和成本投入。提供对所有基于 Leaflet 的第 3 方开发包和插件的接入支持，具备灵活的兼容性和功能解耦。
![配置图][7]

[1]: ../public/image/start-architecture-gis.jpg
[2]: ../public/image/gn-1.jpg
[3]: ../public/image/gn-2.jpg
[4]: ../public/image/gn-3.jpg
[5]: ../public/image/gn-4.jpg
[6]: ../public/image/gn-6.jpg
[7]: ../public/image/gn-7.jpg
