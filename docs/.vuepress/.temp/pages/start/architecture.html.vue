<template><div><h3>整体架构及介绍</h3>
<img class='images' src="@source/public/icon/yonghu.svg" alt="来自依赖包的图片">
<i class='text'>Mars2D</i>
<img class='imagess' src="@source/public/icon/shijian.svg" alt="来自依赖包的图片">
<i class='text'>30/6/2023</i>
<img class='imagess' src="@source/public/icon/liulan.svg" alt="来自依赖包的图片">
<i class='text'>0</i>
<h2 id="_1-mars2d-的组成" tabindex="-1"><a class="header-anchor" href="#_1-mars2d-的组成" aria-hidden="true">#</a> 1. Mars2D 的组成</h2>
<p>平台主要由： SDK 类库、功能示例、项目模板 共 3 大部分组成。这些资料均免费开放，并可下载离线本地使用。</p>
<table>
<thead>
<tr>
<th style="text-align:center">组成</th>
<th style="text-align:center">获取方式</th>
<th style="text-align:center">相关资料</th>
<th style="text-align:center">备注</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:center">SDK 类库</td>
<td style="text-align:center"><RouterLink to="/start/download.html">免费下载</RouterLink></td>
<td style="text-align:center"><a href="http://mars2d.cn/apidoc.html#Map" target="_blank" rel="noopener noreferrer">API 文档<ExternalLinkIcon/></a></td>
<td style="text-align:center">免费无限制使用</td>
</tr>
<tr>
<td style="text-align:center">功能示例</td>
<td style="text-align:center"><RouterLink to="/mapIntel/open.html">Github 开源</RouterLink>、<a href="http://marsgis.cn/example.html" target="_blank" rel="noopener noreferrer">在线体验<ExternalLinkIcon/></a></td>
<td style="text-align:center"><a href="http://mars2d.cn/example.html" target="_blank" rel="noopener noreferrer">功能清单(页面左下侧)<ExternalLinkIcon/></a></td>
<td style="text-align:center">包含 400+功能示例及源码</td>
</tr>
<tr>
<td style="text-align:center">项目模板</td>
<td style="text-align:center"><RouterLink to="/mapIntel/open.html">Github 开源</RouterLink></td>
<td style="text-align:center"></td>
<td style="text-align:center">面向不同技术栈做的项目模板</td>
</tr>
</tbody>
</table>
<blockquote>
<p>正常开发流程：免费下载 SDK、参考开源的“功能示例、项目模板”进行开发即可。</p>
</blockquote>
<h2 id="_2-sdk-类库介绍" tabindex="-1"><a class="header-anchor" href="#_2-sdk-类库介绍" aria-hidden="true">#</a> 2. SDK 类库介绍</h2>
<p>Mars2D 平台开发的 SDK 所有类及方法均以 mars2d 开头命名，<code v-pre>mars2d.*</code> 为平台框架的默认命名空间，所有用到的类及方法都是通过<code v-pre>mars2d.*</code>来调用。 开发时尽量不要使用 <code v-pre>mars2d</code> 来定义自己的变量或类名、方法名，避免框架无法正常使用。</p>
<h3 id="_3-1-sdk-主类库" tabindex="-1"><a class="header-anchor" href="#_3-1-sdk-主类库" aria-hidden="true">#</a> 3.1 SDK 主类库</h3>
<table>
<thead>
<tr>
<th style="text-align:center">包名</th>
<th style="text-align:center">当前版本</th>
<th style="text-align:center">CDN 地址</th>
<th style="text-align:center">下载量</th>
<th style="text-align:center">备注</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:center">mars2d</td>
<td style="text-align:center"><a target="_black" href="https://www.npmjs.com/package/mars2d"><img alt="Npm version" src="https://img.shields.io/npm/v/mars2d.svg?style=flat&amp;logo=npm&amp;label="></a></td>
<td style="text-align:center"><a href="https://www.jsdelivr.com/package/npm/mars2d" target="_blank" rel="noopener noreferrer">cdn<ExternalLinkIcon/></a></td>
<td style="text-align:center"><a target="_black" href="https://www.npmjs.com/package/mars2d"><img alt="Npm downloads" src="https://img.shields.io/npm/dt/mars2d?style=flat&amp;logo=npm"></a></td>
<td style="text-align:center">Mars2D 主类库</td>
</tr>
</tbody>
</table>
<h3 id="_3-2-sdk-插件库-可选" tabindex="-1"><a class="header-anchor" href="#_3-2-sdk-插件库-可选" aria-hidden="true">#</a> 3.2 SDK 插件库（可选）</h3>
<p>部分插件没有合并在主库中，方便不同场景下按需使用</p>
<table>
<thead>
<tr>
<th style="text-align:center">包名</th>
<th style="text-align:center">当前版本</th>
<th style="text-align:center">CDN 地址</th>
<th style="text-align:center">下载量</th>
<th style="text-align:center">备注</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:center">mars2d-echarts</td>
<td style="text-align:center"><a target="_black" href="https://www.npmjs.com/package/mars2d-echarts"><img alt="Npm version" src="https://img.shields.io/npm/v/mars2d-echarts.svg?style=flat&amp;logo=npm&amp;label="></a></td>
<td style="text-align:center"><a href="https://www.jsdelivr.com/package/npm/mars2d-echarts" target="_blank" rel="noopener noreferrer">cdn<ExternalLinkIcon/></a></td>
<td style="text-align:center"><a target="_black" href="https://www.npmjs.com/package/mars2d-echarts"><img alt="Npm downloads" src="https://img.shields.io/npm/dt/mars2d-echarts?style=flat&amp;logo=npm"></a></td>
<td style="text-align:center">echarts 可视化插件</td>
</tr>
<tr>
<td style="text-align:center">mars2d-mapv</td>
<td style="text-align:center"><a target="_black" href="https://www.npmjs.com/package/mars2d-mapv"><img alt="Npm version" src="https://img.shields.io/npm/v/mars2d-mapv.svg?style=flat&amp;logo=npm&amp;label="></a></td>
<td style="text-align:center"><a href="https://www.jsdelivr.com/package/npm/mars2d-mapv" target="_blank" rel="noopener noreferrer">cdn<ExternalLinkIcon/></a></td>
<td style="text-align:center"><a target="_black" href="https://www.npmjs.com/package/mars2d-mapv"><img alt="Npm downloads" src="https://img.shields.io/npm/dt/mars2d-mapv?style=flat&amp;logo=npm"></a></td>
<td style="text-align:center">mapv 可视化插件</td>
</tr>
<tr>
<td style="text-align:center">mars2d-esri</td>
<td style="text-align:center"><a target="_black" href="https://www.npmjs.com/package/mars2d-esri"><img alt="Npm version" src="https://img.shields.io/npm/v/mars2d-esri.svg?style=flat&amp;logo=npm&amp;label="></a></td>
<td style="text-align:center"><a href="https://www.jsdelivr.com/package/npm/mars2d-esri" target="_blank" rel="noopener noreferrer">cdn<ExternalLinkIcon/></a></td>
<td style="text-align:center"><a target="_black" href="https://www.npmjs.com/package/mars2d-esri"><img alt="Npm downloads" src="https://img.shields.io/npm/dt/mars2d-esri?style=flat&amp;logo=npm"></a></td>
<td style="text-align:center">esri 服务插件</td>
</tr>
<tr>
<td style="text-align:center">mars2d-widget</td>
<td style="text-align:center"><a target="_black" href="https://www.npmjs.com/package/mars2d-widget"><img alt="Npm version" src="https://img.shields.io/npm/v/mars2d-widget.svg?style=flat&amp;logo=npm&amp;label="></a></td>
<td style="text-align:center"><a href="https://www.jsdelivr.com/package/npm/mars2d-widget" target="_blank" rel="noopener noreferrer">cdn<ExternalLinkIcon/></a></td>
<td style="text-align:center"><a target="_black" href="https://www.npmjs.com/package/mars2d-widget"><img alt="Npm downloads" src="https://img.shields.io/npm/dt/mars2d-widget?style=flat&amp;logo=npm"></a></td>
<td style="text-align:center">原生 js 下的 widget 模块化插件</td>
</tr>
</tbody>
</table>
<h3 id="_3-3-sdk-的架构" tabindex="-1"><a class="header-anchor" href="#_3-3-sdk-的架构" aria-hidden="true">#</a> 3.3 SDK 的架构</h3>
<p>少数包放在二级包下，清单如下：</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code>mars2d<span class="token punctuation">.</span>layer<span class="token punctuation">.</span><span class="token operator">*</span>      <span class="token comment">//图层,比如 mars2d.layer.GraphicLayer</span>
mars2d<span class="token punctuation">.</span>graphic<span class="token punctuation">.</span><span class="token operator">*</span>    <span class="token comment">//矢量对象,比如 mars2d.graphic.Marker</span>
mars2d<span class="token punctuation">.</span>control<span class="token punctuation">.</span><span class="token operator">*</span>    <span class="token comment">//控件</span>
mars2d<span class="token punctuation">.</span>query<span class="token punctuation">.</span><span class="token operator">*</span>      <span class="token comment">//服务查询</span>
mars2d<span class="token punctuation">.</span>thing<span class="token punctuation">.</span><span class="token operator">*</span>      <span class="token comment">//管理或分析</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>其他类都在 mars2d 一级包下面</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code>mars2d<span class="token punctuation">.</span><span class="token operator">*</span>  <span class="token comment">//比如 mars2d.PointUtil</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="_3-功能示例" tabindex="-1"><a class="header-anchor" href="#_3-功能示例" aria-hidden="true">#</a> 3. 功能示例</h2>
<p>见<a href="http://mars2d.cn/doc.html#project/example-vue" target="_blank" rel="noopener noreferrer">下载运行功能示例<ExternalLinkIcon/></a>章节介绍。</p>
<h2 id="_4-项目模板" tabindex="-1"><a class="header-anchor" href="#_4-项目模板" aria-hidden="true">#</a> 4. 项目模板</h2>
<p>见<a href="http://mars2d.cn/doc.html#project/jcxm-vue" target="_blank" rel="noopener noreferrer">基础项目 Vue 版介绍<ExternalLinkIcon/></a>章节介绍。</p>
</div></template>


