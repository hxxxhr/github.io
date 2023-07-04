<template><div><h3> 地图控件 </h3>
<img class='images' src="@source/public/icon/yonghu.svg" alt="来自依赖包的图片">
<i class='text'>Mars2D</i>
<img class='imagess' src="@source/public/icon/shijian.svg" alt="来自依赖包的图片">
<i class='text'>30/6/2023</i>
<img class='imagess' src="@source/public/icon/liulan.svg" alt="来自依赖包的图片">
<i class='text'>0</i>
<p>地图控件是指一些 DOM 面板或按钮，并与地图有所交互的对象，目前包含 2 大类，第一种是 Leaflet 原生具备的控件，第 2 类是 Mars2D 编写的控件。</p>
<h2 id="_1-leaflet-原生控件" tabindex="-1"><a class="header-anchor" href="#_1-leaflet-原生控件" aria-hidden="true">#</a> 1. Leaflet 原生控件</h2>
<p>目前主要使用场景是在创建地图前，你可以在配置项中通过<code v-pre>control</code>对控件中的功能组件进行相应的配置,支持的参数参考<a href="http://mars2d.cn/api/Map.html#.controlOptions" target="_blank" rel="noopener noreferrer">control 参数说明<ExternalLinkIcon/></a>。此种方式支持 Leaflet.Viewer 本身支持的一些 Leaflet 原生控件的控制。</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token comment">//方式1：在创建地图前的传参中配置control参数</span>
<span class="token keyword">var</span> map <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">mars2d<span class="token punctuation">.</span>Map</span><span class="token punctuation">(</span><span class="token string">"mars2dContainer"</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">control</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token comment">//以下是Leaflet所支持的控件相关的options</span>
    <span class="token literal-property property">scale</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token literal-property property">zoom</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token literal-property property">latlng</span><span class="token operator">:</span> <span class="token string">"bottomright"</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token literal-property property">layers</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token literal-property property">latlng</span><span class="token operator">:</span> <span class="token string">"topleft"</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>

    <span class="token comment">//以下是mars2d.control定义的控件</span>
    <span class="token literal-property property">defaultContextMenu</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span> <span class="token comment">//右键菜单</span>
    <span class="token literal-property property">locationBar</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">crs</span><span class="token operator">:</span> <span class="token string">"CGCS2000_GK_Zone_3"</span><span class="token punctuation">,</span>
      <span class="token literal-property property">template</span><span class="token operator">:</span>
        <span class="token string">"&lt;div>经度:{lng}&lt;/div> &lt;div>纬度:{lat}&lt;/div> &lt;div>横{crsx}  纵{crsy}&lt;/div> &lt;div>层级:{level}&lt;/div>"</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token literal-property property">toolBar</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token literal-property property">latlng</span><span class="token operator">:</span> <span class="token string">"bottomright"</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_2-平台内置控件" tabindex="-1"><a class="header-anchor" href="#_2-平台内置控件" aria-hidden="true">#</a> 2. 平台内置控件</h2>
<p>目前平台内部已内置了一些常用控件，并在 Map、图层、矢量数据 3 类不同层次的对象中去使用， 目前支持的内置控件包括：</p>
<table>
<thead>
<tr>
<th style="text-align:center">名称</th>
<th style="text-align:center">说明</th>
<th style="text-align:center">备注</th>
<th>示例</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:center">Popup</td>
<td style="text-align:center">鼠标单击后显示的气泡窗</td>
<td style="text-align:center">继承自 DivGraphic 对象</td>
<td><a href="http://mars2d.cn/editor.html?id=control/inside/popup" target="_blank" rel="noopener noreferrer">查看示例<ExternalLinkIcon/></a></td>
</tr>
<tr>
<td style="text-align:center">Tooltip</td>
<td style="text-align:center">鼠标移入后显示的气泡窗</td>
<td style="text-align:center">继承自 DivGraphic 对象</td>
<td><a href="http://mars2d.cn/editor.html?id=control/inside/tooltip" target="_blank" rel="noopener noreferrer">查看示例<ExternalLinkIcon/></a></td>
</tr>
<tr>
<td style="text-align:center">ContextMenu</td>
<td style="text-align:center">右键菜单</td>
<td style="text-align:center"></td>
<td><a href="http://mars2d.cn/editor.html?id=control/inside/contextmenu" target="_blank" rel="noopener noreferrer">查看示例<ExternalLinkIcon/></a></td>
</tr>
<tr>
<td style="text-align:center">SmallTooltip</td>
<td style="text-align:center">简易小气泡窗，一般用于鼠标操作的提示</td>
<td style="text-align:center">比如标绘中的提示</td>
<td><a href="http://mars2d.cn/editor.html?id=control/inside/smallTooltip" target="_blank" rel="noopener noreferrer">查看示例<ExternalLinkIcon/></a></td>
</tr>
</tbody>
</table>
<h3 id="_2-1-在-map-地图对象上操作" tabindex="-1"><a class="header-anchor" href="#_2-1-在-map-地图对象上操作" aria-hidden="true">#</a> 2.1.在 map 地图对象上操作</h3>
<p><a href="http://mars2d.cn/api/Map.html" target="_blank" rel="noopener noreferrer">Map 地图<ExternalLinkIcon/></a>对象上可以操作的常用方法有：</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token comment">//Popup相关</span>
map<span class="token punctuation">.</span><span class="token function">openPopup</span><span class="token punctuation">(</span>content<span class="token punctuation">,</span> latlng<span class="token punctuation">,</span> options<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//打开Popup弹窗</span>
map<span class="token punctuation">.</span><span class="token function">closePopup</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//关闭弹窗</span>

<span class="token comment">//Tooltip相关</span>
map<span class="token punctuation">.</span><span class="token function">openTooltip</span><span class="token punctuation">(</span>content<span class="token punctuation">,</span> latlng<span class="token punctuation">,</span> options<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//打开Tooltip弹窗</span>
map<span class="token punctuation">.</span><span class="token function">closeTooltip</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//关闭Tooltip弹窗</span>

<span class="token comment">//SmallTooltip相关</span>
map<span class="token punctuation">.</span><span class="token function">openSmallTooltip</span><span class="token punctuation">(</span>latlng<span class="token punctuation">,</span> message<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//显示小提示窗，一般用于鼠标操作的提示。</span>
map<span class="token punctuation">.</span><span class="token function">closeSmallTooltip</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//关闭小提示窗</span>

<span class="token comment">//右键菜单相关</span>
map<span class="token punctuation">.</span><span class="token function">bindContextMenu</span><span class="token punctuation">(</span>mapContextmenuItems<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//绑定地图的默认右键菜单</span>
map<span class="token punctuation">.</span><span class="token function">unbindContextMenu</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//解除绑定的右键菜单</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-2-在-layer-图层对象上操作" tabindex="-1"><a class="header-anchor" href="#_2-2-在-layer-图层对象上操作" aria-hidden="true">#</a> 2.2.在 layer 图层对象上操作</h3>
<p><a href="http://mars2d.cn/api/GraphicLayer.html" target="_blank" rel="noopener noreferrer">layer 图层<ExternalLinkIcon/></a>对象上可以操作的常用方法有：</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token comment">//Popup相关</span>
layer<span class="token punctuation">.</span><span class="token function">getPopup</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//获取Popup绑定</span>
layer<span class="token punctuation">.</span><span class="token function">bindPopup</span><span class="token punctuation">(</span>content<span class="token punctuation">,</span> options<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//绑定鼠标单击对象后的弹窗。</span>
layer<span class="token punctuation">.</span><span class="token function">unbindPopup</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//解除绑定的鼠标单击对象后的弹窗。</span>
layer<span class="token punctuation">.</span><span class="token function">openPopup</span><span class="token punctuation">(</span>latlng<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//打开Popup弹窗</span>
layer<span class="token punctuation">.</span><span class="token function">closePopup</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//关闭弹窗</span>

<span class="token comment">//Tooltip相关</span>
layer<span class="token punctuation">.</span><span class="token function">getTooltip</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//获取Tooltip绑定</span>
layer<span class="token punctuation">.</span><span class="token function">bindTooltip</span><span class="token punctuation">(</span>content<span class="token punctuation">,</span> options<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//绑定鼠标移入对象后的弹窗。</span>
layer<span class="token punctuation">.</span><span class="token function">unbindTooltip</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//解除绑定的鼠标移入对象后的弹窗。</span>
layer<span class="token punctuation">.</span><span class="token function">openTooltip</span><span class="token punctuation">(</span>latlng<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//打开Tooltip弹窗</span>
layer<span class="token punctuation">.</span><span class="token function">closeTooltip</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//关闭Tooltip弹窗</span>

<span class="token comment">//右键菜单相关</span>
layer<span class="token punctuation">.</span><span class="token function">getContextMenu</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//获取绑定的右键菜单数组</span>
layer<span class="token punctuation">.</span><span class="token function">bindContextMenu</span><span class="token punctuation">(</span>content<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//绑定地图的默认右键菜单</span>
layer<span class="token punctuation">.</span><span class="token function">unbindContextMenu</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//解除绑定的右键菜单</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-3-在-graphic-矢量数据对象上操作" tabindex="-1"><a class="header-anchor" href="#_2-3-在-graphic-矢量数据对象上操作" aria-hidden="true">#</a> 2.3. 在 graphic 矢量数据对象上操作</h3>
<p><a href="http://mars2d.cn/api/Marker.html" target="_blank" rel="noopener noreferrer">graphic 矢量数据<ExternalLinkIcon/></a>对象上可以操作的常用方法有：</p>
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_3-平台控件" tabindex="-1"><a class="header-anchor" href="#_3-平台控件" aria-hidden="true">#</a> 3. 平台控件</h2>
<p>平台的所有控件类都继承于<a href="http://mars2d.cn/api/leaflet/reference_cn.html#control" target="_blank" rel="noopener noreferrer">L.Control 类<ExternalLinkIcon/></a>，控件类均在<code v-pre>mars2d.control.*</code>命名空间下面。 下面我们演示创建一个控件对象 ，并调用 map.addControl 添加到地图上。</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">let</span> slider <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">mars2d<span class="token punctuation">.</span>control<span class="token punctuation">.</span>Slider</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">position</span><span class="token operator">:</span> <span class="token string">"topleft"</span><span class="token punctuation">,</span>
  <span class="token literal-property property">countryLevel</span><span class="token operator">:</span> <span class="token number">4</span><span class="token punctuation">,</span>
  <span class="token literal-property property">provinceLevel</span><span class="token operator">:</span> <span class="token number">7</span><span class="token punctuation">,</span>
  <span class="token literal-property property">cityLevel</span><span class="token operator">:</span> <span class="token number">10</span><span class="token punctuation">,</span>
  <span class="token literal-property property">streetLevel</span><span class="token operator">:</span> <span class="token number">14</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
map<span class="token punctuation">.</span><span class="token function">addControl</span><span class="token punctuation">(</span>slider<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3-1-控件清单" tabindex="-1"><a class="header-anchor" href="#_3-1-控件清单" aria-hidden="true">#</a> 3.1 控件清单</h3>
<table>
<thead>
<tr>
<th style="text-align:center">类名</th>
<th style="text-align:center">说明</th>
<th style="text-align:center">示例</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:center"><a href="http://mars2d.cn/api/LocationBar.html" target="_blank" rel="noopener noreferrer">mars2d.control.LocationBar<ExternalLinkIcon/></a></td>
<td style="text-align:center">鼠标经纬度等信息状态栏</td>
<td style="text-align:center"><a href="http://mars2d.cn/editor.html?id=control/basis/locationBar" target="_blank" rel="noopener noreferrer">查看示例<ExternalLinkIcon/></a></td>
</tr>
<tr>
<td style="text-align:center"><a href="http://mars2d.cn/api/Slider.html" target="_blank" rel="noopener noreferrer">mars2d.control.Slider<ExternalLinkIcon/></a></td>
<td style="text-align:center">鱼骨导航栏</td>
<td style="text-align:center"><a href="http://mars2d.cn/editor.html?id=control/basis/slider" target="_blank" rel="noopener noreferrer">查看示例<ExternalLinkIcon/></a></td>
</tr>
<tr>
<td style="text-align:center"><a href="http://mars2d.cn/api/OverviewMap.html" target="_blank" rel="noopener noreferrer">mars2d.control.OverviewMap<ExternalLinkIcon/></a></td>
<td style="text-align:center">鹰眼地图 控件</td>
<td style="text-align:center"><a href="http://mars2d.cn/editor.html?id=control/basis/overviewMap" target="_blank" rel="noopener noreferrer">查看示例<ExternalLinkIcon/></a></td>
</tr>
</tbody>
</table>
<p>注：本教程中所列清单可能不全，具体已功能示例和 API 为准。</p>
</div></template>


