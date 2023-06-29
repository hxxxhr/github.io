---
title: 地图场景 Map
date: 2022-09-22 15:39:13
---

<h3> 地图场景 Map </h3>

我们使用 DIV 渲染后看到的二维地图对象，我们统称为地图场景，在 Mars2D 中对应是[mars2d.Map 类](http://mars2d.cn/api/Map.html)，这是一切的开始，所有相关控制的起点。掌握学习好了 mars2d.Map 类 基本也就掌握好了 Mars2D。

## 1. 地图场景初始化

在使用 mars2d 时你可以根据需要对默认参数进行配置，如果你只是想得到默认的效果，你仅需要写下面一行代码即可：

```js
var map = new mars2d.Map("mars2dContainer");
```

当你需要对地图进行配置的时候，mars2d 提供了详细的参数配置方案（如下），你可以暂时不需要完全理解各个参数的意义，在接下来的后续教程中我们会详细解释相关参数。

```js
// 创建二维地图场景
var map = new mars2d.Map("mars2dContainer", {
  zoom: 13,
  center: { lng: 117.240601, lat: 31.827107 },
  minZoom: 3,
  maxZoom: 18,
  control: {
    scale: true,
    locationBar: {
      crs: "CGCS2000_GK_Zone_3",
      template:
        "<div>经度:{lng}</div> <div>纬度:{lat}</div> <div>横{crsx}  纵{crsy}</div> <div>层级:{level}</div>",
    },
    zoom: { position: "bottomright" },
    toolBar: { position: "bottomright" },
    layers: { position: "topleft" },
  },
  basemaps: [
    { name: "高德地图", type: "gaode", layer: "vec", show: true },
    { name: "高德地图", type: "gaode", layer: "img" },
  ],
  operationallayers: [{ name: "经纬网", type: "graticule" }],
});
```

## 2. mars2d.Map 类 参数说明

|   参数名   |         类型          |                     参数解释                     |
| :--------: | :-------------------: | :----------------------------------------------: |
|     id     | String 或 HTMLElement |            地图 div 容器的 id 或 dom             |
| mapOptions |        Object         | [API 文档 Map 类](http://mars2d.cn/api/Map.html) |

### 2.1 使用 json 配置文件记录参数快速创建地图场景

我们在不同项目应用时，可能是同一套代码，仅仅只是地图的配置参数不一样， 那么我们可以把地图的参数保存在后端服务动态生成或存储在 json 文件，将地图场景参数化。 我们可以直接加载使用不同 json 数据来快速创建各种地图场景。<br />
(1)通过任意方式去读取 json 文件，下面只是一种演示的方式

```js
let configUrl = "http://mars2d.cn/config/config.json";
mars2d.axios
  .get(configUrl)
  .then(function (response) {
    //构建地图
    window.initMap(response.data.map);
  })
  .catch(function (error) {
    console.log("加载JSON出错", error);
  });
```

(2)读取到的 json 对象传入`new mars2d.Map`方法创建地图

```js
function initMap(mapOptions) {
  //创建二维地图场景
  var map = new mars2d.Map("mars2dContainer", mapOptions);
}
```

`config.json`中的属性参数是与 mapOptions 参数相同。

## 3. 默认视角参数

你如果想设置进入地图页面时，自定义默认视角中心点和地图层级的话，你可以在创建地图时设置[zoom 和 center 参数](http://mars2d.cn/api/Map.html#.mapOptions)值：

```js
var map = new mars2d.Map("mars2dContainer", {
  zoom: 13,
  center: { lng: 117.240601, lat: 31.827107 },
});
```

也可以通过[map.getView](http://mars2d.cn/api/Map.html#getView)方法获取当前的地图视角后拷贝设置到 config.json 中。或者在地图空白区域右键菜单中【查看当前视角】来快捷获取下参数值。

## 4.控件

在创建地图的时候，你可以在配置项中通过`control`对控件中的功能组件进行相应的配置，支持的参数，参考[control 参数说明](http://mars2d.cn/api/Map.html#.controlOptions)

```js
var map = new mars2d.Map("mars2dContainer", {
  control: {
    //以下是Leaflet所支持的控件相关的options
    scale: true,
    zoom: { position: "bottomright" },
    layers: { position: "topleft" },

    //以下是mars2d.control定义的控件
    defaultContextMenu: true, //右键菜单
    locationBar: {
      crs: "CGCS2000_GK_Zone_3",
      template:
        "<div>经度:{lng}</div> <div>纬度:{lat}</div> <div>横{crsx}  纵{crsy}</div> <div>层级:{level}</div>",
    },
    toolBar: { position: "bottomright" },
  },
});
```

## 5. 栅格瓦片底图

栅格底图就是我们浏览地图最重要的底层参照物, 在创建地图的时候，你可以通过[basemapse](http://mars2d.cn/api/Map.html#.basemapOptions)添加栅格瓦片底图（允许添加多个，添加多个图层后可在底图控制器中切换），一般我们可以设置 basemaps 数组中默认显示的底图的 show 参数为 true

```js
var map = new mars2d.Map("mars2dContainer", {
  basemaps: [
    {
      name: "天地图电子",
      type: "group",
      layers: [
        { name: "底图", type: "tdt", layer: "vec_d" },
        { name: "注记", type: "tdt", layer: "vec_z" },
      ],
      show: true,
    },
    { name: "天地图卫星", type: "tdt", layer: "img" },
    {
      name: "OSM地图",
      type: "xyz",
      url: "http://a.tile.openstreetmap.org/{z}/{x}/{y}.png",
    },
    { name: "高德地图", type: "gaode", layer: "vec" },
  ],
});
```

### 7.1 底图的图层参数

栅格底图所支持的图层类型，只能是瓦片图层，均是继承自[ BaseTileLayer 类](http://mars2d.cn/api/BaseTileLayer.html)的图层类型。basemaps 参数为一个数组，其中各图层的参数支持：<br />
basemaps 参数说明
| 参数名 | 类型 | 参数解释 |
| :-----: | :-----: | :----: |
| type | String | 图层类型 |
| name| String | 用于图层控件展示的名称 |
| 其他参数 | | 每个 type 都有一些个性化的不同参数，参考各 type 对应的图层类构造参数 |

### 7.2 底图的 type 图层类型

basemaps 所支持的 type 目前包括：
| 类型名 | 说明 | 对应的图层类 | 备注|
| :-----: | :-----: | :----: |:----: |
| image | 单张图片 | [mars2d.layer.ImageLayer](http://mars2d.cn/api/ImageLayer.html) |
| tile | 标准金字塔地图 | [mars2d.layer.TileLayer](http://mars2d.cn/api/TileLayer.html) |
| wms | OGC WMS 标准服务 | [mars2d.layer.WmsLayer](http://mars2d.cn/api/WmsLayer.html) |
| wmts | OGC WMTS 标准服务 | [mars2d.layer.WmtsLayer](http://mars2d.cn/api/WmtsLayer.html) |
| arcgis | ArcGIS 标准服务 | [mars2d.layer.ArcGisLayer](http://mars2d.cn/api/ArcGisLayer.html) |
| arcgis_cache | ArcGIS 切片 | [mars2d.layer.ArcGisCacheLayer ](http://mars2d.cn/api/ArcGisCacheLayer.html) |
| tdt | 天地图 | [mars2d.layer.TdtLayer](http://mars2d.cn/api/TdtLayer.html) |在线地图|
| gaode | 高德 | [mars2d.layer.GaodeLayer](http://mars2d.cn/api/GaodeLayer.html) |在线地图|
| baidu | 百度 | [mars2d.layer.BaiduLayer](http://mars2d.cn/api/BaiduLayer.html) |在线地图|
| tencent | 腾讯 | [mars2d.layer.TencentLayer ](http://mars2d.cn/api/TencentLayer.html) |在线地图|
| osm | OpenStreetMap（OSM）| [mars2d.layer.OsmLayer](http://mars2d.cn/api/OsmLayer.html) |国外在线地图|
| mapbox | Mapbox 地图 | [mars2d.layer.MapboxLayer ](http://mars2d.cn/api/MapboxLayer.html) |国外在线地图|
| google | 谷歌地图 | [mars2d.layer.GoogleLayer](http://mars2d.cn/api/GoogleLayer.html) |目前已被封|

### 7.3 更新底图

创建完成底图后，需要切换底图或获取当前的底图，可以根据 config 配置的 id 或 name 属性，显示指定的底图，如：

```js
//获取或设置当前显示的底图，设置时可以传入图层id或name
map.basemap = "离线地图";

//获取配置的底图数组
let arr = map.getBasemaps();
```

## 8. 可以叠加的图层

在二维地图中，你可以在地图上添加多个图层来叠加显示。 在创建地图时，可以传[operationallayers 参数](http://mars2d.cn/api/Map.html#.layerOptions) 来将当前项目内常用的图层一次性配置好，代码中去按需使用。

```js
var map = new mars2d.Map("mars2dContainer", {
  operationallayers: [
    { name: "实时路况", type: "gaode", layer: "time" },
    { name: "经纬网", type: "graticule", show: true },
  ],
});
```

### 8.1 可以叠加的图层

operationallayers 配置支持的 basemaps 所有支持的瓦片图层，还支持所有矢量覆盖物数据的加载，支持的 type 类型，请参考[图层类型](http://mars2d.cn/api/global.html#LayerType)，每个 type 都有一些个性化的不同参数，参考各 type 对应的图层类构造参数。

### 8.2 对图层的控制

可以通过[ let layer = map.getLayer(1987,'id')](http://mars2d.cn/api/Map.html#getLayer)来获取 config.json 中配置的对应 id 为 1987 的图层对象。

为了方便理解 getLayer 获取到的对象，layers 配置的图层与下面的创建方式是等价的，

```js
//用工厂方法创建图层
var layerImg = mars2d.LayerUtil.create({
  type: "image",
  url: "//data.mars2d.cn/file/img/radar/201906211112.PNG",
  rectangle: { xmin: 73.16895, xmax: 134.86816, ymin: 12.2023, ymax: 54.11485 },
  alpha: 0.7,
});
map.addLayer(layerImg);
```

在 Map 创建后可以通过[addLayer](http://mars2d.cn/api/Map.html#addLayer)和[removeLayer](http://mars2d.cn/api/Map.html#removeLayer)方法来控制图层的加载和删除。

更多方法可以在[图层类型](http://mars2d.cn/api/global.html#LayerType)找到对应的 图层类 后，查阅对应类的属性或方法进行进一步控制及管理图层。
