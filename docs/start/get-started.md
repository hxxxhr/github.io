---
title: 快速上手
date: 2022-09-22 15:39:13
---

<h3> 快速上手 </h3>

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
 
## 获取 Mars2D
Mars2D 支持多种下载方式，可以在下一篇教程[获取 Mars2D SDK类库](http://mars2d.cn/doc.html#start/download)中查看所有方式。这里，我们以从 [jsDelivr](https://www.jsdelivr.com/package/npm/mars2d)CDN 上获取为例，介绍如何快速安装。
> 关于这些文件的介绍，可以在下一篇教程获取[获取 Mars2D SDK类库](/start/download.md)中了解更多信息。

## 引入 Mars2D

在电脑新建一个目录来存放代码文件，比如`D:\test\`, 通过 VS Code 打开此项目目录。

> VS Code 的使用请参考[开发环境搭建](/mapIntel/env.md)章节教程在项目目录下新建一个`D:\test\index.html`文件，内容如下：

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8" />
    <!--引入leaflet基础lib-->
    <link
      rel="stylesheet"
      href="https://unpkg.com/leaflet/dist/leaflet.css"
      crossorigin=""
    />
    <script
      src="https://unpkg.com/leaflet/dist/leaflet.js"
      crossorigin=""
    ></script>
    <!--引入mars2d库lib-->
    <link
      href="https://unpkg.com/mars2d/dist/mars2d.css"
      rel="stylesheet"
      type="text/css"
    />
    <script
      src="https://unpkg.com/mars2d/dist/mars2d.js"
      type="text/javascript"
    ></script>
  </head>
</html>
```

在 VS Code 中打开这个`D:\test\index.html`，通过右键 采用 Open with live server 方式 运行，你会看到一片空白。但是不要担心，打开控制台确认没有报错信息，并有正确的 mars2d 版本等信息提示，就可以进行下一步。

## 绘制一个简单的二维地图

在绘二维地图前我们需要为 Mars2D 准备一个定义了高宽的 DOM 容器。在刚才的例子 `</head>`之后，添加：

```html
<body>
  <!-- 为 Mars2D 准备一个定义了宽高的 DOM -->
  <div id="mars2dContainer" class="mars2d-container"></div>
</body>
```

然后就可以通过[new mars2d.Map](http://mars2d.cn/api/Map.html)方法初始化一个 mars2d 实例并通过传入 mapOptions 参数生成一个简单的二维地图，下面是完整代码。

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8" />
    <title>mars2d</title>
    <!--引入leaflet基础lib-->
    <link
      rel="stylesheet"
      href="https://unpkg.com/leaflet/dist/leaflet.css"
      crossorigin=""
    />
    <script
      src="https://unpkg.com/leaflet/dist/leaflet.js"
      crossorigin=""
    ></script>
    <!--引入mars2d库lib-->
    <link
      href="https://unpkg.com/mars2d/dist/mars2d.css"
      rel="stylesheet"
      type="text/css"
    />
    <script
      src="https://unpkg.com/mars2d/dist/mars2d.js"
      type="text/javascript"
    ></script>
    <style>
      html,
      body {
        height: 100%;
        width: 100%;
        margin: 0;
        padding: 0;
        border: none;
        overflow: hidden;
      }
    </style>
  </head>

  <body>
    <!-- 为 Mars2D 准备一个定义了宽高的 DOM -->
    <div id="mars2dContainer" class="mars2d-container"></div>
    <script type="text/javascript">
      //支持的参数请看API文档：http://mars2d.cn/api/Map.html
      var mapOptions = {
        zoom: 13, //地图层级
        center: { lng: 117.240601, lat: 31.827107 }, //地图中心点
        basemaps: [
          { name: "高德地图", type: "gaode", layer: "vec", show: true }, //底图
        ],
      };
      var map = new mars2d.Map("mars2dContainer", mapOptions);
    </script>
  </body>
</html>
```

这样你的第一个二维地图就诞生了！

<div style="height:410px;position:relative;" data-v-627b1480><iframe height="100%" width="100%" scrolling="yes" title="mars2d" src="http://mars2d.cn/editor-vue.html?id=map/create/options&amp;full=1" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="allowfullscreen" data-v-627b1480></iframe> <a class="toSee" href="http://mars2d.cn/editor-vue.html?id=map/create/options&code=1" target="_blank">新窗口查看</a></div>
