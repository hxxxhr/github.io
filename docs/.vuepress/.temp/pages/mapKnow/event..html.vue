<template><div><h3> 事件机制 </h3>
<img class='images' src="@source/public/icon/yonghu.svg" alt="来自依赖包的图片">
<i class='text'>Mars2D</i>
<img class='imagess' src="@source/public/icon/shijian.svg" alt="来自依赖包的图片">
<i class='text'>30/6/2023</i>
<img class='imagess' src="@source/public/icon/liulan.svg" alt="来自依赖包的图片">
<i class='text'>0</i>
<p>无论是前端系统，还是二维/二维 GIS 应用系统，都离不开各种事件的应用，尤其是鼠标的单击、双击事件。 Mars2D 内大部分类均支持事件的绑定、解绑、触发等统一的事件机制</p>
<h2 id="_1-事件的相关类" tabindex="-1"><a class="header-anchor" href="#_1-事件的相关类" aria-hidden="true">#</a> 1. 事件的相关类</h2>
<p>1.事件相关的更多方法可以参阅<a href="http://mars2d.cn/api/leaflet/reference_cn.html#evented" target="_blank" rel="noopener noreferrer">Evented 类<ExternalLinkIcon/></a>的 API 文档。</p>
<p>2.事件方法中使用到说支持的事件类型，常见事件类型全部定义在<a href="http://mars2d.cn/api/global.html#EventType" target="_blank" rel="noopener noreferrer">mars2d.EventType<ExternalLinkIcon/></a>，不常见的事件类型可以在使用时直接传入字符串的事件名称即可。在每个对应类的 API 中都会说明当前类所支持的事件类型，具体参阅各类的 API 文档。<br />
下面，我们以 map 对象为例，绑定一个事件做示例：</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">map_clickHandler</span><span class="token punctuation">(</span><span class="token parameter">event</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">"鼠标单击"</span><span class="token punctuation">,</span> event<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">//on绑定事件</span>
map<span class="token punctuation">.</span><span class="token function">on</span><span class="token punctuation">(</span>mars2d<span class="token punctuation">.</span>EventType<span class="token punctuation">.</span>click<span class="token punctuation">,</span> <span class="token keyword">this</span><span class="token punctuation">.</span>map_clickHandler<span class="token punctuation">,</span> <span class="token keyword">this</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">//off移除事件</span>
map<span class="token punctuation">.</span><span class="token function">off</span><span class="token punctuation">(</span>mars2d<span class="token punctuation">.</span>EventType<span class="token punctuation">.</span>click<span class="token punctuation">,</span> <span class="token keyword">this</span><span class="token punctuation">.</span>map_clickHandler<span class="token punctuation">,</span> <span class="token keyword">this</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_2-主要类的常用事件" tabindex="-1"><a class="header-anchor" href="#_2-主要类的常用事件" aria-hidden="true">#</a> 2. 主要类的常用事件</h2>
<h2 id="_2-1-map-类的事件" tabindex="-1"><a class="header-anchor" href="#_2-1-map-类的事件" aria-hidden="true">#</a> 2.1 Map 类的事件</h2>
<p>目前最重要的 Map 类支持 3 类事件类型可以绑定：
1.Map 内部图层变化时的事件，如<code v-pre>layeradd、layerremove</code>等 <br /> 2.图层、控件等变化触发的事件，如<code v-pre>zoom、move、popupopen</code>等<br /> 3.鼠标键盘操作触发的事件，如<code v-pre>click、mousemove、mouseout</code>等<br /></p>
<p>详细事件列表，请参阅：<a href="http://mars2d.cn/api/Map.html#.EventType" target="_blank" rel="noopener noreferrer">Map 支持的事件类型<ExternalLinkIcon/></a></p>
<h2 id="_2-2-图层类的事件" tabindex="-1"><a class="header-anchor" href="#_2-2-图层类的事件" aria-hidden="true">#</a> 2.2 图层类的事件</h2>
<p>图层类型可以绑定多种事件，我们已最常用的 GraphicLayer 图层为例： 1.图层内部变化时的事件，如<code v-pre>layeradd、layerremove</code>等 <br /> 2.鼠标操作触发的事件，如<code v-pre>click、mouseover</code>等 <br /> 3.标绘和编辑触发的事件，如<code v-pre>drawStart、drawCreated、editStart、editStop</code>等<br />
详细事件列表，请参阅：<a href="http://mars2d.cn/api/GraphicLayer.html#.EventType" target="_blank" rel="noopener noreferrer">GraphicLayer 支持的事件类型<ExternalLinkIcon/></a></p>
<h2 id="_2-3-矢量数据类的事件" tabindex="-1"><a class="header-anchor" href="#_2-3-矢量数据类的事件" aria-hidden="true">#</a> 2.3 矢量数据类的事件</h2>
<p>矢量数据类型可以绑定多种事件，我们已最常用的 Entity 矢量数据为例： 1.数据内部变化时的事件，如<code v-pre>move、popupopen</code>等 <br /> 2.鼠标操作触发的事件，如<code v-pre>click、mouseover</code>等<br />
详细事件列表，请参阅：<a href="http://mars2d.cn/api/Marker.html#.EventType" target="_blank" rel="noopener noreferrer">Marker 支持的事件类型<ExternalLinkIcon/></a></p>
</div></template>


