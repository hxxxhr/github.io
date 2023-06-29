<template><div><h3> 加载外部资源的跨域问题 </h3>
<h2 id="问题的现象" tabindex="-1"><a class="header-anchor" href="#问题的现象" aria-hidden="true">#</a> 问题的现象</h2>
<p>浏览器提示 CORS policy 错误，所加载的底图、地形、模型等外部数据没有显示。F12 中提示 CORS 相关错误。</p>
<h2 id="解决方法及步骤" tabindex="-1"><a class="header-anchor" href="#解决方法及步骤" aria-hidden="true">#</a> 解决方法及步骤</h2>
<p>因为浏览器的安全性要求，Leaflet 和 Mars2D 加载外部资源时，有时候服务会报错，需要服务端允许跨域访问，跨域问题的终极解决方法在服务端：</p>
<ul>
<li>
<p>若服务端可控：添加跨域头</p>
</li>
<li>
<p>若服务端不可控：添加代理服务，代理方式有很多，我们有 2 种推荐的方式：</p>
<p>1.可以使用<a href="data.mars2d.cn/toolnginx.rar">nginx</a>来代理，需要有一定 nginx 基础知识。 <br />
2.可以使用<a href="https://github.com/muyao1987/web-proxy" target="_blank" rel="noopener noreferrer">https://github.com/muyao1987/web-proxy<ExternalLinkIcon/></a>发布的服务，并在相关代码配置 proxy 属性，来代理转发相关请求。
<img src="@source/public/image/issue-cors.jpg" alt="配置图"></p>
</li>
</ul>
<h2 id="附-什么是资源跨域权限" tabindex="-1"><a class="header-anchor" href="#附-什么是资源跨域权限" aria-hidden="true">#</a> 附：什么是资源跨域权限</h2>
<h3 id="什么是-access-control-allow-origin" tabindex="-1"><a class="header-anchor" href="#什么是-access-control-allow-origin" aria-hidden="true">#</a> 什么是 Access-Control-Allow-Origin</h3>
<p>Access-Control-Allow-Origin 是 HTML5 中定义的一种服务器端返回 Response header，用来解决资源（比如字体）的跨域权限问题。 它定义了该资源允许被哪个域引用，或者被所有域引用（google 字体使用*表示字体资源允许被所有域引用）。</p>
<h3 id="什么是资源跨域权限" tabindex="-1"><a class="header-anchor" href="#什么是资源跨域权限" aria-hidden="true">#</a> 什么是资源跨域权限</h3>
<p>由于浏览器同源策略，凡是发送请求 url 的协议，域名，端口三者之间任意一个与当前页面地址不同即为跨域，存在跨域的情况：</p>
<ul>
<li>网络协议不同，如 http 协议访问 https 协议。</li>
<li>端口不同，如 80 端口访问 8080 端口</li>
<li>域名不同，如www.jd.com 访问 baidu.com</li>
<li>子域名不同，如 abc.blog.com 访问 def.blog.com</li>
<li>域名和域名对应的 ip，如www.abc.com访问20，205，28，90</li>
</ul>
</div></template>


