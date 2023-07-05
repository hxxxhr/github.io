import{_ as t,a as i,b as l}from"./liulan-531c46a6.js";import{_ as n,r as c,o as h,c as d,a as e,b as a,d as o,e as r}from"./app-0bc0dfa9.js";const _="/doc/assets/issue-cors-81769bf1.jpg",p={},m=r('<h3> 加载外部资源的跨域问题 </h3><img class="images" src="'+t+'" alt="来自依赖包的图片"><i class="text">Mars2D</i><img class="imagess" src="'+i+'" alt="来自依赖包的图片"><i class="text">30/6/2023</i><img class="imagess" src="'+l+'" alt="来自依赖包的图片"><i class="text">0</i><h2 id="问题的现象" tabindex="-1"><a class="header-anchor" href="#问题的现象" aria-hidden="true">#</a> 问题的现象</h2><p>浏览器提示 CORS policy 错误，所加载的底图、地形、模型等外部数据没有显示。F12 中提示 CORS 相关错误。</p><h2 id="解决方法及步骤" tabindex="-1"><a class="header-anchor" href="#解决方法及步骤" aria-hidden="true">#</a> 解决方法及步骤</h2><p>因为浏览器的安全性要求，Leaflet 和 Mars2D 加载外部资源时，有时候服务会报错，需要服务端允许跨域访问，跨域问题的终极解决方法在服务端：</p>',11),u=e("li",null,[e("p",null,"若服务端可控：添加跨域头")],-1),g=e("p",null,"若服务端不可控：添加代理服务，代理方式有很多，我们有 2 种推荐的方式：",-1),b={href:"http://data.mars2d.cn/tool/nginx.rar",target:"_blank",rel:"noopener noreferrer"},f=e("br",null,null,-1),x={href:"https://github.com/muyao1987/web-proxy",target:"_blank",rel:"noopener noreferrer"},w=e("img",{src:_,alt:"配置图"},null,-1),k=r('<h2 id="附-什么是资源跨域权限" tabindex="-1"><a class="header-anchor" href="#附-什么是资源跨域权限" aria-hidden="true">#</a> 附：什么是资源跨域权限</h2><h3 id="什么是-access-control-allow-origin" tabindex="-1"><a class="header-anchor" href="#什么是-access-control-allow-origin" aria-hidden="true">#</a> 什么是 Access-Control-Allow-Origin</h3><p>Access-Control-Allow-Origin 是 HTML5 中定义的一种服务器端返回 Response header，用来解决资源（比如字体）的跨域权限问题。 它定义了该资源允许被哪个域引用，或者被所有域引用（google 字体使用*表示字体资源允许被所有域引用）。</p><h3 id="什么是资源跨域权限" tabindex="-1"><a class="header-anchor" href="#什么是资源跨域权限" aria-hidden="true">#</a> 什么是资源跨域权限</h3><p>由于浏览器同源策略，凡是发送请求 url 的协议，域名，端口三者之间任意一个与当前页面地址不同即为跨域，存在跨域的情况：</p><ul><li>网络协议不同，如 http 协议访问 https 协议。</li><li>端口不同，如 80 端口访问 8080 端口</li><li>域名不同，如www.jd.com 访问 baidu.com</li><li>子域名不同，如 abc.blog.com 访问 def.blog.com</li><li>域名和域名对应的 ip，如www.abc.com访问20，205，28，90</li></ul>',6);function y(C,A){const s=c("ExternalLinkIcon");return h(),d("div",null,[m,e("ul",null,[u,e("li",null,[g,e("p",null,[a("1.可以使用"),e("a",b,[a("nginx"),o(s)]),a("来代理，需要有一定 nginx 基础知识。 "),f,a(" 2.可以使用"),e("a",x,[a("https://github.com/muyao1987/web-proxy"),o(s)]),a("发布的服务，并在相关代码配置 proxy 属性，来代理转发相关请求。 "),w])])]),k])}const O=n(p,[["render",y],["__file","cors.html.vue"]]);export{O as default};
