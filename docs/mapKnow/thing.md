---
title: 分析功能
date: 2022-09-22 15:39:13
---

<h3> 管理及分析功能 </h3>

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

目前平台将 量算、地图截图处理 等所有功能都统一封装为 thing 对象。

## 1. thing 的使用

平台的所有管理及分析功能类都继承于[BaseThing 类](http://mars2d.cn/api/BaseThing.html)，管理及分析功能类均在`mars2d.thing.*`命名空间下面。 下面我们演示创建一个 thing 对象 ，并调用`map.addThing`添加到地图上。

```js
var measure = new mars2d.thing.Measure();
map.addThing(measure);

//测量长度
measure.distance();
```

### 1.1 运行效果
<div style="height:410px;position:relative;" data-v-627b1480><iframe height="100%" width="100%" scrolling="yes" title="mars2d" src="http://mars2d.cn/editor-vue.html?id=thing/measure&amp;full=1" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="allowfullscreen" data-v-627b1480></iframe><a class="toSee" href="http://mars2d.cn/editor-vue.html?id=thing/measure&code=1" target="_blank">新窗口查看</a></div>
