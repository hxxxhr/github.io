<template><div><h3>第3方token有问题</h3>
<h2 id="问题的现象" tabindex="-1"><a class="header-anchor" href="#问题的现象" aria-hidden="true">#</a> 问题的现象</h2>
<p>第 3 方服务相关功能访问 F12 提示超流量或 403 错误等，造成功能无法正常使用。</p>
<h2 id="问题的原因" tabindex="-1"><a class="header-anchor" href="#问题的原因" aria-hidden="true">#</a> 问题的原因</h2>
<p>百度、高德、天地图等第 3 方需要 token，目前平台内是我们申请了演示的 token 内置在平台中，但因为我们平台使用用户较多，访问量容易超限量或误判为爬虫被封， 目前包括以下第 3 方服务（非必须，看自己项目选用的功能）：</p>
<ul>
<li>百度 POI 等服务， token 申请地址：<a href="https://lbsyun.baidu.com/apiconsole/user/choose" target="_blank" rel="noopener noreferrer"> http://lbsyun.baidu.com/apiconsole/key<ExternalLinkIcon/></a></li>
<li>高德 POI 等服务，token 申请地址：<a href="https://lbs.amap.com/?ref=https://console.amap.com/dev/key/app" target="_blank" rel="noopener noreferrer"> https://console.amap.com/dev/key/app<ExternalLinkIcon/></a></li>
<li>天地图底图等服务， token 申请地址：<a href="https://sso.tianditu.gov.cn/login?service=https%3A%2F%2Fconsole.tianditu.gov.cn%2Fapi%2Fkey" target="_blank" rel="noopener noreferrer"> https://console.tianditu.gov.cn/api/key<ExternalLinkIcon/></a></li>
<li>mapbox 地图， token 申请地址：<a href="https://account.mapbox.com/auth/signin/?route-to=%22https%3A%2F%2Faccount.mapbox.com%2F%22" target="_blank" rel="noopener noreferrer">https://account.mapbox.com<ExternalLinkIcon/></a></li>
</ul>
<h2 id="解决方法及步骤" tabindex="-1"><a class="header-anchor" href="#解决方法及步骤" aria-hidden="true">#</a> 解决方法及步骤</h2>
<p>请在自己项目中根据用到的服务情况，申请下自己的 key 或 token 后进行修改替换，主要做 2 类修改：</p>
<p>目前所有第 3 方涉及 token 的类均支持传入 key 或 token 参数来设置。如果未传入参数时，平台使用了内置的<a href="http://marsgis.cn/api/Token.html" target="_blank" rel="noopener noreferrer">mars2d.Token.*<ExternalLinkIcon/></a>默认值。</p>
<h2 id="_1-覆盖-mars2d-token-中默认值" tabindex="-1"><a class="header-anchor" href="#_1-覆盖-mars2d-token-中默认值" aria-hidden="true">#</a> 1. 覆盖 mars2d.Token 中默认值</h2>
<p>此方式适合所有类都未传入入 key 或 token 参数的情况，改一处全局生效，也建议项目中按这种方式处理。<br />
（1）如果构造 map 是通过 config.json，可以按下面示例增加 token 配置。</p>
<div class="language-json line-numbers-mode" data-ext="json"><pre v-pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">"map3d"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">"scene"</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token comment">//已忽略其他参数值</span>
    <span class="token property">"token"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token property">"tianditu"</span><span class="token operator">:</span> <span class="token string">"e5c3984ced09bc1f55e8e1107fdc5a6b"</span><span class="token punctuation">,</span>
      <span class="token property">"baidu"</span><span class="token operator">:</span> <span class="token string">"jTqhUqeeRirqd8musUiYmthqdHDHsiB2"</span><span class="token punctuation">,</span>
      <span class="token property">"gaode"</span><span class="token operator">:</span> <span class="token string">"ee24b622294b5bc659fb92fe81084776"</span><span class="token punctuation">,</span>
      <span class="token property">"mapbox"</span><span class="token operator">:</span> <span class="token string">"pk.eyJ1IjoiY25zdW55b3VyIiwiYSI6ImNsMmN5Y2ppaDB0ZGYzam8yZmF2MjVqb3cifQ.FYxirkiZsriqaFw_x0IyAw"</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token property">"terrain"</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token comment">//已忽略其他参数值</span>
    <span class="token property">"basemaps"</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token property">"layers"</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>（2） 如果构造 mars2d.Map 是代码构造的参数，可以按下面示例增加 token 参数。</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">let</span> map <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">mars2d<span class="token punctuation">.</span>Map</span><span class="token punctuation">(</span><span class="token string">"mars2dContainer"</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
  <span class="token comment">//已忽略其他参数</span>
  <span class="token literal-property property">token</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">tianditu</span><span class="token operator">:</span> <span class="token string">"e5c3984ced09bc1f55e8e1107fdc5a6b"</span><span class="token punctuation">,</span>
    <span class="token literal-property property">baidu</span><span class="token operator">:</span> <span class="token string">"jTqhUqeeRirqd8musUiYmthqdHDHsiB2"</span><span class="token punctuation">,</span>
    <span class="token literal-property property">gaode</span><span class="token operator">:</span> <span class="token string">"ee24b622294b5bc659fb92fe81084776"</span><span class="token punctuation">,</span>
    <span class="token literal-property property">mapbox</span><span class="token operator">:</span>
      <span class="token string">"pk.eyJ1IjoiY25zdW55b3VyIiwiYSI6ImNsMmN5Y2ppaDB0ZGYzam8yZmF2MjVqb3cifQ.FYxirkiZsriqaFw_x0IyAw"</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_2-批量替换修改-key-参数值" tabindex="-1"><a class="header-anchor" href="#_2-批量替换修改-key-参数值" aria-hidden="true">#</a> 2：批量替换修改 key 参数值</h2>
<p>如果相关配置或代码中使用了 key 参数，就需要全局批量替换下，可以复制已有 key 值，打开项目后全局全字匹配后批量替换。</p>
<p>（1）我们已天地图 key 为例，假设：</p>
<ul>
<li>原有示例中的 key 为 <code v-pre>789e558be762ff832392a0393fd8a4f1</code></li>
<li>自己申请的 key 为 <code v-pre>d083e4cf30bfc438ef93436c10c2c20a</code> <br />
可以批量替换<code v-pre>789e558be762ff832392a0393fd8a4f1</code>为<code v-pre>d083e4cf30bfc438ef93436c10c2c20a</code></li>
</ul>
<div class="language-json line-numbers-mode" data-ext="json"><pre v-pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">"control"</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token comment">//已忽略其他参数</span>
  <span class="token property">"basemaps"</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token punctuation">{</span>
      <span class="token property">"name"</span><span class="token operator">:</span> <span class="token string">"天地图影像"</span><span class="token punctuation">,</span>
      <span class="token property">"type"</span><span class="token operator">:</span> <span class="token string">"group"</span><span class="token punctuation">,</span>
      <span class="token property">"layers"</span><span class="token operator">:</span> <span class="token punctuation">[</span>
        <span class="token punctuation">{</span>
          <span class="token property">"name"</span><span class="token operator">:</span> <span class="token string">"底图"</span><span class="token punctuation">,</span>
          <span class="token property">"type"</span><span class="token operator">:</span> <span class="token string">"tdt"</span><span class="token punctuation">,</span>
          <span class="token property">"layer"</span><span class="token operator">:</span> <span class="token string">"img_d"</span><span class="token punctuation">,</span>
          <span class="token property">"key"</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">"d083e4cf30bfc438ef93436c10c2c20a"</span><span class="token punctuation">]</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span>
          <span class="token property">"name"</span><span class="token operator">:</span> <span class="token string">"注记"</span><span class="token punctuation">,</span>
          <span class="token property">"type"</span><span class="token operator">:</span> <span class="token string">"tdt"</span><span class="token punctuation">,</span>
          <span class="token property">"layer"</span><span class="token operator">:</span> <span class="token string">"img_z"</span><span class="token punctuation">,</span>
          <span class="token property">"key"</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">"d083e4cf30bfc438ef93436c10c2c20a"</span><span class="token punctuation">]</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">]</span><span class="token punctuation">,</span>
      <span class="token property">"show"</span><span class="token operator">:</span> <span class="token boolean">true</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token property">"operationallayers"</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>（2）如果是 js 代码中，比如下面的<a href="http://mars2d.cn/api/GaodeRoute.html?classFilter=gaode" target="_blank" rel="noopener noreferrer">GaodeRoute 类<ExternalLinkIcon/></a>使用代码，可以批量替换<code v-pre>ae29a37307840c7ae4a785ac905927e0</code>为<code v-pre>ee24b622294b5bc659fb92fe81084776</code></p>
<ul>
<li>在使用的类中参考 API 增加 key 参数：</li>
</ul>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code>gaodeRoute <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">mars2d<span class="token punctuation">.</span>query<span class="token punctuation">.</span>GaodeRoute</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">key</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">"ae29a37307840c7ae4a785ac905927e0"</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">//未传入key参数，内部使用了默认值。如果未解决 也可以按需修改代码，增加key值。</span>
gaodeRoute <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">mars2d<span class="token punctuation">.</span>query<span class="token punctuation">.</span>GaodeRoute</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></template>


