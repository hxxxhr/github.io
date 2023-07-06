---
title: 矢量图层Graphic
date: 2022-09-22 15:39:13
---

<h3> 矢量数据 </h3>

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

矢量数据 是用“经度、纬度”坐标来表示地图图形或地理实体位置的数据，一般是通过记录坐标的方式来尽可能将地理实体的空间位置表现的准确无误，常见的矢量数据有：点、线、面等格式。
![配置图][1] <br />

## 1. 矢量数据对象

平台对 Leaflet 矢量数据和平台自身扩展开发的矢量对象都做了梳理及统一对外接口的封装，这样使用更加简单易用、对开发人员更友好、开发效率高。
平台的所有矢量数据类均在`mars2d.graphic.*`命名空间下面。矢量数据清单请访问[GraphicType 类](http://mars2d.cn/api/global.html#GraphicType)

下面我们演示创建一个矢量数据对象 ，并调用 layer.addGraphic 添加到图层上。

```js
//创建矢量数据图层
let graphicLayer = new mars2d.layer.GraphicLayer();
map.addLayer(graphicLayer);

//加载数据到矢量图层
var graphic = new mars2d.graphic.Label({
  latlng: [31.854628, 117.245425],
  style: {
    text: "合肥火星科技有限公司",
    color: "#0081c2",
    font_size: 25,
    font_family: "楷体",
  },
});
graphicLayer.addGraphic(graphic);
```

矢量数据 由 坐标、样式、属性 3 部分组成构成
| 构成 | mars2d 属性名 | 说明 |
| :-----: | :-----: | :----: |
| 坐标 | latlng 或 latlngs | 地理位置，如纬度、经度 构成 |
| 样式 | style | 表现形式，如图标图片、线条样式、填充色、文字样式等
| 属性 | attr | 除经纬度信息之外的关联信息，如名称、地址、电话、面积、长度、备注等

可以通过图层的`graphicLayer.addGraphic(graphic)`和 `graphicLayer.removeGraphic(graphic)`方法来控制矢量数据的加载和删除。

在矢量数据本身也有`graphic.addTo (graphicLayer)`和`graphic.remove ()`2 个方法支持添加或移除矢量数据。

## 2. 矢量数据的类别

请参考[矢量数据类型](http://mars2d.cn/api/global.html#GraphicType)

## 3. 矢量数据的控制

前面我们讲到了平台对[所有矢量数据类型](http://mars2d.cn/api/global.html#GraphicType)做了统一风格的对外接口的封装 ，这样使用更加简单易用、对开发人员更友好、开发效率高。并且参数属性和方法均一致。

### 2.1 矢量数据的事件

矢量数据均支持事件的绑定、解绑、触发等统一的事件机制,例如：

```js
graphic.on(mars2d.EventType.click, function (event) {
  console.log("您单击了矢量对象", event);
});
```

### 2.2 矢量数据的 Popup、Tooltip 等控件

矢量数据对象上可以操作的常用方法控件相关操作方法有：

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

运行效果
<div style="height:430px;position:relative;" data-v-627b1480><iframe height="100%" width="100%" scrolling="yes" title="mars2d" src="http://mars2d.cn/editor-vue.html?id=graphic/basis/polygon&amp;full=1" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="allowfullscreen" data-v-627b1480></iframe><a class="toSee" href="http://mars2d.cn/editor-vue.html?id=graphic/basis/polygon&code=1" target="_blank">新窗口查看</a></div>

[1]: ../public/image/map-graphic.jpg
