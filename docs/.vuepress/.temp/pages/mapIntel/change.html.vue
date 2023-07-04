<template><div><h3> Mars2D版本及更新日志 </h3>
<img class='images' src="@source/public/icon/yonghu.svg" alt="来自依赖包的图片">
<i class='text'>Mars2D</i>
<img class='imagess' src="@source/public/icon/shijian.svg" alt="来自依赖包的图片">
<i class='text'>30/6/2023</i>
<img class='imagess' src="@source/public/icon/liulan.svg" alt="来自依赖包的图片">
<i class='text'>0</i>
<h4 id="_1-mars2d-的版本" tabindex="-1"><a class="header-anchor" href="#_1-mars2d-的版本" aria-hidden="true">#</a> 1. Mars2D 的版本</h4>
<p>Mars2D 的版本号包括三个部分，比如 v3.2.1 版本中，<strong>主版本号是 3，大版本号是 2，小版本号是 1</strong>
版本号是根据本次发布中包含的变更的级别进行递增的。</p>
<ul>
<li><strong>主版本</strong>(v3)：包含重要的新特性和架构性调整，在升级时会需要由开发人员提供少量的协助才能完成。当升级到新的主版本时，你可能需要运行升级脚本、重构代码、运行其它测试以及学习新的 API。</li>
<li><strong>大版本(v3.2)</strong>：包含新增功能和 API 优化重构，大版本其中大部分功能是向后兼容的，只有少部分特性是不兼容的(更新日志会说明弃用的 API)，参考说明或示例简单调整即可。</li>
<li><strong>小版本</strong>(v3.2.1)：包含新的小型特性优化，bug 修改等。 小版本是完全向后兼容的，在升级期间，不需要开发人员提供协助。【授权版时：无论哪种授权方式，小版本均是免费更新】</li>
</ul>
<h2 id="历史版本下载" tabindex="-1"><a class="header-anchor" href="#历史版本下载" aria-hidden="true">#</a> 历史版本下载</h2>
<p>我们已切换到 v3.1.0 版本为例：</p>
<ul>
<li>npm 安装的项目，请打开 package.json 修改 mars3d 版本号<code v-pre>&quot;mars2d&quot;: &quot;3.1.0&quot;</code>，再 npm install 重新安装</li>
<li>静态引入的，请复制链接<a href="https://registry.npmjs.org/mars2d/-/mars2d-3.1.0.tgz" target="_blank" rel="noopener noreferrer">https://registry.npmjs.org/mars2d/-/mars2d-3.1.0.tgz<ExternalLinkIcon/></a>后，在浏览器地址栏粘贴并修改版本号为指定版本后会回车进行下载。</li>
</ul>
<h4 id="_2-发布频率" tabindex="-1"><a class="header-anchor" href="#_2-发布频率" aria-hidden="true">#</a> 2. 发布频率</h4>
<p>我们会定期发布新版本，以便随着 Mars2D 的不断演进，你可以提前计划并协调这些升级工作。</p>
<blockquote>
<p>这些日期仅供一般性参考，如有更改，恕不另行通知。</p>
</blockquote>
<p>通常的发布周期如下：</p>
<ul>
<li>每 3 年 发布 1 个主版本</li>
<li>每年 发布 1 个大版本</li>
<li>每月 发布 1 个小版本</li>
</ul>
<h4 id="_3-弃用策略" tabindex="-1"><a class="header-anchor" href="#_3-弃用策略" aria-hidden="true">#</a> 3. 弃用策略</h4>
<p>&quot;重大变更&quot;（比如移除特定的 API 和特性）有时候是必须的，比如创新、让最佳实践与时俱进、变更依赖关系甚至来自 Web 平台自身的变化。<br />
要让这些转变尽可能的简单，我们会给你下列保证：</p>
<ul>
<li>我们会尽量减少重大变更的数量，并尽可能提供迁移工具。</li>
<li>我们会遵循这里所讲的弃用策略，让你有时间把应用升级到最新的 API 和最佳实践。</li>
</ul>
<h4 id="_4-更新日志" tabindex="-1"><a class="header-anchor" href="#_4-更新日志" aria-hidden="true">#</a> 4. 更新日志</h4>
<p>当前页面日志可能不是最新版本，最新<a target="_black" href="https://www.npmjs.com/package/mars2d">
<img alt="Npm version" src="https://img.shields.io/npm/v/mars2d.svg?style=flat&logo=npm&label=version"/>
</a>版本更新日志，</p>
<p>可以访问<a href="https://github.com/marsgis/mars2d/blob/master/CHANGE.md" target="_blank" rel="noopener noreferrer">Github-CHANGE.md<ExternalLinkIcon/></a>或<a href="https://gitee.com/marsgis/mars2d/blob/master/CHANGE.md" target="_blank" rel="noopener noreferrer">Gitee-CHANGE.md<ExternalLinkIcon/></a></p>
<h2 id="_3-1-16-2023-6-5" tabindex="-1"><a class="header-anchor" href="#_3-1-16-2023-6-5" aria-hidden="true">#</a> 3.1.16 - 2023-6-5</h2>
<p>增加 ⚡</p>
<ul>
<li>聚合图层增加右键菜单支持<br /></li>
</ul>
<p>修复 🔧</p>
<ul>
<li>线面编辑时，外部修改坐标后，图上编辑点未同步修改位置</li>
<li>修复 v3.1.15 产生的 ExpImg 导出图片出错</li>
</ul>
<h2 id="_3-1-15-2023-5-23" tabindex="-1"><a class="header-anchor" href="#_3-1-15-2023-5-23" aria-hidden="true">#</a> 3.1.15 - 2023-5-23</h2>
<p>重要说明 📣</p>
<ul>
<li>Leaflet 升级至<a href="https://github.com/Leaflet/Leaflet/releases/tag/v1.9.4" target="_blank" rel="noopener noreferrer">1.9.4<ExternalLinkIcon/></a><br /></li>
</ul>
<p>增加 ⚡</p>
<ul>
<li>GraphicLayer 增加 bringToBack 和 bringToFront 方法</li>
<li>Map 增加 isLoading 属性和增加地图加载完成 load 事件<br /></li>
</ul>
<p>修复 🔧</p>
<ul>
<li>GroupLayer 图层 zIndex 设置无效</li>
<li>谷歌在线地图服务修复</li>
<li>ExpImg.expByDraw 按区域截图未恢复地图状态</li>
</ul>
<h2 id="_3-1-14-2023-4-24" tabindex="-1"><a class="header-anchor" href="#_3-1-14-2023-4-24" aria-hidden="true">#</a> 3.1.14 - 2023-4-24</h2>
<p>增加 ⚡</p>
<ul>
<li>大部分图层支持透明度设置<br /></li>
</ul>
<p>修复 🔧</p>
<ul>
<li>Marker 部分图标定位偏移</li>
</ul>
<h2 id="_3-1-12-2023-3-20" tabindex="-1"><a class="header-anchor" href="#_3-1-12-2023-3-20" aria-hidden="true">#</a> 3.1.12 - 2023-3-20</h2>
<p>增加 ⚡</p>
<ul>
<li>新增 SmTileLayer 超图瓦片服务图层</li>
</ul>
<h2 id="_3-1-10-2023-1-10" tabindex="-1"><a class="header-anchor" href="#_3-1-10-2023-1-10" aria-hidden="true">#</a> 3.1.10 - 2023-1-10</h2>
<p>重要说明 📣</p>
<ul>
<li>Leaflet 升级至<a href="https://github.com/Leaflet/Leaflet/releases/tag/v1.9.3" target="_blank" rel="noopener noreferrer">1.9.3<ExternalLinkIcon/></a><br /></li>
</ul>
<p>修复 🔧</p>
<ul>
<li>修复 mars2d.d.ts 错误</li>
<li>修复全屏按钮多次切换问题</li>
</ul>
<h2 id="_3-1-9-2022-11-30" tabindex="-1"><a class="header-anchor" href="#_3-1-9-2022-11-30" aria-hidden="true">#</a> 3.1.9 - 2022-11-30</h2>
<p>优化 💪</p>
<ul>
<li>量算类增加绘制编辑事件的抛出</li>
<li>增加 rightClick 右键事件</li>
<li>矢量数据增加销毁方法<br /></li>
</ul>
<p>修复 🔧</p>
<ul>
<li>右键菜单绑定地图与矢量数据有叠加</li>
<li>snake 路线多次停止开启运行异常</li>
<li>地图 scale 控件参数无法配置</li>
<li>MapSplit 控件支持数组图层配置</li>
</ul>
<h2 id="_3-1-7-2022-10-24" tabindex="-1"><a class="header-anchor" href="#_3-1-7-2022-10-24" aria-hidden="true">#</a> 3.1.7 - 2022-10-24</h2>
<p>重要说明 📣</p>
<ul>
<li>Leaflet 升级至<a href="https://github.com/Leaflet/Leaflet/releases/tag/v1.9.2" target="_blank" rel="noopener noreferrer">1.9.2<ExternalLinkIcon/></a><br /></li>
</ul>
<p>优化 💪</p>
<ul>
<li>WfsLayer、ArcGisFeatureLayer 等图层增加 flyTo 方法<br /></li>
</ul>
<p>修复 🔧</p>
<ul>
<li>snakeIn 路线 style 颜色传值无效</li>
<li>Circle 绘制中 radius 没有动态回传</li>
<li>formatDate 方法格式化无效</li>
</ul>
<h2 id="_3-1-6-2022-9-16" tabindex="-1"><a class="header-anchor" href="#_3-1-6-2022-9-16" aria-hidden="true">#</a> 3.1.6 - 2022-9-16</h2>
<p>优化 💪</p>
<ul>
<li>vue 示例和项目 UI 部分进行重构</li>
<li>矢量数据增加 toJSON 方法</li>
</ul>
<h2 id="_3-1-5-2022-8-1" tabindex="-1"><a class="header-anchor" href="#_3-1-5-2022-8-1" aria-hidden="true">#</a> 3.1.5 - 2022-8-1</h2>
<p>优化 💪</p>
<ul>
<li>对 Map 中图层内部的存储和读取方式做了优化<br /></li>
</ul>
<p>弃用 &amp; API 重构 🔒</p>
<ul>
<li>图层、矢量数据类弃用 uuid 属性，全部统一为<a href="http://mars2d.cn/api/GraphicLayer.html#id" target="_blank" rel="noopener noreferrer">id<ExternalLinkIcon/></a></li>
</ul>
<h2 id="_3-1-4-2022-6-26" tabindex="-1"><a class="header-anchor" href="#_3-1-4-2022-6-26" aria-hidden="true">#</a> 3.1.4 - 2022-6-26</h2>
<p>增加 ⚡</p>
<ul>
<li>GeoJsonLayer 图层增加 chinaCRS 参数，支持数据自动纠偏<br /></li>
</ul>
<p>优化 💪</p>
<ul>
<li>vue 功能示例编辑器重写</li>
<li>增加主库和插件库中第 3 方依赖 JS 库未引入时的错误提示，方便排查问题<br /></li>
</ul>
<p>修复 🔧</p>
<ul>
<li>graphicLayer.openPopup 偶尔报错问题</li>
<li>GeoJsonLayer 图层 popupOptions 参数未生效</li>
</ul>
<h2 id="_3-1-3-2022-4-29" tabindex="-1"><a class="header-anchor" href="#_3-1-3-2022-4-29" aria-hidden="true">#</a> 3.1.3 - 2022-4-29</h2>
<p>重要说明 📣</p>
<ul>
<li>Leaflet 升级至<a href="https://github.com/Leaflet/Leaflet/releases/tag/v1.8.0" target="_blank" rel="noopener noreferrer">1.8.0<ExternalLinkIcon/></a></li>
<li>发布了 v3.1 版</li>
<li>SDK 内部重新架构<br /></li>
</ul>
<p>增加 ⚡</p>
<ul>
<li>增加 MapSplit 双屏对比控件</li>
<li>更新 mars2d.Token 所有默认值</li>
<li>增加 mars2d.Token.updateAll 方法，方便外部更新覆盖<br /></li>
</ul>
<p>修复 🔧</p>
<ul>
<li>修复部分 DivGraphic 拖拽后的定位存在偏差</li>
<li>修复一些已知 bug</li>
</ul>
<h2 id="_3-0-9-2022-3-8" tabindex="-1"><a class="header-anchor" href="#_3-0-9-2022-3-8" aria-hidden="true">#</a> 3.0.9 - 2022-3-8</h2>
<p>增加 ⚡</p>
<ul>
<li>Circle 增加 outlineLatlngs 属性</li>
<li>增加 QueryArcServer、QueryGeoServer 查询类</li>
<li>新增了一批示例<br /></li>
</ul>
<p>修复 🔧</p>
<ul>
<li>自由线绘制的偶尔报错</li>
<li>量算的编辑</li>
<li>GaodePOI 中限定区域无效</li>
</ul>
<h2 id="_3-0-8-2022-2-25" tabindex="-1"><a class="header-anchor" href="#_3-0-8-2022-2-25" aria-hidden="true">#</a> 3.0.8 - 2022-2-25</h2>
<p>重要说明 📣</p>
<ul>
<li>基础项目 vue 版上线发布</li>
<li>功能示例原生 JS 版优化(与 Vue 版保持一致性)<br /></li>
</ul>
<p>增加 ⚡</p>
<ul>
<li>增加 ToolButton 控件</li>
<li>完善 API 文档及 TS 定义</li>
</ul>
<h2 id="_3-0-7-2022-2-20" tabindex="-1"><a class="header-anchor" href="#_3-0-7-2022-2-20" aria-hidden="true">#</a> 3.0.7 - 2022-2-20</h2>
<p>重要说明 📣</p>
<ul>
<li>功能示例 vue 版上线发布<br /></li>
</ul>
<p>增加 ⚡</p>
<ul>
<li>wms 图层增加 click 事件和 popup 支持</li>
<li>增加 ToolButton 控件</li>
<li>增加 mars2d.d.ts 对 TS 支持<br /></li>
</ul>
<p>修复 🔧</p>
<ul>
<li>检查 API 文档描述错误并修复</li>
<li>修复 v3.0.5 版 show 修改带来的瓦片图层不展示</li>
<li>圆、矩形完成后激活编辑失败</li>
<li>测试了一轮并修复了一批 bug 问题<br /></li>
</ul>
<p>弃用 &amp; API 重构 🔒</p>
<ul>
<li>移除 axios 库，改用 mars2d.Util.fetchJson 或 sendAjax 方法</li>
<li>优化 pbf 图层，vectorTileLayerStyles 参数改名 style，并简化了参数形式</li>
</ul>
<h2 id="_3-0-5-2022-1-17" tabindex="-1"><a class="header-anchor" href="#_3-0-5-2022-1-17" aria-hidden="true">#</a> 3.0.5 - 2022-1-17</h2>
<p>优化 💪</p>
<ul>
<li>对图层增加 show 参数和属性</li>
<li>优化状态栏的小分辨率时的显示<br /></li>
</ul>
<p>修复 🔧</p>
<ul>
<li>修复已知的一些 bug</li>
</ul>
<h2 id="_3-0-3-2021-12-17" tabindex="-1"><a class="header-anchor" href="#_3-0-3-2021-12-17" aria-hidden="true">#</a> 3.0.3 - 2021-12-17</h2>
<p>重要说明 📣</p>
<ul>
<li>Leaflet 升级至<a href="https://github.com/Leaflet/Leaflet/releases/tag/v1.7.1" target="_blank" rel="noopener noreferrer">1.7.1<ExternalLinkIcon/></a></li>
<li>完成所有 V2 的功能示例的对应 V3 新版开发</li>
<li>v3.0 正式稳定版本发布</li>
<li>优化了 SDK 内部的接口方法，并整理及发布 API 文档</li>
<li>完成了教程的编写<br /></li>
</ul>
<p>修复 🔧</p>
<ul>
<li>完成了一轮测试并修复了所有 bug 问题</li>
</ul>
<h2 id="_3-0-0-2021-11-16" tabindex="-1"><a class="header-anchor" href="#_3-0-0-2021-11-16" aria-hidden="true">#</a> 3.0.0 - 2021-11-16</h2>
<p>重要说明 📣</p>
<ul>
<li>发布了 v3.0 版</li>
<li>易学：使用和语法都按开发人员用户习惯最优设计，降低开发人员能力要求，只用初级水平开发人员即可上手。</li>
<li>规范：API 从顶层统一规范的从零重构、将插件优化至 SDK 内，并提供统一规范的 API。</li>
<li>高效率：提高了开发效率和平台的渲染效率。</li>
<li>详细的 API 和教程：重新编写了详细的教程文档、自动根据 SDK 注释生成的最详尽的 API 文档，并完全免费开放。</li>
<li>功能示例和项目模板：并规划开发了 Vue 版 功能示例和基础项目。</li>
<li>免费：SDK 无需授权，免费无限制使用<br /></li>
</ul>
<p>增加 ⚡</p>
<ul>
<li>矢量数据：全新设计了矢量数据体系，采用 Graphic 矢量数据（统一的规范和 style 设计）和 GraphicLayer 矢量数据图层来统一管理。</li>
<li>GeoJson 图层：设计了新的 GeoJsonLayer，采用可在 symobl 中配置 type 参数指定 Graphic 类型来渲染。<br /></li>
</ul>
<p>弃用 &amp; API 重构 🔒</p>
<ul>
<li>v3.0 版与 v2.x 版本还不兼容(API 结构不同)，无法兼容平滑的升级，因为 v3 所有代码从零开始编写搭建的,不是基于之前的老版本修改的。</li>
</ul>
<h2 id="_2-0-0-2020-1-1" tabindex="-1"><a class="header-anchor" href="#_2-0-0-2020-1-1" aria-hidden="true">#</a> 2.0.0 - 2020-1-1</h2>
<p>重要说明 📣</p>
<ul>
<li>发布了 v2.0</li>
</ul>
<h2 id="_1-0-0-2017-8-25" tabindex="-1"><a class="header-anchor" href="#_1-0-0-2017-8-25" aria-hidden="true">#</a> 1.0.0 - 2017-8-25</h2>
<p>重要说明 📣</p>
<ul>
<li>发布了 v1.0</li>
</ul>
</div></template>


