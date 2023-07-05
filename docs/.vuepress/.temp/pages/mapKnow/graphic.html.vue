<template><div><h3> 矢量数据 </h3>
<img class='images' src="@source/public/icon/yonghu.svg" alt="来自依赖包的图片">
<i class='text'>Mars2D</i>
<img class='imagess' src="@source/public/icon/shijian.svg" alt="来自依赖包的图片">
<i class='text'>30/6/2023</i>
<img class='imagess' src="@source/public/icon/liulan.svg" alt="来自依赖包的图片">
<i class='text'>0</i>
<p>矢量数据 是用“经度、纬度”坐标来表示地图图形或地理实体位置的数据，一般是通过记录坐标的方式来尽可能将地理实体的空间位置表现的准确无误，常见的矢量数据有：点、线、面等格式。
<img src="@source/public/image/map-graphic.jpg" alt="配置图"> <br /></p>
<h2 id="_1-矢量数据对象" tabindex="-1"><a class="header-anchor" href="#_1-矢量数据对象" aria-hidden="true">#</a> 1. 矢量数据对象</h2>
<p>平台对 Leaflet 矢量数据和平台自身扩展开发的矢量对象都做了梳理及统一对外接口的封装，这样使用更加简单易用、对开发人员更友好、开发效率高。
平台的所有矢量数据类均在<code v-pre>mars2d.graphic.*</code>命名空间下面。矢量数据清单请访问<a href="http://mars2d.cn/api/global.html#GraphicType" target="_blank" rel="noopener noreferrer">GraphicType 类<ExternalLinkIcon/></a></p>
<p>下面我们演示创建一个矢量数据对象 ，并调用 layer.addGraphic 添加到图层上。</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token comment">//创建矢量数据图层</span>
<span class="token keyword">let</span> graphicLayer <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">mars2d<span class="token punctuation">.</span>layer<span class="token punctuation">.</span>GraphicLayer</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
map<span class="token punctuation">.</span><span class="token function">addLayer</span><span class="token punctuation">(</span>graphicLayer<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">//加载数据到矢量图层</span>
<span class="token keyword">var</span> graphic <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">mars2d<span class="token punctuation">.</span>graphic<span class="token punctuation">.</span>Label</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">latlng</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token number">31.854628</span><span class="token punctuation">,</span> <span class="token number">117.245425</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token literal-property property">style</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">text</span><span class="token operator">:</span> <span class="token string">"合肥火星科技有限公司"</span><span class="token punctuation">,</span>
    <span class="token literal-property property">color</span><span class="token operator">:</span> <span class="token string">"#0081c2"</span><span class="token punctuation">,</span>
    <span class="token literal-property property">font_size</span><span class="token operator">:</span> <span class="token number">25</span><span class="token punctuation">,</span>
    <span class="token literal-property property">font_family</span><span class="token operator">:</span> <span class="token string">"楷体"</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
graphicLayer<span class="token punctuation">.</span><span class="token function">addGraphic</span><span class="token punctuation">(</span>graphic<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>矢量数据 由 坐标、样式、属性 3 部分组成构成</p>
<table>
<thead>
<tr>
<th style="text-align:center">构成</th>
<th style="text-align:center">mars2d 属性名</th>
<th style="text-align:center">说明</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:center">坐标</td>
<td style="text-align:center">latlng 或 latlngs</td>
<td style="text-align:center">地理位置，如纬度、经度 构成</td>
</tr>
<tr>
<td style="text-align:center">样式</td>
<td style="text-align:center">style</td>
<td style="text-align:center">表现形式，如图标图片、线条样式、填充色、文字样式等</td>
</tr>
<tr>
<td style="text-align:center">属性</td>
<td style="text-align:center">attr</td>
<td style="text-align:center">除经纬度信息之外的关联信息，如名称、地址、电话、面积、长度、备注等</td>
</tr>
</tbody>
</table>
<p>可以通过图层的<code v-pre>graphicLayer.addGraphic(graphic)</code>和 <code v-pre>graphicLayer.removeGraphic(graphic)</code>方法来控制矢量数据的加载和删除。</p>
<p>在矢量数据本身也有<code v-pre>graphic.addTo (graphicLayer)</code>和<code v-pre>graphic.remove ()</code>2 个方法支持添加或移除矢量数据。</p>
<h2 id="_2-矢量数据的类别" tabindex="-1"><a class="header-anchor" href="#_2-矢量数据的类别" aria-hidden="true">#</a> 2. 矢量数据的类别</h2>
<p>请参考<a href="http://mars2d.cn/api/global.html#GraphicType" target="_blank" rel="noopener noreferrer">矢量数据类型<ExternalLinkIcon/></a></p>
<h2 id="_3-矢量数据的控制" tabindex="-1"><a class="header-anchor" href="#_3-矢量数据的控制" aria-hidden="true">#</a> 3. 矢量数据的控制</h2>
<p>前面我们讲到了平台对<a href="http://mars2d.cn/api/global.html#GraphicType" target="_blank" rel="noopener noreferrer">所有矢量数据类型<ExternalLinkIcon/></a>做了统一风格的对外接口的封装 ，这样使用更加简单易用、对开发人员更友好、开发效率高。并且参数属性和方法均一致。</p>
<h3 id="_2-1-矢量数据的事件" tabindex="-1"><a class="header-anchor" href="#_2-1-矢量数据的事件" aria-hidden="true">#</a> 2.1 矢量数据的事件</h3>
<p>矢量数据均支持事件的绑定、解绑、触发等统一的事件机制,例如：</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code>graphic<span class="token punctuation">.</span><span class="token function">on</span><span class="token punctuation">(</span>mars2d<span class="token punctuation">.</span>EventType<span class="token punctuation">.</span>click<span class="token punctuation">,</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">event</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">"您单击了矢量对象"</span><span class="token punctuation">,</span> event<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-2-矢量数据的-popup、tooltip-等控件" tabindex="-1"><a class="header-anchor" href="#_2-2-矢量数据的-popup、tooltip-等控件" aria-hidden="true">#</a> 2.2 矢量数据的 Popup、Tooltip 等控件</h3>
<p>矢量数据对象上可以操作的常用方法控件相关操作方法有：</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token comment">//Popup相关</span>
graphic<span class="token punctuation">.</span><span class="token function">getPopup</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//获取Popup绑定</span>
graphic<span class="token punctuation">.</span><span class="token function">isPopupOpen</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//是否打开了Popup</span>
graphic<span class="token punctuation">.</span><span class="token function">bindPopup</span><span class="token punctuation">(</span>content<span class="token punctuation">,</span> options<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//绑定鼠标单击对象后的弹窗。</span>
graphic<span class="token punctuation">.</span><span class="token function">unbindPopup</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//解除绑定的鼠标单击对象后的弹窗。</span>
graphic<span class="token punctuation">.</span><span class="token function">openPopup</span><span class="token punctuation">(</span>latlng<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//打开Popup弹窗</span>
graphic<span class="token punctuation">.</span><span class="token function">closePopup</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//关闭弹窗</span>

<span class="token comment">//Tooltip相关</span>
graphic<span class="token punctuation">.</span><span class="token function">getTooltip</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//获取Tooltip绑定</span>
graphic<span class="token punctuation">.</span><span class="token function">isTooltipOpen</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//是否打开了Tooltip</span>
graphic<span class="token punctuation">.</span><span class="token function">bindTooltip</span><span class="token punctuation">(</span>content<span class="token punctuation">,</span> options<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//绑定鼠标移入对象后的弹窗。</span>
graphic<span class="token punctuation">.</span><span class="token function">unbindTooltip</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//解除绑定的鼠标移入对象后的弹窗。</span>
graphic<span class="token punctuation">.</span><span class="token function">openTooltip</span><span class="token punctuation">(</span>latlng<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//打开Tooltip弹窗</span>
graphic<span class="token punctuation">.</span><span class="token function">closeTooltip</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//关闭Tooltip弹窗</span>

<span class="token comment">//右键菜单相关</span>
graphic<span class="token punctuation">.</span><span class="token function">getContextMenu</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//获取绑定的右键菜单数组</span>
graphic<span class="token punctuation">.</span><span class="token function">bindContextMenu</span><span class="token punctuation">(</span>content<span class="token punctuation">,</span> options<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//绑定地图的默认右键菜单</span>
graphic<span class="token punctuation">.</span><span class="token function">unbindContextMenu</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//解除绑定的右键菜单</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>运行效果</p>
<div style="height:430px;position:relative;" data-v-627b1480><iframe height="100%" width="100%" scrolling="yes" title="mars2d" src="http://mars2d.cn/editor-vue.html?id=graphic/basis/polygon&amp;full=1" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="allowfullscreen" data-v-627b1480></iframe><a class="toSee" href="http://mars2d.cn/editor-vue.html?id=graphic/basis/polygon&code=1" target="_blank">新窗口查看</a></div>
</div></template>


