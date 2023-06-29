---
title: 坐标系及坐标变换
date: 2022-09-22 15:39:13
---

<h3> 坐标系及坐标变换 </h3>

只要涉及到地图开发，无论如何关于坐标系的概念是逃不掉的，谁让地图它是个球呢。<br />
![配置图][1] <br />
地图就像个橘子 不同的坐标系就是不同的剝橘子的方法<br />
这里就不列举国内常用的坐标系及转换方法，大家可以自行百度。<br />

> 相关 GIS 的学习资料(含坐标系)：[ GIS 基础知识-文档](http://marsgis.cn/doc/study-gis.pdf)、[ GIS 基础知识-培训视频](https://www.bilibili.com/video/BV1JZ4y1Z7Bi/?vd_source=aaeb12441f28ad785bbba9f6832bef02)

平台内目前支持坐标系类型可以访问[CRS 类](http://mars2d.cn/api/global.html#CRS)了解详情。

## 1. 目前常用 GIS 坐标系

- 1.`EPSG:4326坐标系`：目前最通用的标准坐标系，平时我们常说的经度纬度多少多少、从 GPS 设备、智能手机中取出的数据的坐标系、国际地图提供商使用的坐标系 都是这个坐标系。WGS－84 坐标系（World Geodetic System）是一种国际上采用的地心坐标系。坐标原点为地图质心，其地心空间直角坐标系的 Z 轴指向国际时间局（BIH）1984.0 定义的协议地极（CTP）方向，X 轴指向 BIH1984.0 的协议子午面和 CTP 赤道的交点，Y 轴与 Z 轴、X 轴垂直构成右手坐标系，称为 1984 年世界大地坐标系。这是一个国际协议地图参考系统（ITRS），是目前国际上统一采用的大地坐标系。GPS 广播星历是以 WGS-84 坐标系为根据的。【wgs84 需要保证坐标误差最小】
- 2.`EPSG:3857坐标系`：Web Mercator（墨卡托）投影坐标系，该坐标系是由 Google 最先发明的。在投影过程中，将表示地图的参考椭球体近似的作为正球体处理（正球体半径 R = 椭球体半长轴 a）。由于墨卡托投影当纬度接近两极时，y 值趋向于无穷大，那些“懒惰的工程师”为了方便，就把 Y 轴的取值范围也限定在 X 轴相同范围，搞个正方形地图，而形成了 Web Mercator 投影。 目前在互联网上的大部分全国公众地图网站均采用此坐标系。【墨卡托最早用来航海，要保证方向误差最小】
- 3.`EPSG:4490坐标系`：2000 国家大地坐标系，是我国当前最新的国家大地坐标系，英文名称为 China Geodetic Coordinate System 2000，英文缩写为 CGCS2000。2000 国家大地坐标系是全球地心坐标系在我国的具体体现，其原点为包括海洋和大气的整个地图的质量中心。Z 轴指向 BIH1984.0 定义的协议极地方向（BIH 国际时间局），X 轴指向 BIH1984.0 定义的零子午面与协议赤道的交点，Y 轴按右手坐标系确定。
- 4.CGCS2000 高斯平面投影坐标系(`EPSG:4491`至`EPSG:4554`)：支持 CGCS2000 Gauss-Kruger Zone 和 CGCS2000 Gauss-Kruger CM 的 3 度带和 6 度带平面投影。【各种投影坐标系为了本区域的面积、长度的测量误差最小】

> 上面的`EPSG`:后面的数字，是 WKID，由 EPSG 组织统一管理（这样避免重复，也具备唯一性），可以在[http://epsg.io/](https://epsg.io/)网站进行查询了解详情。

👉 CGCS2000 与 WGS84 相差几个厘米，对于一般工程测量，可以认为二者是一致的。<br />
👉 坐标系的更详细讲解可以参阅：[GIS 基础知识培训](http://marsgis.cn/doc/study-gis.pdf)

### 1.1 栅格瓦片图层坐标系的设置

瓦片图层支持配置[crs 参数](http://mars2d.cn/api/BaseTileLayer.html#.ConstructorOptions)来设置坐标系的 EPSG 值，如`crs:"EPSG:4490"`

## 2. 国内的偏移坐标系

通常国外使用的是 WGS84 的坐标系统，中国使用 CGCS2000 坐标系统以经纬度的形式来表示地图平面上的某一个位置，这应该是国际共识。 在我国，出于国家安全考虑，国内所有导航电子地图必须使用国家测绘局制定的加密坐标系统，即将一个真实的经纬度坐标加密成一个不正确的经纬度坐标，我们在业内将前者称之为地图坐标，后者称之为火星坐标(GCJ-02)。 当我们使用的数据和服务不同时，就产生了我们时常说的偏移和纠偏的问题。<br />
国内偏移坐标系的分类，我们定义在[ChinaCRS 类](http://mars2d.cn/api/global.html#ChinaCRS)

- 1.`WGS84`坐标系：地图坐标系，目前国际通用的标准坐标系，通常称呼为标准无偏坐标系。
- 2.`GCJ02` 坐标系：在我国，出于国家安全考虑，国内所有导航电子地图必须使用国家测绘局制定的加密坐标系统，即将一个真实的经纬度坐标加密成一个不正确的经纬度坐标，我们在业内将前者称之为地图坐标，后者称之为火星坐标(GCJ-02)。
- 3.`BAIDU` 坐标系：百度(BD09)偏移坐标系,百度在国测局坐标基础二次加密后形成的坐标系。

### 2.1 栅格瓦片图层偏移坐标系的设置

瓦片图层支持配置[chinaCRS 参数](http://mars2d.cn/api/BaseTileLayer.html#.ConstructorOptions)来设置[ChinaCRS](http://mars2d.cn/api/global.html#ChinaCRS)，如`chinaCRS:"GCJ02"`

> 目前还不支持 BAIDU 瓦片底图的纠偏处理。

### 2.2 矢量数据坐标的加偏或纠偏转换

平台提供了[PointTrans 类](http://mars2d.cn/api/PointTrans.html)，可以对 百度坐标（BD09）、国测局坐标（火星坐标，GCJ02）、WGS84 坐标系 的坐标 进行互相转换。

## 3. 平台内的坐标及坐标变换

Mars2D 平台内涉的几类坐标包括：
| 坐标系 | 单位 | 对象的类名称 | 说明|
| :-----: | :-----: | :----: |:----: |
| 屏幕坐标 | 像素值 | [L.Point](http://mars2d.cn/api/leaflet/reference_cn.html#point) |比如鼠标拾取到的坐标值 |
| 地理坐标 | 角度值 | [L.LatLng](http://mars2d.cn/api/leaflet/reference_cn.html#latlng)|Leaflet 原生的地理坐标表现形成 纬度、经度，如果是数组时，纬度在前！ |

### 3.1 支持多种形式坐标参数

比如 Point 类，支持下面多种参数形式，可以按个人习惯选用。

```js
//1.数组形式
var graphic = new mars2d.graphic.Point({
  latlng: [30.835848, 116.301798], //纬度在前
  style: { color: "#ff0000", pixelSize: 10 },
});

//2.LatLng对象形式【建议】
var graphic = new mars2d.graphic.Point({
  latlng: new L.LatLng(30.835848, 116.301798),
  style: { color: "#ff0000", pixelSize: 10 },
});
```

[1]: ../public/image/map-crs-earth.jpg
