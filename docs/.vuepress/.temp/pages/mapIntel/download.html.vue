<template><div><h3 id="获取-mars2d-sdk类库" tabindex="-1"><a class="header-anchor" href="#获取-mars2d-sdk类库" aria-hidden="true">#</a> 获取 Mars2D SDK类库</h3>
<p>Mars2D 提供了多种获取SDK类库的方式，你可以根据项目的实际情况和技术栈选择以下任意一种方式安装。</p>
<ul>
<li>从 npm 安装</li>
<li>从 CDN 引入</li>
<li>从 Mars2D官网 下载
接下来我们将分别介绍这些安装方式，以及下载后的目录结构。</li>
</ul>
<h2 id="从-npm-获取" tabindex="-1"><a class="header-anchor" href="#从-npm-获取" aria-hidden="true">#</a> 从 npm 获取</h2>
<p>使用Node环境下的现代web前端技术栈时，可以使用npm或cnpm或yarn等方式来安装mars2d包</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code>//安装mars2d主库
<span class="token function">npm</span> <span class="token function">install</span> mars2d <span class="token parameter variable">--save</span>   

//安装mars2d插件（按需安装）
<span class="token function">npm</span> <span class="token function">install</span> mars2d-esri <span class="token parameter variable">--save</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>安装后在相关使用文件中引入使用即可</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token string">'mars2d/dist/mars2d.css'</span>
<span class="token keyword">import</span> <span class="token operator">*</span> <span class="token keyword">as</span> mars2d <span class="token keyword">from</span> <span class="token string">'mars2d'</span>
 
<span class="token comment">//导入mars2d插件（按需使用，需要先npm install）</span>
<span class="token keyword">import</span> <span class="token string">'mars2d-esri'</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>详见在项目中引入<a href="">在项目中引入 Mars2D</a>， 您也可以参考<a href="https://github.com/marsgis/mars2d-vue-template" target="_blank" rel="noopener noreferrer">vue最简项目模板<ExternalLinkIcon/></a></p>
<h2 id="_2-从-cdn-获取" tabindex="-1"><a class="header-anchor" href="#_2-从-cdn-获取" aria-hidden="true">#</a> 2. 从 CDN 获取</h2>
<p>在html的head标签中引入Mars2D包相关CDN资源.</p>
<h2 id="_2-1-可以选用-unpkg-com-opens-new-window-的cdn服务" tabindex="-1"><a class="header-anchor" href="#_2-1-可以选用-unpkg-com-opens-new-window-的cdn服务" aria-hidden="true">#</a> 2.1 可以选用 unpkg.com (opens new window)的CDN服务</h2>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token operator">&lt;</span><span class="token operator">!</span><span class="token operator">--</span>引入leaflet基础lib<span class="token operator">--</span><span class="token operator">></span>
<span class="token operator">&lt;</span>link rel<span class="token operator">=</span><span class="token string">"stylesheet"</span> href<span class="token operator">=</span><span class="token string">"https://unpkg.com/leaflet/dist/leaflet.css"</span> <span class="token operator">/</span><span class="token operator">></span>
<span class="token operator">&lt;</span>script src<span class="token operator">=</span><span class="token string">"https://unpkg.com/leaflet/dist/leaflet.js"</span> crossorigin<span class="token operator">=</span><span class="token string">""</span><span class="token operator">></span><span class="token operator">&lt;</span><span class="token operator">/</span>script<span class="token operator">></span>

<span class="token operator">&lt;</span><span class="token operator">!</span><span class="token operator">--</span>引入mars2d库lib<span class="token operator">--</span><span class="token operator">></span>
<span class="token operator">&lt;</span>link href<span class="token operator">=</span><span class="token string">"https://unpkg.com/mars2d/dist/mars2d.css"</span> rel<span class="token operator">=</span><span class="token string">"stylesheet"</span> type<span class="token operator">=</span><span class="token string">"text/css"</span> <span class="token operator">/</span><span class="token operator">></span>
<span class="token operator">&lt;</span>script src<span class="token operator">=</span><span class="token string">"https://unpkg.com/mars2d/dist/mars2d.js"</span> type<span class="token operator">=</span><span class="token string">"text/javascript"</span> <span class="token operator">></span><span class="token operator">&lt;</span><span class="token operator">/</span>script<span class="token operator">></span>  


<span class="token operator">&lt;</span><span class="token operator">!</span><span class="token operator">--</span>引入mars2d库插件lib（按需引入）<span class="token operator">--</span><span class="token operator">></span>  
<span class="token operator">&lt;</span>script src<span class="token operator">=</span><span class="token string">"https://unpkg.com/mars2d-esri/dist/mars2d-esri.js"</span> type<span class="token operator">=</span><span class="token string">"text/javascript"</span> <span class="token operator">></span><span class="token operator">&lt;</span><span class="token operator">/</span>script<span class="token operator">></span> 

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_2-2-可以选用jsdelivr的cdn服务" tabindex="-1"><a class="header-anchor" href="#_2-2-可以选用jsdelivr的cdn服务" aria-hidden="true">#</a> 2.2 可以选用<a href="https://www.jsdelivr.com/package/npm/mars2d" target="_blank" rel="noopener noreferrer">jsDelivr<ExternalLinkIcon/></a>的CDN服务</h2>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token operator">&lt;</span><span class="token operator">!</span><span class="token operator">--</span>引入leaflet基础lib<span class="token operator">--</span><span class="token operator">></span>
<span class="token operator">&lt;</span>link rel<span class="token operator">=</span><span class="token string">"stylesheet"</span> href<span class="token operator">=</span><span class="token string">"https://unpkg.com/leaflet/dist/leaflet.css"</span> <span class="token operator">/</span><span class="token operator">></span>
<span class="token operator">&lt;</span>script src<span class="token operator">=</span><span class="token string">"https://unpkg.com/leaflet/dist/leaflet.js"</span> crossorigin<span class="token operator">=</span><span class="token string">""</span><span class="token operator">></span><span class="token operator">&lt;</span><span class="token operator">/</span>script<span class="token operator">></span>

<span class="token operator">&lt;</span><span class="token operator">!</span><span class="token operator">--</span>引入mars2d库lib<span class="token operator">--</span><span class="token operator">></span>
<span class="token operator">&lt;</span>link href<span class="token operator">=</span><span class="token string">"https://cdn.jsdelivr.net/npm/mars2d/dist/mars2d.css"</span> rel<span class="token operator">=</span><span class="token string">"stylesheet"</span> type<span class="token operator">=</span><span class="token string">"text/css"</span> <span class="token operator">/</span><span class="token operator">></span>
<span class="token operator">&lt;</span>script src<span class="token operator">=</span><span class="token string">"https://cdn.jsdelivr.net/npm/mars2d/dist/mars2d.js"</span> type<span class="token operator">=</span><span class="token string">"text/javascript"</span><span class="token operator">></span><span class="token operator">&lt;</span><span class="token operator">/</span>script<span class="token operator">></span>

<span class="token operator">&lt;</span><span class="token operator">!</span><span class="token operator">--</span>引入mars2d库插件lib（按需引入）<span class="token operator">--</span><span class="token operator">></span>
<span class="token operator">&lt;</span><span class="token operator">!</span><span class="token operator">--</span> <span class="token operator">&lt;</span>script src<span class="token operator">=</span><span class="token string">"https://cdn.jsdelivr.net/npm/mars2d-esri/dist/mars2d-esri.js"</span> type<span class="token operator">=</span><span class="token string">"text/javascript"</span> <span class="token operator">></span><span class="token operator">&lt;</span><span class="token operator">/</span>script<span class="token operator">></span>  <span class="token operator">--</span><span class="token operator">></span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_2-3-可以选用mars2d官网的cdn服务" tabindex="-1"><a class="header-anchor" href="#_2-3-可以选用mars2d官网的cdn服务" aria-hidden="true">#</a> 2.3 可以选用Mars2D官网的CDN服务</h2>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token operator">&lt;</span><span class="token operator">!</span><span class="token operator">--</span>引入leaflet基础lib<span class="token operator">--</span><span class="token operator">></span>
<span class="token operator">&lt;</span>link rel<span class="token operator">=</span><span class="token string">"stylesheet"</span> href<span class="token operator">=</span><span class="token string">"http://mars2d.cn/lib/leaflet/leaflet.css"</span> <span class="token operator">/</span><span class="token operator">></span>
<span class="token operator">&lt;</span>script src<span class="token operator">=</span><span class="token string">"http://mars2d.cn/lib/leaflet/leaflet.js"</span> crossorigin<span class="token operator">=</span><span class="token string">""</span><span class="token operator">></span><span class="token operator">&lt;</span><span class="token operator">/</span>script<span class="token operator">></span>

<span class="token operator">&lt;</span><span class="token operator">!</span><span class="token operator">--</span>引入mars2d库lib<span class="token operator">--</span><span class="token operator">></span>
<span class="token operator">&lt;</span>link href<span class="token operator">=</span><span class="token string">"http://mars2d.cn/lib/mars2d/mars2d.css"</span> rel<span class="token operator">=</span><span class="token string">"stylesheet"</span> type<span class="token operator">=</span><span class="token string">"text/css"</span> <span class="token operator">/</span><span class="token operator">></span>
<span class="token operator">&lt;</span>script src<span class="token operator">=</span><span class="token string">"http://mars2d.cn/lib/mars2d/mars2d.js"</span> type<span class="token operator">=</span><span class="token string">"text/javascript"</span> <span class="token operator">></span><span class="token operator">&lt;</span><span class="token operator">/</span>script<span class="token operator">></span>  

<span class="token operator">&lt;</span><span class="token operator">!</span><span class="token operator">--</span>引入mars2d库插件lib（按需引入）<span class="token operator">--</span><span class="token operator">></span>  
<span class="token operator">&lt;</span>script src<span class="token operator">=</span><span class="token string">"http://mars2d.cn/lib/mars2d/plugins/esri/mars2d-esri.js"</span> type<span class="token operator">=</span><span class="token string">"text/javascript"</span> <span class="token operator">></span><span class="token operator">&lt;</span><span class="token operator">/</span>script<span class="token operator">></span>  
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>引入后在相关使用文件中直接使用<code v-pre>window.mars2d</code>对象即可,传统技术栈可以参考<a href="https://github.com/marsgis/mars2d-es5-template" target="_blank" rel="noopener noreferrer">原生JS最简项目模板<ExternalLinkIcon/></a>。</p>
<h2 id="_3-从-mars2d官网-下载获取" tabindex="-1"><a class="header-anchor" href="#_3-从-mars2d官网-下载获取" aria-hidden="true">#</a> 3. 从 Mars2D官网 下载获取</h2>
<p>可以在<a href="http://mars2d.cn/download.html" target="_blank" rel="noopener noreferrer">Mars2D官网<ExternalLinkIcon/></a>下载 “mars2d-sdk.rar”离线包 后在本地项目中引入相对路径资源来使用。</p>
<p>将下载的SDK放在项目目录内，使用方式与上面2种基本相同，区别在于url路径是本地项目的相对路径。</p>
<blockquote>
<p>如果您有购买Mars2D源码版，在收到 <code v-pre>mars2d-sdk源码版.rar</code> 交付文件后，是相同的使用方式。</p>
</blockquote>
<h2 id="_3-1-类似cdn的head静态资源方式引入" tabindex="-1"><a class="header-anchor" href="#_3-1-类似cdn的head静态资源方式引入" aria-hidden="true">#</a> 3.1 类似CDN的head静态资源方式引入</h2>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token operator">&lt;</span><span class="token operator">!</span><span class="token operator">--</span>引入leaflet基础lib<span class="token operator">--</span><span class="token operator">></span>
<span class="token operator">&lt;</span>link rel<span class="token operator">=</span><span class="token string">"stylesheet"</span> href<span class="token operator">=</span><span class="token string">"./lib/leaflet/leaflet.css"</span> <span class="token operator">/</span><span class="token operator">></span>
<span class="token operator">&lt;</span>script src<span class="token operator">=</span><span class="token string">"./lib/leaflet/leaflet.js"</span> <span class="token operator">></span><span class="token operator">&lt;</span><span class="token operator">/</span>script<span class="token operator">></span>

<span class="token operator">&lt;</span><span class="token operator">!</span><span class="token operator">--</span>引入mars2d库lib<span class="token operator">--</span><span class="token operator">></span>
<span class="token operator">&lt;</span>link href<span class="token operator">=</span><span class="token string">"./lib/mars2d/dist/mars2d.css"</span> rel<span class="token operator">=</span><span class="token string">"stylesheet"</span> type<span class="token operator">=</span><span class="token string">"text/css"</span> <span class="token operator">/</span><span class="token operator">></span>
<span class="token operator">&lt;</span>script src<span class="token operator">=</span><span class="token string">"./lib/mars2d/dist/mars2d.js"</span> type<span class="token operator">=</span><span class="token string">"text/javascript"</span> <span class="token operator">></span><span class="token operator">&lt;</span><span class="token operator">/</span>script<span class="token operator">></span>  

<span class="token operator">&lt;</span><span class="token operator">!</span><span class="token operator">--</span>引入mars2d库插件lib（按需引入）<span class="token operator">--</span><span class="token operator">></span>  
<span class="token operator">&lt;</span>script src<span class="token operator">=</span><span class="token string">"./lib/mars2d/plugins/esri/mars2d-esri.js"</span> type<span class="token operator">=</span><span class="token string">"text/javascript"</span> <span class="token operator">></span><span class="token operator">&lt;</span><span class="token operator">/</span>script<span class="token operator">></span> 

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_3-2-类似npm的import方式导入" tabindex="-1"><a class="header-anchor" href="#_3-2-类似npm的import方式导入" aria-hidden="true">#</a> 3.2 类似npm的import方式导入</h2>
<p>方式 1：需改动源码
将离线包放在任意目录下，按相对路径修改mars2d的引入处，如下：</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token string">'./lib/mars2d/mars2d.css'</span>
<span class="token keyword">import</span> <span class="token operator">*</span> <span class="token keyword">as</span> mars2d <span class="token keyword">from</span> <span class="token string">'./lib/mars2d/mars2d.js'</span> 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>方式 2：无需改动源码，修改配置(建议)</p>
<ul>
<li>
<p>配置后，无需改动源码，在项目代码中使用时与使用npm包是一样的方式，如 <code v-pre>import * as mars2d from &quot;mars2d&quot;</code>;</p>
</li>
<li>
<p>将 npm 安装后的node_modules/mars2d/下的所有文件拷贝一份放在<code v-pre>packages/mars2d/</code>目录。</p>
</li>
<li>
<p>将<code v-pre>mars2d-sdk.rar</code>离线包内文件 覆盖至<code v-pre>packages/mars2d/dist/</code>目录下。</p>
</li>
<li>
<p>修改<code v-pre>package.json</code>中mars2d包配置为：<code v-pre>&quot;mars2d&quot;: &quot;file:packages/mars2d&quot;</code>,</p>
</li>
<li>
<p>vite时需要排除</p>
</li>
</ul>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token literal-property property">build</span><span class="token operator">:</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">commonjsOptions</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token comment">//默认内部只处理了node_modules，需要将"packages/"也标识处理</span>
    <span class="token literal-property property">include</span><span class="token operator">:</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">node_modules|packages</span><span class="token regex-delimiter">/</span></span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token comment">//已忽略其他配置</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="@source/public/image/start-download-import.jpg" alt="配置图"></p>
<ul>
<li>如果引入本地版本<code v-pre>build</code>编译很慢时，可以按下面配置修改<code v-pre>babel.config.js</code></li>
</ul>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code>module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token comment">//已忽略其他配置</span>
  <span class="token literal-property property">ignore</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token string">"packages/mars2d/dist/mars2d.js"</span><span class="token punctuation">,</span> <span class="token comment">//改成自己的本地地址</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></template>


