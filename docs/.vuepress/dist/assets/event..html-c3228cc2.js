import{_ as o,a as c,b as p}from"./liulan-531c46a6.js";import{_ as l,r,o as i,c as d,a,b as n,d as e,e as t}from"./app-0bc0dfa9.js";const u={},_=t('<h3> 事件机制 </h3><img class="images" src="'+o+'" alt="来自依赖包的图片"><i class="text">Mars2D</i><img class="imagess" src="'+c+'" alt="来自依赖包的图片"><i class="text">30/6/2023</i><img class="imagess" src="'+p+'" alt="来自依赖包的图片"><i class="text">0</i><p>无论是前端系统，还是二维/二维 GIS 应用系统，都离不开各种事件的应用，尤其是鼠标的单击、双击事件。 Mars2D 内大部分类均支持事件的绑定、解绑、触发等统一的事件机制</p><h2 id="_1-事件的相关类" tabindex="-1"><a class="header-anchor" href="#_1-事件的相关类" aria-hidden="true">#</a> 1. 事件的相关类</h2>',9),h={href:"http://mars2d.cn/api/leaflet/reference_cn.html#evented",target:"_blank",rel:"noopener noreferrer"},m={href:"http://mars2d.cn/api/global.html#EventType",target:"_blank",rel:"noopener noreferrer"},k=a("br",null,null,-1),v=t(`<div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">map_clickHandler</span><span class="token punctuation">(</span><span class="token parameter">event</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;鼠标单击&quot;</span><span class="token punctuation">,</span> event<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">//on绑定事件</span>
map<span class="token punctuation">.</span><span class="token function">on</span><span class="token punctuation">(</span>mars2d<span class="token punctuation">.</span>EventType<span class="token punctuation">.</span>click<span class="token punctuation">,</span> <span class="token keyword">this</span><span class="token punctuation">.</span>map_clickHandler<span class="token punctuation">,</span> <span class="token keyword">this</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">//off移除事件</span>
map<span class="token punctuation">.</span><span class="token function">off</span><span class="token punctuation">(</span>mars2d<span class="token punctuation">.</span>EventType<span class="token punctuation">.</span>click<span class="token punctuation">,</span> <span class="token keyword">this</span><span class="token punctuation">.</span>map_clickHandler<span class="token punctuation">,</span> <span class="token keyword">this</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_2-主要类的常用事件" tabindex="-1"><a class="header-anchor" href="#_2-主要类的常用事件" aria-hidden="true">#</a> 2. 主要类的常用事件</h2><h2 id="_2-1-map-类的事件" tabindex="-1"><a class="header-anchor" href="#_2-1-map-类的事件" aria-hidden="true">#</a> 2.1 Map 类的事件</h2><p>目前最重要的 Map 类支持 3 类事件类型可以绑定： 1.Map 内部图层变化时的事件，如<code>layeradd、layerremove</code>等 <br> 2.图层、控件等变化触发的事件，如<code>zoom、move、popupopen</code>等<br> 3.鼠标键盘操作触发的事件，如<code>click、mousemove、mouseout</code>等<br></p>`,4),f={href:"http://mars2d.cn/api/Map.html#.EventType",target:"_blank",rel:"noopener noreferrer"},b=a("h2",{id:"_2-2-图层类的事件",tabindex:"-1"},[a("a",{class:"header-anchor",href:"#_2-2-图层类的事件","aria-hidden":"true"},"#"),n(" 2.2 图层类的事件")],-1),y=a("code",null,"layeradd、layerremove",-1),g=a("br",null,null,-1),x=a("code",null,"click、mouseover",-1),E=a("br",null,null,-1),M=a("code",null,"drawStart、drawCreated、editStart、editStop",-1),T=a("br",null,null,-1),w={href:"http://mars2d.cn/api/GraphicLayer.html#.EventType",target:"_blank",rel:"noopener noreferrer"},I=a("h2",{id:"_2-3-矢量数据类的事件",tabindex:"-1"},[a("a",{class:"header-anchor",href:"#_2-3-矢量数据类的事件","aria-hidden":"true"},"#"),n(" 2.3 矢量数据类的事件")],-1),L=a("code",null,"move、popupopen",-1),S=a("br",null,null,-1),G=a("code",null,"click、mouseover",-1),N=a("br",null,null,-1),V={href:"http://mars2d.cn/api/Marker.html#.EventType",target:"_blank",rel:"noopener noreferrer"};function j(A,B){const s=r("ExternalLinkIcon");return i(),d("div",null,[_,a("p",null,[n("1.事件相关的更多方法可以参阅"),a("a",h,[n("Evented 类"),e(s)]),n("的 API 文档。")]),a("p",null,[n("2.事件方法中使用到说支持的事件类型，常见事件类型全部定义在"),a("a",m,[n("mars2d.EventType"),e(s)]),n("，不常见的事件类型可以在使用时直接传入字符串的事件名称即可。在每个对应类的 API 中都会说明当前类所支持的事件类型，具体参阅各类的 API 文档。"),k,n(" 下面，我们以 map 对象为例，绑定一个事件做示例：")]),v,a("p",null,[n("详细事件列表，请参阅："),a("a",f,[n("Map 支持的事件类型"),e(s)])]),b,a("p",null,[n("图层类型可以绑定多种事件，我们已最常用的 GraphicLayer 图层为例： 1.图层内部变化时的事件，如"),y,n("等 "),g,n(" 2.鼠标操作触发的事件，如"),x,n("等 "),E,n(" 3.标绘和编辑触发的事件，如"),M,n("等"),T,n(" 详细事件列表，请参阅："),a("a",w,[n("GraphicLayer 支持的事件类型"),e(s)])]),I,a("p",null,[n("矢量数据类型可以绑定多种事件，我们已最常用的 Entity 矢量数据为例： 1.数据内部变化时的事件，如"),L,n("等 "),S,n(" 2.鼠标操作触发的事件，如"),G,n("等"),N,n(" 详细事件列表，请参阅："),a("a",V,[n("Marker 支持的事件类型"),e(s)])])])}const q=l(u,[["render",j],["__file","event..html.vue"]]);export{q as default};
