---
title: 矢量：shp转geojson格式
date: 2022-09-22 15:39:13
---
<h3> 矢量数据：shp转geojson格式</h3>

## 1. shp格式介绍
Shapefile文件是ESRI公司ArcGIS平台的常用格式文件，是工业标准的矢量数据文件。 Shapefile将空间特征表中的非拓扑几何对象和属性信息存储在数据集中，特征表中的几何对象存为以坐标点集表示的图形文件—SHP文件，Shapefile文件并不含拓扑（Topological）数据结构。<br />
![配置图][1] <br />
shp一些特性：
 - 1个Shape文件至少包括三个文件：主文件(.shp) , 索引文件(.shx), dBASE表(*.dbf)
 - 一个shp文件只能存储点、线、面中的一种类型，不存在混合存在的状态；
 - shp可以设置很多字段属性
 
## 2. shp数据来源
一般是项目相关的业务部门提供、或通过图商采购数据，也可以通过一些爬虫工具，如[水经微图](http://www.rivermap.cn/down.html)、[ 太乐地图](http://www.arctiler.com/index.html)等下载一些矢量数据。

## 4. geojson格式介绍
GeoJSON是适合于Web下对各种地理数据结构进行编码的格式，基于Javascript对象表示法的地理空间信息数据交换格式。与普通json文件格式区别在于对其属性及组成由一定规范。

GeoJSON将所有的地理要素分为Point、MultiPoint、LineString、MultiLineString、Polygon、MultiPolygon、GeometryCollection。首先是将这些要素封装到单个的geometry里，然后作为一个个的Feature（要素）；要素放到一个要素集合里构成。
![配置图][2]
## 5.处理工具：GDAL数据转换工具
shp转geojson有很多工具和方式，我们推荐的是GDAL转换方法

### 5.1. 安装GDAL程序
下载[gdal安装程序](data.mars2d,cn/tool/gdal-300-1911-x64-core.msi)，双击安装，一直默认即可，默认安装路径一般为`C:\Program Files\GDAL`，安装完成后可以打开浏览检查下。
### 5.2. 配置环境变量
 - （1）增加系统变量GDAL_DATA ，其值为 `C:\Program Files\GDAL\gdal-data`
 - （2）增加系统变量PROJ_LIB ，其值为 `C:\Program Files\GDAL\projlib`
 - （3）修改Path变量，在Path值中增加 `C:\Program Files\GDAL;`
 
### 5.3. 转换shp为geojson命令
org2ogr是OGR模块中提供的一个重要工具，用于对数据源进行格式转换，打开cmd命令行，参考下面输入命令：<br />
`ogr2ogr　-f  + 导出格式  + 导出文件名称  + 源文件名称` <br />
命令（简单）：
```sh
ogr2ogr  -f  "GeoJSON"   D:\\data\\exp.json  D:\\data\\企业.shp
```
命令（支持中文 + 输出wgs84经纬度）：
```sh
ogr2ogr  -lco encoding=UTF-8  -f  "GeoJSON"  -t_srs "EPSG:4326"      D:\\data\\exp.json  D:\\data\\企业.shp
```
[GDAL命令帮助文档](https://gdal.org/programs/ogr2ogr.html)

## 5.4. 其他转换命令
(1)GeoJSON ==> ESRI Shape `ogr2ogr -lco encoding=UTF-8 -f "ESRI Shapefile" -t_srs "EPSG:4326" -s_srs "EPSG:4326" E:\\data\\dth-xuexiao-fcfh.shp E:\\data\\dth-xuexiao-fcfh.json`

(2)MapInfo ==> ESRI Shape

`ogr2ogr -f "ESRI Shapefile" mydata.shp mydata.tab`

(3)ESRI Shape ==>MapInfo

`ogr2ogr -f "MapInfo File" tabsites.tab sites.shp`

(4)MapInfo ==> PostGIS

`ogr2ogr -f "PostgreSQL" PG:"host=localhost user=postgres dbname=postgis password=123456″`

(5)postgis==>ESRI Shapefile

`ogr2ogr -f "ESRI Shapefile" mydata.shp PG:"host=localhost dbname=postgis user=postgres password=123456″ "mytable"`

(6)PostGIS ==> KML `ogr2ogr -f "KML" neighborhoods.kml PG:"host=localhost dbname=postgis user=postgres password=123456″ -sql "select gid,name,the_geom from neighborhoods"`

(7)批量转换

将postgis中所有的表都导出到mydatadump文件夹下，导出格式是ESRI Shapefile

`ogr2ogr -f "ESRI Shapefile" mydatadump PG:"host=myhost user=myloginname dbname=mydbname password=mypassword"`
部分导出，将指定的表导出到mydatadump中，格式为ESRI Shapefile

`ogr2ogr -f "ESRI Shapefile" mydatadump PG:"host=myhost user=myloginname dbname=mydbname password=mypassword" neighborhood parcels`

(8)ESRI GeoDatabase (*.mdb) ==>PostGIS

`ogr2ogr -f "PostgreSQL" PG:"host=localhost user=someuser dbname=somedb password=somepassword port=5432″ C:\GISData\Geonames.mdb -a_srs EPSG:26986`

导入指定的featureclass，重投影，重命名geometry列

`ogr2ogr -f "PostgreSQL" PG:"host=localhost user=someuser dbname=somedb" /home/postgres/Data/Geonames.mdb GEONAMES_ANNO_HYDRO -a_srs EPSG: 26986 -t_srs EPSG:4269 -nln ma_hydro -lco GEOMETRY_NAME=the_geom_4269`

(9)ESRI Shapefile ==>MySQL

`ogr2ogr -f "MySQL" MYSQL:"mydb,host=myhost,user=mylogin,password=mypassword,port=3306″ -nln "world" -a_srs "EPSG:4326″ path/to/world_adm0.shp`

(10)Non-spatial Data ==>PostgreSQL

`ogr2ogr -f "PostgreSQL" PG:"host=myserver user=myusername dbname=mydbname password=mypassword" sometable.dbf -nln "sometable"`

下面是如何将shp和tab文件导入到postgis数据库中的命令方式

`ogr2ogr -f PostgreSQL PG:"host=localhost dbname=postgis user=postgres password=850315″ sites.shp`

`ogr2ogr -f PostgreSQL PG:"host=localhost dbname=postgis user=postgres password=850315″ mytabfile.tab`

## 6. 处理操作流程完整示例
### 6.1 下载 shp 文件
下面我们以水经微图软件下载合肥道路网为例。

1.选中合肥区域，选择“矢量数据”的道路网，文件格式为“shp”格式。
![配置图][3]
2.点击“确定”进入到下载界面 <br />
![配置图][4] <br />
3.下载完成后数据结构如下所示：
![配置图][5]
### 6.2 shp格式转为geojson
下面我们以 GDAL 数据转换工具为例，转换前确保已经按上面步骤安装好GDAL。

1.cdm（win + R） 打开命令窗口，进入 GDAL 的目录； 或者直接打开 GDAL 下的命令窗口
![配置图][6]
2.输入命令，进行转换 <br />
```sh 
ogr2ogr -lco encoding=UTF-8 -f "GeoJSON" -t_srs "EPSG:4326" D:\\data\\exp.json D:\\data\\合肥道路.shp
```
3.转换后的 json 文件如下
![配置图][7] <br />

### 6.3 发布二维数据为 HTTP 服务
转换成功之后将.json 文件放在项目中，
或者放在独立站点服务，可以参考[发布地图数据服务]()。

### 6.4 在平台中加载 geojson

[1]: ../public/image/data-shp.jpg
[2]: ../public/image/data-geojson.jpg
[3]: ../public/image/data-geojson-1.jpg
[4]: ../public/image/data-geojson-2.jpg
[5]: ../public/image/data-geojson-3.jpg
[6]: ../public/image/data-geojson-4.jpg
[7]: ../public/image/data-geojson-5.jpg
