<template><div><h3 id="config-json-配置文件说明" tabindex="-1"><a class="header-anchor" href="#config-json-配置文件说明" aria-hidden="true">#</a> config.json 配置文件说明</h3>
<p>Mars2D对地图的初始化进行了封装了<a href="http://mars2d.cn/api/Map.html" target="_blank" rel="noopener noreferrer">Map地图类<ExternalLinkIcon/></a>，通过传入构造参数即可方便的对地图常用功能进行初始化。 Map构造参数为了后期方便切换，与代码脱离关系，可以将构造参数存放在json配置文件或后端数据库中，按加载配置文件的方式对地图进行初始化。
当前Mars2D开源的功能示例、项目模板中都是用<code v-pre>config.json</code>来传参构造<a href="http://mars2d.cn/api/Map.html" target="_blank" rel="noopener noreferrer">Map类<ExternalLinkIcon/></a>的，这种方式比较方便后期修改和扩展。因为在大部分项目中，地图初始化都是类似的，不同的是一些相关参数和图层不同，我们使用时不用关注内部实现，只用按项目按权限需求修改或使用不同的配置信息即可。</p>
<h2 id="参数说明" tabindex="-1"><a class="header-anchor" href="#参数说明" aria-hidden="true">#</a> 参数说明</h2>
<p>目前平台示例和项目中使用到的是<a href="http://mars2d.cn/config/config.json" target="_blank" rel="noopener noreferrer">config.json<ExternalLinkIcon/></a>静态json文件方式 文件中配置参数与<a href="http://mars2d.cn/config/config.json" target="_blank" rel="noopener noreferrer">mars2d.Map类<ExternalLinkIcon/></a>的构造参数是完成相同一致的，代码中加载json后传入到Map类中。</p>
<table>
<thead>
<tr>
<th style="text-align:center">参数名</th>
<th style="text-align:center">类型</th>
<th style="text-align:center">参数API</th>
<th style="text-align:center">说明</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:center">control</td>
<td style="text-align:center">Object</td>
<td style="text-align:center"><a href="http://mars2d.cn/api/Map.html#.controlOptions" target="_blank" rel="noopener noreferrer">参数清单<ExternalLinkIcon/></a></td>
<td style="text-align:center">控件</td>
</tr>
<tr>
<td style="text-align:center">basemaps</td>
<td style="text-align:center">Array</td>
<td style="text-align:center"><a href="http://mars2d.cn/api/Map.html#.basemapOptions" target="_blank" rel="noopener noreferrer">参数清单<ExternalLinkIcon/></a></td>
<td style="text-align:center">底图图层</td>
</tr>
<tr>
<td style="text-align:center">operationallayers</td>
<td style="text-align:center">Array</td>
<td style="text-align:center"><a href="http://mars2d.cn/api/Map.html#.layerOptions" target="_blank" rel="noopener noreferrer">参数清单<ExternalLinkIcon/></a></td>
<td style="text-align:center">图层</td>
</tr>
<tr>
<td style="text-align:center">……</td>
<td style="text-align:center">……</td>
<td style="text-align:center">……</td>
<td style="text-align:center">……</td>
</tr>
</tbody>
</table>
<p>更多参数及明细请阅读<a href="http://mars2d.cn/api/Map.html#.mapOptions" target="_blank" rel="noopener noreferrer">API文档 Map类<ExternalLinkIcon/></a></p>
<h2 id="_2-config-json常见修改" tabindex="-1"><a class="header-anchor" href="#_2-config-json常见修改" aria-hidden="true">#</a> 2. config.json常见修改</h2>
<p>##2.1 修改默认初始视角
<code v-pre>zoom</code>和<code v-pre>center</code>参数是地图的默认层级和视角中心点配置，该参数可以通过<code v-pre>map.getView()</code>方法获取当前视角，或者从地图页面右键菜单中单击相关菜单获取当前视角后拷贝到配置文件中。</p>
<p>##2.2 修改默认显示的底图
修改<code v-pre>basemaps</code>数组配置中，将已有的<code v-pre>&quot;show&quot;: true</code>的图层，将该值改为<code v-pre>&quot;show&quot;: false</code> ，并将需要默认需要展示的底图加上<code v-pre>&quot;show&quot;: true</code>，
<img src="@source/public/image/start-configJson-basepmap.jpg" alt="配置图"></p>
<blockquote>
<p>1.注意是否缺少逗号造成json格式错误。<br />
2.注意在basemaps数组中只保留一个&quot;show&quot;: true的图层。</p>
</blockquote>
<h2 id="_2-3-瓦片底图服务配置" tabindex="-1"><a class="header-anchor" href="#_2-3-瓦片底图服务配置" aria-hidden="true">#</a> 2.3 瓦片底图服务配置</h2>
<p>先在相关示例中调试加载成功(需要有一定的GIS知识储备)，再拷贝对应的参数到config.json对应节点配置中。 此问题可能产生的原因有以下几种</p>
<ul>
<li>（1）服务本身没允许跨域，瓦片加载失败</li>
<li>（2）坐标系非墨卡托投影，是WGS84,配置加下： &quot;crs&quot;: &quot;EPSG:4326&quot;,</li>
<li>（3）缺少0级时，需要配置 minZoom 和 maxZoom 参数</li>
<li>（4）最终配置时建议加下rectangle参数，去掉无效请求，提高效率。
<img src="@source/public/image/start-configJson-tile.jpg" alt="配置图">
可以在Mars2D框架中打开<a href="http://mars2d.cn/editor.html?id=layer-tile/type/xyz" target="_blank" rel="noopener noreferrer">XYZ瓦片示例页面<ExternalLinkIcon/></a>，在这个页面的根据已有示例修改url地址
<code v-pre>http://localhost:8888/mapdata/exp/{z}/{x}/{y}.png</code>，来调试图层参数。</li>
</ul>
</div></template>


