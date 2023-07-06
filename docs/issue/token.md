---
title: 第三方token访问有问题
date: 2022-09-22 15:39:13
---

<h3>第3方token有问题</h3>

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

## 问题的现象

第 3 方服务相关功能访问 F12 提示超流量或 403 错误等，造成功能无法正常使用。

## 问题的原因

百度、高德、天地图等第 3 方需要 token，目前平台内是我们申请了演示的 token 内置在平台中，但因为我们平台使用用户较多，访问量容易超限量或误判为爬虫被封， 目前包括以下第 3 方服务（非必须，看自己项目选用的功能）：

- 百度 POI 等服务， token 申请地址：[ http://lbsyun.baidu.com/apiconsole/key](https://lbsyun.baidu.com/apiconsole/user/choose)
- 高德 POI 等服务，token 申请地址：[ https://console.amap.com/dev/key/app](https://lbs.amap.com/?ref=https://console.amap.com/dev/key/app)
- 天地图底图等服务， token 申请地址：[ https://console.tianditu.gov.cn/api/key](https://sso.tianditu.gov.cn/login?service=https%3A%2F%2Fconsole.tianditu.gov.cn%2Fapi%2Fkey)
- mapbox 地图， token 申请地址：[https://account.mapbox.com](https://account.mapbox.com/auth/signin/?route-to=%22https%3A%2F%2Faccount.mapbox.com%2F%22)

## 解决方法及步骤

请在自己项目中根据用到的服务情况，申请下自己的 key 或 token 后进行修改替换，主要做 2 类修改：

目前所有第 3 方涉及 token 的类均支持传入 key 或 token 参数来设置。如果未传入参数时，平台使用了内置的[mars2d.Token.\*](http://marsgis.cn/api/Token.html)默认值。

## 1. 覆盖 mars2d.Token 中默认值

此方式适合所有类都未传入入 key 或 token 参数的情况，改一处全局生效，也建议项目中按这种方式处理。<br />
（1）如果构造 map 是通过 config.json，可以按下面示例增加 token 配置。

```json
{
  "map3d": {
    "scene": {}, //已忽略其他参数值
    "token": {
      "tianditu": "e5c3984ced09bc1f55e8e1107fdc5a6b",
      "baidu": "jTqhUqeeRirqd8musUiYmthqdHDHsiB2",
      "gaode": "ee24b622294b5bc659fb92fe81084776",
      "mapbox": "pk.eyJ1IjoiY25zdW55b3VyIiwiYSI6ImNsMmN5Y2ppaDB0ZGYzam8yZmF2MjVqb3cifQ.FYxirkiZsriqaFw_x0IyAw"
    },
    "terrain": {}, //已忽略其他参数值
    "basemaps": [],
    "layers": []
  }
}
```

（2） 如果构造 mars2d.Map 是代码构造的参数，可以按下面示例增加 token 参数。

```js
let map = new mars2d.Map("mars2dContainer", {
  //已忽略其他参数
  token: {
    tianditu: "e5c3984ced09bc1f55e8e1107fdc5a6b",
    baidu: "jTqhUqeeRirqd8musUiYmthqdHDHsiB2",
    gaode: "ee24b622294b5bc659fb92fe81084776",
    mapbox:
      "pk.eyJ1IjoiY25zdW55b3VyIiwiYSI6ImNsMmN5Y2ppaDB0ZGYzam8yZmF2MjVqb3cifQ.FYxirkiZsriqaFw_x0IyAw",
  },
});
```

## 2：批量替换修改 key 参数值

如果相关配置或代码中使用了 key 参数，就需要全局批量替换下，可以复制已有 key 值，打开项目后全局全字匹配后批量替换。

（1）我们已天地图 key 为例，假设：

- 原有示例中的 key 为 `789e558be762ff832392a0393fd8a4f1`
- 自己申请的 key 为 `d083e4cf30bfc438ef93436c10c2c20a` <br />
  可以批量替换`789e558be762ff832392a0393fd8a4f1`为`d083e4cf30bfc438ef93436c10c2c20a`

```json
{
  "control": {}, //已忽略其他参数
  "basemaps": [
    {
      "name": "天地图影像",
      "type": "group",
      "layers": [
        {
          "name": "底图",
          "type": "tdt",
          "layer": "img_d",
          "key": ["d083e4cf30bfc438ef93436c10c2c20a"]
        },
        {
          "name": "注记",
          "type": "tdt",
          "layer": "img_z",
          "key": ["d083e4cf30bfc438ef93436c10c2c20a"]
        }
      ],
      "show": true
    }
  ],
  "operationallayers": []
}
```

（2）如果是 js 代码中，比如下面的[GaodeRoute 类](http://mars2d.cn/api/GaodeRoute.html?classFilter=gaode)使用代码，可以批量替换`ae29a37307840c7ae4a785ac905927e0`为`ee24b622294b5bc659fb92fe81084776`

- 在使用的类中参考 API 增加 key 参数：

```js
gaodeRoute = new mars2d.query.GaodeRoute({
  key: ["ae29a37307840c7ae4a785ac905927e0"],
});

//未传入key参数，内部使用了默认值。如果未解决 也可以按需修改代码，增加key值。
gaodeRoute = new mars2d.query.GaodeRoute();
```
