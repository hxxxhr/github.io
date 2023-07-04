---
title: 事件机制
date: 2022-09-22 15:39:13
---

<h3> 事件机制 </h3>

<img class='images' src="../public/icon/yonghu.svg" alt="来自依赖包的图片">
<i class='text'>Mars2D</i>
<img class='imagess' src="../public/icon/shijian.svg" alt="来自依赖包的图片">
<i class='text'>30/6/2023</i>
<img class='imagess' src="../public/icon/liulan.svg" alt="来自依赖包的图片">
<i class='text'>0</i>

无论是前端系统，还是二维/二维 GIS 应用系统，都离不开各种事件的应用，尤其是鼠标的单击、双击事件。 Mars2D 内大部分类均支持事件的绑定、解绑、触发等统一的事件机制

## 1. 事件的相关类

1.事件相关的更多方法可以参阅[Evented 类](http://mars2d.cn/api/leaflet/reference_cn.html#evented)的 API 文档。

2.事件方法中使用到说支持的事件类型，常见事件类型全部定义在[mars2d.EventType](http://mars2d.cn/api/global.html#EventType)，不常见的事件类型可以在使用时直接传入字符串的事件名称即可。在每个对应类的 API 中都会说明当前类所支持的事件类型，具体参阅各类的 API 文档。<br />
下面，我们以 map 对象为例，绑定一个事件做示例：

```js
function map_clickHandler(event) {
  console.log("鼠标单击", event);
}

//on绑定事件
map.on(mars2d.EventType.click, this.map_clickHandler, this);

//off移除事件
map.off(mars2d.EventType.click, this.map_clickHandler, this);
```

## 2. 主要类的常用事件

## 2.1 Map 类的事件

目前最重要的 Map 类支持 3 类事件类型可以绑定：
1.Map 内部图层变化时的事件，如`layeradd、layerremove`等 <br /> 2.图层、控件等变化触发的事件，如`zoom、move、popupopen`等<br /> 3.鼠标键盘操作触发的事件，如`click、mousemove、mouseout`等<br />

详细事件列表，请参阅：[Map 支持的事件类型](http://mars2d.cn/api/Map.html#.EventType)

## 2.2 图层类的事件

图层类型可以绑定多种事件，我们已最常用的 GraphicLayer 图层为例： 1.图层内部变化时的事件，如`layeradd、layerremove`等 <br /> 2.鼠标操作触发的事件，如`click、mouseover`等 <br /> 3.标绘和编辑触发的事件，如`drawStart、drawCreated、editStart、editStop`等<br />
详细事件列表，请参阅：[GraphicLayer 支持的事件类型](http://mars2d.cn/api/GraphicLayer.html#.EventType)

## 2.3 矢量数据类的事件

矢量数据类型可以绑定多种事件，我们已最常用的 Entity 矢量数据为例： 1.数据内部变化时的事件，如`move、popupopen`等 <br /> 2.鼠标操作触发的事件，如`click、mouseover`等<br />
详细事件列表，请参阅：[Marker 支持的事件类型](http://mars2d.cn/api/Marker.html#.EventType)
