---
title: 分析功能
date: 2022-09-22 15:39:13
---

<h3> 管理及分析功能 </h3>

目前平台将 量算、地图截图处理 等所有功能都统一封装为 thing 对象。

## 1. thing 的使用

平台的所有管理及分析功能类都继承于[BaseThing 类](http://mars2d.cn/api/BaseThing.html)，管理及分析功能类均在`mars2d.thing.*`命名空间下面。 下面我们演示创建一个 thing 对象 ，并调用`map.addThing`添加到地图上。

```js
var measure = new mars2d.thing.Measure();
map.addThing(measure);

//测量长度
measure.distance();
```
