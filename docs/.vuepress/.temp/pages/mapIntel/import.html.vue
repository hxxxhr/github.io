<template><div><h3 id="在已有项目中集成mars2d" tabindex="-1"><a class="header-anchor" href="#在已有项目中集成mars2d" aria-hidden="true">#</a> 在已有项目中集成Mars2D</h3>
<p>在阅读本节前，建议您已阅读：</p>
<ul>
<li><a href="">获取 Mars2D SDK类库</a> ：了解sdk的不同下载及安装方式</li>
<li><a href="">开源仓库清单</a>：下载一些模版代码阅读或参考下
再尝试将mars2d集成到自己的项目中。</li>
</ul>
<h3 id="_1-引入mars2d类库" tabindex="-1"><a class="header-anchor" href="#_1-引入mars2d类库" aria-hidden="true">#</a> 1. 引入Mars2D类库</h3>
<p>可以根据您自己的技术栈使用情况<a href="">获取 Mars2D SDK类库</a> 进行下载或引入Mars2D库到自己的项目中去使用。</p>
<h2 id="方式1-head静态资源方式引入" tabindex="-1"><a class="header-anchor" href="#方式1-head静态资源方式引入" aria-hidden="true">#</a> 方式1：head静态资源方式引入</h2>
<p>在html的head标签中引入Cesium官方包和Mars2D包相关资源，此方法比较简单，不会出现各类集成问题，引入资源后在代码即可通过<code v-pre>window.mars2d</code>来使用相关mars2d类及方法。</p>
<h2 id="方式2-import方式导入" tabindex="-1"><a class="header-anchor" href="#方式2-import方式导入" aria-hidden="true">#</a> 方式2： import方式导入</h2>
<p>使用Node环境下的现代web前端技术栈时，可以使用npm等来安装mars2d包并import导入后来使用。</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token comment">//引入npm版本时</span>
<span class="token keyword">import</span> <span class="token string">'mars2d/dist/mars2d.css'</span>
<span class="token keyword">import</span> <span class="token operator">*</span> <span class="token keyword">as</span> mars2d <span class="token keyword">from</span> <span class="token string">'mars2d'</span>
 
<span class="token comment">//引入下载的本地版本时</span>
<span class="token comment">// import './lib/mars2d/mars2d.css'</span>
<span class="token comment">// import * as mars2d from './lib/mars2d/mars2d.js' </span>
 
<span class="token comment">//导入mars2d插件（按需使用，需要先npm install）</span>
<span class="token keyword">import</span> <span class="token string">'mars2d-esri'</span>

<span class="token comment">//可以绑定下vue原型链，可以全局使用</span>
<span class="token class-name">Vue</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span>mars2d <span class="token operator">=</span> mars2d<span class="token punctuation">;</span>

<span class="token comment">//在具体使用的vue等文件中</span>
<span class="token comment">//直接使用 this.mars2d 进行相关调用。</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-新建div容器" tabindex="-1"><a class="header-anchor" href="#_2-新建div容器" aria-hidden="true">#</a> 2. 新建div容器</h3>
<p>在需要呈现地图的页面或相关组件中，加上div容器，并注意设置div的css高宽样式。</p>
<div class="language-html line-numbers-mode" data-ext="html"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>mars2dContainer<span class="token punctuation">"</span></span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>mars2d-container<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span> 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="_3-使用mars2d-map方法创建地图" tabindex="-1"><a class="header-anchor" href="#_3-使用mars2d-map方法创建地图" aria-hidden="true">#</a> 3. 使用mars2d.Map方法创建地图</h2>
<p>使用<a href="http://mars2d.cn/api/Map.html" target="_blank" rel="noopener noreferrer">Map地图类<ExternalLinkIcon/></a>类创建二维地图场景。</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code> <span class="token keyword">var</span> mapOptions <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span> <span class="token comment">//支持的参数请看API文档：http://mars2d.cn/api/Map.html</span>
 <span class="token keyword">var</span> map <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">mars2d<span class="token punctuation">.</span>Map</span><span class="token punctuation">(</span><span class="token string">'mars2dContainer'</span><span class="token punctuation">,</span> mapOptions<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div></div></template>


