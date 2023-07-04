<template><div><h3> 地图图层 Layer </h3>
<img class='images' src="@source/public/icon/yonghu.svg" alt="来自依赖包的图片">
<i class='text'>Mars2D</i>
<img class='imagess' src="@source/public/icon/shijian.svg" alt="来自依赖包的图片">
<i class='text'>30/6/2023</i>
<img class='imagess' src="@source/public/icon/liulan.svg" alt="来自依赖包的图片">
<i class='text'>0</i>
<p>地图内是由各种不同的图层来叠加显示，形成整个二维地图场景的。 图层是地图中很重要的概念，也是平台内很重要的组成部分。<br />
<img src="@source/public/image/map-layer.jpg" alt="配置图"></p>
<h2 id="_1-图层类" tabindex="-1"><a class="header-anchor" href="#_1-图层类" aria-hidden="true">#</a> 1. 图层类</h2>
<p>平台的所有图层类都继承于<a href="http://mars2d.cn/api/leaflet/reference_cn.html#layer" target="_blank" rel="noopener noreferrer">L.Layer 类<ExternalLinkIcon/></a> ，图层类均在<code v-pre>mars2d.layer.*</code>命名空间下面。 图层清单请访问<a href="http://mars2d.cn/api/global.html#LayerType" target="_blank" rel="noopener noreferrer">LayerType 类<ExternalLinkIcon/></a></p>
<p>下面我们演示创建一个图层对象 ，并调用 map.addLayer 添加到地图上。</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token comment">//用工厂方法，指定type来创建图层对象</span>
<span class="token keyword">var</span> layer <span class="token operator">=</span> mars2d<span class="token punctuation">.</span>LayerUtil<span class="token punctuation">.</span><span class="token function">create</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">"tile"</span><span class="token punctuation">,</span>
  <span class="token literal-property property">url</span><span class="token operator">:</span> <span class="token string">"https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"</span><span class="token punctuation">,</span>
  <span class="token literal-property property">subdomains</span><span class="token operator">:</span> <span class="token string">"abc"</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
map<span class="token punctuation">.</span><span class="token function">addLayer</span><span class="token punctuation">(</span>layer<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">//直接创建具体类型的图层对象</span>
<span class="token keyword">var</span> tileLayer <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">mars2d<span class="token punctuation">.</span>layer<span class="token punctuation">.</span>TileLayer</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">url</span><span class="token operator">:</span> <span class="token string">"https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"</span><span class="token punctuation">,</span>
  <span class="token literal-property property">subdomains</span><span class="token operator">:</span> <span class="token string">"abc"</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
map<span class="token punctuation">.</span><span class="token function">addLayer</span><span class="token punctuation">(</span>tileLayer<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>图层主要分以下几大类 <br /> 1.栅格瓦片图层<a href="http://mars2d.cn/api/TileLayer.html" target="_blank" rel="noopener noreferrer">TileLayer<ExternalLinkIcon/></a> 等 ，是地图场景的基础皮肤 <br /> 2.矢量数据图层<a href="http://mars2d.cn/api/GraphicLayer.html" target="_blank" rel="noopener noreferrer">GraphicLayer<ExternalLinkIcon/></a> <br /> 3.图层组<a href="http://mars2d.cn/api/GroupLayer.html" target="_blank" rel="noopener noreferrer">GroupLayer<ExternalLinkIcon/></a>，方便组合管理<br /> 4.其他可视化图层</p>
<h3 id="_1-1-在-config-json-构造地图时涉及到的图层" tabindex="-1"><a class="header-anchor" href="#_1-1-在-config-json-构造地图时涉及到的图层" aria-hidden="true">#</a> 1.1. 在 config.json 构造地图时涉及到的图层</h3>
<table>
<thead>
<tr>
<th style="text-align:center">参数名</th>
<th style="text-align:center">类型</th>
<th style="text-align:center">参数 API</th>
<th style="text-align:center">说明</th>
<th style="text-align:center">支持的类</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:center">basemaps</td>
<td style="text-align:center">Array</td>
<td style="text-align:center"><a href="http://mars2d.cn/api/Map.html#.basemapOptions" target="_blank" rel="noopener noreferrer">参数<ExternalLinkIcon/></a></td>
<td style="text-align:center">底图图层</td>
<td style="text-align:center"><a href="http://mars2d.cn/api/TileLayer.html" target="_blank" rel="noopener noreferrer">TileLayer<ExternalLinkIcon/></a>及其他瓦片图层</td>
</tr>
<tr>
<td style="text-align:center">operationallayers</td>
<td style="text-align:center">Array</td>
<td style="text-align:center"><a href="http://mars2d.cn/api/Map.html#.layerOptions" target="_blank" rel="noopener noreferrer">参数<ExternalLinkIcon/></a></td>
<td style="text-align:center">底图图层</td>
<td style="text-align:center"><a href="http://mars2d.cn/api/global.html#LayerType" target="_blank" rel="noopener noreferrer">LayerType 清单<ExternalLinkIcon/></a></td>
</tr>
</tbody>
</table>
<h2 id="_2-常用图层介绍" tabindex="-1"><a class="header-anchor" href="#_2-常用图层介绍" aria-hidden="true">#</a> 2. 常用图层介绍</h2>
<h3 id="_2-1-栅格瓦片图层" tabindex="-1"><a class="header-anchor" href="#_2-1-栅格瓦片图层" aria-hidden="true">#</a> 2.1 栅格瓦片图层</h3>
<p>见<RouterLink to="/mapKnow/tileLayer.html">栅格瓦片</RouterLink>图层章节介绍。</p>
<h3 id="_2-2-矢量数据图层" tabindex="-1"><a class="header-anchor" href="#_2-2-矢量数据图层" aria-hidden="true">#</a> 2.2 矢量数据图层</h3>
<p>见<RouterLink to="/mapKnow/graphicLayer.html">矢量数据图层</RouterLink>章节介绍。</p>
<h3 id="_2-3-group-图层组说明" tabindex="-1"><a class="header-anchor" href="#_2-3-group-图层组说明" aria-hidden="true">#</a> 2.3 Group 图层组说明</h3>
<p>为了方便图层控制，平台提供了<code v-pre>type:'group'</code>的图层组<a href="http://mars2d.cn/api/GroupLayer.html" target="_blank" rel="noopener noreferrer">GroupLayer 类<ExternalLinkIcon/></a>图层，目前主要在构造 Map 时传入<code v-pre>basemaps</code>或<code v-pre>layers</code>参数中使用，可以用于：</p>
<ul>
<li>（1）将多个图层组合起来方便控制（比如将 卫星底图 和 文字注记层 放在一起控制管理）；</li>
</ul>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token punctuation">{</span>
 <span class="token string-property property">"name"</span><span class="token operator">:</span> <span class="token string">"离线地图"</span><span class="token punctuation">,</span>
 <span class="token string-property property">"type"</span><span class="token operator">:</span> <span class="token string">"group"</span><span class="token punctuation">,</span>
 <span class="token string-property property">"layers"</span><span class="token operator">:</span> <span class="token punctuation">[</span> <span class="token comment">//多个图层放在一起控制管理</span>
   <span class="token punctuation">{</span>
     <span class="token string-property property">"name"</span><span class="token operator">:</span> <span class="token string">"全国基础数据"</span><span class="token punctuation">,</span>
     <span class="token string-property property">"type"</span><span class="token operator">:</span> <span class="token string">"tile"</span><span class="token punctuation">,</span>
     <span class="token string-property property">"url"</span><span class="token operator">:</span> <span class="token string">"http://data.mars2d.cn/tile/googleImg/{z}/{x}/{y}.jpg"</span><span class="token punctuation">,</span>
     <span class="token string-property property">"minZoom"</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
     <span class="token string-property property">"maxZoom"</span><span class="token operator">:</span> <span class="token number">12</span>
   <span class="token punctuation">}</span><span class="token punctuation">,</span>
   <span class="token punctuation">{</span>
     <span class="token string-property property">"name"</span><span class="token operator">:</span> <span class="token string">"具体项目数据"</span><span class="token punctuation">,</span>
     <span class="token string-property property">"type"</span><span class="token operator">:</span> <span class="token string">"tile"</span><span class="token punctuation">,</span>
     <span class="token string-property property">"url"</span><span class="token operator">:</span> <span class="token string">"http://data.mars2d.cn/tile/googleImg/{z}/{x}/{y}.jpg"</span><span class="token punctuation">,</span>
     <span class="token string-property property">"minZoom"</span><span class="token operator">:</span> <span class="token number">12</span><span class="token punctuation">,</span>
     <span class="token string-property property">"maxZoom"</span><span class="token operator">:</span> <span class="token number">18</span><span class="token punctuation">,</span>
     <span class="token string-property property">"rectangle"</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token string-property property">"xmin"</span><span class="token operator">:</span> <span class="token number">116.33236</span><span class="token punctuation">,</span> <span class="token string-property property">"xmax"</span><span class="token operator">:</span> <span class="token number">118.183557</span><span class="token punctuation">,</span> <span class="token string-property property">"ymin"</span><span class="token operator">:</span> <span class="token number">31.143784</span><span class="token punctuation">,</span> <span class="token string-property property">"ymax"</span><span class="token operator">:</span> <span class="token number">32.565035</span> <span class="token punctuation">}</span>
   <span class="token punctuation">}</span>
 <span class="token punctuation">]</span>
<span class="token punctuation">}</span><span class="token punctuation">,</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>（2）图层管理 的图层分组节点（虚拟节点）。</li>
</ul>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">var</span> map <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">mars2d<span class="token punctuation">.</span>Map</span><span class="token punctuation">(</span><span class="token string">"mars2dContainer"</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">basemaps</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token punctuation">{</span> <span class="token literal-property property">id</span><span class="token operator">:</span> <span class="token number">10</span><span class="token punctuation">,</span> <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">"地图底图"</span><span class="token punctuation">,</span> <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">"group"</span> <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token comment">//图层管理 的图层分组节点（虚拟节点）</span>
    <span class="token punctuation">{</span>
      <span class="token literal-property property">pid</span><span class="token operator">:</span> <span class="token number">10</span><span class="token punctuation">,</span>
      <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">"天地图卫星"</span><span class="token punctuation">,</span>
      <span class="token literal-property property">icon</span><span class="token operator">:</span> <span class="token string">"img/basemaps/tdt_img.png"</span><span class="token punctuation">,</span>
      <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">"tdt"</span><span class="token punctuation">,</span>
      <span class="token literal-property property">layer</span><span class="token operator">:</span> <span class="token string">"img_d"</span><span class="token punctuation">,</span>
      <span class="token literal-property property">key</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">"9ae78c51a0a28f06444d541148496e36"</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
      <span class="token literal-property property">show</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
      <span class="token literal-property property">pid</span><span class="token operator">:</span> <span class="token number">10</span><span class="token punctuation">,</span>
      <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">"本地单张图片"</span><span class="token punctuation">,</span>
      <span class="token literal-property property">icon</span><span class="token operator">:</span> <span class="token string">"img/basemaps/offline.png"</span><span class="token punctuation">,</span>
      <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">"image"</span><span class="token punctuation">,</span>
      <span class="token literal-property property">url</span><span class="token operator">:</span> <span class="token string">"img/tietu/world.jpg"</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token literal-property property">layers</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">{</span> <span class="token literal-property property">id</span><span class="token operator">:</span> <span class="token number">99</span><span class="token punctuation">,</span> <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">"数据图层"</span><span class="token punctuation">,</span> <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">"group"</span> <span class="token punctuation">}</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_2-2-其他可视化图层" tabindex="-1"><a class="header-anchor" href="#_2-2-其他可视化图层" aria-hidden="true">#</a> 2.2 其他可视化图层</h2>
<p>主要提供一些与 echarts、heatmap、mapv 等其他可视化组件结合通过 canvas 绘制的一些图层。</p>
</div></template>


