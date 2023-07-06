---
title: 使用config.json 配置文件说明
date: 2022-09-22 15:39:13
---

<h3> config.json 配置文件说明 </h3>

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

Mars2D 对地图的初始化进行了封装了[Map 地图类](http://mars2d.cn/api/Map.html)，通过传入构造参数即可方便的对地图常用功能进行初始化。 Map 构造参数为了后期方便切换，与代码脱离关系，可以将构造参数存放在 json 配置文件或后端数据库中，按加载配置文件的方式对地图进行初始化。<br />
当前 Mars2D 开源的功能示例、项目模板中都是用`config.json`来传参构造[Map 类](http://mars2d.cn/api/Map.html)的，这种方式比较方便后期修改和扩展。因为在大部分项目中，地图初始化都是类似的，不同的是一些相关参数和图层不同，我们使用时不用关注内部实现，只用按项目按权限需求修改或使用不同的配置信息即可。

## 1.参数说明

目前平台示例和项目中使用到的是[config.json](http://mars2d.cn/config/config.json)静态 json 文件方式 文件中配置参数与[mars2d.Map 类](http://mars2d.cn/config/config.json)的构造参数是完成相同一致的，代码中加载 json 后传入到 Map 类中。
| 参数名 | 类型 | 参数 API | 说明 |
| :-------: | :-----: | :------: |:------: |
| control | Object | [参数清单](http://mars2d.cn/api/Map.html#.controlOptions) |控件 |
| basemaps | Array | [参数清单](http://mars2d.cn/api/Map.html#.basemapOptions) |底图图层 |
| operationallayers | Array | [参数清单](http://mars2d.cn/api/Map.html#.layerOptions) |图层 |
| …… | …… | …… |…… |

更多参数及明细请阅读[API 文档 Map 类](http://mars2d.cn/api/Map.html#.mapOptions)

## 2. config.json 常见修改

### 2.1 修改默认初始视角

`zoom`和`center`参数是地图的默认层级和视角中心点配置，该参数可以通过`map.getView()`方法获取当前视角，或者从地图页面右键菜单中单击相关菜单获取当前视角后拷贝到配置文件中。

### 2.2 修改默认显示的底图

修改`basemaps`数组配置中，将已有的`"show": true`的图层，将该值改为`"show": false` ，并将需要默认需要展示的底图加上`"show": true`，
![配置图][1]

> 1.注意是否缺少逗号造成 json 格式错误。<br /> 2.注意在 basemaps 数组中只保留一个"show": true 的图层。

### 2.3 瓦片底图服务配置

先在相关示例中调试加载成功(需要有一定的 GIS 知识储备)，再拷贝对应的参数到 config.json 对应节点配置中。 此问题可能产生的原因有以下几种

- （1）服务本身没允许跨域，瓦片加载失败
- （2）坐标系非墨卡托投影，是 WGS84,配置加下： "crs": "EPSG:4326",
- （3）缺少 0 级时，需要配置 minZoom 和 maxZoom 参数
- （4）最终配置时建议加下 rectangle 参数，去掉无效请求，提高效率。
  ![配置图][2]
  可以在 Mars2D 框架中打开[XYZ 瓦片示例页面](http://mars2d.cn/editor.html?id=layer-tile/type/xyz)，在这个页面的根据已有示例修改 url 地址
  `http://localhost:8888/mapdata/exp/{z}/{x}/{y}.png`，来调试图层参数。

[1]: ../public/image/start-configJson-basepmap.jpg
[2]: ../public/image/start-configJson-tile.jpg
