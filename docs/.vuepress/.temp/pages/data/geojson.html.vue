<template><div><h3> 矢量数据：shp转geojson格式</h3>
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
<h2 id="_1-shp-格式介绍" tabindex="-1"><a class="header-anchor" href="#_1-shp-格式介绍" aria-hidden="true">#</a> 1. shp 格式介绍</h2>
<p>Shapefile 文件是 ESRI 公司 ArcGIS 平台的常用格式文件，是工业标准的矢量数据文件。 Shapefile 将空间特征表中的非拓扑几何对象和属性信息存储在数据集中，特征表中的几何对象存为以坐标点集表示的图形文件—SHP 文件，Shapefile 文件并不含拓扑（Topological）数据结构。<br />
<img src="@source/public/image/data-shp.jpg" alt="配置图"> <br />
shp 一些特性：</p>
<ul>
<li>1 个 Shape 文件至少包括三个文件：主文件(.shp) , 索引文件(.shx), dBASE 表(*.dbf)</li>
<li>一个 shp 文件只能存储点、线、面中的一种类型，不存在混合存在的状态；</li>
<li>shp 可以设置很多字段属性</li>
</ul>
<h2 id="_2-shp-数据来源" tabindex="-1"><a class="header-anchor" href="#_2-shp-数据来源" aria-hidden="true">#</a> 2. shp 数据来源</h2>
<p>一般是项目相关的业务部门提供、或通过图商采购数据，也可以通过一些爬虫工具，如<a href="http://www.rivermap.cn/down.html" target="_blank" rel="noopener noreferrer">水经微图<ExternalLinkIcon/></a>、<a href="http://www.arctiler.com/index.html" target="_blank" rel="noopener noreferrer"> 太乐地图<ExternalLinkIcon/></a>等下载一些矢量数据。</p>
<h2 id="_4-geojson-格式介绍" tabindex="-1"><a class="header-anchor" href="#_4-geojson-格式介绍" aria-hidden="true">#</a> 4. geojson 格式介绍</h2>
<p>GeoJSON 是适合于 Web 下对各种地理数据结构进行编码的格式，基于 Javascript 对象表示法的地理空间信息数据交换格式。与普通 json 文件格式区别在于对其属性及组成由一定规范。</p>
<p>GeoJSON 将所有的地理要素分为 Point、MultiPoint、LineString、MultiLineString、Polygon、MultiPolygon、GeometryCollection。首先是将这些要素封装到单个的 geometry 里，然后作为一个个的 Feature（要素）；要素放到一个要素集合里构成。
<img src="@source/public/image/data-geojson.jpg" alt="配置图"></p>
<h2 id="_5-处理工具-gdal-数据转换工具" tabindex="-1"><a class="header-anchor" href="#_5-处理工具-gdal-数据转换工具" aria-hidden="true">#</a> 5.处理工具：GDAL 数据转换工具</h2>
<p>shp 转 geojson 有很多工具和方式，我们推荐的是 GDAL 转换方法</p>
<h3 id="_5-1-安装-gdal-程序" tabindex="-1"><a class="header-anchor" href="#_5-1-安装-gdal-程序" aria-hidden="true">#</a> 5.1. 安装 GDAL 程序</h3>
<p>下载<a href="https://data.mars2d.cn/tool/gdal-300-1911-x64-core.msi" target="_blank" rel="noopener noreferrer">gdal 安装程序<ExternalLinkIcon/></a>，双击安装，一直默认即可，默认安装路径一般为<code v-pre>C:\Program Files\GDAL</code>，安装完成后可以打开浏览检查下。</p>
<h3 id="_5-2-配置环境变量" tabindex="-1"><a class="header-anchor" href="#_5-2-配置环境变量" aria-hidden="true">#</a> 5.2. 配置环境变量</h3>
<ul>
<li>（1）增加系统变量 GDAL_DATA ，其值为 <code v-pre>C:\Program Files\GDAL\gdal-data</code></li>
<li>（2）增加系统变量 PROJ_LIB ，其值为 <code v-pre>C:\Program Files\GDAL\projlib</code></li>
<li>（3）修改 Path 变量，在 Path 值中增加 <code v-pre>C:\Program Files\GDAL;</code></li>
</ul>
<h3 id="_5-3-转换-shp-为-geojson-命令" tabindex="-1"><a class="header-anchor" href="#_5-3-转换-shp-为-geojson-命令" aria-hidden="true">#</a> 5.3. 转换 shp 为 geojson 命令</h3>
<p>org2ogr 是 OGR 模块中提供的一个重要工具，用于对数据源进行格式转换，打开 cmd 命令行，参考下面输入命令：<br />
<code v-pre>ogr2ogr　-f  + 导出格式  + 导出文件名称  + 源文件名称</code> <br />
命令（简单）：</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code>ogr2ogr  <span class="token parameter variable">-f</span>  <span class="token string">"GeoJSON"</span>   D:<span class="token punctuation">\</span><span class="token punctuation">\</span>data<span class="token punctuation">\</span><span class="token punctuation">\</span>exp.json  D:<span class="token punctuation">\</span><span class="token punctuation">\</span>data<span class="token punctuation">\</span><span class="token punctuation">\</span>企业.shp
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>命令（支持中文 + 输出 wgs84 经纬度）：</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code>ogr2ogr  <span class="token parameter variable">-lco</span> <span class="token assign-left variable">encoding</span><span class="token operator">=</span>UTF-8  <span class="token parameter variable">-f</span>  <span class="token string">"GeoJSON"</span>  <span class="token parameter variable">-t_srs</span> <span class="token string">"EPSG:4326"</span>      D:<span class="token punctuation">\</span><span class="token punctuation">\</span>data<span class="token punctuation">\</span><span class="token punctuation">\</span>exp.json  D:<span class="token punctuation">\</span><span class="token punctuation">\</span>data<span class="token punctuation">\</span><span class="token punctuation">\</span>企业.shp
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><a href="https://gdal.org/programs/ogr2ogr.html" target="_blank" rel="noopener noreferrer">GDAL 命令帮助文档<ExternalLinkIcon/></a></p>
<h2 id="_5-4-其他转换命令" tabindex="-1"><a class="header-anchor" href="#_5-4-其他转换命令" aria-hidden="true">#</a> 5.4. 其他转换命令</h2>
<p>(1)GeoJSON ==&gt; ESRI Shape <code v-pre>ogr2ogr -lco encoding=UTF-8 -f &quot;ESRI Shapefile&quot; -t_srs &quot;EPSG:4326&quot; -s_srs &quot;EPSG:4326&quot; E:\\data\\dth-xuexiao-fcfh.shp E:\\data\\dth-xuexiao-fcfh.json</code></p>
<p>(2)MapInfo ==&gt; ESRI Shape</p>
<p><code v-pre>ogr2ogr -f &quot;ESRI Shapefile&quot; mydata.shp mydata.tab</code></p>
<p>(3)ESRI Shape ==&gt;MapInfo</p>
<p><code v-pre>ogr2ogr -f &quot;MapInfo File&quot; tabsites.tab sites.shp</code></p>
<p>(4)MapInfo ==&gt; PostGIS</p>
<p><code v-pre>ogr2ogr -f &quot;PostgreSQL&quot; PG:&quot;host=localhost user=postgres dbname=postgis password=123456″</code></p>
<p>(5)postgis==&gt;ESRI Shapefile</p>
<p><code v-pre>ogr2ogr -f &quot;ESRI Shapefile&quot; mydata.shp PG:&quot;host=localhost dbname=postgis user=postgres password=123456″ &quot;mytable&quot;</code></p>
<p>(6)PostGIS ==&gt; KML <code v-pre>ogr2ogr -f &quot;KML&quot; neighborhoods.kml PG:&quot;host=localhost dbname=postgis user=postgres password=123456″ -sql &quot;select gid,name,the_geom from neighborhoods&quot;</code></p>
<p>(7)批量转换</p>
<p>将 postgis 中所有的表都导出到 mydatadump 文件夹下，导出格式是 ESRI Shapefile</p>
<p><code v-pre>ogr2ogr -f &quot;ESRI Shapefile&quot; mydatadump PG:&quot;host=myhost user=myloginname dbname=mydbname password=mypassword&quot;</code>
部分导出，将指定的表导出到 mydatadump 中，格式为 ESRI Shapefile</p>
<p><code v-pre>ogr2ogr -f &quot;ESRI Shapefile&quot; mydatadump PG:&quot;host=myhost user=myloginname dbname=mydbname password=mypassword&quot; neighborhood parcels</code></p>
<p>(8)ESRI GeoDatabase (*.mdb) ==&gt;PostGIS</p>
<p><code v-pre>ogr2ogr -f &quot;PostgreSQL&quot; PG:&quot;host=localhost user=someuser dbname=somedb password=somepassword port=5432″ C:\GISData\Geonames.mdb -a_srs EPSG:26986</code></p>
<p>导入指定的 featureclass，重投影，重命名 geometry 列</p>
<p><code v-pre>ogr2ogr -f &quot;PostgreSQL&quot; PG:&quot;host=localhost user=someuser dbname=somedb&quot; /home/postgres/Data/Geonames.mdb GEONAMES_ANNO_HYDRO -a_srs EPSG: 26986 -t_srs EPSG:4269 -nln ma_hydro -lco GEOMETRY_NAME=the_geom_4269</code></p>
<p>(9)ESRI Shapefile ==&gt;MySQL</p>
<p><code v-pre>ogr2ogr -f &quot;MySQL&quot; MYSQL:&quot;mydb,host=myhost,user=mylogin,password=mypassword,port=3306″ -nln &quot;world&quot; -a_srs &quot;EPSG:4326″ path/to/world_adm0.shp</code></p>
<p>(10)Non-spatial Data ==&gt;PostgreSQL</p>
<p><code v-pre>ogr2ogr -f &quot;PostgreSQL&quot; PG:&quot;host=myserver user=myusername dbname=mydbname password=mypassword&quot; sometable.dbf -nln &quot;sometable&quot;</code></p>
<p>下面是如何将 shp 和 tab 文件导入到 postgis 数据库中的命令方式</p>
<p><code v-pre>ogr2ogr -f PostgreSQL PG:&quot;host=localhost dbname=postgis user=postgres password=850315″ sites.shp</code></p>
<p><code v-pre>ogr2ogr -f PostgreSQL PG:&quot;host=localhost dbname=postgis user=postgres password=850315″ mytabfile.tab</code></p>
<h2 id="_6-处理操作流程完整示例" tabindex="-1"><a class="header-anchor" href="#_6-处理操作流程完整示例" aria-hidden="true">#</a> 6. 处理操作流程完整示例</h2>
<h3 id="_6-1-下载-shp-文件" tabindex="-1"><a class="header-anchor" href="#_6-1-下载-shp-文件" aria-hidden="true">#</a> 6.1 下载 shp 文件</h3>
<p>下面我们以水经微图软件下载合肥道路网为例。</p>
<p>1.选中合肥区域，选择“矢量数据”的道路网，文件格式为“shp”格式。
<img src="@source/public/image/data-geojson-1.jpg" alt="配置图"> 2.点击“确定”进入到下载界面 <br />
<img src="@source/public/image/data-geojson-2.jpg" alt="配置图"> <br /> 3.下载完成后数据结构如下所示：
<img src="@source/public/image/data-geojson-3.jpg" alt="配置图"></p>
<h3 id="_6-2-shp-格式转为-geojson" tabindex="-1"><a class="header-anchor" href="#_6-2-shp-格式转为-geojson" aria-hidden="true">#</a> 6.2 shp 格式转为 geojson</h3>
<p>下面我们以 GDAL 数据转换工具为例，转换前确保已经按上面步骤安装好 GDAL。</p>
<p>1.cdm（win + R） 打开命令窗口，进入 GDAL 的目录； 或者直接打开 GDAL 下的命令窗口
<img src="@source/public/image/data-geojson-4.jpg" alt="配置图"> 2.输入命令，进行转换 <br /></p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code>ogr2ogr <span class="token parameter variable">-lco</span> <span class="token assign-left variable">encoding</span><span class="token operator">=</span>UTF-8 <span class="token parameter variable">-f</span> <span class="token string">"GeoJSON"</span> <span class="token parameter variable">-t_srs</span> <span class="token string">"EPSG:4326"</span> D:<span class="token punctuation">\</span><span class="token punctuation">\</span>data<span class="token punctuation">\</span><span class="token punctuation">\</span>exp.json D:<span class="token punctuation">\</span><span class="token punctuation">\</span>data<span class="token punctuation">\</span><span class="token punctuation">\</span>合肥道路.shp
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>3.转换后的 json 文件如下
<img src="@source/public/image/data-geojson-5.jpg" alt="配置图"> <br /></p>
<h3 id="_6-3-发布二维数据为-http-服务" tabindex="-1"><a class="header-anchor" href="#_6-3-发布二维数据为-http-服务" aria-hidden="true">#</a> 6.3 发布二维数据为 HTTP 服务</h3>
<p>转换成功之后将.json 文件放在项目中，
或者放在独立站点服务，可以参考<RouterLink to="/data/server.html">发布地图数据服务</RouterLink>。</p>
<h3 id="_6-4-在平台中加载-geojson" tabindex="-1"><a class="header-anchor" href="#_6-4-在平台中加载-geojson" aria-hidden="true">#</a> 6.4 在平台中加载 geojson</h3>
<div style="height:410px;position:relative;" data-v-627b1480><iframe height="100%" width="100%" scrolling="yes" title="mars2d" src="http://mars2d.cn/editor-vue.html?id=layer-graphic/file/geojson&amp;full=1" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="allowfullscreen" data-v-627b1480></iframe><a class="toSee" href="http://mars2d.cn/editor-vue.html?id=layer-graphic/file/geojson&code=1" target="_blank">新窗口查看</a></div>
</div></template>


