<template><div><h3> 管理及分析功能 </h3>
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
<p>目前平台将 量算、地图截图处理 等所有功能都统一封装为 thing 对象。</p>
<h2 id="_1-thing-的使用" tabindex="-1"><a class="header-anchor" href="#_1-thing-的使用" aria-hidden="true">#</a> 1. thing 的使用</h2>
<p>平台的所有管理及分析功能类都继承于<a href="http://mars2d.cn/api/BaseThing.html" target="_blank" rel="noopener noreferrer">BaseThing 类<ExternalLinkIcon/></a>，管理及分析功能类均在<code v-pre>mars2d.thing.*</code>命名空间下面。 下面我们演示创建一个 thing 对象 ，并调用<code v-pre>map.addThing</code>添加到地图上。</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">var</span> measure <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">mars2d<span class="token punctuation">.</span>thing<span class="token punctuation">.</span>Measure</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
map<span class="token punctuation">.</span><span class="token function">addThing</span><span class="token punctuation">(</span>measure<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">//测量长度</span>
measure<span class="token punctuation">.</span><span class="token function">distance</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_1-1-运行效果" tabindex="-1"><a class="header-anchor" href="#_1-1-运行效果" aria-hidden="true">#</a> 1.1 运行效果</h3>
<div style="height:410px;position:relative;" data-v-627b1480><iframe height="100%" width="100%" scrolling="yes" title="mars2d" src="http://mars2d.cn/editor-vue.html?id=thing/measure&amp;full=1" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="allowfullscreen" data-v-627b1480></iframe><a class="toSee" href="http://mars2d.cn/editor-vue.html?id=thing/measure&code=1" target="_blank">新窗口查看</a></div>
</div></template>


