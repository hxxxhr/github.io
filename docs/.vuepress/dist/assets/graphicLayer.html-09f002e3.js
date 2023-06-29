import{_ as p}from"./map-graphic-3e68e746.js";import{_ as o,r,o as l,c,a as n,b as s,d as t,e}from"./app-a7594ec8.js";const i={},u=n("h3",null," 矢量图层 ",-1),d=n("p",null,[s("地图场景中，地形和栅格来组成了二维的基础，但更多的业务还是需要 点线面等矢量数据来充实, 这就是我们的矢量数据图层。 "),n("img",{src:p,alt:"配置图"}),s(),n("br")],-1),k=n("h2",{id:"_1-图层类型清单",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_1-图层类型清单","aria-hidden":"true"},"#"),s(" 1. 图层类型清单")],-1),m={href:"http://mars2d.cn/api/TileLayer.html",target:"_blank",rel:"noopener noreferrer"},v={href:"http://mars2d.cn/api/global.html#GraphicType",target:"_blank",rel:"noopener noreferrer"},y={href:"http://mars2d.cn/api/BaseGraphic.html",target:"_blank",rel:"noopener noreferrer"},h=n("thead",null,[n("tr",null,[n("th",{style:{"text-align":"center"}},"type 类型名"),n("th",{style:{"text-align":"center"}},"图层说明"),n("th",{style:{"text-align":"center"}},"对应的图层类"),n("th",{style:{"text-align":"center"}},"备注")])],-1),b=n("td",{style:{"text-align":"center"}},"graphic",-1),g=n("td",{style:{"text-align":"center"}},"矢量数据图层",-1),_={style:{"text-align":"center"}},f={href:"http://mars2d.cn/api/GraphicLayer.html",target:"_blank",rel:"noopener noreferrer"},q=n("td",{style:{"text-align":"center"}},null,-1),L=n("td",{style:{"text-align":"center"}},"geojson",-1),w=n("td",{style:{"text-align":"center"}},"GeoJSON 图层",-1),x={style:{"text-align":"center"}},G={href:"http://mars2d.cn/api/GeoJsonLayer.html",target:"_blank",rel:"noopener noreferrer"},j=n("td",{style:{"text-align":"center"}},null,-1),S=n("td",{style:{"text-align":"center"}},"wfs",-1),J=n("td",{style:{"text-align":"center"}},"OGC WFS 图层",-1),O={style:{"text-align":"center"}},F={href:"http://mars2d.cn/api/WfsLayer.html",target:"_blank",rel:"noopener noreferrer"},N=n("td",{style:{"text-align":"center"}},null,-1),W=n("td",{style:{"text-align":"center"}},"arcgis_feature",-1),M=n("td",{style:{"text-align":"center"}},"ArcGIS WFS 图层",-1),A={style:{"text-align":"center"}},C={href:"http://mars2d.cn/api/ArcGisFeatureLayer.html",target:"_blank",rel:"noopener noreferrer"},B=n("td",{style:{"text-align":"center"}},null,-1),T=e(`<h2 id="_2-矢量图层的创建及使用" tabindex="-1"><a class="header-anchor" href="#_2-矢量图层的创建及使用" aria-hidden="true">#</a> 2. 矢量图层的创建及使用</h2><h3 id="_2-1-快速开始-初始化-new-map-时传入" tabindex="-1"><a class="header-anchor" href="#_2-1-快速开始-初始化-new-map-时传入" aria-hidden="true">#</a> 2.1 快速开始(初始化 new Map 时传入)</h3><p>在构造 Map 时传入<code>layers</code>参数中配置相关图层，并设置<code>show:true</code>后进行初始化加载矢量图层</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">var</span> map <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">mars2d<span class="token punctuation">.</span>Map</span><span class="token punctuation">(</span><span class="token string">&quot;mars2dContainer&quot;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">layers</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token punctuation">{</span>
      <span class="token literal-property property">id</span><span class="token operator">:</span> <span class="token number">1987</span><span class="token punctuation">,</span>
      <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">&quot;geojson&quot;</span><span class="token punctuation">,</span>
      <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&quot;示例数据&quot;</span><span class="token punctuation">,</span>
      <span class="token literal-property property">url</span><span class="token operator">:</span> <span class="token string">&quot;//data.mars2d.cn/file/geojson/mars2d-draw.json&quot;</span><span class="token punctuation">,</span>
      <span class="token literal-property property">popup</span><span class="token operator">:</span> <span class="token string">&quot;{name}&quot;</span><span class="token punctuation">,</span>
      <span class="token literal-property property">show</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">//可以通过下面方法获取到配置的图层</span>
<span class="token keyword">let</span> geojsonLayer <span class="token operator">=</span> map<span class="token punctuation">.</span><span class="token function">getLayer</span><span class="token punctuation">(</span><span class="token number">1987</span><span class="token punctuation">,</span> <span class="token string">&quot;id&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-2-代码中创建图层" tabindex="-1"><a class="header-anchor" href="#_2-2-代码中创建图层" aria-hidden="true">#</a> 2.2 代码中创建图层</h3><p>可以有下面 2 种方式来创建图层对象：</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">//用工厂方法，指定type来创建图层对象</span>
<span class="token keyword">var</span> wfsLayer <span class="token operator">=</span> mars2d<span class="token punctuation">.</span>LayerUtil<span class="token punctuation">.</span><span class="token function">create</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">&quot;geojson&quot;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">url</span><span class="token operator">:</span> <span class="token string">&quot;http://data.mars2d.cn/file/geojson/areas/100000_full.json&quot;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">symbol</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">&quot;polyline&quot;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">styleOptions</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">color</span><span class="token operator">:</span> <span class="token string">&quot;#ff0000&quot;</span><span class="token punctuation">,</span>
      <span class="token literal-property property">width</span><span class="token operator">:</span> <span class="token number">3</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
map<span class="token punctuation">.</span><span class="token function">addLayer</span><span class="token punctuation">(</span>wfsLayer<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">//直接创建具体类型的图层对象</span>
<span class="token keyword">var</span> geoJsonLayer <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">mars2d<span class="token punctuation">.</span>layer<span class="token punctuation">.</span>GeoJsonLayer</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">url</span><span class="token operator">:</span> <span class="token string">&quot;http://data.mars2d.cn/file/geojson/areas/100000_full.json&quot;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">symbol</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">&quot;polyline&quot;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">styleOptions</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">color</span><span class="token operator">:</span> <span class="token string">&quot;#ff0000&quot;</span><span class="token punctuation">,</span>
      <span class="token literal-property property">width</span><span class="token operator">:</span> <span class="token number">3</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
map<span class="token punctuation">.</span><span class="token function">addLayer</span><span class="token punctuation">(</span>geoJsonLayer<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,7),I={href:"http://mars2d.cn/api/Map.html#addLayer",target:"_blank",rel:"noopener noreferrer"},P={href:"http://mars2d.cn/api/Map.html#removeLayer",target:"_blank",rel:"noopener noreferrer"},V={href:"http://mars2d.cn/api/BaseLayer.html#addTo",target:"_blank",rel:"noopener noreferrer"},E={href:"http://mars2d.cn/api/BaseLayer.html#remove",target:"_blank",rel:"noopener noreferrer"},U=e(`<h2 id="_3-常用矢量图层类" tabindex="-1"><a class="header-anchor" href="#_3-常用矢量图层类" aria-hidden="true">#</a> 3 常用矢量图层类</h2><h3 id="_3-1-graphiclayer" tabindex="-1"><a class="header-anchor" href="#_3-1-graphiclayer" aria-hidden="true">#</a> 3.1 GraphicLayer</h3><p>矢量数据图层</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">//创建矢量数据图层</span>
<span class="token keyword">let</span> graphicLayer <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">mars2d<span class="token punctuation">.</span>layer<span class="token punctuation">.</span>GraphicLayer</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
map<span class="token punctuation">.</span><span class="token function">addLayer</span><span class="token punctuation">(</span>graphicLayer<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">//加载数据到矢量图层</span>
<span class="token keyword">var</span> graphic <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">mars2d<span class="token punctuation">.</span>graphic<span class="token punctuation">.</span>Marker</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">latlng</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token number">31.854628</span><span class="token punctuation">,</span> <span class="token number">117.245425</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token literal-property property">style</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">image</span><span class="token operator">:</span> <span class="token string">&quot;img/marker/mark1.jpg&quot;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">width</span><span class="token operator">:</span> <span class="token number">32</span><span class="token punctuation">,</span>
    <span class="token literal-property property">height</span><span class="token operator">:</span> <span class="token number">44</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
graphicLayer<span class="token punctuation">.</span><span class="token function">addGraphic</span><span class="token punctuation">(</span>graphic<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3-2-geojsonlayer" tabindex="-1"><a class="header-anchor" href="#_3-2-geojsonlayer" aria-hidden="true">#</a> 3.2 GeoJsonLayer</h3><p>GeoJSON 是适合于 Web 下对各种地理数据结构进行编码的格式，基于 Javascript 对象表示法的地理空间信息数据交换格式。与普通 json 文件格式区别在于对其属性及组成由一定规范。</p><blockquote><p>GeoJSON 将所有的地理要素分为 Point、MultiPoint、LineString、MultiLineString、Polygon、MultiPolygon、GeometryCollection。首先是将这些要素封装到单个的 geometry 里，然后作为一个个的 Feature（要素）；要素放到一个要素集合里构成。</p></blockquote><p>GeoJSON 是平台很重要的数据格式，当前平台内矢量数据均支持导出 GeoJSON 和导入 GeoJSON 格式。</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">let</span> geoJsonLayer <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">mars2d<span class="token punctuation">.</span>layer<span class="token punctuation">.</span>GeoJsonLayer</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&quot;省界线&quot;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">url</span><span class="token operator">:</span> <span class="token string">&quot;http://data.mars2d.cn/file/geojson/sheng-line.json&quot;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">symbol</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token comment">//可以通过配置symbol参数来指定渲染的矢量数据类型和样式。</span>
    <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">&quot;polyline&quot;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">styleOptions</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">color</span><span class="token operator">:</span> <span class="token string">&quot;#ffffff&quot;</span><span class="token punctuation">,</span>
      <span class="token literal-property property">opacity</span><span class="token operator">:</span> <span class="token number">0.8</span><span class="token punctuation">,</span>
      <span class="token literal-property property">width</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
map<span class="token punctuation">.</span><span class="token function">addLayer</span><span class="token punctuation">(</span>geoJsonLayer<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,9),z=n("p",null,"常用 geojson 相关网站：",-1),H={href:"http://geojson.io/",target:"_blank",rel:"noopener noreferrer"},Z={href:"https://mapshaper.org/",target:"_blank",rel:"noopener noreferrer"},D={href:"http://datav.aliyun.com/portal/school/atlas/area_selector",target:"_blank",rel:"noopener noreferrer"},K=n("h3",{id:"_3-1-wfs-图层",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_3-1-wfs-图层","aria-hidden":"true"},"#"),s(" 3.1 WFS 图层")],-1),Q={href:"http://mars2d.cn/api/WfsLayer.html",target:"_blank",rel:"noopener noreferrer"},R={href:"http://mars2d.cn/api/ArcGisFeatureLayer.html",target:"_blank",rel:"noopener noreferrer"},X=e(`<div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">//OGC WFS</span>
<span class="token keyword">var</span> wfsLayer <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">mars2d<span class="token punctuation">.</span>layer<span class="token punctuation">.</span>WfsLayer</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&quot;规划面&quot;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">url</span><span class="token operator">:</span> <span class="token string">&quot;http://server.mars2d.cn/geoserver/mars/ows&quot;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">typeNS</span><span class="token operator">:</span> <span class="token string">&quot;mars&quot;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">typeName</span><span class="token operator">:</span> <span class="token string">&quot;hfgh&quot;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">minZoom</span><span class="token operator">:</span> <span class="token number">16</span><span class="token punctuation">,</span>
  <span class="token literal-property property">geometryField</span><span class="token operator">:</span> <span class="token string">&quot;the_geom&quot;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">symbol</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">&quot;polygon&quot;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">styleOptions</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">fillOpacity</span><span class="token operator">:</span> <span class="token number">0.6</span><span class="token punctuation">,</span>
      <span class="token literal-property property">fillColor</span><span class="token operator">:</span> <span class="token string">&quot;#0000FF&quot;</span><span class="token punctuation">,</span>
      <span class="token literal-property property">outline</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token literal-property property">styleField</span><span class="token operator">:</span> <span class="token string">&quot;用地编号&quot;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">styleFieldOptions</span><span class="token operator">:</span> styleForType<span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">popup</span><span class="token operator">:</span> <span class="token string">&quot;all&quot;</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
map<span class="token punctuation">.</span><span class="token function">addLayer</span><span class="token punctuation">(</span>wfsLayer<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">//ArcGIS WFS</span>
<span class="token keyword">var</span> wfsLayer <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">mars2d<span class="token punctuation">.</span>layer<span class="token punctuation">.</span>ArcGisWfsLayer</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&quot;合肥市&quot;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">url</span><span class="token operator">:</span> <span class="token string">&quot;http://server.mars2d.cn/arcgis/rest/services/mars/hefei/MapServer/20&quot;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">popup</span><span class="token operator">:</span> <span class="token string">&quot;all&quot;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">symbol</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">styleOptions</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">iconUrl</span><span class="token operator">:</span> <span class="token string">&quot;img/marker/fx1.jpg&quot;</span><span class="token punctuation">,</span>
      <span class="token literal-property property">iconSize</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token number">30</span><span class="token punctuation">,</span> <span class="token number">30</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
      <span class="token literal-property property">iconAnchor</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token number">15</span><span class="token punctuation">,</span> <span class="token number">15</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
      <span class="token literal-property property">popupAnchor</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token operator">-</span><span class="token number">15</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">popup</span><span class="token operator">:</span> <span class="token string">&quot;all&quot;</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
map<span class="token punctuation">.</span><span class="token function">addLayer</span><span class="token punctuation">(</span>wfsLayer<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>可以通过配置 symbol 参数来指定渲染的矢量数据类型和样式。</p></blockquote>`,2);function Y($,nn){const a=r("ExternalLinkIcon");return l(),c("div",null,[u,d,k,n("p",null,[s("当前主要使用的矢量图层，是指"),n("a",m,[s("GraphicLayer"),t(a)]),s("类及其子类对象。矢量图层中可以通过 addGraphic 方法来加入"),n("a",v,[s("各类型"),t(a)]),s("的"),n("a",y,[s("矢量数据"),t(a)]),s("来组成。 目前常用的矢量图层有以下类型：")]),n("table",null,[h,n("tbody",null,[n("tr",null,[b,g,n("td",_,[n("a",f,[s("mars2d.layer.GraphicLayer"),t(a)])]),q]),n("tr",null,[L,w,n("td",x,[n("a",G,[s("mars2d.layer.GeoJsonLayer"),t(a)])]),j]),n("tr",null,[S,J,n("td",O,[n("a",F,[s("mars2d.layer.WfsLayer"),t(a)])]),N]),n("tr",null,[W,M,n("td",A,[n("a",C,[s("mars2d.layer.ArcGisFeatureLayer "),t(a)])]),B])])]),T,n("blockquote",null,[n("p",null,[s("在 Map 创建后可以通过"),n("a",I,[s("map.addLayer"),t(a)]),s("和"),n("a",P,[s("map.removeLayer"),t(a)]),s("方法来控制图层的加载和删除。")])]),n("blockquote",null,[n("p",null,[s("在图层本身也有"),n("a",V,[s(" layer.addTo"),t(a)]),s("和"),n("a",E,[s("layer.remove"),t(a)]),s("2 个方法支持添加或移除图层。")])]),U,n("blockquote",null,[z,n("ul",null,[n("li",null,[s("在线生成 GeoJSON："),n("a",H,[s("http://geojson.io/"),t(a)])]),n("li",null,[s("SHP 转 GeoJSON："),n("a",Z,[s("https://mapshaper.org/"),t(a)])]),n("li",null,[s("中国行政区划 GeoJSON 下载："),n("a",D,[s("http://datav.aliyun.com/tools/atlas/"),t(a)])])])]),K,n("p",null,[s("平台支持 通过"),n("a",Q,[s("WfsLayer 类"),t(a)]),s("来加载 OGC WFS(如 GeoServer)服务 、通过"),n("a",R,[s("ArcGisFeatureLayer 类"),t(a)]),s("来加载 ArcGIS Server 服务发布的矢量数据的加载。")]),X])}const tn=o(i,[["render",Y],["__file","graphicLayer.html.vue"]]);export{tn as default};
