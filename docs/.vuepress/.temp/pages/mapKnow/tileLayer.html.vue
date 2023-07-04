<template><div><h3> 栅格瓦片图层 </h3>
<img class='images' src="@source/public/icon/yonghu.svg" alt="来自依赖包的图片">
<i class='text'>Mars2D</i>
<img class='imagess' src="@source/public/icon/shijian.svg" alt="来自依赖包的图片">
<i class='text'>30/6/2023</i>
<img class='imagess' src="@source/public/icon/liulan.svg" alt="来自依赖包的图片">
<i class='text'>0</i>
<p>前面我们说到地形是地图场景的&quot;骨骼&quot;，栅格瓦片图层就是我们浏览二维能感知的&quot;皮肤&quot;了，通常我们叠加的是各种卫星影像或瓦片数据。<br />
<img src="@source/public/image/map-tileLayer.jpg" alt="配置图"> <br />
Mars2D 支持多种服务来源的高精度影像地图数据的加载和渲染。图层支持排序和透明混合，支持设置影像图层相关属性，比如透明度等。</p>
<h2 id="_1-栅格瓦片介绍" tabindex="-1"><a class="header-anchor" href="#_1-栅格瓦片介绍" aria-hidden="true">#</a> 1. 栅格瓦片介绍</h2>
<p>目前我们所见的所有地图底图服务都是瓦片地图的方式发布的。瓦片地图金字塔模型是一种多分辨率层次模型，从瓦片金字塔的底层到顶层，分辨率越来越低，但表示的地理范围不变。<br /></p>
<p>当我们建立好了影像金字塔后，前端再请求地图时，则将只是在切好的瓦片缓存中，找到对应级别里对应的瓦片即可。然后在前端将这些请求到的瓦片拼接出来，便可以得到用户需要的级别下的可视范围内的瓦片了。
<img src="@source/public/image/map-tileLayer-lod.jpg" alt="配置图">
瓦片的特征</p>
<ul>
<li>瓦片分辨率通常为 256×256</li>
<li>最小的地图等级是 0，此时世界地图只由一张瓦片组成</li>
<li>具有唯一的瓦片等级（Z）和瓦片行列坐标编号（X, Y）</li>
<li>瓦片等级越高，组成世界地图的瓦片数越多，可以展示的地图越详细</li>
<li>某一瓦片等级地图的瓦片是由低一级的各瓦片切割成的 4 个瓦片组成，四叉树结构形成了瓦片金字塔</li>
</ul>
<h3 id="_1-1-为什么要出现瓦片金字塔这个概念" tabindex="-1"><a class="header-anchor" href="#_1-1-为什么要出现瓦片金字塔这个概念" aria-hidden="true">#</a> 1.1 为什么要出现瓦片金字塔这个概念</h3>
<p>现在，我假设我们的服务器上有一个 1G 的影像，需要将其在前端进行显示。我们传统的做法就是首先将服务器中的 1G 影像下载到前端，然后浏览器加载渲染出图。但是大家想想，首先客户端下载 1G 的影像需要的时间一定是个漫长的过程，其次浏览器加载这么大的文件也多半会导致其崩溃。而最重要的一个问题是，我们的需求仅仅是浏览全图中的某一个区域下的某几个级别，现在却将全图下载完毕了，而这同样还导致了数据的不安全性（下载到本地），同时我们的每一次放大和缩小以及拖拽都将会使浏览器花上足够长的时间去渲染。 可见，传统的方式是不符合实际需求的。到后来，又有了新的解决方法，比如 arcgis 的 IMS 版本中提出了动态出图的概念。也就是当前端发出的请求里包含了需要显示的范围、显示窗口的大小等参数后，后台动态的在原始数据中切出一个符合需求的瓦片，然后将这个数据返回给前台，并且在服务器中对这个瓦片做缓存。但是，这个方法前端出图依旧很慢，并且使地图服务器的压力过大。终于，我们的瓦片金字塔解决方案出现了。</p>
<h3 id="_1-2-栅格瓦片数据来源" tabindex="-1"><a class="header-anchor" href="#_1-2-栅格瓦片数据来源" aria-hidden="true">#</a> 1.2 栅格瓦片数据来源</h3>
<ul>
<li>直接访问在线互联网服务，如百度、高德、腾讯、谷歌等</li>
<li>下载在线互联网服务到本地离线使用，可以<RouterLink to="/data/xyzDown.html">在线地图的下载和使用</RouterLink></li>
<li>对源数据发布为标准服务加载，如 wms、wmts、arcgis 等</li>
<li>对源数据进行切片，可以参考<RouterLink to="/data/xyz.html">影像图切片处理及加载</RouterLink></li>
</ul>
<h2 id="_2-图层类型清单" tabindex="-1"><a class="header-anchor" href="#_2-图层类型清单" aria-hidden="true">#</a> 2. 图层类型清单</h2>
<p>栅格瓦片图层，大部分都是继承自<a href="http://mars2d.cn/api/TileLayer.html" target="_blank" rel="noopener noreferrer">TileLayer<ExternalLinkIcon/></a>类的子类对象。
目前有以下类型：</p>
<table>
<thead>
<tr>
<th style="text-align:center">类型名</th>
<th style="text-align:center">说明</th>
<th style="text-align:center">对应的图层类</th>
<th style="text-align:center">备注</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:center">image</td>
<td style="text-align:center">单张图片</td>
<td style="text-align:center"><a href="http://mars2d.cn/api/ImageLayer.html" target="_blank" rel="noopener noreferrer">ImageLayer<ExternalLinkIcon/></a></td>
<td style="text-align:center">通用标准</td>
</tr>
<tr>
<td style="text-align:center">tile 或 xyz</td>
<td style="text-align:center">标准金字塔地图</td>
<td style="text-align:center"><a href="http://mars2d.cn/api/TileLayer.html" target="_blank" rel="noopener noreferrer">TileLayer<ExternalLinkIcon/></a></td>
<td style="text-align:center">通用标准</td>
</tr>
<tr>
<td style="text-align:center">wms</td>
<td style="text-align:center">OGC WMS 标准服务</td>
<td style="text-align:center"><a href="http://mars2d.cn/api/WmsLayer.html" target="_blank" rel="noopener noreferrer">WmsLayer<ExternalLinkIcon/></a></td>
<td style="text-align:center">通用标准</td>
</tr>
<tr>
<td style="text-align:center">wmts</td>
<td style="text-align:center">OGC WMTS 标准服务</td>
<td style="text-align:center"><a href="http://mars2d.cn/api/WmtsLayer.html" target="_blank" rel="noopener noreferrer">WmtsLayer<ExternalLinkIcon/></a></td>
<td style="text-align:center">通用标准</td>
</tr>
<tr>
<td style="text-align:center">arcgis</td>
<td style="text-align:center">ArcGIS 标准服务</td>
<td style="text-align:center"><a href="http://mars2d.cn/api/ArcGisLayer.html" target="_blank" rel="noopener noreferrer">ArcGisLayer<ExternalLinkIcon/></a></td>
<td style="text-align:center">通用标准</td>
</tr>
<tr>
<td style="text-align:center">arcgis_cache</td>
<td style="text-align:center">ArcGIS 切片</td>
<td style="text-align:center"><a href="http://mars2d.cn/api/ArcGisCacheLayer.html" target="_blank" rel="noopener noreferrer">ArcGisCacheLayer<ExternalLinkIcon/></a></td>
<td style="text-align:center">通用标准</td>
</tr>
<tr>
<td style="text-align:center">tdt</td>
<td style="text-align:center">天地图</td>
<td style="text-align:center"><a href="http://mars2d.cn/api/TdtLayer.html" target="_blank" rel="noopener noreferrer">TdtLayer<ExternalLinkIcon/></a></td>
<td style="text-align:center">在线地图</td>
</tr>
<tr>
<td style="text-align:center">gaode</td>
<td style="text-align:center">高德</td>
<td style="text-align:center"><a href="http://mars2d.cn/api/GaodeLayer.html" target="_blank" rel="noopener noreferrer">GaodeLayer<ExternalLinkIcon/></a></td>
<td style="text-align:center">在线地图</td>
</tr>
<tr>
<td style="text-align:center">baidu</td>
<td style="text-align:center">百度</td>
<td style="text-align:center"><a href="http://mars2d.cn/api/BaiduLayer.html" target="_blank" rel="noopener noreferrer">BaiduLayer<ExternalLinkIcon/></a></td>
<td style="text-align:center">在线地图</td>
</tr>
<tr>
<td style="text-align:center">tencent</td>
<td style="text-align:center">腾讯</td>
<td style="text-align:center"><a href="http://mars2d.cn/api/TencentLayer.html" target="_blank" rel="noopener noreferrer">TencentLayer<ExternalLinkIcon/></a></td>
<td style="text-align:center">在线地图</td>
</tr>
<tr>
<td style="text-align:center">osm</td>
<td style="text-align:center">OpenStreetMap（OSM）</td>
<td style="text-align:center"><a href="http://mars2d.cn/api/OsmLayer.html" target="_blank" rel="noopener noreferrer">OsmLayer<ExternalLinkIcon/></a></td>
<td style="text-align:center">国外在线地图</td>
</tr>
<tr>
<td style="text-align:center">mapbox</td>
<td style="text-align:center">Mapbox 地图</td>
<td style="text-align:center"><a href="http://mars2d.cn/api/MapboxLayer.html" target="_blank" rel="noopener noreferrer">MapboxLayer<ExternalLinkIcon/></a></td>
<td style="text-align:center">国外在线地图</td>
</tr>
<tr>
<td style="text-align:center">google</td>
<td style="text-align:center">谷歌地图</td>
<td style="text-align:center"><a href="http://mars2d.cn/api/GoogleLayer.html" target="_blank" rel="noopener noreferrer">GoogleLayer<ExternalLinkIcon/></a></td>
<td style="text-align:center">目前已被封</td>
</tr>
</tbody>
</table>
<p>更多请参考<a href="http://mars2d.cn/api/global.html#LayerType" target="_blank" rel="noopener noreferrer">LayerType 类<ExternalLinkIcon/></a></p>
<h2 id="_3-瓦片图层的参数调试" tabindex="-1"><a class="header-anchor" href="#_3-瓦片图层的参数调试" aria-hidden="true">#</a> 3. 瓦片图层的参数调试</h2>
<p>当我们拿到各类瓦片服务地址后，如果不具备相关 GIS 知识储备，如果将一个瓦片正常的调试加载成功，并不是一件容易的事情，特别是非标准坐标系、非标准的服务时。
我们也提供了一个瓦片图层加载和调试的页面来可视化页面中，建议先在该页面做调试</p>
<ul>
<li>(1)可以在 Mars2D 框架中打开<a href="http://mars2d.cn/editor.html?id=layer-tile/type/xyz" target="_blank" rel="noopener noreferrer">XYZ 瓦片示例页面<ExternalLinkIcon/></a>，在这个页面的根据已有示例修改 url 地址<code v-pre>http://localhost:8888/mapdata/exp/{z}/{x}/{y}.png</code>，来调试图层参数。</li>
<li>(2)如果地图上未能正常显示瓦片图层，尝试修改坐标系、加载层级等参数。</li>
<li>(3)如果是 WMS、WMTS 等类型服务，有特殊自定义参数时，需要在代码中修改写死这些固定的参数去调试。</li>
<li>(4)在瓦片图层正常显示后，并调整好所有参数，单击“保存参数”按钮，保存的参数 json，会自动下载一个 json 文件。</li>
<li>(5) 如果图层是初始化就加载的，可以打开项目的<code v-pre>config.json</code>文件，拷贝刚下载的 json 到 config.json 文件的 layers 参数中即可。</li>
<li>(6)如果代码中直接 new 图层类，可以将 json 中的参数拷贝到类参数中。</li>
</ul>
<h2 id="_4-瓦片图层的创建及使用" tabindex="-1"><a class="header-anchor" href="#_4-瓦片图层的创建及使用" aria-hidden="true">#</a> 4. 瓦片图层的创建及使用</h2>
<h3 id="_4-1-快速开始-初始化-new-map-时传入" tabindex="-1"><a class="header-anchor" href="#_4-1-快速开始-初始化-new-map-时传入" aria-hidden="true">#</a> 4.1 快速开始(初始化 new Map 时传入)</h3>
<p>在构造 Map 时传入<code v-pre>basemaps</code>或<code v-pre>layers</code>参数中配置相关图层，并设置<code v-pre>show:true</code>后进行加载展示栅格瓦片图层</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">var</span> map <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">mars2d<span class="token punctuation">.</span>Map</span><span class="token punctuation">(</span><span class="token string">"mars2dContainer"</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">basemaps</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token punctuation">{</span>
      <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">"天地图卫星"</span><span class="token punctuation">,</span>
      <span class="token literal-property property">icon</span><span class="token operator">:</span> <span class="token string">"img/basemaps/tdt_img.png"</span><span class="token punctuation">,</span>
      <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">"tdt"</span><span class="token punctuation">,</span>
      <span class="token literal-property property">layer</span><span class="token operator">:</span> <span class="token string">"img_d"</span><span class="token punctuation">,</span>
      <span class="token literal-property property">key</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">"天地图token值"</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
      <span class="token literal-property property">show</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
      <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">"单张图片"</span><span class="token punctuation">,</span>
      <span class="token literal-property property">icon</span><span class="token operator">:</span> <span class="token string">"img/basemaps/offline.png"</span><span class="token punctuation">,</span>
      <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">"image"</span><span class="token punctuation">,</span>
      <span class="token literal-property property">url</span><span class="token operator">:</span> <span class="token string">"img/tietu/world.jpg"</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token literal-property property">layers</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token punctuation">{</span>
      <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">"tdt"</span><span class="token punctuation">,</span>
      <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">"天地图注记"</span><span class="token punctuation">,</span>
      <span class="token literal-property property">layer</span><span class="token operator">:</span> <span class="token string">"img_z"</span><span class="token punctuation">,</span>
      <span class="token literal-property property">key</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">"天地图token值"</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
      <span class="token literal-property property">show</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_4-2-代码中创建图层" tabindex="-1"><a class="header-anchor" href="#_4-2-代码中创建图层" aria-hidden="true">#</a> 4.2 代码中创建图层</h3>
<p>可以有下面 2 种方式来创建图层对象：</p>
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote>
<p>在 Map 创建后可以通过<a href="http://mars2d.cn/api/Map.html#addLayer" target="_blank" rel="noopener noreferrer">map.addLayer<ExternalLinkIcon/></a>和<a href="http://mars2d.cn/api/Map.html#removeLayer" target="_blank" rel="noopener noreferrer">map.removeLayer<ExternalLinkIcon/></a>方法来控制图层的加载和删除。</p>
</blockquote>
<blockquote>
<p>在图层本身也有<a href="http://mars2d.cn/api/BaseLayer.html#addTo" target="_blank" rel="noopener noreferrer">layer.addTo<ExternalLinkIcon/></a>和<a href="http://mars2d.cn/api/BaseLayer.html#remove" target="_blank" rel="noopener noreferrer">layer.remove<ExternalLinkIcon/></a>2 个方法支持添加或移除图层。</p>
</blockquote>
<h2 id="_5-加载-xyz-数据步骤" tabindex="-1"><a class="header-anchor" href="#_5-加载-xyz-数据步骤" aria-hidden="true">#</a> 5. 加载 XYZ 数据步骤</h2>
<p>所有瓦片最基础最常见的就是 xyz 图层，也是其他类似图层的基础。<br /></p>
<p>1.当瓦片是标准金字塔命名时，格式一般都是默认的 <code v-pre>{z}/{x}/{y}.jpg或{z}/{x}/{y}.png </code>目录组织的金字塔目录。<br />
如下图：
<img src="@source/public/image/data-xyzDown-tile.jpg" alt="配置图"> 2.在数据量比较大的情况，直接拷贝切片会很慢很慢。一般操作是分层压缩成压缩包（并按 4G 分卷），拷贝至服务器后再进行解压。</p>
<p>3.在目标服务器中安装好任意 http 服务器，确保可正常提供 Web 信息浏览服务即可。如：Nginx(推荐). IIS. Apache. Tomcat. WebSphere. WebLogic 等。 将图片文件夹单独发布为一个站点，比如我将下载的数据目录<code v-pre>test</code>发布后，可以通过浏览器访问到图片即可 <code v-pre>http://localhost/mapdata/maptile/test/1/1/0.png</code></p>
<p>4.可以在 Mars2D 框架中打开<a href="http://mars2d.cn/editor.html?id=layer-tile/type/xyz" target="_blank" rel="noopener noreferrer">XYZ 瓦片示例页面<ExternalLinkIcon/></a>，在这个页面的根据已有示例修改 url 地址 <code v-pre>http://localhost:8888/mapdata/exp/{z}/{x}/{y}.png</code>，来调试图层参数。</p>
<p>5.如果地图上未能正常显示瓦片图层，尝试修改坐标系. 加载层级等参数。</p>
<p>6.在瓦片图层正常显示后，优化配置参数，因为瓦片不是全球的数据，肯定只是局部范围，为了避免无效请求，可以配置层级和边界值，这样客户端就不请求区域外和层级外的数据，单击“保存参数”按钮，保存的参数 json，会自动下载一个 json 文件。</p>
<p>7.如果代码中直接 new<a href="http://mars2d.cn/api/TileLayer.html" target="_blank" rel="noopener noreferrer">TileLayer 图层类<ExternalLinkIcon/></a>，可以将 json 中的参数拷贝到类参数中。</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">var</span> tileLayer <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">mars2d<span class="token punctuation">.</span>layer<span class="token punctuation">.</span>TileLayer</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">url</span><span class="token operator">:</span> <span class="token string">"http://localhost/mapdata/maptile/test/{z}/{x}/{y}.png"</span><span class="token punctuation">,</span>
  <span class="token literal-property property">minZoom</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
  <span class="token literal-property property">maxZoom</span><span class="token operator">:</span> <span class="token number">18</span><span class="token punctuation">,</span>
  <span class="token literal-property property">minimumTerrainLevel</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
  <span class="token literal-property property">maximumTerrainLevel</span><span class="token operator">:</span> <span class="token number">18</span><span class="token punctuation">,</span>
  <span class="token literal-property property">rectangle</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token literal-property property">xmin</span><span class="token operator">:</span> <span class="token number">114.85</span><span class="token punctuation">,</span> <span class="token literal-property property">xmax</span><span class="token operator">:</span> <span class="token number">119.68</span><span class="token punctuation">,</span> <span class="token literal-property property">ymin</span><span class="token operator">:</span> <span class="token number">29.34</span><span class="token punctuation">,</span> <span class="token literal-property property">ymax</span><span class="token operator">:</span> <span class="token number">34.74</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
map<span class="token punctuation">.</span><span class="token function">addLayer</span><span class="token punctuation">(</span>tileLayer<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>8.如果图层是初始化就加载的，可以打开项目的<code v-pre>config.json</code>文件，拷贝刚下载的 json 到 config.json 文件的 layers 参数中即可。</p>
<div class="language-json line-numbers-mode" data-ext="json"><pre v-pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">"name"</span><span class="token operator">:</span> <span class="token string">"测试瓦片"</span><span class="token punctuation">,</span>
  <span class="token property">"type"</span><span class="token operator">:</span> <span class="token string">"xyz"</span><span class="token punctuation">,</span>
  <span class="token property">"url"</span><span class="token operator">:</span> <span class="token string">"http://localhost/mapdata/maptile/test/{z}/{x}/{y}.png"</span><span class="token punctuation">,</span>
  <span class="token property">"minZoom"</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
  <span class="token property">"maxZoom"</span><span class="token operator">:</span> <span class="token number">18</span><span class="token punctuation">,</span>
  <span class="token property">"minimumTerrainLevel"</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
  <span class="token property">"maximumTerrainLevel"</span><span class="token operator">:</span> <span class="token number">18</span><span class="token punctuation">,</span>
  <span class="token property">"rectangle"</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token property">"xmin"</span><span class="token operator">:</span> <span class="token number">114.85</span><span class="token punctuation">,</span> <span class="token property">"xmax"</span><span class="token operator">:</span> <span class="token number">119.68</span><span class="token punctuation">,</span> <span class="token property">"ymin"</span><span class="token operator">:</span> <span class="token number">29.34</span><span class="token punctuation">,</span> <span class="token property">"ymax"</span><span class="token operator">:</span> <span class="token number">34.74</span> <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">,</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_5-1-运行效果" tabindex="-1"><a class="header-anchor" href="#_5-1-运行效果" aria-hidden="true">#</a> 5.1 运行效果</h2>
</div></template>


