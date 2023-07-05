import{_ as c,a as d,b as i}from"./liulan-531c46a6.js";import{_ as p,r as o,o as h,c as m,a as t,d as s,w as r,b as e,e as l}from"./app-0bc0dfa9.js";const _={},g=l('<h3>整体架构及介绍</h3><img class="images" src="'+c+'" alt="来自依赖包的图片"><i class="text">Mars2D</i><img class="imagess" src="'+d+'" alt="来自依赖包的图片"><i class="text">30/6/2023</i><img class="imagess" src="'+i+'" alt="来自依赖包的图片"><i class="text">0</i><h2 id="_1-mars2d-的组成" tabindex="-1"><a class="header-anchor" href="#_1-mars2d-的组成" aria-hidden="true">#</a> 1. Mars2D 的组成</h2><p>平台主要由： SDK 类库、功能示例、项目模板 共 3 大部分组成。这些资料均免费开放，并可下载离线本地使用。</p>',9),u=t("thead",null,[t("tr",null,[t("th",{style:{"text-align":"center"}},"组成"),t("th",{style:{"text-align":"center"}},"获取方式"),t("th",{style:{"text-align":"center"}},"相关资料"),t("th",{style:{"text-align":"center"}},"备注")])],-1),k=t("td",{style:{"text-align":"center"}},"SDK 类库",-1),x={style:{"text-align":"center"}},y={style:{"text-align":"center"}},w={href:"http://mars2d.cn/apidoc.html#Map",target:"_blank",rel:"noopener noreferrer"},f=t("td",{style:{"text-align":"center"}},"免费无限制使用",-1),v=t("td",{style:{"text-align":"center"}},"功能示例",-1),b={style:{"text-align":"center"}},j={href:"http://marsgis.cn/example.html",target:"_blank",rel:"noopener noreferrer"},N={style:{"text-align":"center"}},D={href:"http://mars2d.cn/example.html",target:"_blank",rel:"noopener noreferrer"},S=t("td",{style:{"text-align":"center"}},"包含 400+功能示例及源码",-1),K=t("td",{style:{"text-align":"center"}},"项目模板",-1),M={style:{"text-align":"center"}},I=t("td",{style:{"text-align":"center"}},null,-1),L=t("td",{style:{"text-align":"center"}},"面向不同技术栈做的项目模板",-1),V=l('<blockquote><p>正常开发流程：免费下载 SDK、参考开源的“功能示例、项目模板”进行开发即可。</p></blockquote><h2 id="_2-sdk-类库介绍" tabindex="-1"><a class="header-anchor" href="#_2-sdk-类库介绍" aria-hidden="true">#</a> 2. SDK 类库介绍</h2><p>Mars2D 平台开发的 SDK 所有类及方法均以 mars2d 开头命名，<code>mars2d.*</code> 为平台框架的默认命名空间，所有用到的类及方法都是通过<code>mars2d.*</code>来调用。 开发时尽量不要使用 <code>mars2d</code> 来定义自己的变量或类名、方法名，避免框架无法正常使用。</p><h3 id="_3-1-sdk-主类库" tabindex="-1"><a class="header-anchor" href="#_3-1-sdk-主类库" aria-hidden="true">#</a> 3.1 SDK 主类库</h3>',4),C=t("thead",null,[t("tr",null,[t("th",{style:{"text-align":"center"}},"包名"),t("th",{style:{"text-align":"center"}},"当前版本"),t("th",{style:{"text-align":"center"}},"CDN 地址"),t("th",{style:{"text-align":"center"}},"下载量"),t("th",{style:{"text-align":"center"}},"备注")])],-1),q=t("td",{style:{"text-align":"center"}},"mars2d",-1),B=t("td",{style:{"text-align":"center"}},[t("a",{target:"_black",href:"https://www.npmjs.com/package/mars2d"},[t("img",{alt:"Npm version",src:"https://img.shields.io/npm/v/mars2d.svg?style=flat&logo=npm&label="})])],-1),E={style:{"text-align":"center"}},G={href:"https://www.jsdelivr.com/package/npm/mars2d",target:"_blank",rel:"noopener noreferrer"},P=t("td",{style:{"text-align":"center"}},[t("a",{target:"_black",href:"https://www.npmjs.com/package/mars2d"},[t("img",{alt:"Npm downloads",src:"https://img.shields.io/npm/dt/mars2d?style=flat&logo=npm"})])],-1),R=t("td",{style:{"text-align":"center"}},"Mars2D 主类库",-1),A=t("h3",{id:"_3-2-sdk-插件库-可选",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#_3-2-sdk-插件库-可选","aria-hidden":"true"},"#"),e(" 3.2 SDK 插件库（可选）")],-1),T=t("p",null,"部分插件没有合并在主库中，方便不同场景下按需使用",-1),U=t("thead",null,[t("tr",null,[t("th",{style:{"text-align":"center"}},"包名"),t("th",{style:{"text-align":"center"}},"当前版本"),t("th",{style:{"text-align":"center"}},"CDN 地址"),t("th",{style:{"text-align":"center"}},"下载量"),t("th",{style:{"text-align":"center"}},"备注")])],-1),z=t("td",{style:{"text-align":"center"}},"mars2d-echarts",-1),F=t("td",{style:{"text-align":"center"}},[t("a",{target:"_black",href:"https://www.npmjs.com/package/mars2d-echarts"},[t("img",{alt:"Npm version",src:"https://img.shields.io/npm/v/mars2d-echarts.svg?style=flat&logo=npm&label="})])],-1),H={style:{"text-align":"center"}},J={href:"https://www.jsdelivr.com/package/npm/mars2d-echarts",target:"_blank",rel:"noopener noreferrer"},O=t("td",{style:{"text-align":"center"}},[t("a",{target:"_black",href:"https://www.npmjs.com/package/mars2d-echarts"},[t("img",{alt:"Npm downloads",src:"https://img.shields.io/npm/dt/mars2d-echarts?style=flat&logo=npm"})])],-1),Q=t("td",{style:{"text-align":"center"}},"echarts 可视化插件",-1),W=t("td",{style:{"text-align":"center"}},"mars2d-mapv",-1),X=t("td",{style:{"text-align":"center"}},[t("a",{target:"_black",href:"https://www.npmjs.com/package/mars2d-mapv"},[t("img",{alt:"Npm version",src:"https://img.shields.io/npm/v/mars2d-mapv.svg?style=flat&logo=npm&label="})])],-1),Y={style:{"text-align":"center"}},Z={href:"https://www.jsdelivr.com/package/npm/mars2d-mapv",target:"_blank",rel:"noopener noreferrer"},$=t("td",{style:{"text-align":"center"}},[t("a",{target:"_black",href:"https://www.npmjs.com/package/mars2d-mapv"},[t("img",{alt:"Npm downloads",src:"https://img.shields.io/npm/dt/mars2d-mapv?style=flat&logo=npm"})])],-1),tt=t("td",{style:{"text-align":"center"}},"mapv 可视化插件",-1),et=t("td",{style:{"text-align":"center"}},"mars2d-esri",-1),st=t("td",{style:{"text-align":"center"}},[t("a",{target:"_black",href:"https://www.npmjs.com/package/mars2d-esri"},[t("img",{alt:"Npm version",src:"https://img.shields.io/npm/v/mars2d-esri.svg?style=flat&logo=npm&label="})])],-1),at={style:{"text-align":"center"}},nt={href:"https://www.jsdelivr.com/package/npm/mars2d-esri",target:"_blank",rel:"noopener noreferrer"},rt=t("td",{style:{"text-align":"center"}},[t("a",{target:"_black",href:"https://www.npmjs.com/package/mars2d-esri"},[t("img",{alt:"Npm downloads",src:"https://img.shields.io/npm/dt/mars2d-esri?style=flat&logo=npm"})])],-1),lt=t("td",{style:{"text-align":"center"}},"esri 服务插件",-1),ot=t("td",{style:{"text-align":"center"}},"mars2d-widget",-1),ct=t("td",{style:{"text-align":"center"}},[t("a",{target:"_black",href:"https://www.npmjs.com/package/mars2d-widget"},[t("img",{alt:"Npm version",src:"https://img.shields.io/npm/v/mars2d-widget.svg?style=flat&logo=npm&label="})])],-1),dt={style:{"text-align":"center"}},it={href:"https://www.jsdelivr.com/package/npm/mars2d-widget",target:"_blank",rel:"noopener noreferrer"},pt=t("td",{style:{"text-align":"center"}},[t("a",{target:"_black",href:"https://www.npmjs.com/package/mars2d-widget"},[t("img",{alt:"Npm downloads",src:"https://img.shields.io/npm/dt/mars2d-widget?style=flat&logo=npm"})])],-1),ht=t("td",{style:{"text-align":"center"}},"原生 js 下的 widget 模块化插件",-1),mt=l(`<h3 id="_3-3-sdk-的架构" tabindex="-1"><a class="header-anchor" href="#_3-3-sdk-的架构" aria-hidden="true">#</a> 3.3 SDK 的架构</h3><p>少数包放在二级包下，清单如下：</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>mars2d<span class="token punctuation">.</span>layer<span class="token punctuation">.</span><span class="token operator">*</span>      <span class="token comment">//图层,比如 mars2d.layer.GraphicLayer</span>
mars2d<span class="token punctuation">.</span>graphic<span class="token punctuation">.</span><span class="token operator">*</span>    <span class="token comment">//矢量对象,比如 mars2d.graphic.Marker</span>
mars2d<span class="token punctuation">.</span>control<span class="token punctuation">.</span><span class="token operator">*</span>    <span class="token comment">//控件</span>
mars2d<span class="token punctuation">.</span>query<span class="token punctuation">.</span><span class="token operator">*</span>      <span class="token comment">//服务查询</span>
mars2d<span class="token punctuation">.</span>thing<span class="token punctuation">.</span><span class="token operator">*</span>      <span class="token comment">//管理或分析</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>其他类都在 mars2d 一级包下面</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>mars2d<span class="token punctuation">.</span><span class="token operator">*</span>  <span class="token comment">//比如 mars2d.PointUtil</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="_3-功能示例" tabindex="-1"><a class="header-anchor" href="#_3-功能示例" aria-hidden="true">#</a> 3. 功能示例</h2>`,6),_t={href:"http://mars2d.cn/doc.html#project/example-vue",target:"_blank",rel:"noopener noreferrer"},gt=t("h2",{id:"_4-项目模板",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#_4-项目模板","aria-hidden":"true"},"#"),e(" 4. 项目模板")],-1),ut={href:"http://mars2d.cn/doc.html#project/jcxm-vue",target:"_blank",rel:"noopener noreferrer"};function kt(xt,yt){const n=o("RouterLink"),a=o("ExternalLinkIcon");return h(),m("div",null,[g,t("table",null,[u,t("tbody",null,[t("tr",null,[k,t("td",x,[s(n,{to:"/start/download.html"},{default:r(()=>[e("免费下载")]),_:1})]),t("td",y,[t("a",w,[e("API 文档"),s(a)])]),f]),t("tr",null,[v,t("td",b,[s(n,{to:"/mapIntel/open.html"},{default:r(()=>[e("Github 开源")]),_:1}),e("、"),t("a",j,[e("在线体验"),s(a)])]),t("td",N,[t("a",D,[e("功能清单(页面左下侧)"),s(a)])]),S]),t("tr",null,[K,t("td",M,[s(n,{to:"/mapIntel/open.html"},{default:r(()=>[e("Github 开源")]),_:1})]),I,L])])]),V,t("table",null,[C,t("tbody",null,[t("tr",null,[q,B,t("td",E,[t("a",G,[e("cdn"),s(a)])]),P,R])])]),A,T,t("table",null,[U,t("tbody",null,[t("tr",null,[z,F,t("td",H,[t("a",J,[e("cdn"),s(a)])]),O,Q]),t("tr",null,[W,X,t("td",Y,[t("a",Z,[e("cdn"),s(a)])]),$,tt]),t("tr",null,[et,st,t("td",at,[t("a",nt,[e("cdn"),s(a)])]),rt,lt]),t("tr",null,[ot,ct,t("td",dt,[t("a",it,[e("cdn"),s(a)])]),pt,ht])])]),mt,t("p",null,[e("见"),t("a",_t,[e("下载运行功能示例"),s(a)]),e("章节介绍。")]),gt,t("p",null,[e("见"),t("a",ut,[e("基础项目 Vue 版介绍"),s(a)]),e("章节介绍。")])])}const vt=p(_,[["render",kt],["__file","architecture.html.vue"]]);export{vt as default};