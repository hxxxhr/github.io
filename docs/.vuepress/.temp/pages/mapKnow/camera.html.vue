<template><div><h3> 视角控制</h3>
<div class='headStyle'>
<img class='images' src="@source/public/icon/yonghu.svg" alt="来自依赖包的图片">
<i class='text'>Mars2D</i>
<img class='imagess' src="@source/public/icon/shijian.svg" alt="来自依赖包的图片">
<i class='text'>30/6/2023</i>
<img class='imagess' src="@source/public/icon/liulan.svg" alt="来自依赖包的图片">
<span class='text' id="busuanzi_container_page_pv">
  <span id="busuanzi_value_page_pv"></span>
</span>
</div>
<h2 id="_1-map-中视角相关设置和方法" tabindex="-1"><a class="header-anchor" href="#_1-map-中视角相关设置和方法" aria-hidden="true">#</a> 1. map 中视角相关设置和方法</h2>
<p>我们在创建地图时，可以在<a href="http://mars2d.cn/api/Map.html#.Options" target="_blank" rel="noopener noreferrer">center 参数<ExternalLinkIcon/></a>中来设置默认视角，如：</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">var</span> map <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">mars2d<span class="token punctuation">.</span>Map</span><span class="token punctuation">(</span><span class="token string">"mars2dContainer"</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">zoom</span><span class="token operator">:</span> <span class="token number">13</span><span class="token punctuation">,</span>
  <span class="token literal-property property">center</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token literal-property property">lng</span><span class="token operator">:</span> <span class="token number">117.240601</span><span class="token punctuation">,</span> <span class="token literal-property property">lat</span><span class="token operator">:</span> <span class="token number">31.827107</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>当前 map 中与相机有关的方式：</p>
<table>
<thead>
<tr>
<th style="text-align:center">方法名</th>
<th style="text-align:center">说明</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:center"><a href="http://mars2d.cn/api/Map.html#getView" target="_blank" rel="noopener noreferrer">map.getView()<ExternalLinkIcon/></a></td>
<td style="text-align:center">获取当前层级和中心点</td>
</tr>
<tr>
<td style="text-align:center"><a href="http://mars2d.cn/api/Map.html#setView" target="_blank" rel="noopener noreferrer">map.setView(center, zoom, options)<ExternalLinkIcon/></a></td>
<td style="text-align:center">定位地图至指定位置和层级</td>
</tr>
<tr>
<td style="text-align:center"><a href="http://mars2d.cn/api/Map.html#flyHome" target="_blank" rel="noopener noreferrer">map.flyHome(options)<ExternalLinkIcon/></a></td>
<td style="text-align:center">飞行到默认视角， 一般为 config.json 中的 center 参数配置的中心点。</td>
</tr>
<tr>
<td style="text-align:center"><a href="http://mars2d.cn/api/Map.html#fitBounds" target="_blank" rel="noopener noreferrer">map.fitBounds(bounds, options)<ExternalLinkIcon/></a></td>
<td style="text-align:center">定位至 矩形区域 处</td>
</tr>
<tr>
<td style="text-align:center"><a href="http://mars2d.cn/api/Map.html#fitBounds" target="_blank" rel="noopener noreferrer">map.flyToBounds(bounds, options)(opens new window)<ExternalLinkIcon/></a></td>
<td style="text-align:center">执行平滑的飞行动画，飞行定位至 矩形区域 处</td>
</tr>
<tr>
<td style="text-align:center"><a href="http://mars2d.cn/api/Map.html#flyTo" target="_blank" rel="noopener noreferrer">map.flyTo(latlng, zoom, options)<ExternalLinkIcon/></a></td>
<td style="text-align:center">执行平滑的飞行动画，移动缩放地图范围至指定的地理中心和级别</td>
</tr>
<tr>
<td style="text-align:center"><a href="http://mars2d.cn/api/Map.html#flyToGraphic" target="_blank" rel="noopener noreferrer">map.flyToGraphic(graphic, options)<ExternalLinkIcon/></a></td>
<td style="text-align:center">飞行定位至 Graphic 矢量对象处</td>
</tr>
<tr>
<td style="text-align:center"><a href="http://mars2d.cn/api/Map.html#flyToPoint" target="_blank" rel="noopener noreferrer">map.flyToPoint(point, options)<ExternalLinkIcon/></a></td>
<td style="text-align:center">视角中心定位至目标点</td>
</tr>
<tr>
<td style="text-align:center"><a href="http://mars2d.cn/api/Map.html#cancelFlight" target="_blank" rel="noopener noreferrer">map.stop()<ExternalLinkIcon/></a></td>
<td style="text-align:center">停止飞行视角定位等操作</td>
</tr>
</tbody>
</table>
<h2 id="_3-2-运行效果" tabindex="-1"><a class="header-anchor" href="#_3-2-运行效果" aria-hidden="true">#</a> 3.2 运行效果</h2>
<div style="height:410px;position:relative;" data-v-627b1480><iframe height="100%" width="100%" scrolling="yes" title="mars2d" src="http://mars2d.cn/editor-vue.html?id=map/options/center&amp;full=1" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="allowfullscreen" data-v-627b1480></iframe><a class="toSee" href="http://mars2d.cn/editor-vue.html?id=map/options/center&code=1" target="_blank">新窗口查看</a></div></div></template>


