<template><div> <h3> 发布地图数据服务</h3>
 <img class='images' src="@source/public/icon/yonghu.svg" alt="来自依赖包的图片">
<i class='text'>Mars2D</i>
<img class='imagess' src="@source/public/icon/shijian.svg" alt="来自依赖包的图片">
<i class='text'>30/6/2023</i>
<img class='imagess' src="@source/public/icon/liulan.svg" alt="来自依赖包的图片">
<i class='text'>0</i>
<p>通过数据处理的流程我们大概了解了目前二维相关的影像、地形、模型都是瓦片形式的静态资源文件，如果我们需要发布为服务，只需要通过 HTTP 方式发布后，平台即可调用。</p>
<h2 id="_1-nginx-软件安装" tabindex="-1"><a class="header-anchor" href="#_1-nginx-软件安装" aria-hidden="true">#</a> 1. Nginx 软件安装</h2>
<p>如果您服务器已安装有其他可以发布 web 前端静态资源的 http 容器，可以跳过此步骤，直接按您说熟悉的技术路线发布网站，如 IIS、Tomcat、NodeJS 等均可。</p>
<h3 id="_1-1-解压-nginx-rar-至-d-盘根目录-解压后效果如下" tabindex="-1"><a class="header-anchor" href="#_1-1-解压-nginx-rar-至-d-盘根目录-解压后效果如下" aria-hidden="true">#</a> 1.1 解压 nginx.rar 至 D 盘根目录，解压后效果如下</h3>
<p><a href="https://data.mars2d.cn/tool/nginx.rar" target="_blank" rel="noopener noreferrer">nginx 下载地址<ExternalLinkIcon/></a></p>
<h3 id="_1-2-安装注册至-window-服务" tabindex="-1"><a class="header-anchor" href="#_1-2-安装注册至-window-服务" aria-hidden="true">#</a> 1.2 安装注册至 window 服务</h3>
<p>打开电脑自动启动服务，打开“命令说明.txt”复制<code v-pre>nginx-service.exe install</code>命令进行安装操作。</p>
<ul>
<li>如果没有放在 D 盘根目录，修改<code v-pre>nginx-service.xml</code>里的目录路径为实际安装路径。</li>
<li>默认端口为 80，如有冲突请修改<code v-pre>nginx\conf\host\localhsot_80.conf</code>文件 <br />
如果不需要注册 window 服务，单次启动输入<code v-pre>start nginx</code>命令即可。</li>
</ul>
<h3 id="_1-3-启动-nginx-服务" tabindex="-1"><a class="header-anchor" href="#_1-3-启动-nginx-服务" aria-hidden="true">#</a> 1.3 启动 nginx 服务</h3>
<p>通过 window 服务中启动 nginx 服务，访问<code v-pre>http://localhost/</code>校验服务是否正常启动。
<img src="@source/public/image/data-server-nginx.jpg" alt="配置图"></p>
<h2 id="_2-二维数据发布" tabindex="-1"><a class="header-anchor" href="#_2-二维数据发布" aria-hidden="true">#</a> 2. 二维数据发布</h2>
<p>下载<a href="http://data.mars2d.cn/tool/mars2d-data.rar" target="_blank" rel="noopener noreferrer">mars2d-data 示例数据<ExternalLinkIcon/></a>放在电脑的<code v-pre>D:\mars2d-data\</code>目录，<br />
如果需要放其他盘或其他目录时参考已有配置修改<code v-pre>nginx\conf\host\localhsot_80.conf</code>配置即可。<br />
<code v-pre>D:\mars2d-data\</code>中可以按数据类型分子目录后放各类数据。<br />
<img src="@source/public/image/data-server-path.jpg" alt="配置图"></p>
<h3 id="_1-1-将各种工具处理后的数据放在目录中即可" tabindex="-1"><a class="header-anchor" href="#_1-1-将各种工具处理后的数据放在目录中即可" aria-hidden="true">#</a> 1.1 将各种工具处理后的数据放在目录中即可</h3>
<p>我们已示例数据中标绘数据 <code v-pre>D:\mars2d-data\file\geojson\mars2d-draw.json</code>为例做讲解。</p>
<p>我们将 mars2d-draw.json 标绘数据，放在<code v-pre>D:\mars2d-data\</code>子目录后， 文件路径为<code v-pre>D:\mars2d-data\file\geojson\mars2d-draw.json</code></p>
<h3 id="_1-2-nginx-启动后服务就自动发布好了" tabindex="-1"><a class="header-anchor" href="#_1-2-nginx-启动后服务就自动发布好了" aria-hidden="true">#</a> 1.2 Nginx 启动后服务就自动发布好了</h3>
<p>对应的服务 url 地址为<a href="http://localhost/mars2d-data/file/geojson/mars2d-draw.json" target="_blank" rel="noopener noreferrer">http://localhost/mars2d-data/file/geojson/mars2d-draw.json<ExternalLinkIcon/></a>可以测试任意一个文件，如果浏览器可以正常访问，说明服务是发布成功的。
<img src="@source/public/image/data-server-demo.jpg" alt="配置图"></p>
<h2 id="_1-3-对应代码中测试服务-url" tabindex="-1"><a class="header-anchor" href="#_1-3-对应代码中测试服务-url" aria-hidden="true">#</a> 1.3 对应代码中测试服务 URL</h2>
<ul>
<li>XYZ 底图时：可以参考教程<RouterLink to="/mapKnow/tileLayer.html#5-%E5%8A%A0%E8%BD%BD-xyz-%E6%95%B0%E6%8D%AE%E6%AD%A5%E9%AA%A4">加载 XYZ 数据步骤</RouterLink></li>
</ul>
</div></template>


