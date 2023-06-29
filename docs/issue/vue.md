---
title: vue技术栈下注意事项
date: 2022-09-22 15:39:13
---

<h3> vue技术栈下开发注意事项 </h3>
在基于vue框架+Mars2D产品做二维应用开发的项目中，比较常见的问题是性能卡顿。经过排查，发现普遍是由以下问题引起的，现总结出引起相关问题的原因及解决办法，以供参考：<br />

## 1. 任意 Mars2D 对象放入到 store、data、computed 中后，会引起系统越用越卡。

vue 响应式框架对页面数据的渲染非常友好，会把 data 内所有对象的属性都转换成 get,set 进行监听。 但是将 Leaflet 或 Mars2D 的任意对象直接挂载到 vue 的 data 对象上时，Leaflet 或 Mars2D 的对象被双向绑定后，会造成无法自动释放、整个页面的渲染效率，降低帧率，越用越卡，特别在有加载大体量数据场景时，影响更加明显。

> 正确做法: 将 map、graphic、graphicLayer 等对象作为不要放在 store、data、computed 中，避免 vue 劫持 map。

![配置图][1]

### vue3 中可以使用 markRaw 来标识不进行双向绑定

markRaw 作用：标记一个对象，使其永远不会再成为响应式对象。
![配置图][2]
## 2. 用完的对象之后要及时销毁，防止出现功能在界面上关闭但对象还驻留在内存中的情况。

目前 Leaflet 和 Mars2D 的类都有 remove、destroy 方法，在 vue 组件关闭时及时销毁使用完的对象。

> 正确做法: 在 vue 组件的 destroy(vue2)、onUnmounted(vue3)等钩子方法中销毁使用完的对象。

```js
onUnmounted(() => {
  this.map.removeControl(this.controlTest); //移除
  this.graphicLayer.destroy(); //销毁
});
```

[1]: ../public/image/issue-vue-data.jpg
[2]: ../public/image/issue-vue3-markRaw.jpg
