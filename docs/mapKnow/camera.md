---
title: 视觉控制
date: 2022-09-22 15:39:13
---

<h3> 视角控制</h3>

<img class='images' src="../public/icon/yonghu.svg" alt="来自依赖包的图片">
<i class='text'>Mars2D</i>
<img class='imagess' src="../public/icon/shijian.svg" alt="来自依赖包的图片">
<i class='text'>30/6/2023</i>
<img class='imagess' src="../public/icon/liulan.svg" alt="来自依赖包的图片">
<i class='text'>0</i>

## 1. map 中视角相关设置和方法

我们在创建地图时，可以在[center 参数](http://mars2d.cn/api/Map.html#.Options)中来设置默认视角，如：

```js
var map = new mars2d.Map("mars2dContainer", {
  zoom: 13,
  center: { lng: 117.240601, lat: 31.827107 },
});
```

当前 map 中与相机有关的方式：
| 方法名 | 说明 |
| :-----------: | :------: |
| [map.getView()](http://mars2d.cn/api/Map.html#getView)| 获取当前层级和中心点 |
| [map.setView(center, zoom, options)](http://mars2d.cn/api/Map.html#setView)| 定位地图至指定位置和层级 |
| [map.flyHome(options)](http://mars2d.cn/api/Map.html#flyHome)| 飞行到默认视角， 一般为 config.json 中的 center 参数配置的中心点。 |
| [map.fitBounds(bounds, options)](http://mars2d.cn/api/Map.html#fitBounds)| 定位至 矩形区域 处 |
| [map.flyToBounds(bounds, options)(opens new window)](http://mars2d.cn/api/Map.html#fitBounds)| 执行平滑的飞行动画，飞行定位至 矩形区域 处|
| [map.flyTo(latlng, zoom, options)](http://mars2d.cn/api/Map.html#flyTo)| 执行平滑的飞行动画，移动缩放地图范围至指定的地理中心和级别|
| [map.flyToGraphic(graphic, options)](http://mars2d.cn/api/Map.html#flyToGraphic)| 飞行定位至 Graphic 矢量对象处|
| [map.flyToPoint(point, options)](http://mars2d.cn/api/Map.html#flyToPoint)| 视角中心定位至目标点|
| [map.stop()](http://mars2d.cn/api/Map.html#cancelFlight)| 停止飞行视角定位等操作 |
