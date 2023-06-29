<template><div><h3> 核心依赖库 Leaflet 介绍 </h3>
<p><a href="https://leafletjs.com/" target="_blank" rel="noopener noreferrer">Leaflet<ExternalLinkIcon/></a>是一个开源的 JavaScript 库，对移动端友好且有很好的交互性。大小仅仅只有 33 KB， 同时具有大多数地图所需要的特点。 Leaflet 设计的非常简单易懂, 同时具有很好的性能和易用性。 它在桌面端和移动端都工作的相当高效，并有大量的插件用于扩张 Leaflet 的功能。</p>
<h2 id="_1-leaflet-的作者-个人-vladimir-agafonkin" tabindex="-1"><a class="header-anchor" href="#_1-leaflet-的作者-个人-vladimir-agafonkin" aria-hidden="true">#</a> 1. Leaflet 的作者(个人)：Vladimir Agafonkin</h2>
<p>Vladimir Agafonkin 是一名软件工程师。他创建了 Leaflet，它是交互式网络地图的第一大库，并维护了 40 多个其他开源项目，重点是算法、计算几何和性能。目前作者就职于 Mapbox 公司。</p>
<p>联系作者：agafonkin@gmail.com</p>
<h5 id="他的自我介绍" tabindex="-1"><a class="header-anchor" href="#他的自我介绍" aria-hidden="true">#</a> 他的自我介绍</h5>
<p>我也是一名音乐家。我用 Obiymy Doschu 写歌、弹吉他和唱歌。如果您喜欢带有弦乐编曲的优美、动人、多层次的摇滚音乐，请查看我们的上一张专辑。</p>
<p>我是美丽的 7 岁双胞胎女孩的父亲，我婚姻幸福，住在乌克兰基辅。我喜欢烘焙、摄影、力量训练、武术、阅读科幻小说和探索安静的公园。您可以在 Instagram、Twitter 和 Facebook 上找到我的生活花絮。</p>
<h5 id="他的相关文章" tabindex="-1"><a class="header-anchor" href="#他的相关文章" aria-hidden="true">#</a> 他的相关文章</h5>
<ul>
<li><a href="">How I built a wind map with WebGL</a></li>
<li><a href="">A dive into spatial search algorithms</a></li>
<li><a href="">MARTINI: Real-Time Terrain Mesh Generator</a></li>
<li><a href="">Rendering big geodata on the fly with GeoJSON-VT</a></li>
<li><a href="">Fast geodesic approximations with Cheap Ruler</a></li>
<li><a href="">Clustering millions of points on a map with Supercluster</a></li>
<li><a href="">A web map from scratch</a></li>
<li><a href="">Kinematics of reverse-angle parking</a></li>
<li><a href="">Introducing heatmaps in Mapbox GL</a></li>
<li><a href="">A new algorithm for finding a visual center of a polygon</a></li>
<li><a href="">Where Kyiv winters as snowy as I remember as a kid?</a></li>
<li><a href="">How to give awesome public talks</a></li>
</ul>
<h2 id="_2-leaflet-官方网站" tabindex="-1"><a class="header-anchor" href="#_2-leaflet-官方网站" aria-hidden="true">#</a> 2. Leaflet 官方网站</h2>
<p>建议大家将 Leaflet 官网的博客都读一遍，博客大概分为三类，主要是技术类，比如性能优化，调度算法等，一类是定期的新版本特性，能够了解 Leaflet 新功能和新特性，还有一类是大事记，比较轻松，不妨感受一下 Leaflet 的团队文化。<br />
<a href="https://leafletjs.com/" target="_blank" rel="noopener noreferrer">Leaflet 官网<ExternalLinkIcon/></a>  <a href="https://leafletjs.com/blog.html" target="_blank" rel="noopener noreferrer">官方博客<ExternalLinkIcon/></a></p>
<h2 id="_3-leaflet-的源码" tabindex="-1"><a class="header-anchor" href="#_3-leaflet-的源码" aria-hidden="true">#</a> 3. Leaflet 的源码</h2>
<p>Leaflet 遵循 BSD-2-Clause License 许可开源协议，可以免费的用于商业和非商业用途，无论是个人还是商业用途，可以任意修改源码不用开源，需要声明该产品使用了 Leaflet。<br />
<a href="https://github.com/Leaflet/Leaflet" target="_blank" rel="noopener noreferrer">GitHub 开源地址<ExternalLinkIcon/></a> <a href="https://leafletjs.com/examples.html" target="_blank" rel="noopener noreferrer">官方教程<ExternalLinkIcon/></a> <a href="http://mars2d.cn/api/leaflet/reference_cn.html" target="_blank" rel="noopener noreferrer">API 文档<ExternalLinkIcon/></a><br />
Leaflet 目前已经成熟近十多年，非常稳定，很少更新，当前最新版本是：<br />
版本：（发布时间：）<a href="">下载 ZIP 包</a> 或 <a href="https://github.com/Leaflet/Leaflet/releases" target="_blank" rel="noopener noreferrer"> Gihub releases 列表<ExternalLinkIcon/></a><br />
Leaflet 架构图，建议使用前先熟悉整体架构图，以便能够快速使用。 [新窗口查看大图]((/dev/img/jiagou/leaflet.png) ![架构图]((/dev/img/jiagou/leaflet.png)</p>
<h2 id="_4-mars2d-与-leaflet-的关系" tabindex="-1"><a class="header-anchor" href="#_4-mars2d-与-leaflet-的关系" aria-hidden="true">#</a> 4. Mars2D 与 Leaflet 的关系</h2>
<p>Mars2D 很多类都是直接继承 Leaflet 的类来扩展使用的，比如<code v-pre>mars2d.Map extends L.Map</code>,两个 SDK 是互相独立解耦的，可以理解为 mars2d 对 leaflet 做了扩展和提升，并重新封装、增加了很多功能。</p>
<p>以下是我们列出的继承关系清单，如果你对 leaflet 本身 api 比较熟悉，那么对应的我们扩展的类内的 api 都是包含 leaflet 本身的接口方法的，可以直接平滑兼容使用。</p>
<table>
<thead>
<tr>
<th style="text-align:center">leaflet 类</th>
<th style="text-align:center">mars2d 类</th>
<th style="text-align:center">说明</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:center">L.Map</td>
<td style="text-align:center"><a href="http://mars2d.cn/api/Map.html" target="_blank" rel="noopener noreferrer">mars2d.Map<ExternalLinkIcon/></a></td>
<td style="text-align:center">地图主对象</td>
</tr>
<tr>
<td style="text-align:center">L.TileLayer</td>
<td style="text-align:center"><a href="http://mars2d.cn/api/TileLayer.html" target="_blank" rel="noopener noreferrer">mars2d.layer.TileLayer<ExternalLinkIcon/></a></td>
<td style="text-align:center">XYZ 瓦片 图层</td>
</tr>
<tr>
<td style="text-align:center">L.TileLayer.WMS</td>
<td style="text-align:center"><a href="http://mars2d.cn/api/WmsLayer.html" target="_blank" rel="noopener noreferrer">mars2d.layer.WmsLayer<ExternalLinkIcon/></a></td>
<td style="text-align:center">WMS 服务 图层</td>
</tr>
<tr>
<td style="text-align:center">L.ImageOverlay</td>
<td style="text-align:center"><a href="http://mars2d.cn/api/ImageLayer.html" target="_blank" rel="noopener noreferrer">mars2d.layer.ImageLayer<ExternalLinkIcon/></a></td>
<td style="text-align:center">单张图片 图层</td>
</tr>
<tr>
<td style="text-align:center">L.FeatureGroup</td>
<td style="text-align:center"><a href="http://mars2d.cn/api/GraphicLayer.html" target="_blank" rel="noopener noreferrer">mars2d.layer.GraphicLayer<ExternalLinkIcon/></a></td>
<td style="text-align:center">矢量数据 图层</td>
</tr>
<tr>
<td style="text-align:center">L.LayerGroup</td>
<td style="text-align:center"><a href="http://mars2d.cn/api/GroupLayer.html" target="_blank" rel="noopener noreferrer">mars2d.layer.GroupLayer<ExternalLinkIcon/></a></td>
<td style="text-align:center">图层组</td>
</tr>
<tr>
<td style="text-align:center">L.Marker</td>
<td style="text-align:center"><a href="http://mars2d.cn/api/Marker.html" target="_blank" rel="noopener noreferrer">mars2d.graphic.Marker<ExternalLinkIcon/></a></td>
<td style="text-align:center">图标点 矢量对象</td>
</tr>
<tr>
<td style="text-align:center">L.CircleMarker</td>
<td style="text-align:center"><a href="http://mars2d.cn/api/Point.html" target="_blank" rel="noopener noreferrer">mars2d.graphic.Point<ExternalLinkIcon/></a></td>
<td style="text-align:center">像素圆点 矢量对象</td>
</tr>
<tr>
<td style="text-align:center">L.Polyline</td>
<td style="text-align:center"><a href="http://mars2d.cn/api/Polyline.html" target="_blank" rel="noopener noreferrer">mars2d.graphic.Polyline<ExternalLinkIcon/></a></td>
<td style="text-align:center">线 矢量对象</td>
</tr>
<tr>
<td style="text-align:center">L.Polygon</td>
<td style="text-align:center"><a href="http://mars2d.cn/api/Polygon.html" target="_blank" rel="noopener noreferrer">mars2d.graphic.Polygon<ExternalLinkIcon/></a></td>
<td style="text-align:center">面 矢量对象</td>
</tr>
<tr>
<td style="text-align:center">L.Circle</td>
<td style="text-align:center"><a href="http://mars2d.cn/api/Circle.html" target="_blank" rel="noopener noreferrer">mars2d.graphic.Circle<ExternalLinkIcon/></a></td>
<td style="text-align:center">圆 矢量对象</td>
</tr>
<tr>
<td style="text-align:center">L.Rectangle</td>
<td style="text-align:center"><a href="http://mars2d.cn/api/Rectangle.html" target="_blank" rel="noopener noreferrer">mars2d.graphic.Rectangle<ExternalLinkIcon/></a></td>
<td style="text-align:center">矩形 矢量对象</td>
</tr>
</tbody>
</table>
<h3 id="_4-1-mars2d-中如何使用-leaflet" tabindex="-1"><a class="header-anchor" href="#_4-1-mars2d-中如何使用-leaflet" aria-hidden="true">#</a> 4.1 mars2d 中如何使用 Leaflet</h3>
<p>开发时如果需要 Leaflet 的内部接口可以直接使用<code v-pre>L.*</code>来调用即可，vue 等环境中也可以通过<code v-pre>mars2d.L.*</code> 来获取 Leaflet 相关对象。</p>
</div></template>


