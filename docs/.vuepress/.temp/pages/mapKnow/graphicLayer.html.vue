<template><div><h3> 矢量图层 </h3>
<img class='images' src="@source/public/icon/yonghu.svg" alt="来自依赖包的图片">
<i class='text'>Mars2D</i>
<img class='imagess' src="@source/public/icon/shijian.svg" alt="来自依赖包的图片">
<i class='text'>30/6/2023</i>
<img class='imagess' src="@source/public/icon/liulan.svg" alt="来自依赖包的图片">
<i class='text'>0</i>
<p>地图场景中，地形和栅格来组成了二维的基础，但更多的业务还是需要 点线面等矢量数据来充实, 这就是我们的矢量数据图层。
<img src="@source/public/image/map-graphic.jpg" alt="配置图"> <br /></p>
<h2 id="_1-图层类型清单" tabindex="-1"><a class="header-anchor" href="#_1-图层类型清单" aria-hidden="true">#</a> 1. 图层类型清单</h2>
<p>当前主要使用的矢量图层，是指<a href="http://mars2d.cn/api/TileLayer.html" target="_blank" rel="noopener noreferrer">GraphicLayer<ExternalLinkIcon/></a>类及其子类对象。矢量图层中可以通过 addGraphic 方法来加入<a href="http://mars2d.cn/api/global.html#GraphicType" target="_blank" rel="noopener noreferrer">各类型<ExternalLinkIcon/></a>的<a href="http://mars2d.cn/api/BaseGraphic.html" target="_blank" rel="noopener noreferrer">矢量数据<ExternalLinkIcon/></a>来组成。
目前常用的矢量图层有以下类型：</p>
<table>
<thead>
<tr>
<th style="text-align:center">type 类型名</th>
<th style="text-align:center">图层说明</th>
<th style="text-align:center">对应的图层类</th>
<th style="text-align:center">备注</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:center">graphic</td>
<td style="text-align:center">矢量数据图层</td>
<td style="text-align:center"><a href="http://mars2d.cn/api/GraphicLayer.html" target="_blank" rel="noopener noreferrer">mars2d.layer.GraphicLayer<ExternalLinkIcon/></a></td>
<td style="text-align:center"></td>
</tr>
<tr>
<td style="text-align:center">geojson</td>
<td style="text-align:center">GeoJSON 图层</td>
<td style="text-align:center"><a href="http://mars2d.cn/api/GeoJsonLayer.html" target="_blank" rel="noopener noreferrer">mars2d.layer.GeoJsonLayer<ExternalLinkIcon/></a></td>
<td style="text-align:center"></td>
</tr>
<tr>
<td style="text-align:center">wfs</td>
<td style="text-align:center">OGC WFS 图层</td>
<td style="text-align:center"><a href="http://mars2d.cn/api/WfsLayer.html" target="_blank" rel="noopener noreferrer">mars2d.layer.WfsLayer<ExternalLinkIcon/></a></td>
<td style="text-align:center"></td>
</tr>
<tr>
<td style="text-align:center">arcgis_feature</td>
<td style="text-align:center">ArcGIS WFS 图层</td>
<td style="text-align:center"><a href="http://mars2d.cn/api/ArcGisFeatureLayer.html" target="_blank" rel="noopener noreferrer">mars2d.layer.ArcGisFeatureLayer <ExternalLinkIcon/></a></td>
<td style="text-align:center"></td>
</tr>
</tbody>
</table>
<h2 id="_2-矢量图层的创建及使用" tabindex="-1"><a class="header-anchor" href="#_2-矢量图层的创建及使用" aria-hidden="true">#</a> 2. 矢量图层的创建及使用</h2>
<h3 id="_2-1-快速开始-初始化-new-map-时传入" tabindex="-1"><a class="header-anchor" href="#_2-1-快速开始-初始化-new-map-时传入" aria-hidden="true">#</a> 2.1 快速开始(初始化 new Map 时传入)</h3>
<p>在构造 Map 时传入<code v-pre>layers</code>参数中配置相关图层，并设置<code v-pre>show:true</code>后进行初始化加载矢量图层</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">var</span> map <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">mars2d<span class="token punctuation">.</span>Map</span><span class="token punctuation">(</span><span class="token string">"mars2dContainer"</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">layers</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token punctuation">{</span>
      <span class="token literal-property property">id</span><span class="token operator">:</span> <span class="token number">1987</span><span class="token punctuation">,</span>
      <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">"geojson"</span><span class="token punctuation">,</span>
      <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">"示例数据"</span><span class="token punctuation">,</span>
      <span class="token literal-property property">url</span><span class="token operator">:</span> <span class="token string">"//data.mars2d.cn/file/geojson/mars2d-draw.json"</span><span class="token punctuation">,</span>
      <span class="token literal-property property">popup</span><span class="token operator">:</span> <span class="token string">"{name}"</span><span class="token punctuation">,</span>
      <span class="token literal-property property">show</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">//可以通过下面方法获取到配置的图层</span>
<span class="token keyword">let</span> geojsonLayer <span class="token operator">=</span> map<span class="token punctuation">.</span><span class="token function">getLayer</span><span class="token punctuation">(</span><span class="token number">1987</span><span class="token punctuation">,</span> <span class="token string">"id"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-2-代码中创建图层" tabindex="-1"><a class="header-anchor" href="#_2-2-代码中创建图层" aria-hidden="true">#</a> 2.2 代码中创建图层</h3>
<p>可以有下面 2 种方式来创建图层对象：</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token comment">//用工厂方法，指定type来创建图层对象</span>
<span class="token keyword">var</span> wfsLayer <span class="token operator">=</span> mars2d<span class="token punctuation">.</span>LayerUtil<span class="token punctuation">.</span><span class="token function">create</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">"geojson"</span><span class="token punctuation">,</span>
  <span class="token literal-property property">url</span><span class="token operator">:</span> <span class="token string">"http://data.mars2d.cn/file/geojson/areas/100000_full.json"</span><span class="token punctuation">,</span>
  <span class="token literal-property property">symbol</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">"polyline"</span><span class="token punctuation">,</span>
    <span class="token literal-property property">styleOptions</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">color</span><span class="token operator">:</span> <span class="token string">"#ff0000"</span><span class="token punctuation">,</span>
      <span class="token literal-property property">width</span><span class="token operator">:</span> <span class="token number">3</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
map<span class="token punctuation">.</span><span class="token function">addLayer</span><span class="token punctuation">(</span>wfsLayer<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">//直接创建具体类型的图层对象</span>
<span class="token keyword">var</span> geoJsonLayer <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">mars2d<span class="token punctuation">.</span>layer<span class="token punctuation">.</span>GeoJsonLayer</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">url</span><span class="token operator">:</span> <span class="token string">"http://data.mars2d.cn/file/geojson/areas/100000_full.json"</span><span class="token punctuation">,</span>
  <span class="token literal-property property">symbol</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">"polyline"</span><span class="token punctuation">,</span>
    <span class="token literal-property property">styleOptions</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">color</span><span class="token operator">:</span> <span class="token string">"#ff0000"</span><span class="token punctuation">,</span>
      <span class="token literal-property property">width</span><span class="token operator">:</span> <span class="token number">3</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
map<span class="token punctuation">.</span><span class="token function">addLayer</span><span class="token punctuation">(</span>geoJsonLayer<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote>
<p>在 Map 创建后可以通过<a href="http://mars2d.cn/api/Map.html#addLayer" target="_blank" rel="noopener noreferrer">map.addLayer<ExternalLinkIcon/></a>和<a href="http://mars2d.cn/api/Map.html#removeLayer" target="_blank" rel="noopener noreferrer">map.removeLayer<ExternalLinkIcon/></a>方法来控制图层的加载和删除。</p>
</blockquote>
<blockquote>
<p>在图层本身也有<a href="http://mars2d.cn/api/BaseLayer.html#addTo" target="_blank" rel="noopener noreferrer"> layer.addTo<ExternalLinkIcon/></a>和<a href="http://mars2d.cn/api/BaseLayer.html#remove" target="_blank" rel="noopener noreferrer">layer.remove<ExternalLinkIcon/></a>2 个方法支持添加或移除图层。</p>
</blockquote>
<h2 id="_3-常用矢量图层类" tabindex="-1"><a class="header-anchor" href="#_3-常用矢量图层类" aria-hidden="true">#</a> 3 常用矢量图层类</h2>
<h3 id="_3-1-graphiclayer" tabindex="-1"><a class="header-anchor" href="#_3-1-graphiclayer" aria-hidden="true">#</a> 3.1 GraphicLayer</h3>
<p>矢量数据图层</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token comment">//创建矢量数据图层</span>
<span class="token keyword">let</span> graphicLayer <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">mars2d<span class="token punctuation">.</span>layer<span class="token punctuation">.</span>GraphicLayer</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
map<span class="token punctuation">.</span><span class="token function">addLayer</span><span class="token punctuation">(</span>graphicLayer<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">//加载数据到矢量图层</span>
<span class="token keyword">var</span> graphic <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">mars2d<span class="token punctuation">.</span>graphic<span class="token punctuation">.</span>Marker</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">latlng</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token number">31.854628</span><span class="token punctuation">,</span> <span class="token number">117.245425</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token literal-property property">style</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">image</span><span class="token operator">:</span> <span class="token string">"img/marker/mark1.jpg"</span><span class="token punctuation">,</span>
    <span class="token literal-property property">width</span><span class="token operator">:</span> <span class="token number">32</span><span class="token punctuation">,</span>
    <span class="token literal-property property">height</span><span class="token operator">:</span> <span class="token number">44</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
graphicLayer<span class="token punctuation">.</span><span class="token function">addGraphic</span><span class="token punctuation">(</span>graphic<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3-2-geojsonlayer" tabindex="-1"><a class="header-anchor" href="#_3-2-geojsonlayer" aria-hidden="true">#</a> 3.2 GeoJsonLayer</h3>
<p>GeoJSON 是适合于 Web 下对各种地理数据结构进行编码的格式，基于 Javascript 对象表示法的地理空间信息数据交换格式。与普通 json 文件格式区别在于对其属性及组成由一定规范。</p>
<blockquote>
<p>GeoJSON 将所有的地理要素分为 Point、MultiPoint、LineString、MultiLineString、Polygon、MultiPolygon、GeometryCollection。首先是将这些要素封装到单个的 geometry 里，然后作为一个个的 Feature（要素）；要素放到一个要素集合里构成。</p>
</blockquote>
<p>GeoJSON 是平台很重要的数据格式，当前平台内矢量数据均支持导出 GeoJSON 和导入 GeoJSON 格式。</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">let</span> geoJsonLayer <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">mars2d<span class="token punctuation">.</span>layer<span class="token punctuation">.</span>GeoJsonLayer</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">"省界线"</span><span class="token punctuation">,</span>
  <span class="token literal-property property">url</span><span class="token operator">:</span> <span class="token string">"http://data.mars2d.cn/file/geojson/sheng-line.json"</span><span class="token punctuation">,</span>
  <span class="token literal-property property">symbol</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token comment">//可以通过配置symbol参数来指定渲染的矢量数据类型和样式。</span>
    <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">"polyline"</span><span class="token punctuation">,</span>
    <span class="token literal-property property">styleOptions</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">color</span><span class="token operator">:</span> <span class="token string">"#ffffff"</span><span class="token punctuation">,</span>
      <span class="token literal-property property">opacity</span><span class="token operator">:</span> <span class="token number">0.8</span><span class="token punctuation">,</span>
      <span class="token literal-property property">width</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
map<span class="token punctuation">.</span><span class="token function">addLayer</span><span class="token punctuation">(</span>geoJsonLayer<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote>
<p>常用 geojson 相关网站：</p>
<ul>
<li>在线生成 GeoJSON：<a href="http://geojson.io/" target="_blank" rel="noopener noreferrer">http://geojson.io/<ExternalLinkIcon/></a></li>
<li>SHP 转 GeoJSON：<a href="https://mapshaper.org/" target="_blank" rel="noopener noreferrer">https://mapshaper.org/<ExternalLinkIcon/></a></li>
<li>中国行政区划 GeoJSON 下载：<a href="http://datav.aliyun.com/portal/school/atlas/area_selector" target="_blank" rel="noopener noreferrer">http://datav.aliyun.com/tools/atlas/<ExternalLinkIcon/></a></li>
</ul>
</blockquote>
<h3 id="_3-1-wfs-图层" tabindex="-1"><a class="header-anchor" href="#_3-1-wfs-图层" aria-hidden="true">#</a> 3.1 WFS 图层</h3>
<p>平台支持 通过<a href="http://mars2d.cn/api/WfsLayer.html" target="_blank" rel="noopener noreferrer">WfsLayer 类<ExternalLinkIcon/></a>来加载 OGC WFS(如 GeoServer)服务 、通过<a href="http://mars2d.cn/api/ArcGisFeatureLayer.html" target="_blank" rel="noopener noreferrer">ArcGisFeatureLayer 类<ExternalLinkIcon/></a>来加载 ArcGIS Server 服务发布的矢量数据的加载。</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token comment">//OGC WFS</span>
<span class="token keyword">var</span> wfsLayer <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">mars2d<span class="token punctuation">.</span>layer<span class="token punctuation">.</span>WfsLayer</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">"规划面"</span><span class="token punctuation">,</span>
  <span class="token literal-property property">url</span><span class="token operator">:</span> <span class="token string">"http://server.mars2d.cn/geoserver/mars/ows"</span><span class="token punctuation">,</span>
  <span class="token literal-property property">typeNS</span><span class="token operator">:</span> <span class="token string">"mars"</span><span class="token punctuation">,</span>
  <span class="token literal-property property">typeName</span><span class="token operator">:</span> <span class="token string">"hfgh"</span><span class="token punctuation">,</span>
  <span class="token literal-property property">minZoom</span><span class="token operator">:</span> <span class="token number">16</span><span class="token punctuation">,</span>
  <span class="token literal-property property">geometryField</span><span class="token operator">:</span> <span class="token string">"the_geom"</span><span class="token punctuation">,</span>
  <span class="token literal-property property">symbol</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">"polygon"</span><span class="token punctuation">,</span>
    <span class="token literal-property property">styleOptions</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">fillOpacity</span><span class="token operator">:</span> <span class="token number">0.6</span><span class="token punctuation">,</span>
      <span class="token literal-property property">fillColor</span><span class="token operator">:</span> <span class="token string">"#0000FF"</span><span class="token punctuation">,</span>
      <span class="token literal-property property">outline</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token literal-property property">styleField</span><span class="token operator">:</span> <span class="token string">"用地编号"</span><span class="token punctuation">,</span>
    <span class="token literal-property property">styleFieldOptions</span><span class="token operator">:</span> styleForType<span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">popup</span><span class="token operator">:</span> <span class="token string">"all"</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
map<span class="token punctuation">.</span><span class="token function">addLayer</span><span class="token punctuation">(</span>wfsLayer<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">//ArcGIS WFS</span>
<span class="token keyword">var</span> wfsLayer <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">mars2d<span class="token punctuation">.</span>layer<span class="token punctuation">.</span>ArcGisWfsLayer</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">"合肥市"</span><span class="token punctuation">,</span>
  <span class="token literal-property property">url</span><span class="token operator">:</span> <span class="token string">"http://server.mars2d.cn/arcgis/rest/services/mars/hefei/MapServer/20"</span><span class="token punctuation">,</span>
  <span class="token literal-property property">popup</span><span class="token operator">:</span> <span class="token string">"all"</span><span class="token punctuation">,</span>
  <span class="token literal-property property">symbol</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">styleOptions</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">iconUrl</span><span class="token operator">:</span> <span class="token string">"img/marker/fx1.jpg"</span><span class="token punctuation">,</span>
      <span class="token literal-property property">iconSize</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token number">30</span><span class="token punctuation">,</span> <span class="token number">30</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
      <span class="token literal-property property">iconAnchor</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token number">15</span><span class="token punctuation">,</span> <span class="token number">15</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
      <span class="token literal-property property">popupAnchor</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token operator">-</span><span class="token number">15</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">popup</span><span class="token operator">:</span> <span class="token string">"all"</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
map<span class="token punctuation">.</span><span class="token function">addLayer</span><span class="token punctuation">(</span>wfsLayer<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote>
<p>可以通过配置 symbol 参数来指定渲染的矢量数据类型和样式。</p>
</blockquote>
</div></template>


