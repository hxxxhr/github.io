---
title: 依赖库Leaflet
date: 2022-09-22 15:39:13
---

<h3> 核心依赖库 Leaflet 介绍 </h3>

[Leaflet](https://leafletjs.com/)是一个开源的 JavaScript 库，对移动端友好且有很好的交互性。大小仅仅只有 33 KB， 同时具有大多数地图所需要的特点。 Leaflet 设计的非常简单易懂, 同时具有很好的性能和易用性。 它在桌面端和移动端都工作的相当高效，并有大量的插件用于扩张 Leaflet 的功能。

## 1. Leaflet 的作者(个人)：Vladimir Agafonkin

Vladimir Agafonkin 是一名软件工程师。他创建了 Leaflet，它是交互式网络地图的第一大库，并维护了 40 多个其他开源项目，重点是算法、计算几何和性能。目前作者就职于 Mapbox 公司。

联系作者：agafonkin@gmail.com

##### 他的自我介绍

我也是一名音乐家。我用 Obiymy Doschu 写歌、弹吉他和唱歌。如果您喜欢带有弦乐编曲的优美、动人、多层次的摇滚音乐，请查看我们的上一张专辑。

我是美丽的 7 岁双胞胎女孩的父亲，我婚姻幸福，住在乌克兰基辅。我喜欢烘焙、摄影、力量训练、武术、阅读科幻小说和探索安静的公园。您可以在 Instagram、Twitter 和 Facebook 上找到我的生活花絮。

##### 他的相关文章

- [How I built a wind map with WebGL]()
- [A dive into spatial search algorithms]()
- [MARTINI: Real-Time Terrain Mesh Generator]()
- [Rendering big geodata on the fly with GeoJSON-VT]()
- [Fast geodesic approximations with Cheap Ruler]()
- [Clustering millions of points on a map with Supercluster]()
- [A web map from scratch]()
- [Kinematics of reverse-angle parking]()
- [Introducing heatmaps in Mapbox GL]()
- [A new algorithm for finding a visual center of a polygon]()
- [Where Kyiv winters as snowy as I remember as a kid?]()
- [How to give awesome public talks]()

## 2. Leaflet 官方网站

建议大家将 Leaflet 官网的博客都读一遍，博客大概分为三类，主要是技术类，比如性能优化，调度算法等，一类是定期的新版本特性，能够了解 Leaflet 新功能和新特性，还有一类是大事记，比较轻松，不妨感受一下 Leaflet 的团队文化。<br />
[Leaflet 官网](https://leafletjs.com/)&nbsp;&nbsp;[官方博客](https://leafletjs.com/blog.html)

## 3. Leaflet 的源码

Leaflet 遵循 BSD-2-Clause License 许可开源协议，可以免费的用于商业和非商业用途，无论是个人还是商业用途，可以任意修改源码不用开源，需要声明该产品使用了 Leaflet。<br />
[GitHub 开源地址](https://github.com/Leaflet/Leaflet)&nbsp;[官方教程](https://leafletjs.com/examples.html)&nbsp;[API 文档](http://mars2d.cn/api/leaflet/reference_cn.html)<br />
Leaflet 目前已经成熟近十多年，非常稳定，很少更新，当前最新版本是：<br />
版本：（发布时间：）[下载 ZIP 包]() 或 [ Gihub releases 列表](https://github.com/Leaflet/Leaflet/releases)<br />
Leaflet 架构图，建议使用前先熟悉整体架构图，以便能够快速使用。 [新窗口查看大图]((/dev/img/jiagou/leaflet.png) ![架构图]((/dev/img/jiagou/leaflet.png)

## 4. Mars2D 与 Leaflet 的关系

Mars2D 很多类都是直接继承 Leaflet 的类来扩展使用的，比如`mars2d.Map extends L.Map`,两个 SDK 是互相独立解耦的，可以理解为 mars2d 对 leaflet 做了扩展和提升，并重新封装、增加了很多功能。

以下是我们列出的继承关系清单，如果你对 leaflet 本身 api 比较熟悉，那么对应的我们扩展的类内的 api 都是包含 leaflet 本身的接口方法的，可以直接平滑兼容使用。
| leaflet 类 | mars2d 类 | 说明 |
| :--------: | :-------------------------------------------------------------------------------------------------: | :----------------: |
| L.Map | [mars2d.Map](http://mars2d.cn/api/Map.html) | 地图主对象 |
| L.TileLayer | [mars2d.layer.TileLayer](http://mars2d.cn/api/TileLayer.html) | XYZ 瓦片 图层 |
| L.TileLayer.WMS | [mars2d.layer.WmsLayer](http://mars2d.cn/api/WmsLayer.html) | WMS 服务 图层 |
| L.ImageOverlay | [mars2d.layer.ImageLayer](http://mars2d.cn/api/ImageLayer.html) | 单张图片 图层|
| L.FeatureGroup | [mars2d.layer.GraphicLayer](http://mars2d.cn/api/GraphicLayer.html) | 矢量数据 图层 |
| L.LayerGroup | [mars2d.layer.GroupLayer](http://mars2d.cn/api/GroupLayer.html) | 图层组 |
| L.Marker | [mars2d.graphic.Marker](http://mars2d.cn/api/Marker.html) |图标点 矢量对象 |
| L.CircleMarker | [mars2d.graphic.Point](http://mars2d.cn/api/Point.html) | 像素圆点 矢量对象 |
| L.Polyline | [mars2d.graphic.Polyline](http://mars2d.cn/api/Polyline.html) | 线 矢量对象 |
| L.Polygon | [mars2d.graphic.Polygon](http://mars2d.cn/api/Polygon.html) |面 矢量对象 |
| L.Circle | [mars2d.graphic.Circle](http://mars2d.cn/api/Circle.html) | 圆 矢量对象 |
| L.Rectangle | [mars2d.graphic.Rectangle](http://mars2d.cn/api/Rectangle.html) |矩形 矢量对象 |

### 4.1 mars2d 中如何使用 Leaflet

开发时如果需要 Leaflet 的内部接口可以直接使用`L.*`来调用即可，vue 等环境中也可以通过`mars2d.L.*` 来获取 Leaflet 相关对象。
