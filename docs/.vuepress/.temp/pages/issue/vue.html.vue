<template><div><h3> vue技术栈下开发注意事项 </h3>
<img class='images' src="@source/public/icon/yonghu.svg" alt="来自依赖包的图片">
<i class='text'>Mars2D</i>
<img class='imagess' src="@source/public/icon/shijian.svg" alt="来自依赖包的图片">
<i class='text'>30/6/2023</i>
<img class='imagess' src="@source/public/icon/liulan.svg" alt="来自依赖包的图片">
<i class='text'>0</i>
<p>在基于 vue 框架+Mars2D 产品做二维应用开发的项目中，比较常见的问题是性能卡顿。经过排查，发现普遍是由以下问题引起的，现总结出引起相关问题的原因及解决办法，以供参考：<br /></p>
<h2 id="_1-任意-mars2d-对象放入到-store、data、computed-中后-会引起系统越用越卡。" tabindex="-1"><a class="header-anchor" href="#_1-任意-mars2d-对象放入到-store、data、computed-中后-会引起系统越用越卡。" aria-hidden="true">#</a> 1. 任意 Mars2D 对象放入到 store、data、computed 中后，会引起系统越用越卡。</h2>
<p>vue 响应式框架对页面数据的渲染非常友好，会把 data 内所有对象的属性都转换成 get,set 进行监听。 但是将 Leaflet 或 Mars2D 的任意对象直接挂载到 vue 的 data 对象上时，Leaflet 或 Mars2D 的对象被双向绑定后，会造成无法自动释放、整个页面的渲染效率，降低帧率，越用越卡，特别在有加载大体量数据场景时，影响更加明显。</p>
<blockquote>
<p>正确做法: 将 map、graphic、graphicLayer 等对象作为不要放在 store、data、computed 中，避免 vue 劫持 map。</p>
</blockquote>
<p><img src="@source/public/image/issue-vue-data.jpg" alt="配置图"></p>
<h3 id="vue3-中可以使用-markraw-来标识不进行双向绑定" tabindex="-1"><a class="header-anchor" href="#vue3-中可以使用-markraw-来标识不进行双向绑定" aria-hidden="true">#</a> vue3 中可以使用 markRaw 来标识不进行双向绑定</h3>
<p>markRaw 作用：标记一个对象，使其永远不会再成为响应式对象。
<img src="@source/public/image/issue-vue3-markRaw.jpg" alt="配置图"></p>
<h2 id="_2-用完的对象之后要及时销毁-防止出现功能在界面上关闭但对象还驻留在内存中的情况。" tabindex="-1"><a class="header-anchor" href="#_2-用完的对象之后要及时销毁-防止出现功能在界面上关闭但对象还驻留在内存中的情况。" aria-hidden="true">#</a> 2. 用完的对象之后要及时销毁，防止出现功能在界面上关闭但对象还驻留在内存中的情况。</h2>
<p>目前 Leaflet 和 Mars2D 的类都有 remove、destroy 方法，在 vue 组件关闭时及时销毁使用完的对象。</p>
<blockquote>
<p>正确做法: 在 vue 组件的 destroy(vue2)、onUnmounted(vue3)等钩子方法中销毁使用完的对象。</p>
</blockquote>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token function">onUnmounted</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  <span class="token keyword">this</span><span class="token punctuation">.</span>map<span class="token punctuation">.</span><span class="token function">removeControl</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>controlTest<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//移除</span>
  <span class="token keyword">this</span><span class="token punctuation">.</span>graphicLayer<span class="token punctuation">.</span><span class="token function">destroy</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//销毁</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></template>


