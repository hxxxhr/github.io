---
title: 栅格瓦片图层
date: 2022-09-22 15:39:13
---

<h3> 栅格瓦片图层 </h3>

前面我们说到地形是地图场景的"骨骼"，栅格瓦片图层就是我们浏览二维能感知的"皮肤"了，通常我们叠加的是各种卫星影像或瓦片数据。<br />
![配置图][1] <br />
Mars2D 支持多种服务来源的高精度影像地图数据的加载和渲染。图层支持排序和透明混合，支持设置影像图层相关属性，比如透明度等。

## 1. 栅格瓦片介绍

目前我们所见的所有地图底图服务都是瓦片地图的方式发布的。瓦片地图金字塔模型是一种多分辨率层次模型，从瓦片金字塔的底层到顶层，分辨率越来越低，但表示的地理范围不变。<br />

当我们建立好了影像金字塔后，前端再请求地图时，则将只是在切好的瓦片缓存中，找到对应级别里对应的瓦片即可。然后在前端将这些请求到的瓦片拼接出来，便可以得到用户需要的级别下的可视范围内的瓦片了。
![配置图][2]
瓦片的特征

- 瓦片分辨率通常为 256×256
- 最小的地图等级是 0，此时世界地图只由一张瓦片组成
- 具有唯一的瓦片等级（Z）和瓦片行列坐标编号（X, Y）
- 瓦片等级越高，组成世界地图的瓦片数越多，可以展示的地图越详细
- 某一瓦片等级地图的瓦片是由低一级的各瓦片切割成的 4 个瓦片组成，四叉树结构形成了瓦片金字塔

### 1.1 为什么要出现瓦片金字塔这个概念

现在，我假设我们的服务器上有一个 1G 的影像，需要将其在前端进行显示。我们传统的做法就是首先将服务器中的 1G 影像下载到前端，然后浏览器加载渲染出图。但是大家想想，首先客户端下载 1G 的影像需要的时间一定是个漫长的过程，其次浏览器加载这么大的文件也多半会导致其崩溃。而最重要的一个问题是，我们的需求仅仅是浏览全图中的某一个区域下的某几个级别，现在却将全图下载完毕了，而这同样还导致了数据的不安全性（下载到本地），同时我们的每一次放大和缩小以及拖拽都将会使浏览器花上足够长的时间去渲染。 可见，传统的方式是不符合实际需求的。到后来，又有了新的解决方法，比如 arcgis 的 IMS 版本中提出了动态出图的概念。也就是当前端发出的请求里包含了需要显示的范围、显示窗口的大小等参数后，后台动态的在原始数据中切出一个符合需求的瓦片，然后将这个数据返回给前台，并且在服务器中对这个瓦片做缓存。但是，这个方法前端出图依旧很慢，并且使地图服务器的压力过大。终于，我们的瓦片金字塔解决方案出现了。

### 1.2 栅格瓦片数据来源

- 直接访问在线互联网服务，如百度、高德、腾讯、谷歌等
- 下载在线互联网服务到本地离线使用，可以[在线地图的下载和使用]()
- 对源数据发布为标准服务加载，如 wms、wmts、arcgis 等
- 对源数据进行切片，可以参考[影像图切片处理及加载]()

## 2. 图层类型清单

栅格瓦片图层，大部分都是继承自[TileLayer](http://mars2d.cn/api/TileLayer.html)类的子类对象。
目前有以下类型：
| 类型名 | 说明 | 对应的图层类 | 备注|
| :-----: | :-----: | :----: |:----: |
| image | 单张图片 | [ImageLayer](http://mars2d.cn/api/ImageLayer.html) |通用标准 |
| tile 或 xyz | 标准金字塔地图 | [TileLayer](http://mars2d.cn/api/TileLayer.html)|通用标准 |
| wms | OGC WMS 标准服务 | [WmsLayer](http://mars2d.cn/api/WmsLayer.html)|通用标准 |
| wmts | OGC WMTS 标准服务 | [WmtsLayer](http://mars2d.cn/api/WmtsLayer.html)|通用标准|
| arcgis | ArcGIS 标准服务 | [ArcGisLayer](http://mars2d.cn/api/ArcGisLayer.html)|通用标准|
| arcgis_cache| ArcGIS 切片| [ArcGisCacheLayer](http://mars2d.cn/api/ArcGisCacheLayer.html)|通用标准|
| tdt | 天地图 | [TdtLayer](http://mars2d.cn/api/TdtLayer.html) |在线地图|
| gaode | 高德 | [GaodeLayer](http://mars2d.cn/api/GaodeLayer.html) |在线地图|
| baidu | 百度 | [BaiduLayer](http://mars2d.cn/api/BaiduLayer.html) |在线地图|
| tencent | 腾讯 | [TencentLayer](http://mars2d.cn/api/TencentLayer.html) |在线地图|
| osm | OpenStreetMap（OSM）| [OsmLayer](http://mars2d.cn/api/OsmLayer.html) |国外在线地图|
| mapbox | Mapbox 地图 | [MapboxLayer](http://mars2d.cn/api/MapboxLayer.html) |国外在线地图|
| google | 谷歌地图 | [GoogleLayer](http://mars2d.cn/api/GoogleLayer.html) |目前已被封|

更多请参考[LayerType 类](http://mars2d.cn/api/global.html#LayerType)

## 3. 瓦片图层的参数调试

当我们拿到各类瓦片服务地址后，如果不具备相关 GIS 知识储备，如果将一个瓦片正常的调试加载成功，并不是一件容易的事情，特别是非标准坐标系、非标准的服务时。
我们也提供了一个瓦片图层加载和调试的页面来可视化页面中，建议先在该页面做调试

- (1)可以在 Mars2D 框架中打开[XYZ 瓦片示例页面](http://mars2d.cn/editor.html?id=layer-tile/type/xyz)，在这个页面的根据已有示例修改 url 地址`http://localhost:8888/mapdata/exp/{z}/{x}/{y}.png`，来调试图层参数。
- (2)如果地图上未能正常显示瓦片图层，尝试修改坐标系、加载层级等参数。
- (3)如果是 WMS、WMTS 等类型服务，有特殊自定义参数时，需要在代码中修改写死这些固定的参数去调试。
- (4)在瓦片图层正常显示后，并调整好所有参数，单击“保存参数”按钮，保存的参数 json，会自动下载一个 json 文件。
- (5) 如果图层是初始化就加载的，可以打开项目的`config.json`文件，拷贝刚下载的 json 到 config.json 文件的 layers 参数中即可。
- (6)如果代码中直接 new 图层类，可以将 json 中的参数拷贝到类参数中。

## 4. 瓦片图层的创建及使用

### 4.1 快速开始(初始化 new Map 时传入)

在构造 Map 时传入`basemaps`或`layers`参数中配置相关图层，并设置`show:true`后进行加载展示栅格瓦片图层

```js
var map = new mars2d.Map("mars2dContainer", {
  basemaps: [
    {
      name: "天地图卫星",
      icon: "img/basemaps/tdt_img.png",
      type: "tdt",
      layer: "img_d",
      key: ["天地图token值"],
      show: true,
    },
    {
      name: "单张图片",
      icon: "img/basemaps/offline.png",
      type: "image",
      url: "img/tietu/world.jpg",
    },
  ],
  layers: [
    {
      type: "tdt",
      name: "天地图注记",
      layer: "img_z",
      key: ["天地图token值"],
      show: true,
    },
  ],
});
```

### 4.2 代码中创建图层

可以有下面 2 种方式来创建图层对象：

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

> 在 Map 创建后可以通过[map.addLayer](http://mars2d.cn/api/Map.html#addLayer)和[map.removeLayer](http://mars2d.cn/api/Map.html#removeLayer)方法来控制图层的加载和删除。

> 在图层本身也有[layer.addTo](http://mars2d.cn/api/BaseLayer.html#addTo)和[layer.remove](http://mars2d.cn/api/BaseLayer.html#remove)2 个方法支持添加或移除图层。

## 5. 加载 XYZ 数据步骤

所有瓦片最基础最常见的就是 xyz 图层，也是其他类似图层的基础。<br />

1.当瓦片是标准金字塔命名时，格式一般都是默认的 `{z}/{x}/{y}.jpg或{z}/{x}/{y}.png `目录组织的金字塔目录。<br />
如下图：
![配置图][3] 2.在数据量比较大的情况，直接拷贝切片会很慢很慢。一般操作是分层压缩成压缩包（并按 4G 分卷），拷贝至服务器后再进行解压。

3.在目标服务器中安装好任意 http 服务器，确保可正常提供 Web 信息浏览服务即可。如：Nginx(推荐). IIS. Apache. Tomcat. WebSphere. WebLogic 等。 将图片文件夹单独发布为一个站点，比如我将下载的数据目录`test`发布后，可以通过浏览器访问到图片即可 `http://localhost/mapdata/maptile/test/1/1/0.png`

4.可以在 Mars2D 框架中打开[XYZ 瓦片示例页面](http://mars2d.cn/editor.html?id=layer-tile/type/xyz)，在这个页面的根据已有示例修改 url 地址 `http://localhost:8888/mapdata/exp/{z}/{x}/{y}.png`，来调试图层参数。

5.如果地图上未能正常显示瓦片图层，尝试修改坐标系. 加载层级等参数。

6.在瓦片图层正常显示后，优化配置参数，因为瓦片不是全球的数据，肯定只是局部范围，为了避免无效请求，可以配置层级和边界值，这样客户端就不请求区域外和层级外的数据，单击“保存参数”按钮，保存的参数 json，会自动下载一个 json 文件。

7.如果代码中直接 new[TileLayer 图层类](http://mars2d.cn/api/TileLayer.html)，可以将 json 中的参数拷贝到类参数中。

```js
var tileLayer = new mars2d.layer.TileLayer({
  url: "http://localhost/mapdata/maptile/test/{z}/{x}/{y}.png",
  minZoom: 1,
  maxZoom: 18,
  minimumTerrainLevel: 1,
  maximumTerrainLevel: 18,
  rectangle: { xmin: 114.85, xmax: 119.68, ymin: 29.34, ymax: 34.74 },
});
map.addLayer(tileLayer);
```

8.如果图层是初始化就加载的，可以打开项目的`config.json`文件，拷贝刚下载的 json 到 config.json 文件的 layers 参数中即可。

```json
{
  "name": "测试瓦片",
  "type": "xyz",
  "url": "http://localhost/mapdata/maptile/test/{z}/{x}/{y}.png",
  "minZoom": 1,
  "maxZoom": 18,
  "minimumTerrainLevel": 1,
  "maximumTerrainLevel": 18,
  "rectangle": { "xmin": 114.85, "xmax": 119.68, "ymin": 29.34, "ymax": 34.74 }
},
```

## 5.1 运行效果

[1]: ../public/image/map-tileLayer.jpg
[2]: ../public/image/map-tileLayer-lod.jpg
[3]: ../public/image/data-xyzDown-tile.jpg
