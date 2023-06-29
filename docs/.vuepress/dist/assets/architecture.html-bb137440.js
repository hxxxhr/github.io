import{_ as r,r as l,o,c,a as t,b as e,d as s,e as a}from"./app-a7594ec8.js";const d={},i=t("h3",null,"整体架构及介绍",-1),h=t("h2",{id:"_1-mars2d-的组成",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#_1-mars2d-的组成","aria-hidden":"true"},"#"),e(" 1. Mars2D 的组成")],-1),_=t("p",null,"平台主要由： SDK 类库、功能示例、项目模板 共 3 大部分组成。这些资料均免费开放，并可下载离线本地使用。",-1),p=t("thead",null,[t("tr",null,[t("th",{style:{"text-align":"center"}},"组成"),t("th",{style:{"text-align":"center"}},"获取方式"),t("th",{style:{"text-align":"center"}},"相关资料"),t("th",{style:{"text-align":"center"}},"备注")])],-1),u=t("td",{style:{"text-align":"center"}},"SDK 类库",-1),g=t("td",{style:{"text-align":"center"}},[t("a",{href:""},"免费下载")],-1),m={style:{"text-align":"center"}},x={href:"http://mars2d.cn/apidoc.html#Map",target:"_blank",rel:"noopener noreferrer"},y=t("td",{style:{"text-align":"center"}},"免费无限制使用",-1),k=t("td",{style:{"text-align":"center"}},"功能示例",-1),b={style:{"text-align":"center"}},f=t("a",{href:""},"Github 开源",-1),v={href:"http://marsgis.cn/example.html",target:"_blank",rel:"noopener noreferrer"},w={style:{"text-align":"center"}},D={href:"http://mars2d.cn/example.html",target:"_blank",rel:"noopener noreferrer"},j=t("td",{style:{"text-align":"center"}},"包含 400+功能示例及源码",-1),S=t("tr",null,[t("td",{style:{"text-align":"center"}},"项目模板"),t("td",{style:{"text-align":"center"}},[t("a",{href:""},"Github 开源")]),t("td",{style:{"text-align":"center"}}),t("td",{style:{"text-align":"center"}},"面向不同技术栈做的项目模板")],-1),K=a('<blockquote><p>正常开发流程：免费下载 SDK、参考开源的“功能示例、项目模板”进行开发即可。</p></blockquote><h2 id="_2-sdk-类库介绍" tabindex="-1"><a class="header-anchor" href="#_2-sdk-类库介绍" aria-hidden="true">#</a> 2. SDK 类库介绍</h2><p>Mars2D 平台开发的 SDK 所有类及方法均以 mars2d 开头命名，<code>mars2d.*</code> 为平台框架的默认命名空间，所有用到的类及方法都是通过<code>mars2d.*</code>来调用。 开发时尽量不要使用 <code>mars2d</code> 来定义自己的变量或类名、方法名，避免框架无法正常使用。</p><h3 id="_3-1-sdk主类库" tabindex="-1"><a class="header-anchor" href="#_3-1-sdk主类库" aria-hidden="true">#</a> 3.1 SDK主类库</h3>',4),N=t("thead",null,[t("tr",null,[t("th",{style:{"text-align":"center"}},"包名"),t("th",{style:{"text-align":"center"}},"当前版本"),t("th",{style:{"text-align":"center"}},"CDN地址"),t("th",{style:{"text-align":"center"}},"下载量"),t("th",{style:{"text-align":"center"}},"备注")])],-1),M=t("td",{style:{"text-align":"center"}},"mars2d",-1),V=t("td",{style:{"text-align":"center"}},null,-1),q={style:{"text-align":"center"}},B={href:"https://www.jsdelivr.com/package/npm/mars2d",target:"_blank",rel:"noopener noreferrer"},C=t("td",{style:{"text-align":"center"}},null,-1),E=t("td",{style:{"text-align":"center"}},"Mars2D主类库",-1),G=t("h3",{id:"_3-2-sdk插件库-可选",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#_3-2-sdk插件库-可选","aria-hidden":"true"},"#"),e(" 3.2 SDK插件库（可选）")],-1),I=t("p",null,"部分插件没有合并在主库中，方便不同场景下按需使用",-1),L=t("thead",null,[t("tr",null,[t("th",{style:{"text-align":"center"}},"包名"),t("th",{style:{"text-align":"center"}},"当前版本"),t("th",{style:{"text-align":"center"}},"CDN地址"),t("th",{style:{"text-align":"center"}},"下载量"),t("th",{style:{"text-align":"center"}},"备注")])],-1),P=t("td",{style:{"text-align":"center"}},"mars2d-echarts",-1),A=t("td",{style:{"text-align":"center"}},null,-1),T={style:{"text-align":"center"}},U={href:"https://www.jsdelivr.com/package/npm/mars2d-echarts",target:"_blank",rel:"noopener noreferrer"},z=t("td",{style:{"text-align":"center"}},null,-1),F=t("td",{style:{"text-align":"center"}},"echarts可视化插件",-1),H=t("td",{style:{"text-align":"center"}},"mars2d-mapv",-1),J=t("td",{style:{"text-align":"center"}},null,-1),O={style:{"text-align":"center"}},Q={href:"https://www.jsdelivr.com/package/npm/mars2d-mapv",target:"_blank",rel:"noopener noreferrer"},R=t("td",{style:{"text-align":"center"}},null,-1),W=t("td",{style:{"text-align":"center"}},"mapv可视化插件",-1),X=t("td",{style:{"text-align":"center"}},"mars2d-esri",-1),Y=t("td",{style:{"text-align":"center"}},null,-1),Z={style:{"text-align":"center"}},$={href:"https://www.jsdelivr.com/package/npm/mars2d-esri",target:"_blank",rel:"noopener noreferrer"},tt=t("td",{style:{"text-align":"center"}},null,-1),et=t("td",{style:{"text-align":"center"}},"esri服务插件",-1),nt=t("td",{style:{"text-align":"center"}},"mars2d-widget",-1),st=t("td",{style:{"text-align":"center"}},null,-1),at={style:{"text-align":"center"}},rt={href:"https://www.jsdelivr.com/package/npm/mars2d-widget",target:"_blank",rel:"noopener noreferrer"},lt=t("td",{style:{"text-align":"center"}},null,-1),ot=t("td",{style:{"text-align":"center"}},"原生js下的widget模块化插件",-1),ct=a(`<h3 id="_3-3-sdk的架构" tabindex="-1"><a class="header-anchor" href="#_3-3-sdk的架构" aria-hidden="true">#</a> 3.3 SDK的架构</h3><p>少数包放在二级包下，清单如下：</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>mars2d<span class="token punctuation">.</span>layer<span class="token punctuation">.</span><span class="token operator">*</span>      <span class="token comment">//图层,比如 mars2d.layer.GraphicLayer</span>
mars2d<span class="token punctuation">.</span>graphic<span class="token punctuation">.</span><span class="token operator">*</span>    <span class="token comment">//矢量对象,比如 mars2d.graphic.Marker</span>
mars2d<span class="token punctuation">.</span>control<span class="token punctuation">.</span><span class="token operator">*</span>    <span class="token comment">//控件 </span>
mars2d<span class="token punctuation">.</span>query<span class="token punctuation">.</span><span class="token operator">*</span>      <span class="token comment">//服务查询</span>
mars2d<span class="token punctuation">.</span>thing<span class="token punctuation">.</span><span class="token operator">*</span>      <span class="token comment">//管理或分析</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>其他类都在mars2d一级包下面</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>mars2d<span class="token punctuation">.</span><span class="token operator">*</span>  <span class="token comment">//比如 mars2d.PointUtil</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="_3-功能示例" tabindex="-1"><a class="header-anchor" href="#_3-功能示例" aria-hidden="true">#</a> 3. 功能示例</h2><p>见<a href="">下载运行功能示例</a>章节介绍。</p><h2 id="_4-项目模板" tabindex="-1"><a class="header-anchor" href="#_4-项目模板" aria-hidden="true">#</a> 4. 项目模板</h2><p>见<a href="">基础项目Vue版介绍</a>章节介绍。</p>`,9);function dt(it,ht){const n=l("ExternalLinkIcon");return o(),c("div",null,[i,h,_,t("table",null,[p,t("tbody",null,[t("tr",null,[u,g,t("td",m,[t("a",x,[e("API 文档"),s(n)])]),y]),t("tr",null,[k,t("td",b,[f,e("、"),t("a",v,[e("在线体验"),s(n)])]),t("td",w,[t("a",D,[e("功能清单(页面左下侧)"),s(n)])]),j]),S])]),K,t("table",null,[N,t("tbody",null,[t("tr",null,[M,V,t("td",q,[t("a",B,[e("cdn"),s(n)])]),C,E])])]),G,I,t("table",null,[L,t("tbody",null,[t("tr",null,[P,A,t("td",T,[t("a",U,[e("cdn"),s(n)])]),z,F]),t("tr",null,[H,J,t("td",O,[t("a",Q,[e("cdn"),s(n)])]),R,W]),t("tr",null,[X,Y,t("td",Z,[t("a",$,[e("cdn"),s(n)])]),tt,et]),t("tr",null,[nt,st,t("td",at,[t("a",rt,[e("cdn"),s(n)])]),lt,ot])])]),ct])}const pt=r(d,[["render",dt],["__file","architecture.html.vue"]]);export{pt as default};