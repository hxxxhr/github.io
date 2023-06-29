import{_ as t,r as p,o,c as i,a as s,b as a,d as c,e as n}from"./app-a7594ec8.js";const r={},l=n(`<h3> 在已有项目中集成Mars2D </h3><p>在阅读本节前，建议您已阅读：</p><ul><li><a href="">获取 Mars2D SDK 类库</a> ：了解 sdk 的不同下载及安装方式</li><li><a href="">开源仓库清单</a>：下载一些模版代码阅读或参考下<br> 再尝试将 mars2d 集成到自己的项目中。</li></ul><h3> 1. 引入Mars2D类库 </h3><p>可以根据您自己的技术栈使用情况<a href="">获取 Mars2DSDK 类库</a> 进行下载或引入 Mars2D 库到自己的项目中去使用。</p><h2 id="方式-1-head-静态资源方式引入" tabindex="-1"><a class="header-anchor" href="#方式-1-head-静态资源方式引入" aria-hidden="true">#</a> 方式 1：head 静态资源方式引入</h2><p>在 html 的 head 标签中引入 Cesium 官方包和 Mars2D 包相关资源，此方法比较简单，不会出现各类集成问题，引入资源后在代码即可通过<code>window.mars2d</code>来使用相关 mars2d 类及方法。</p><h2 id="方式-2-import-方式导入" tabindex="-1"><a class="header-anchor" href="#方式-2-import-方式导入" aria-hidden="true">#</a> 方式 2： import 方式导入</h2><p>使用 Node 环境下的现代 web 前端技术栈时，可以使用 npm 等来安装 mars2d 包并 import 导入后来使用。</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">//引入npm版本时</span>
<span class="token keyword">import</span> <span class="token string">&quot;mars2d/dist/mars2d.css&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token operator">*</span> <span class="token keyword">as</span> mars2d <span class="token keyword">from</span> <span class="token string">&quot;mars2d&quot;</span><span class="token punctuation">;</span>

<span class="token comment">//引入下载的本地版本时</span>
<span class="token comment">// import &#39;./lib/mars2d/mars2d.css&#39;</span>
<span class="token comment">// import * as mars2d from &#39;./lib/mars2d/mars2d.js&#39;</span>

<span class="token comment">//导入mars2d插件（按需使用，需要先npm install）</span>
<span class="token keyword">import</span> <span class="token string">&quot;mars2d-esri&quot;</span><span class="token punctuation">;</span>

<span class="token comment">//可以绑定下vue原型链，可以全局使用</span>
<span class="token class-name">Vue</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span>mars2d <span class="token operator">=</span> mars2d<span class="token punctuation">;</span>

<span class="token comment">//在具体使用的vue等文件中</span>
<span class="token comment">//直接使用 this.mars2d 进行相关调用。</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-新建-div-容器" tabindex="-1"><a class="header-anchor" href="#_2-新建-div-容器" aria-hidden="true">#</a> 2. 新建 div 容器</h3><p>在需要呈现地图的页面或相关组件中，加上 div 容器，并注意设置 div 的 css 高宽样式。</p><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>mars2dContainer<span class="token punctuation">&quot;</span></span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>mars2d-container<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="_3-使用-mars2d-map-方法创建地图" tabindex="-1"><a class="header-anchor" href="#_3-使用-mars2d-map-方法创建地图" aria-hidden="true">#</a> 3. 使用 mars2d.Map 方法创建地图</h2>`,14),d={href:"http://mars2d.cn/api/Map.html",target:"_blank",rel:"noopener noreferrer"},u=n(`<div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">var</span> mapOptions <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span> <span class="token comment">//支持的参数请看API文档：http://mars2d.cn/api/Map.html</span>
<span class="token keyword">var</span> map <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">mars2d<span class="token punctuation">.</span>Map</span><span class="token punctuation">(</span><span class="token string">&quot;mars2dContainer&quot;</span><span class="token punctuation">,</span> mapOptions<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div>`,1);function m(k,v){const e=p("ExternalLinkIcon");return o(),i("div",null,[l,s("p",null,[a("使用"),s("a",d,[a("Map 地图类"),c(e)]),a("类创建二维地图场景。")]),u])}const b=t(r,[["render",m],["__file","import.html.vue"]]);export{b as default};
