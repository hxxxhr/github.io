---
title: 地图控件
date: 2022-09-22 15:39:13
---

<h3> 地图控件 </h3>

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

地图控件是指一些 DOM 面板或按钮，并与地图有所交互的对象，目前包含 2 大类，第一种是 Leaflet 原生具备的控件，第 2 类是 Mars2D 编写的控件。

## 1. Leaflet 原生控件

目前主要使用场景是在创建地图前，你可以在配置项中通过`control`对控件中的功能组件进行相应的配置,支持的参数参考[control 参数说明](http://mars2d.cn/api/Map.html#.controlOptions)。此种方式支持 Leaflet.Viewer 本身支持的一些 Leaflet 原生控件的控制。

```js
//方式1：在创建地图前的传参中配置control参数
var map = new mars2d.Map("mars2dContainer", {
  control: {
    //以下是Leaflet所支持的控件相关的options
    scale: true,
    zoom: { latlng: "bottomright" },
    layers: { latlng: "topleft" },

    //以下是mars2d.control定义的控件
    defaultContextMenu: true, //右键菜单
    locationBar: {
      crs: "CGCS2000_GK_Zone_3",
      template:
        "<div>经度:{lng}</div> <div>纬度:{lat}</div> <div>横{crsx}  纵{crsy}</div> <div>层级:{level}</div>",
    },
    toolBar: { latlng: "bottomright" },
  },
});
```

## 2. 平台内置控件

目前平台内部已内置了一些常用控件，并在 Map、图层、矢量数据 3 类不同层次的对象中去使用， 目前支持的内置控件包括：

|     名称     |                 说明                 |          备注          | 示例                                                                    |
| :----------: | :----------------------------------: | :--------------------: | ----------------------------------------------------------------------- |
|    Popup     |        鼠标单击后显示的气泡窗        | 继承自 DivGraphic 对象 | [查看示例](http://mars2d.cn/editor.html?id=control/inside/popup)        |
|   Tooltip    |        鼠标移入后显示的气泡窗        | 继承自 DivGraphic 对象 | [查看示例](http://mars2d.cn/editor.html?id=control/inside/tooltip)      |
| ContextMenu  |               右键菜单               |                        | [查看示例](http://mars2d.cn/editor.html?id=control/inside/contextmenu)  |
| SmallTooltip | 简易小气泡窗，一般用于鼠标操作的提示 |    比如标绘中的提示    | [查看示例](http://mars2d.cn/editor.html?id=control/inside/smallTooltip) |

### 2.1.在 map 地图对象上操作

[Map 地图](http://mars2d.cn/api/Map.html)对象上可以操作的常用方法有：

```js
//Popup相关
map.openPopup(content, latlng, options); //打开Popup弹窗
map.closePopup(); //关闭弹窗

//Tooltip相关
map.openTooltip(content, latlng, options); //打开Tooltip弹窗
map.closeTooltip(); //关闭Tooltip弹窗

//SmallTooltip相关
map.openSmallTooltip(latlng, message); //显示小提示窗，一般用于鼠标操作的提示。
map.closeSmallTooltip(); //关闭小提示窗

//右键菜单相关
map.bindContextMenu(mapContextmenuItems); //绑定地图的默认右键菜单
map.unbindContextMenu(); //解除绑定的右键菜单
```

### 2.2.在 layer 图层对象上操作

[layer 图层](http://mars2d.cn/api/GraphicLayer.html)对象上可以操作的常用方法有：

```js
//Popup相关
layer.getPopup(); //获取Popup绑定
layer.bindPopup(content, options); //绑定鼠标单击对象后的弹窗。
layer.unbindPopup(); //解除绑定的鼠标单击对象后的弹窗。
layer.openPopup(latlng); //打开Popup弹窗
layer.closePopup(); //关闭弹窗

//Tooltip相关
layer.getTooltip(); //获取Tooltip绑定
layer.bindTooltip(content, options); //绑定鼠标移入对象后的弹窗。
layer.unbindTooltip(); //解除绑定的鼠标移入对象后的弹窗。
layer.openTooltip(latlng); //打开Tooltip弹窗
layer.closeTooltip(); //关闭Tooltip弹窗

//右键菜单相关
layer.getContextMenu(); //获取绑定的右键菜单数组
layer.bindContextMenu(content); //绑定地图的默认右键菜单
layer.unbindContextMenu(); //解除绑定的右键菜单
```

### 2.3. 在 graphic 矢量数据对象上操作

[graphic 矢量数据](http://mars2d.cn/api/Marker.html)对象上可以操作的常用方法有：

```js
//Popup相关
graphic.getPopup(); //获取Popup绑定
graphic.isPopupOpen(); //是否打开了Popup
graphic.bindPopup(content, options); //绑定鼠标单击对象后的弹窗。
graphic.unbindPopup(); //解除绑定的鼠标单击对象后的弹窗。
graphic.openPopup(latlng); //打开Popup弹窗
graphic.closePopup(); //关闭弹窗

//Tooltip相关
graphic.getTooltip(); //获取Tooltip绑定
graphic.isTooltipOpen(); //是否打开了Tooltip
graphic.bindTooltip(content, options); //绑定鼠标移入对象后的弹窗。
graphic.unbindTooltip(); //解除绑定的鼠标移入对象后的弹窗。
graphic.openTooltip(latlng); //打开Tooltip弹窗
graphic.closeTooltip(); //关闭Tooltip弹窗

//右键菜单相关
graphic.getContextMenu(); //获取绑定的右键菜单数组
graphic.bindContextMenu(content, options); //绑定地图的默认右键菜单
graphic.unbindContextMenu(); //解除绑定的右键菜单
```

## 3. 平台控件

平台的所有控件类都继承于[L.Control 类](http://mars2d.cn/api/leaflet/reference_cn.html#control)，控件类均在`mars2d.control.*`命名空间下面。 下面我们演示创建一个控件对象 ，并调用 map.addControl 添加到地图上。

```js
let slider = new mars2d.control.Slider({
  position: "topleft",
  countryLevel: 4,
  provinceLevel: 7,
  cityLevel: 10,
  streetLevel: 14,
});
map.addControl(slider);
```

### 3.1 控件清单

|                                类名                                 |          说明          |                                 示例                                  |
| :-----------------------------------------------------------------: | :--------------------: | :-------------------------------------------------------------------: |
| [mars2d.control.LocationBar](http://mars2d.cn/api/LocationBar.html) | 鼠标经纬度等信息状态栏 | [查看示例](http://mars2d.cn/editor.html?id=control/basis/locationBar) |
|      [mars2d.control.Slider](http://mars2d.cn/api/Slider.html)      |       鱼骨导航栏       |   [查看示例](http://mars2d.cn/editor.html?id=control/basis/slider)    |
| [mars2d.control.OverviewMap](http://mars2d.cn/api/OverviewMap.html) |     鹰眼地图 控件      | [查看示例](http://mars2d.cn/editor.html?id=control/basis/overviewMap) |

注：本教程中所列清单可能不全，具体已功能示例和 API 为准。

### 3.2 运行效果

<div style="height:410px;position: relative;" data-v-627b1480><iframe height="100%" width="100%" scrolling="yes" title="mars2d" src="http://mars2d.cn/editor-vue.html?id=control/basis/display&amp;full=1" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="allowfullscreen" data-v-627b1480></iframe> <a class="toSee" href="http://mars2d.cn/editor-vue.html?id=control/basis/display&code=1" target="_blank">新窗口查看</a></div>