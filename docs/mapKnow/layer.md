---
title: 地图图层layer
date: 2022-09-22 15:39:13
---

<h3> 地图图层 Layer </h3>

地图内是由各种不同的图层来叠加显示，形成整个二维地图场景的。 图层是地图中很重要的概念，也是平台内很重要的组成部分。<br />
![配置图][1]

## 1. 图层类

平台的所有图层类都继承于[L.Layer 类](http://mars2d.cn/api/leaflet/reference_cn.html#layer) ，图层类均在`mars2d.layer.*`命名空间下面。 图层清单请访问[LayerType 类](http://mars2d.cn/api/global.html#LayerType)

下面我们演示创建一个图层对象 ，并调用 map.addLayer 添加到地图上。

```js
//用工厂方法，指定type来创建图层对象
var layer = mars2d.LayerUtil.create({
  type: "tile",
  url: "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
  subdomains: "abc",
});
map.addLayer(layer);

//直接创建具体类型的图层对象
var tileLayer = new mars2d.layer.TileLayer({
  url: "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
  subdomains: "abc",
});
map.addLayer(tileLayer);
```

图层主要分以下几大类 <br /> 1.栅格瓦片图层[TileLayer](http://mars2d.cn/api/TileLayer.html) 等 ，是地图场景的基础皮肤 <br /> 2.矢量数据图层[GraphicLayer](http://mars2d.cn/api/GraphicLayer.html) <br /> 3.图层组[GroupLayer](http://mars2d.cn/api/GroupLayer.html)，方便组合管理<br /> 4.其他可视化图层

### 1.1. 在 config.json 构造地图时涉及到的图层

|      参数名       | 类型  |                       参数 API                        |   说明   |                            支持的类                            |
| :---------------: | :---: | :---------------------------------------------------: | :------: | :------------------------------------------------------------: |
|     basemaps      | Array | [参数](http://mars2d.cn/api/Map.html#.basemapOptions) | 底图图层 | [TileLayer](http://mars2d.cn/api/TileLayer.html)及其他瓦片图层 |
| operationallayers | Array |  [参数](http://mars2d.cn/api/Map.html#.layerOptions)  | 底图图层 |  [LayerType 清单](http://mars2d.cn/api/global.html#LayerType)  |

## 2. 常用图层介绍

### 2.1 栅格瓦片图层

见[栅格瓦片]()图层章节介绍。

### 2.2 矢量数据图层

见[矢量数据图层]()章节介绍。

### 2.3 Group 图层组说明

为了方便图层控制，平台提供了`type:'group'`的图层组[GroupLayer 类](http://mars2d.cn/api/GroupLayer.html)图层，目前主要在构造 Map 时传入`basemaps`或`layers`参数中使用，可以用于：

- （1）将多个图层组合起来方便控制（比如将 卫星底图 和 文字注记层 放在一起控制管理）；

```js
{
 "name": "离线地图",
 "type": "group",
 "layers": [ //多个图层放在一起控制管理
   {
     "name": "全国基础数据",
     "type": "tile",
     "url": "http://data.mars2d.cn/tile/googleImg/{z}/{x}/{y}.jpg",
     "minZoom": 0,
     "maxZoom": 12
   },
   {
     "name": "具体项目数据",
     "type": "tile",
     "url": "http://data.mars2d.cn/tile/googleImg/{z}/{x}/{y}.jpg",
     "minZoom": 12,
     "maxZoom": 18,
     "rectangle": { "xmin": 116.33236, "xmax": 118.183557, "ymin": 31.143784, "ymax": 32.565035 }
   }
 ]
},
```

- （2）图层管理 的图层分组节点（虚拟节点）。

```js
var map = new mars2d.Map("mars2dContainer", {
  basemaps: [
    { id: 10, name: "地图底图", type: "group" }, //图层管理 的图层分组节点（虚拟节点）
    {
      pid: 10,
      name: "天地图卫星",
      icon: "img/basemaps/tdt_img.png",
      type: "tdt",
      layer: "img_d",
      key: ["9ae78c51a0a28f06444d541148496e36"],
      show: true,
    },
    {
      pid: 10,
      name: "本地单张图片",
      icon: "img/basemaps/offline.png",
      type: "image",
      url: "img/tietu/world.jpg",
    },
  ],
  layers: [{ id: 99, name: "数据图层", type: "group" }],
});
```

## 2.2 其他可视化图层

主要提供一些与 echarts、heatmap、mapv 等其他可视化组件结合通过 canvas 绘制的一些图层。

[1]: ../public/image/map-layer.jpg
