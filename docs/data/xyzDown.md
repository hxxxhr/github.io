---
title: 底图：在线地图的下载和使用
date: 2022-09-22 15:39:13
---

<h3>瓦片底图：在线地图的下载和使用</h3>

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

## 1. XYZ 瓦片金字塔介绍

### 瓦片金字塔基本概念

要理解互联网地图或者说目前所有的在线地图，一定要理解“瓦片金字塔”这个概念。

目前我们所见的所有地图底图服务都是瓦片地图的方式发布的。瓦片地图金字塔模型是一种多分辨率层次模型，从瓦片金字塔的底层到顶层，分辨率越来越低，但表示的地理范围不变。

当我们建立好了影像金字塔后，前端再请求地图时，则将只是在切好的瓦片缓存中，找到对应级别里对应的瓦片即可。然后在前端将这些请求到的瓦片拼接出来，便可以得到用户需要的级别下的可视范围内的瓦片了。
![配置图][1]

### 地图 URL 的 XYZ 参数

知道了地图是有很多瓦片组成，而每一张瓦片有对应的瓦片等级（z）和瓦片坐标编号（x, y），目前互联网地图也是通过 xyz 值是可以找到对应的瓦片的。

常见互联网地图的 xyz 地址：

高德地图: `http://webrd01.is.autonavi.com/appmaptile?lang=zh_cn&size=1&scale=1&style=8&x={x}&y={y}&z={z}`

高德影像: `http://webst01.is.autonavi.com/appmaptile?style=6&x={x}&y={y}&z={z}`

Google 地图:` http://mt1.google.cn/vt/lyrs=m@207000000&hl=zh-CN&gl=CN&src=app&x={x}&y={y}&z={z}&s=Galile`

Google 影像: `http://mt1.google.cn/vt/lyrs=s&hl=zh-CN&gl=CN&x={x}&y={y}&z={z}&s=Gali`

知道了 xyz 的地址后，我们平台的代码中就可以使用[TileLayer](http://mars2d.cn/api/TileLayer.html)类来加载地图，例如加载瓦片可以这样写：

```js
var tileLayer = new mars2d.layer.TileLayer({
  url: "http://webrd01.is.autonavi.com/appmaptile?lang=zh_cn&size=1&scale=1&style=8&x={x}&y={y}&z={z}",
});
map.addLayer(tileLayer);
```

## 2. 下载互联网地图数据

知道了 xyz 的概念，我们就很容易理解去如何下载地图数据了，就是根据需要的地区范围确定 xyz 的范围值，轮询下载就可以了，自己写工具要考虑很多细节问题，不用重复造轮子， 目前市场上有很多相关工具。<br />
免费工具：[ MobileAtlasCreator](https://mobac.sourceforge.io/)&nbsp;
[Github 开源的代码工具](https://github.com/ShareQiu1994/node-map-download)<br />
商业收费工具：[水经微图](http://www.rivermap.cn/down.html).[ 太乐地图](http://www.arctiler.com/index.html).[ BIGEMAP](http://www.bigemap.com/index.html)

## 3. 处理操作流程完整示例

### 3.1 下载 XYZ 瓦片数据

下面我们已：[水经微图](http://www.rivermap.cn/down.html)为例来介绍下载的流程。<br /> 1.运行程序后主界面如下，根据需要选择需要下载的地图。<br />
![配置图][2]<br /> 2.我们一般是按行政区划下载地图，也可以绘制区域或其他方式下载，行政区域选择需要下载的地图范围，选择后图上会同步显示范围。 也可以点击地图左上角选择工具，选择感兴趣的区域， 支持按矩形. 不规则多边形，一般可以按省/市区域下载。<br />
![配置图][3]<br /> 3.点击下载，进入到下载参数设置界面。根据需要设置合适的任务名称，这里以下载标准金字塔为例。注意此处的级别从 1 开始，比地图中的级别多 1，即 19 级对应实际地图中第 18 级。<br />
![配置图][4]<br /> 4.点击“确定后”进入到下载界面，等待下载完成，右侧为下载时的状态<br />
![配置图][5]<br /> 5.下载完成后选择 “导出”<br />
![配置图][6]<br /> 6.弹出的窗口中按下图所示设置参数【重要】。<br />
![配置图][7]<br /> 7.导出完成后软件会自动打开导出的目录文件夹，会出现相应的数字目录即该下载的瓦片数据<br />
![配置图][8]<br /> 8.在数据量比较大的情况，直接拷贝切片会很慢很慢。一般操作是分层压缩成压缩包（并按 4G 分卷），拷贝至服务器后再进行解压。<br />
![配置图][9]<br /> 9.全部压缩完成后拷贝数据到需要发布电脑上或上传网盘。

### 3.2 发布二维数据为 HTTP 服务

因为地图瓦片数据一般都很大，建议发布为独立服务。<br />
可以参考教程[发布地图数据服务](/data/server.md)

- 可以将导出目录 exp 进行发布为服务`http://localhost:8888/mars2d-data/tile/anhui`
- 发布为服务后，首先验证下随意找一张图片，可以在浏览器可以直接访问，正常加载， 如 `http://localhost:8888/mars2d-data/tile/anhui/8/210/102.jpg`

### 3.3 在平台中加载模型

可以在 Mars2D 框架中打开[XYZ 瓦片示例页面](http://mars2d.cn/editor.html?id=layer-tile/type/xyz)，在这个页面的根据已有示例修改 url 地址` http://localhost:8888/mapdata/exp/{z}/{x}/{y}.jpg`，来调试图层参数。

可以参考教程[加载 XYZ 数据步骤](http://mars2d.cn/doc.html#data/guide/map/tileLayer)

[1]: ../public/image/map-tileLayer-lod.jpg
[2]: ../public/image/data-xyzDown-sjz1.jpg
[3]: ../public/image/data-xyzDown-sjz2.jpg
[4]: ../public/image/data-xyzDown-sjz3.jpg
[5]: ../public/image/data-xyzDown-sjz4.jpg
[6]: ../public/image/data-xyzDown-sjz5.jpg
[7]: ../public/image/data-xyzDown-sjz6.jpg
[8]: ../public/image/data-xyzDown-sjz7.jpg
[9]: ../public/image/data-xyzDown-sjz8.jpg
