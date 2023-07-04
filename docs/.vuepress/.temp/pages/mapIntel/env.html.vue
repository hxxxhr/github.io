<template><div><h2 id="开发环境搭建" tabindex="-1"><a class="header-anchor" href="#开发环境搭建" aria-hidden="true">#</a> 开发环境搭建</h2>
<img class='images' src="@source/public/icon/yonghu.svg" alt="来自依赖包的图片">
<i class='text'>Mars2D</i>
<img class='imagess' src="@source/public/icon/shijian.svg" alt="来自依赖包的图片">
<i class='text'>30/6/2023</i>
<img class='imagess' src="@source/public/icon/liulan.svg" alt="来自依赖包的图片">
<i class='text'>0</i>
<p>利用 Mars2D 进行二次开发属于 Web 前端开发范畴，本章教程是基于通用情况下的推荐搭建的开发环境。</p>
<p>Web 前端刚入门的朋友，常常想选择一个快速、好用、<strong>流行</strong>（其实我也不知道为什么要流行，或许是在技术的路上，工程师希望自己走在主流的路上？）的 IDE（Integrated Development Environment：集成开发环境）。IDE 重要么？重要也不重要。不重要是因为：它只是一个工具，我们更应该关注的是需求、逻辑、算法、知识等。重要是因为：它是一个工具，工欲善其事必先利其器，工具选好了常常能够达到事半功倍的效果。</p>
<p>这些工具为后续讲解开发中所涉及到的工具，也是我们推荐的，建议您安装使用。 如果您对 Web 前端范畴技术栈有足够了解，并有其他习惯的工具也可以忽略安装。</p>
<h2 id="_1-开发工具清单" tabindex="-1"><a class="header-anchor" href="#_1-开发工具清单" aria-hidden="true">#</a> 1. 开发工具清单</h2>
<p>需要安装（部署）的软件主要包括以下几种：</p>
<table>
<thead>
<tr>
<th style="text-align:center">分类</th>
<th style="text-align:center">名称</th>
<th style="text-align:center">下载</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:center">开发环境</td>
<td style="text-align:center">Node</td>
<td style="text-align:center"><a href="https://nodejs.cn/download/" target="_blank" rel="noopener noreferrer">下载<ExternalLinkIcon/></a></td>
</tr>
<tr>
<td style="text-align:center">IDE</td>
<td style="text-align:center">VS Code</td>
<td style="text-align:center"><a href="https://code.visualstudio.com/Download" target="_blank" rel="noopener noreferrer">下载<ExternalLinkIcon/></a></td>
</tr>
<tr>
<td style="text-align:center">Web 服务器</td>
<td style="text-align:center">nginx</td>
<td style="text-align:center"><a href="https://nodejs.cn/download/" target="_blank" rel="noopener noreferrer">下载<ExternalLinkIcon/></a></td>
</tr>
<tr>
<td style="text-align:center">浏览器</td>
<td style="text-align:center">Chrome</td>
<td style="text-align:center"><a href="https://www.google.cn/chrome/" target="_blank" rel="noopener noreferrer">下载<ExternalLinkIcon/></a></td>
</tr>
</tbody>
</table>
<blockquote>
<p>建议使用这些我们推荐的工具来使用 Mars2D, 相关开发工具请根据您机器的操作系统下载对应版本进行安装.</p>
</blockquote>
<h2 id="_2-node-环境安装" tabindex="-1"><a class="header-anchor" href="#_2-node-环境安装" aria-hidden="true">#</a> 2 Node 环境安装</h2>
<ul>
<li>Node.js 是一个基于 Chrome V8 引擎的 JavaScript 运行环境。</li>
<li>Node.js 使用了一个事件驱动、非阻塞式 I/O 的模型，使其轻量又高效。</li>
<li>Node.js 的包管理器 npm，是全球最大的开源库生态系统。</li>
<li>简单的说 Node.js 就是运行在服务端的 JavaScript。</li>
</ul>
<p>请确认开发机器安装有 Node 环境。可以从<a href="https://nodejs.cn/download/" target="_blank" rel="noopener noreferrer"> Node 下载地址<ExternalLinkIcon/></a>下载安装 Node，安装完成后，控制台输入下面命令，检查版本信息，确认是否安装成功。</p>
<div class="language-nodejs line-numbers-mode" data-ext="nodejs"><pre v-pre class="language-nodejs"><code>node -v  # 查看node版本
npm -v   # 查看npm版本
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="@source/public/image/start-env-node.jpg" alt="配置图"></p>
<h3 id="_2-1-安装-nvm-可选" tabindex="-1"><a class="header-anchor" href="#_2-1-安装-nvm-可选" aria-hidden="true">#</a> 2.1 安装 nvm (可选)</h3>
<p>当多个项目并行时，由于创建的时间或人为选择等因素，各个项目里有着差异的 node 版本，这样我们在不同的项目里需要切换不同版本的 Node.js，所以 nvm 应运而生。 安装 nvm 前需要卸载已有的 node，再从<a href="https://github.com/coreybutler/nvm-windows" target="_blank" rel="noopener noreferrer">nvm-windows<ExternalLinkIcon/></a>下载安装即可。</p>
<h3 id="_2-2-安装-nrm" tabindex="-1"><a class="header-anchor" href="#_2-2-安装-nrm" aria-hidden="true">#</a> 2.2 安装 nrm</h3>
<p>nrm(npm registry manager )是 npm 的镜像源管理工具，有时候国外资源太慢，使用这个就可以快速地在 npm 源间切换 在控制台按下面输入命令：</p>
<div class="language-nodejs line-numbers-mode" data-ext="nodejs"><pre v-pre class="language-nodejs"><code>npm i -g nrm
nrm ls
nrm use taobao
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>其中执行命令 nrm ls 查看可选的源带*的是当前使用的源，use 命令可以切换源。</p>
<h2 id="_3-vs-code-编辑器安装" tabindex="-1"><a class="header-anchor" href="#_3-vs-code-编辑器安装" aria-hidden="true">#</a> 3 VS Code 编辑器安装</h2>
<p>Visual Studio Code 简称 VS Code，是一款免费开源的现代化轻量级代码编辑器，支持几乎所有主流的开发语言的语法高亮、智能代码补全、自定义热键、括号匹配、代码片段、代码对比 Diff、GIT 等特性。有大量的插件可选安装，使用方便易用，建议使用，当然如果您有更习惯和熟练的工具，也可以用自己熟悉的 IDE 工具。</p>
<p>从 <a href="https://code.visualstudio.com/Download" target="_blank" rel="noopener noreferrer">官网下载地址<ExternalLinkIcon/></a>下载安装即可。</p>
<h3 id="_3-1-安装插件" tabindex="-1"><a class="header-anchor" href="#_3-1-安装插件" aria-hidden="true">#</a> 3.1 安装插件</h3>
<p>请安装以下 VS Code 插件，没有特殊原因，都建议安装下：</p>
<ul>
<li><a href="https://marketplace.visualstudio.com/items?itemName=MS-CEINTL.vscode-language-pack-zh-hans" target="_blank" rel="noopener noreferrer">Chinese (Simplified) Language Pack<ExternalLinkIcon/></a>：中文汉化包，方便国内用户操作。</li>
<li><a href="https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer" target="_blank" rel="noopener noreferrer">Live Server<ExternalLinkIcon/></a>：启动一个本地的 Http 服务器，原生 JS 项目时修改代码后页面会实时自动重载。</li>
<li><a href="https://marketplace.visualstudio.com/items?itemName=donjayamanne.githistory" target="_blank" rel="noopener noreferrer">Git History<ExternalLinkIcon/></a>：方便查看对比 Git 历史记录。</li>
<li><a href="https://marketplace.visualstudio.com/items?itemName=EditorConfig.EditorConfig" target="_blank" rel="noopener noreferrer">EditorConfig for Visual Studio Code<ExternalLinkIcon/></a>：统一项目内代码风格(<code v-pre>.editorconfig</code>文件配置)。</li>
<li><a href="https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode" target="_blank" rel="noopener noreferrer">Prettier - Code formatter<ExternalLinkIcon/></a>： 统一项目内代码格式化的方式(<code v-pre>.prettierrc</code>文件配置)。</li>
<li><a href="https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint" target="_blank" rel="noopener noreferrer">ESLint<ExternalLinkIcon/></a>： 统一项目内代码规范(<code v-pre>.eslintrc.js</code>、<code v-pre>.eslintignore</code>等文件配置)。
<img src="@source/public/image/start-env-vscode.jpg" alt="配置图"></li>
</ul>
<h2 id="_4-nginx-服务" tabindex="-1"><a class="header-anchor" href="#_4-nginx-服务" aria-hidden="true">#</a> 4 Nginx 服务</h2>
<p>我们在 Mars2D 开发中，一些地图、地形、模型数据都是比较庞大的数据，需要发布为独立的 HTTP 服务方便各个项目使用。发布服务的工具我们建议的是 nginx。</p>
<p>nginx 是轻量级的 Web 服务器/反向代理服务器。其特点是占有内存少，并发能力强。可用于瓦片底图、地形数据、模型等产品用到的各类数据的服务发布。更多细节和教程可以参看<a href="https://www.baidu.com/s?wd=nginx" target="_blank" rel="noopener noreferrer">Nginx 资料<ExternalLinkIcon/></a></p>
<p>您可以在<a href="http://nginx.org/en/download.html" target="_blank" rel="noopener noreferrer">Nginx 官方下载地址<ExternalLinkIcon/></a>下载安装，但安装后需要自行加相关允许跨域等配置。</p>
<p>也可以直接下载<a href="http://data.mars2d.cn/tool/nginx.rar" target="_blank" rel="noopener noreferrer">Mars2D 版 Nginx 下载地址<ExternalLinkIcon/></a>，这个版本是 window 版，并已设置允许跨域等相关配置，拿来即用。
<img src="@source/public/image/start-env-nginx.jpg" alt="配置图"></p>
<h2 id="_5-chrome-浏览器" tabindex="-1"><a class="header-anchor" href="#_5-chrome-浏览器" aria-hidden="true">#</a> 5 Chrome 浏览器</h2>
<p>建议使用<a href="https://www.google.cn/chrome/" target="_blank" rel="noopener noreferrer">Chrome 谷歌浏览器<ExternalLinkIcon/></a>的最新版本进行开发和调试。</p>
</div></template>


