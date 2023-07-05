import{_ as o,a as r,b as l}from"./liulan-531c46a6.js";import{_ as p,r as c,o as i,c as d,a as t,b as e,d as s,e as a}from"./app-0bc0dfa9.js";const _={},h=a('<h3> 视角控制</h3><img class="images" src="'+o+'" alt="来自依赖包的图片"><i class="text">Mars2D</i><img class="imagess" src="'+r+'" alt="来自依赖包的图片"><i class="text">30/6/2023</i><img class="imagess" src="'+l+'" alt="来自依赖包的图片"><i class="text">0</i><h2 id="_1-map-中视角相关设置和方法" tabindex="-1"><a class="header-anchor" href="#_1-map-中视角相关设置和方法" aria-hidden="true">#</a> 1. map 中视角相关设置和方法</h2>',8),m={href:"http://mars2d.cn/api/Map.html#.Options",target:"_blank",rel:"noopener noreferrer"},u=a(`<div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">var</span> map <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">mars2d<span class="token punctuation">.</span>Map</span><span class="token punctuation">(</span><span class="token string">&quot;mars2dContainer&quot;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">zoom</span><span class="token operator">:</span> <span class="token number">13</span><span class="token punctuation">,</span>
  <span class="token literal-property property">center</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token literal-property property">lng</span><span class="token operator">:</span> <span class="token number">117.240601</span><span class="token punctuation">,</span> <span class="token literal-property property">lat</span><span class="token operator">:</span> <span class="token number">31.827107</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>当前 map 中与相机有关的方式：</p>`,2),g=t("thead",null,[t("tr",null,[t("th",{style:{"text-align":"center"}},"方法名"),t("th",{style:{"text-align":"center"}},"说明")])],-1),k={style:{"text-align":"center"}},f={href:"http://mars2d.cn/api/Map.html#getView",target:"_blank",rel:"noopener noreferrer"},y=t("td",{style:{"text-align":"center"}},"获取当前层级和中心点",-1),x={style:{"text-align":"center"}},b={href:"http://mars2d.cn/api/Map.html#setView",target:"_blank",rel:"noopener noreferrer"},v=t("td",{style:{"text-align":"center"}},"定位地图至指定位置和层级",-1),M={style:{"text-align":"center"}},w={href:"http://mars2d.cn/api/Map.html#flyHome",target:"_blank",rel:"noopener noreferrer"},T=t("td",{style:{"text-align":"center"}},"飞行到默认视角， 一般为 config.json 中的 center 参数配置的中心点。",-1),V={style:{"text-align":"center"}},B={href:"http://mars2d.cn/api/Map.html#fitBounds",target:"_blank",rel:"noopener noreferrer"},j=t("td",{style:{"text-align":"center"}},"定位至 矩形区域 处",-1),N={style:{"text-align":"center"}},z={href:"http://mars2d.cn/api/Map.html#fitBounds",target:"_blank",rel:"noopener noreferrer"},E=t("td",{style:{"text-align":"center"}},"执行平滑的飞行动画，飞行定位至 矩形区域 处",-1),G={style:{"text-align":"center"}},q={href:"http://mars2d.cn/api/Map.html#flyTo",target:"_blank",rel:"noopener noreferrer"},C=t("td",{style:{"text-align":"center"}},"执行平滑的飞行动画，移动缩放地图范围至指定的地理中心和级别",-1),H={style:{"text-align":"center"}},I={href:"http://mars2d.cn/api/Map.html#flyToGraphic",target:"_blank",rel:"noopener noreferrer"},L=t("td",{style:{"text-align":"center"}},"飞行定位至 Graphic 矢量对象处",-1),P={style:{"text-align":"center"}},D={href:"http://mars2d.cn/api/Map.html#flyToPoint",target:"_blank",rel:"noopener noreferrer"},F=t("td",{style:{"text-align":"center"}},"视角中心定位至目标点",-1),O={style:{"text-align":"center"}},S={href:"http://mars2d.cn/api/Map.html#cancelFlight",target:"_blank",rel:"noopener noreferrer"},A=t("td",{style:{"text-align":"center"}},"停止飞行视角定位等操作",-1);function J(K,Q){const n=c("ExternalLinkIcon");return i(),d("div",null,[h,t("p",null,[e("我们在创建地图时，可以在"),t("a",m,[e("center 参数"),s(n)]),e("中来设置默认视角，如：")]),u,t("table",null,[g,t("tbody",null,[t("tr",null,[t("td",k,[t("a",f,[e("map.getView()"),s(n)])]),y]),t("tr",null,[t("td",x,[t("a",b,[e("map.setView(center, zoom, options)"),s(n)])]),v]),t("tr",null,[t("td",M,[t("a",w,[e("map.flyHome(options)"),s(n)])]),T]),t("tr",null,[t("td",V,[t("a",B,[e("map.fitBounds(bounds, options)"),s(n)])]),j]),t("tr",null,[t("td",N,[t("a",z,[e("map.flyToBounds(bounds, options)(opens new window)"),s(n)])]),E]),t("tr",null,[t("td",G,[t("a",q,[e("map.flyTo(latlng, zoom, options)"),s(n)])]),C]),t("tr",null,[t("td",H,[t("a",I,[e("map.flyToGraphic(graphic, options)"),s(n)])]),L]),t("tr",null,[t("td",P,[t("a",D,[e("map.flyToPoint(point, options)"),s(n)])]),F]),t("tr",null,[t("td",O,[t("a",S,[e("map.stop()"),s(n)])]),A])])])])}const W=p(_,[["render",J],["__file","camera.html.vue"]]);export{W as default};
