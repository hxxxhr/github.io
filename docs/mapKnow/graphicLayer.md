---
title: 矢量图层
date: 2022-09-22 15:39:13
---

<h3> 矢量图层 </h3>

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

地图场景中，地形和栅格来组成了二维的基础，但更多的业务还是需要 点线面等矢量数据来充实, 这就是我们的矢量数据图层。
![配置图][1] <br />

## 1. 图层类型清单

当前主要使用的矢量图层，是指[GraphicLayer](http://mars2d.cn/api/TileLayer.html)类及其子类对象。矢量图层中可以通过 addGraphic 方法来加入[各类型](http://mars2d.cn/api/global.html#GraphicType)的[矢量数据](http://mars2d.cn/api/BaseGraphic.html)来组成。
目前常用的矢量图层有以下类型：
| type 类型名 | 图层说明 | 对应的图层类 | 备注|
| :-----: | :-----: | :----: |:----: |
| graphic | 矢量数据图层 | [mars2d.layer.GraphicLayer](http://mars2d.cn/api/GraphicLayer.html) | |
| geojson | GeoJSON 图层 | [mars2d.layer.GeoJsonLayer](http://mars2d.cn/api/GeoJsonLayer.html)| |
| wfs | OGC WFS 图层 | [mars2d.layer.WfsLayer](http://mars2d.cn/api/WfsLayer.html) | |
| arcgis_feature | ArcGIS WFS 图层 | [mars2d.layer.ArcGisFeatureLayer ](http://mars2d.cn/api/ArcGisFeatureLayer.html)| |

## 2. 矢量图层的创建及使用

### 2.1 快速开始(初始化 new Map 时传入)

在构造 Map 时传入`layers`参数中配置相关图层，并设置`show:true`后进行初始化加载矢量图层

```js
var map = new mars2d.Map("mars2dContainer", {
  layers: [
    {
      id: 1987,
      type: "geojson",
      name: "示例数据",
      url: "//data.mars2d.cn/file/geojson/mars2d-draw.json",
      popup: "{name}",
      show: true,
    },
  ],
});
//可以通过下面方法获取到配置的图层
let geojsonLayer = map.getLayer(1987, "id");
```

### 2.2 代码中创建图层

可以有下面 2 种方式来创建图层对象：

```js
//用工厂方法，指定type来创建图层对象
var wfsLayer = mars2d.LayerUtil.create({
  type: "geojson",
  url: "http://data.mars2d.cn/file/geojson/areas/100000_full.json",
  symbol: {
    type: "polyline",
    styleOptions: {
      color: "#ff0000",
      width: 3,
    },
  },
});
map.addLayer(wfsLayer);

//直接创建具体类型的图层对象
var geoJsonLayer = new mars2d.layer.GeoJsonLayer({
  url: "http://data.mars2d.cn/file/geojson/areas/100000_full.json",
  symbol: {
    type: "polyline",
    styleOptions: {
      color: "#ff0000",
      width: 3,
    },
  },
});
map.addLayer(geoJsonLayer);
```

> 在 Map 创建后可以通过[map.addLayer](http://mars2d.cn/api/Map.html#addLayer)和[map.removeLayer](http://mars2d.cn/api/Map.html#removeLayer)方法来控制图层的加载和删除。

> 在图层本身也有[ layer.addTo](http://mars2d.cn/api/BaseLayer.html#addTo)和[layer.remove](http://mars2d.cn/api/BaseLayer.html#remove)2 个方法支持添加或移除图层。

## 3 常用矢量图层类

### 3.1 GraphicLayer

矢量数据图层

```js
//创建矢量数据图层
let graphicLayer = new mars2d.layer.GraphicLayer();
map.addLayer(graphicLayer);

//加载数据到矢量图层
var graphic = new mars2d.graphic.Marker({
  latlng: [31.854628, 117.245425],
  style: {
    image: "img/marker/mark1.jpg",
    width: 32,
    height: 44,
  },
});
graphicLayer.addGraphic(graphic);
```

运行效果

<div style="height:410px;position:relative;" data-v-627b1480><iframe height="100%" width="100%" scrolling="yes" title="mars2d" src="http://mars2d.cn/editor-vue.html?id=layer-graphic/basis/graphicLayer&amp;full=1" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="allowfullscreen" data-v-627b1480></iframe><a class="toSee" href="http://mars2d.cn/editor-vue.html?id=layer-graphic/basis/graphicLayer&code=1" target="_blank">新窗口查看</a></div>

### 3.2 GeoJsonLayer

GeoJSON 是适合于 Web 下对各种地理数据结构进行编码的格式，基于 Javascript 对象表示法的地理空间信息数据交换格式。与普通 json 文件格式区别在于对其属性及组成由一定规范。

> GeoJSON 将所有的地理要素分为 Point、MultiPoint、LineString、MultiLineString、Polygon、MultiPolygon、GeometryCollection。首先是将这些要素封装到单个的 geometry 里，然后作为一个个的 Feature（要素）；要素放到一个要素集合里构成。

GeoJSON 是平台很重要的数据格式，当前平台内矢量数据均支持导出 GeoJSON 和导入 GeoJSON 格式。

```js
let geoJsonLayer = new mars2d.layer.GeoJsonLayer({
  name: "省界线",
  url: "http://data.mars2d.cn/file/geojson/sheng-line.json",
  symbol: {
    //可以通过配置symbol参数来指定渲染的矢量数据类型和样式。
    type: "polyline",
    styleOptions: {
      color: "#ffffff",
      opacity: 0.8,
      width: 2,
    },
  },
});
map.addLayer(geoJsonLayer);
```

> 常用 geojson 相关网站：
>
> - 在线生成 GeoJSON：[http://geojson.io/](http://geojson.io/)
> - SHP 转 GeoJSON：[https://mapshaper.org/](https://mapshaper.org/)
> - 中国行政区划 GeoJSON 下载：[http://datav.aliyun.com/tools/atlas/](http://datav.aliyun.com/portal/school/atlas/area_selector)

### 3.1 WFS 图层

平台支持 通过[WfsLayer 类](http://mars2d.cn/api/WfsLayer.html)来加载 OGC WFS(如 GeoServer)服务 、通过[ArcGisFeatureLayer 类](http://mars2d.cn/api/ArcGisFeatureLayer.html)来加载 ArcGIS Server 服务发布的矢量数据的加载。

```js
//OGC WFS
var wfsLayer = new mars2d.layer.WfsLayer({
  name: "规划面",
  url: "http://server.mars2d.cn/geoserver/mars/ows",
  typeNS: "mars",
  typeName: "hfgh",
  minZoom: 16,
  geometryField: "the_geom",
  symbol: {
    type: "polygon",
    styleOptions: {
      fillOpacity: 0.6,
      fillColor: "#0000FF",
      outline: false,
    },
    styleField: "用地编号",
    styleFieldOptions: styleForType,
  },
  popup: "all",
});
map.addLayer(wfsLayer);

//ArcGIS WFS
var wfsLayer = new mars2d.layer.ArcGisWfsLayer({
  name: "合肥市",
  url: "http://server.mars2d.cn/arcgis/rest/services/mars/hefei/MapServer/20",
  popup: "all",
  symbol: {
    styleOptions: {
      iconUrl: "img/marker/fx1.jpg",
      iconSize: [30, 30],
      iconAnchor: [15, 15],
      popupAnchor: [0, -15],
    },
  },
  popup: "all",
});
map.addLayer(wfsLayer);
```

> 可以通过配置 symbol 参数来指定渲染的矢量数据类型和样式。

[1]: ../public/image/map-graphic.jpg
