import{_ as p,r as o,o as r,c as l,a as n,b as s,d as t,e}from"./app-a7594ec8.js";const c={},i=n("h3",null," 地图场景 Map ",-1),u={href:"http://mars2d.cn/api/Map.html",target:"_blank",rel:"noopener noreferrer"},d=e(`<h2 id="_1-地图场景初始化" tabindex="-1"><a class="header-anchor" href="#_1-地图场景初始化" aria-hidden="true">#</a> 1. 地图场景初始化</h2><p>在使用 mars2d 时你可以根据需要对默认参数进行配置，如果你只是想得到默认的效果，你仅需要写下面一行代码即可：</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">var</span> map <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">mars2d<span class="token punctuation">.</span>Map</span><span class="token punctuation">(</span><span class="token string">&quot;mars2dContainer&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>当你需要对地图进行配置的时候，mars2d 提供了详细的参数配置方案（如下），你可以暂时不需要完全理解各个参数的意义，在接下来的后续教程中我们会详细解释相关参数。</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// 创建二维地图场景</span>
<span class="token keyword">var</span> map <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">mars2d<span class="token punctuation">.</span>Map</span><span class="token punctuation">(</span><span class="token string">&quot;mars2dContainer&quot;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">zoom</span><span class="token operator">:</span> <span class="token number">13</span><span class="token punctuation">,</span>
  <span class="token literal-property property">center</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token literal-property property">lng</span><span class="token operator">:</span> <span class="token number">117.240601</span><span class="token punctuation">,</span> <span class="token literal-property property">lat</span><span class="token operator">:</span> <span class="token number">31.827107</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">minZoom</span><span class="token operator">:</span> <span class="token number">3</span><span class="token punctuation">,</span>
  <span class="token literal-property property">maxZoom</span><span class="token operator">:</span> <span class="token number">18</span><span class="token punctuation">,</span>
  <span class="token literal-property property">control</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">scale</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token literal-property property">locationBar</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">crs</span><span class="token operator">:</span> <span class="token string">&quot;CGCS2000_GK_Zone_3&quot;</span><span class="token punctuation">,</span>
      <span class="token literal-property property">template</span><span class="token operator">:</span>
        <span class="token string">&quot;&lt;div&gt;经度:{lng}&lt;/div&gt; &lt;div&gt;纬度:{lat}&lt;/div&gt; &lt;div&gt;横{crsx}  纵{crsy}&lt;/div&gt; &lt;div&gt;层级:{level}&lt;/div&gt;&quot;</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token literal-property property">zoom</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token literal-property property">position</span><span class="token operator">:</span> <span class="token string">&quot;bottomright&quot;</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token literal-property property">toolBar</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token literal-property property">position</span><span class="token operator">:</span> <span class="token string">&quot;bottomright&quot;</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token literal-property property">layers</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token literal-property property">position</span><span class="token operator">:</span> <span class="token string">&quot;topleft&quot;</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">basemaps</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token punctuation">{</span> <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&quot;高德地图&quot;</span><span class="token punctuation">,</span> <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">&quot;gaode&quot;</span><span class="token punctuation">,</span> <span class="token literal-property property">layer</span><span class="token operator">:</span> <span class="token string">&quot;vec&quot;</span><span class="token punctuation">,</span> <span class="token literal-property property">show</span><span class="token operator">:</span> <span class="token boolean">true</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span> <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&quot;高德地图&quot;</span><span class="token punctuation">,</span> <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">&quot;gaode&quot;</span><span class="token punctuation">,</span> <span class="token literal-property property">layer</span><span class="token operator">:</span> <span class="token string">&quot;img&quot;</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token literal-property property">operationallayers</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">{</span> <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&quot;经纬网&quot;</span><span class="token punctuation">,</span> <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">&quot;graticule&quot;</span> <span class="token punctuation">}</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_2-mars2d-map-类-参数说明" tabindex="-1"><a class="header-anchor" href="#_2-mars2d-map-类-参数说明" aria-hidden="true">#</a> 2. mars2d.Map 类 参数说明</h2>`,6),k=n("thead",null,[n("tr",null,[n("th",{style:{"text-align":"center"}},"参数名"),n("th",{style:{"text-align":"center"}},"类型"),n("th",{style:{"text-align":"center"}},"参数解释")])],-1),m=n("tr",null,[n("td",{style:{"text-align":"center"}},"id"),n("td",{style:{"text-align":"center"}},"String 或 HTMLElement"),n("td",{style:{"text-align":"center"}},"地图 div 容器的 id 或 dom")],-1),y=n("td",{style:{"text-align":"center"}},"mapOptions",-1),h=n("td",{style:{"text-align":"center"}},"Object",-1),v={style:{"text-align":"center"}},_={href:"http://mars2d.cn/api/Map.html",target:"_blank",rel:"noopener noreferrer"},g=e(`<h3 id="_2-1-使用-json-配置文件记录参数快速创建地图场景" tabindex="-1"><a class="header-anchor" href="#_2-1-使用-json-配置文件记录参数快速创建地图场景" aria-hidden="true">#</a> 2.1 使用 json 配置文件记录参数快速创建地图场景</h3><p>我们在不同项目应用时，可能是同一套代码，仅仅只是地图的配置参数不一样， 那么我们可以把地图的参数保存在后端服务动态生成或存储在 json 文件，将地图场景参数化。 我们可以直接加载使用不同 json 数据来快速创建各种地图场景。<br> (1)通过任意方式去读取 json 文件，下面只是一种演示的方式</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">let</span> configUrl <span class="token operator">=</span> <span class="token string">&quot;http://mars2d.cn/config/config.json&quot;</span><span class="token punctuation">;</span>
mars2d<span class="token punctuation">.</span>axios
  <span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span>configUrl<span class="token punctuation">)</span>
  <span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">response</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">//构建地图</span>
    window<span class="token punctuation">.</span><span class="token function">initMap</span><span class="token punctuation">(</span>response<span class="token punctuation">.</span>data<span class="token punctuation">.</span>map<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
  <span class="token punctuation">.</span><span class="token function">catch</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">error</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;加载JSON出错&quot;</span><span class="token punctuation">,</span> error<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>(2)读取到的 json 对象传入<code>new mars2d.Map</code>方法创建地图</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">initMap</span><span class="token punctuation">(</span><span class="token parameter">mapOptions</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">//创建二维地图场景</span>
  <span class="token keyword">var</span> map <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">mars2d<span class="token punctuation">.</span>Map</span><span class="token punctuation">(</span><span class="token string">&quot;mars2dContainer&quot;</span><span class="token punctuation">,</span> mapOptions<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>config.json</code>中的属性参数是与 mapOptions 参数相同。</p><h2 id="_3-默认视角参数" tabindex="-1"><a class="header-anchor" href="#_3-默认视角参数" aria-hidden="true">#</a> 3. 默认视角参数</h2>`,7),b={href:"http://mars2d.cn/api/Map.html#.mapOptions",target:"_blank",rel:"noopener noreferrer"},x=e(`<div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">var</span> map <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">mars2d<span class="token punctuation">.</span>Map</span><span class="token punctuation">(</span><span class="token string">&quot;mars2dContainer&quot;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">zoom</span><span class="token operator">:</span> <span class="token number">13</span><span class="token punctuation">,</span>
  <span class="token literal-property property">center</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token literal-property property">lng</span><span class="token operator">:</span> <span class="token number">117.240601</span><span class="token punctuation">,</span> <span class="token literal-property property">lat</span><span class="token operator">:</span> <span class="token number">31.827107</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,1),q={href:"http://mars2d.cn/api/Map.html#getView",target:"_blank",rel:"noopener noreferrer"},f=n("h2",{id:"_4-控件",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_4-控件","aria-hidden":"true"},"#"),s(" 4.控件")],-1),L=n("code",null,"control",-1),j={href:"http://mars2d.cn/api/Map.html#.controlOptions",target:"_blank",rel:"noopener noreferrer"},w=e(`<div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">var</span> map <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">mars2d<span class="token punctuation">.</span>Map</span><span class="token punctuation">(</span><span class="token string">&quot;mars2dContainer&quot;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">control</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token comment">//以下是Leaflet所支持的控件相关的options</span>
    <span class="token literal-property property">scale</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token literal-property property">zoom</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token literal-property property">position</span><span class="token operator">:</span> <span class="token string">&quot;bottomright&quot;</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token literal-property property">layers</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token literal-property property">position</span><span class="token operator">:</span> <span class="token string">&quot;topleft&quot;</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>

    <span class="token comment">//以下是mars2d.control定义的控件</span>
    <span class="token literal-property property">defaultContextMenu</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span> <span class="token comment">//右键菜单</span>
    <span class="token literal-property property">locationBar</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">crs</span><span class="token operator">:</span> <span class="token string">&quot;CGCS2000_GK_Zone_3&quot;</span><span class="token punctuation">,</span>
      <span class="token literal-property property">template</span><span class="token operator">:</span>
        <span class="token string">&quot;&lt;div&gt;经度:{lng}&lt;/div&gt; &lt;div&gt;纬度:{lat}&lt;/div&gt; &lt;div&gt;横{crsx}  纵{crsy}&lt;/div&gt; &lt;div&gt;层级:{level}&lt;/div&gt;&quot;</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token literal-property property">toolBar</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token literal-property property">position</span><span class="token operator">:</span> <span class="token string">&quot;bottomright&quot;</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_5-栅格瓦片底图" tabindex="-1"><a class="header-anchor" href="#_5-栅格瓦片底图" aria-hidden="true">#</a> 5. 栅格瓦片底图</h2>`,2),M={href:"http://mars2d.cn/api/Map.html#.basemapOptions",target:"_blank",rel:"noopener noreferrer"},C=e(`<div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">var</span> map <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">mars2d<span class="token punctuation">.</span>Map</span><span class="token punctuation">(</span><span class="token string">&quot;mars2dContainer&quot;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">basemaps</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token punctuation">{</span>
      <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&quot;天地图电子&quot;</span><span class="token punctuation">,</span>
      <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">&quot;group&quot;</span><span class="token punctuation">,</span>
      <span class="token literal-property property">layers</span><span class="token operator">:</span> <span class="token punctuation">[</span>
        <span class="token punctuation">{</span> <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&quot;底图&quot;</span><span class="token punctuation">,</span> <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">&quot;tdt&quot;</span><span class="token punctuation">,</span> <span class="token literal-property property">layer</span><span class="token operator">:</span> <span class="token string">&quot;vec_d&quot;</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span> <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&quot;注记&quot;</span><span class="token punctuation">,</span> <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">&quot;tdt&quot;</span><span class="token punctuation">,</span> <span class="token literal-property property">layer</span><span class="token operator">:</span> <span class="token string">&quot;vec_z&quot;</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">]</span><span class="token punctuation">,</span>
      <span class="token literal-property property">show</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span> <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&quot;天地图卫星&quot;</span><span class="token punctuation">,</span> <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">&quot;tdt&quot;</span><span class="token punctuation">,</span> <span class="token literal-property property">layer</span><span class="token operator">:</span> <span class="token string">&quot;img&quot;</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
      <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&quot;OSM地图&quot;</span><span class="token punctuation">,</span>
      <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">&quot;xyz&quot;</span><span class="token punctuation">,</span>
      <span class="token literal-property property">url</span><span class="token operator">:</span> <span class="token string">&quot;http://a.tile.openstreetmap.org/{z}/{x}/{y}.png&quot;</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span> <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&quot;高德地图&quot;</span><span class="token punctuation">,</span> <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">&quot;gaode&quot;</span><span class="token punctuation">,</span> <span class="token literal-property property">layer</span><span class="token operator">:</span> <span class="token string">&quot;vec&quot;</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_7-1-底图的图层参数" tabindex="-1"><a class="header-anchor" href="#_7-1-底图的图层参数" aria-hidden="true">#</a> 7.1 底图的图层参数</h3>`,2),G={href:"http://mars2d.cn/api/BaseTileLayer.html",target:"_blank",rel:"noopener noreferrer"},O=n("br",null,null,-1),S=e('<table><thead><tr><th style="text-align:center;">参数名</th><th style="text-align:center;">类型</th><th style="text-align:center;">参数解释</th></tr></thead><tbody><tr><td style="text-align:center;">type</td><td style="text-align:center;">String</td><td style="text-align:center;">图层类型</td></tr><tr><td style="text-align:center;">name</td><td style="text-align:center;">String</td><td style="text-align:center;">用于图层控件展示的名称</td></tr><tr><td style="text-align:center;">其他参数</td><td style="text-align:center;"></td><td style="text-align:center;">每个 type 都有一些个性化的不同参数，参考各 type 对应的图层类构造参数</td></tr></tbody></table><h3 id="_7-2-底图的-type-图层类型" tabindex="-1"><a class="header-anchor" href="#_7-2-底图的-type-图层类型" aria-hidden="true">#</a> 7.2 底图的 type 图层类型</h3><p>basemaps 所支持的 type 目前包括：</p>',3),T=n("thead",null,[n("tr",null,[n("th",{style:{"text-align":"center"}},"类型名"),n("th",{style:{"text-align":"center"}},"说明"),n("th",{style:{"text-align":"center"}},"对应的图层类"),n("th",{style:{"text-align":"center"}},"备注")])],-1),B=n("td",{style:{"text-align":"center"}},"image",-1),I=n("td",{style:{"text-align":"center"}},"单张图片",-1),z={style:{"text-align":"center"}},A={href:"http://mars2d.cn/api/ImageLayer.html",target:"_blank",rel:"noopener noreferrer"},V=n("td",{style:{"text-align":"center"}},null,-1),N=n("td",{style:{"text-align":"center"}},"tile",-1),W=n("td",{style:{"text-align":"center"}},"标准金字塔地图",-1),E={style:{"text-align":"center"}},Z={href:"http://mars2d.cn/api/TileLayer.html",target:"_blank",rel:"noopener noreferrer"},D=n("td",{style:{"text-align":"center"}},null,-1),U=n("td",{style:{"text-align":"center"}},"wms",-1),K=n("td",{style:{"text-align":"center"}},"OGC WMS 标准服务",-1),P={style:{"text-align":"center"}},H={href:"http://mars2d.cn/api/WmsLayer.html",target:"_blank",rel:"noopener noreferrer"},J=n("td",{style:{"text-align":"center"}},null,-1),F=n("td",{style:{"text-align":"center"}},"wmts",-1),Q=n("td",{style:{"text-align":"center"}},"OGC WMTS 标准服务",-1),R={style:{"text-align":"center"}},X={href:"http://mars2d.cn/api/WmtsLayer.html",target:"_blank",rel:"noopener noreferrer"},Y=n("td",{style:{"text-align":"center"}},null,-1),$=n("td",{style:{"text-align":"center"}},"arcgis",-1),nn=n("td",{style:{"text-align":"center"}},"ArcGIS 标准服务",-1),sn={style:{"text-align":"center"}},an={href:"http://mars2d.cn/api/ArcGisLayer.html",target:"_blank",rel:"noopener noreferrer"},tn=n("td",{style:{"text-align":"center"}},null,-1),en=n("td",{style:{"text-align":"center"}},"arcgis_cache",-1),pn=n("td",{style:{"text-align":"center"}},"ArcGIS 切片",-1),on={style:{"text-align":"center"}},rn={href:"http://mars2d.cn/api/ArcGisCacheLayer.html",target:"_blank",rel:"noopener noreferrer"},ln=n("td",{style:{"text-align":"center"}},null,-1),cn=n("td",{style:{"text-align":"center"}},"tdt",-1),un=n("td",{style:{"text-align":"center"}},"天地图",-1),dn={style:{"text-align":"center"}},kn={href:"http://mars2d.cn/api/TdtLayer.html",target:"_blank",rel:"noopener noreferrer"},mn=n("td",{style:{"text-align":"center"}},"在线地图",-1),yn=n("td",{style:{"text-align":"center"}},"gaode",-1),hn=n("td",{style:{"text-align":"center"}},"高德",-1),vn={style:{"text-align":"center"}},_n={href:"http://mars2d.cn/api/GaodeLayer.html",target:"_blank",rel:"noopener noreferrer"},gn=n("td",{style:{"text-align":"center"}},"在线地图",-1),bn=n("td",{style:{"text-align":"center"}},"baidu",-1),xn=n("td",{style:{"text-align":"center"}},"百度",-1),qn={style:{"text-align":"center"}},fn={href:"http://mars2d.cn/api/BaiduLayer.html",target:"_blank",rel:"noopener noreferrer"},Ln=n("td",{style:{"text-align":"center"}},"在线地图",-1),jn=n("td",{style:{"text-align":"center"}},"tencent",-1),wn=n("td",{style:{"text-align":"center"}},"腾讯",-1),Mn={style:{"text-align":"center"}},Cn={href:"http://mars2d.cn/api/TencentLayer.html",target:"_blank",rel:"noopener noreferrer"},Gn=n("td",{style:{"text-align":"center"}},"在线地图",-1),On=n("td",{style:{"text-align":"center"}},"osm",-1),Sn=n("td",{style:{"text-align":"center"}},"OpenStreetMap（OSM）",-1),Tn={style:{"text-align":"center"}},Bn={href:"http://mars2d.cn/api/OsmLayer.html",target:"_blank",rel:"noopener noreferrer"},In=n("td",{style:{"text-align":"center"}},"国外在线地图",-1),zn=n("td",{style:{"text-align":"center"}},"mapbox",-1),An=n("td",{style:{"text-align":"center"}},"Mapbox 地图",-1),Vn={style:{"text-align":"center"}},Nn={href:"http://mars2d.cn/api/MapboxLayer.html",target:"_blank",rel:"noopener noreferrer"},Wn=n("td",{style:{"text-align":"center"}},"国外在线地图",-1),En=n("td",{style:{"text-align":"center"}},"google",-1),Zn=n("td",{style:{"text-align":"center"}},"谷歌地图",-1),Dn={style:{"text-align":"center"}},Un={href:"http://mars2d.cn/api/GoogleLayer.html",target:"_blank",rel:"noopener noreferrer"},Kn=n("td",{style:{"text-align":"center"}},"目前已被封",-1),Pn=e(`<h3 id="_7-3-更新底图" tabindex="-1"><a class="header-anchor" href="#_7-3-更新底图" aria-hidden="true">#</a> 7.3 更新底图</h3><p>创建完成底图后，需要切换底图或获取当前的底图，可以根据 config 配置的 id 或 name 属性，显示指定的底图，如：</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">//获取或设置当前显示的底图，设置时可以传入图层id或name</span>
map<span class="token punctuation">.</span>basemap <span class="token operator">=</span> <span class="token string">&quot;离线地图&quot;</span><span class="token punctuation">;</span>

<span class="token comment">//获取配置的底图数组</span>
<span class="token keyword">let</span> arr <span class="token operator">=</span> map<span class="token punctuation">.</span><span class="token function">getBasemaps</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_8-可以叠加的图层" tabindex="-1"><a class="header-anchor" href="#_8-可以叠加的图层" aria-hidden="true">#</a> 8. 可以叠加的图层</h2>`,4),Hn={href:"http://mars2d.cn/api/Map.html#.layerOptions",target:"_blank",rel:"noopener noreferrer"},Jn=e(`<div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">var</span> map <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">mars2d<span class="token punctuation">.</span>Map</span><span class="token punctuation">(</span><span class="token string">&quot;mars2dContainer&quot;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">operationallayers</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token punctuation">{</span> <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&quot;实时路况&quot;</span><span class="token punctuation">,</span> <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">&quot;gaode&quot;</span><span class="token punctuation">,</span> <span class="token literal-property property">layer</span><span class="token operator">:</span> <span class="token string">&quot;time&quot;</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span> <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&quot;经纬网&quot;</span><span class="token punctuation">,</span> <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">&quot;graticule&quot;</span><span class="token punctuation">,</span> <span class="token literal-property property">show</span><span class="token operator">:</span> <span class="token boolean">true</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_8-1-可以叠加的图层" tabindex="-1"><a class="header-anchor" href="#_8-1-可以叠加的图层" aria-hidden="true">#</a> 8.1 可以叠加的图层</h3>`,2),Fn={href:"http://mars2d.cn/api/global.html#LayerType",target:"_blank",rel:"noopener noreferrer"},Qn=n("h3",{id:"_8-2-对图层的控制",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_8-2-对图层的控制","aria-hidden":"true"},"#"),s(" 8.2 对图层的控制")],-1),Rn={href:"http://mars2d.cn/api/Map.html#getLayer",target:"_blank",rel:"noopener noreferrer"},Xn=e(`<p>为了方便理解 getLayer 获取到的对象，layers 配置的图层与下面的创建方式是等价的，</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">//用工厂方法创建图层</span>
<span class="token keyword">var</span> layerImg <span class="token operator">=</span> mars2d<span class="token punctuation">.</span>LayerUtil<span class="token punctuation">.</span><span class="token function">create</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">&quot;image&quot;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">url</span><span class="token operator">:</span> <span class="token string">&quot;//data.mars2d.cn/file/img/radar/201906211112.PNG&quot;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">rectangle</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token literal-property property">xmin</span><span class="token operator">:</span> <span class="token number">73.16895</span><span class="token punctuation">,</span> <span class="token literal-property property">xmax</span><span class="token operator">:</span> <span class="token number">134.86816</span><span class="token punctuation">,</span> <span class="token literal-property property">ymin</span><span class="token operator">:</span> <span class="token number">12.2023</span><span class="token punctuation">,</span> <span class="token literal-property property">ymax</span><span class="token operator">:</span> <span class="token number">54.11485</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">alpha</span><span class="token operator">:</span> <span class="token number">0.7</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
map<span class="token punctuation">.</span><span class="token function">addLayer</span><span class="token punctuation">(</span>layerImg<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2),Yn={href:"http://mars2d.cn/api/Map.html#addLayer",target:"_blank",rel:"noopener noreferrer"},$n={href:"http://mars2d.cn/api/Map.html#removeLayer",target:"_blank",rel:"noopener noreferrer"},ns={href:"http://mars2d.cn/api/global.html#LayerType",target:"_blank",rel:"noopener noreferrer"};function ss(as,ts){const a=o("ExternalLinkIcon");return r(),l("div",null,[i,n("p",null,[s("我们使用 DIV 渲染后看到的二维地图对象，我们统称为地图场景，在 Mars2D 中对应是"),n("a",u,[s("mars2d.Map 类"),t(a)]),s("，这是一切的开始，所有相关控制的起点。掌握学习好了 mars2d.Map 类 基本也就掌握好了 Mars2D。")]),d,n("table",null,[k,n("tbody",null,[m,n("tr",null,[y,h,n("td",v,[n("a",_,[s("API 文档 Map 类"),t(a)])])])])]),g,n("p",null,[s("你如果想设置进入地图页面时，自定义默认视角中心点和地图层级的话，你可以在创建地图时设置"),n("a",b,[s("zoom 和 center 参数"),t(a)]),s("值：")]),x,n("p",null,[s("也可以通过"),n("a",q,[s("map.getView"),t(a)]),s("方法获取当前的地图视角后拷贝设置到 config.json 中。或者在地图空白区域右键菜单中【查看当前视角】来快捷获取下参数值。")]),f,n("p",null,[s("在创建地图的时候，你可以在配置项中通过"),L,s("对控件中的功能组件进行相应的配置，支持的参数，参考"),n("a",j,[s("control 参数说明"),t(a)])]),w,n("p",null,[s("栅格底图就是我们浏览地图最重要的底层参照物, 在创建地图的时候，你可以通过"),n("a",M,[s("basemapse"),t(a)]),s("添加栅格瓦片底图（允许添加多个，添加多个图层后可在底图控制器中切换），一般我们可以设置 basemaps 数组中默认显示的底图的 show 参数为 true")]),C,n("p",null,[s("栅格底图所支持的图层类型，只能是瓦片图层，均是继承自"),n("a",G,[s(" BaseTileLayer 类"),t(a)]),s("的图层类型。basemaps 参数为一个数组，其中各图层的参数支持："),O,s(" basemaps 参数说明")]),S,n("table",null,[T,n("tbody",null,[n("tr",null,[B,I,n("td",z,[n("a",A,[s("mars2d.layer.ImageLayer"),t(a)])]),V]),n("tr",null,[N,W,n("td",E,[n("a",Z,[s("mars2d.layer.TileLayer"),t(a)])]),D]),n("tr",null,[U,K,n("td",P,[n("a",H,[s("mars2d.layer.WmsLayer"),t(a)])]),J]),n("tr",null,[F,Q,n("td",R,[n("a",X,[s("mars2d.layer.WmtsLayer"),t(a)])]),Y]),n("tr",null,[$,nn,n("td",sn,[n("a",an,[s("mars2d.layer.ArcGisLayer"),t(a)])]),tn]),n("tr",null,[en,pn,n("td",on,[n("a",rn,[s("mars2d.layer.ArcGisCacheLayer "),t(a)])]),ln]),n("tr",null,[cn,un,n("td",dn,[n("a",kn,[s("mars2d.layer.TdtLayer"),t(a)])]),mn]),n("tr",null,[yn,hn,n("td",vn,[n("a",_n,[s("mars2d.layer.GaodeLayer"),t(a)])]),gn]),n("tr",null,[bn,xn,n("td",qn,[n("a",fn,[s("mars2d.layer.BaiduLayer"),t(a)])]),Ln]),n("tr",null,[jn,wn,n("td",Mn,[n("a",Cn,[s("mars2d.layer.TencentLayer "),t(a)])]),Gn]),n("tr",null,[On,Sn,n("td",Tn,[n("a",Bn,[s("mars2d.layer.OsmLayer"),t(a)])]),In]),n("tr",null,[zn,An,n("td",Vn,[n("a",Nn,[s("mars2d.layer.MapboxLayer "),t(a)])]),Wn]),n("tr",null,[En,Zn,n("td",Dn,[n("a",Un,[s("mars2d.layer.GoogleLayer"),t(a)])]),Kn])])]),Pn,n("p",null,[s("在二维地图中，你可以在地图上添加多个图层来叠加显示。 在创建地图时，可以传"),n("a",Hn,[s("operationallayers 参数"),t(a)]),s(" 来将当前项目内常用的图层一次性配置好，代码中去按需使用。")]),Jn,n("p",null,[s("operationallayers 配置支持的 basemaps 所有支持的瓦片图层，还支持所有矢量覆盖物数据的加载，支持的 type 类型，请参考"),n("a",Fn,[s("图层类型"),t(a)]),s("，每个 type 都有一些个性化的不同参数，参考各 type 对应的图层类构造参数。")]),Qn,n("p",null,[s("可以通过"),n("a",Rn,[s(" let layer = map.getLayer(1987,'id')"),t(a)]),s("来获取 config.json 中配置的对应 id 为 1987 的图层对象。")]),Xn,n("p",null,[s("在 Map 创建后可以通过"),n("a",Yn,[s("addLayer"),t(a)]),s("和"),n("a",$n,[s("removeLayer"),t(a)]),s("方法来控制图层的加载和删除。")]),n("p",null,[s("更多方法可以在"),n("a",ns,[s("图层类型"),t(a)]),s("找到对应的 图层类 后，查阅对应类的属性或方法进行进一步控制及管理图层。")])])}const ps=p(c,[["render",ss],["__file","map.html.vue"]]);export{ps as default};
