---
title: 底图：TIF影像金字塔切片处理
date: 2022-09-22 15:39:13
---

<h3>瓦片底图：TIF影像金字塔切片处理及加载</h3>

## 1. tif 格式介绍

TIF 文件为栅格图像文件，后缀为 tif 或 tiff，是 ogc 规范的一种，全称 GeoTiff。通常不能在资源管理器中查看 tif 栅格影像数据的坐标系信息，需要用 GIS 软件查看，因为它的坐标系信息写在数据文件内部。<br />

tif 可以有 8 位，24 位等深度，一般真彩色是 24 位，而地形数据只有一个高度值，采用 8 位。目前很多卫星影像数据、地形数据的存储格式都是 tif。<br />
![配置图][1]

## 2. 处理工具

当前有很多软件都可以做切片处理，比如 ArcGIS 、GeoServer、Global Mapper、gdal2tiles（命令行）等，根据个人习惯选择 1 个工具处理即可。

### 2.1 Global Mapper 工具

GlobalMapper 是一款功能强大的小型化 GIS 栅格影像、矢量数据处理、加工软件，其本身具备了 GIS 软件产品的几乎所有特性，做到了将复杂的问题简单化，哪怕你是对 GIS 一无所知的用户都可以很快的上手，简单直观的功能设计都能够帮助你以最快的速度完成所需要的工作，完成加工数据成品的任务。如在需要做影像数据镶嵌、智能栅格影像切割、专题图绘制、矢量信息绘制，标注、正射影像生成、GPS 定位、坐标转换、投影转换、卫星地图纠正、地形（DEM）高程数据处理、行业主流文件格式的相互转换（如 kml 格式转换、SHP 格式转换、IMG 格式转换、PIX 格式转换、TIFF 格式转换等…）的时候 GlobalMapper 较同行业软件的操作优势就立刻显现出来。同时软件本身提供了丰富的 WMS 数据源包括了：雷达孔径地图（TOPO）、DEM 数据地图、DigitalGlobe 水印卫星地图、STRM、USGS 数据等等，在已有的 WMS 的基础上用户也可以自行创建或添加 WMS 数据库，动静结合的数据处理、展现方式不能不说是一种创新，且可以为用户节约下不小数据寻找、采购的成本。<br />
[下载地址](http://www.rivermap.cn/down.html)

### 2.2 Cesiumlab 工具“影像切片”模块

来源：北京西部世界公司

说明：从官网下载工具后，按工具说明注册帐号登录后即可使用，是图形化界面操作，操作比较简便。<br/>
[官方下载地址](http://www.cesiumlab.com/).[官方操作说明](http://www.cesiumlab.com/doc/CesiumLab/index.html#/dataprocess/image.md)

## 3. 常见问题

tif 去黑边或白边
可以安装[ArcGIS forDesktop](https://www.esri.com/en-us/arcgis/products/arcgis-desktop/overview)软件，参考文章[为影像数据去除无效值](https://blog.csdn.net/kikitamoon/article/details/50625033)进行数据的处理。

## 4. 处理操作流程完整示例

### 4.1 准备好 tif 格式文件

注：如果 tif 不带坐标系和坐标信息，需要事先知道坐标，在软件导入时会提示进行设置。

### 4.2 tif 进行切片

下面我们已 Global Mapper 工具处理为例。<br /> 1.打开软件，导入该 tif 文件。
![配置图][2] 2.如果 tif 不带坐标系和坐标信息，此时为提示，按提示操作，导入成功后效果
![配置图][3] 3.加载成功后，在文件菜单，选择导出“Web 格式”
![配置图][4] 4.导出弹窗中按默认选择的谷歌地图瓦片规则就行
![配置图][5] <br /> 5.单击确定后，弹窗设置相关导出参数，这里我们设置图块命名规则为常用标准的： `%z\%x\%y.png` <br />
说明：也可以设置其他规则，在后续 leaflet 客户端加载时中也按此规则加载就行。
![配置图][6] <br /> 6.单击确定后，设置导出的瓦片存放目录，html 命名可以随便
![配置图][7] <br />7.等待导出完成。导出完成后目录如下：
![配置图][8]

### 3.2 发布二维数据为 HTTP 服务

因为地图瓦片数据一般都很大，建议将瓦片目录发布为 http 服务可以访问的一个站点，操作方式参考 nginx、IIS、Tomcat 等 Http 服务器操作说明， 可以参考教程[发布地图数据服务]()

- 可以将导出目录 exp 进行发布为服务：`http://localhost:8888/mapdata/exp/`

- 发布为服务后，首先验证下随意找一张图片，可以在浏览器可以直接访问，正常加载， 如 `http://localhost:8888/mapdata/exp/8/210/102.png`

![配置图][9]
### 3.3 在平台中加载模型

1.按照测试的图片地址将数字部分改为 xyz 值，如下所示，<br />
`http://localhost:8888/mapdata/exp/8/210/102.png`<br />
`http://localhost:8888/mapdata/exp/{z}/{x}/{y}.png` 【按导出时的规则`%z\%x\%y.png`】

2.在 Mars2D 框架中打开[XYZ 瓦片示例页面](http://mars2d.cn/editor.html?id=layer-tile/type/xyz)，在这个页面的根据已有示例修改 url 地址 `http://localhost:8888/mapdata/exp/{z}/{x}/{y}.png`，来调试图层参数。<br />
可以参考教程[加载 XYZ 数据步骤](http://mars2d.cn/doc.html#data/guide/map/tileLayer)

[1]: ../public/image/data-tif-img.jpg
[2]: ../public/image/data-xyz-gm1.jpg
[3]: ../public/image/data-xyz-gm2.jpg
[4]: ../public/image/data-xyz-gm3.jpg
[5]: ../public/image/data-xyz-gm4.jpg
[6]: ../public/image/data-xyz-gm5.jpg
[7]: ../public/image/data-xyz-gm6.jpg
[8]: ../public/image/data-xyz-gm7.jpg
[9]: ../public/image/data-xyz-gm8.jpg
