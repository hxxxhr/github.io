import{_ as r,r as s,o as a,c as l,a as e,b as t,d as o,e as c}from"./app-a7594ec8.js";const i="/doc/assets/start-configJson-basepmap-b4291edb.jpg",d="/doc/assets/start-configJson-tile-baaa4426.jpg",_={},h=e("h3",null," config.json 配置文件说明 ",-1),p={href:"http://mars2d.cn/api/Map.html",target:"_blank",rel:"noopener noreferrer"},g=e("br",null,null,-1),u=e("code",null,"config.json",-1),f={href:"http://mars2d.cn/api/Map.html",target:"_blank",rel:"noopener noreferrer"},m=e("h2",{id:"_1-参数说明",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#_1-参数说明","aria-hidden":"true"},"#"),t(" 1.参数说明")],-1),x={href:"http://mars2d.cn/config/config.json",target:"_blank",rel:"noopener noreferrer"},b={href:"http://mars2d.cn/config/config.json",target:"_blank",rel:"noopener noreferrer"},y=e("thead",null,[e("tr",null,[e("th",{style:{"text-align":"center"}},"参数名"),e("th",{style:{"text-align":"center"}},"类型"),e("th",{style:{"text-align":"center"}},"参数API"),e("th",{style:{"text-align":"center"}},"说明")])],-1),j=e("td",{style:{"text-align":"center"}},"control",-1),k=e("td",{style:{"text-align":"center"}},"Object",-1),M={style:{"text-align":"center"}},q={href:"http://mars2d.cn/api/Map.html#.controlOptions",target:"_blank",rel:"noopener noreferrer"},w=e("td",{style:{"text-align":"center"}},"控件",-1),I=e("td",{style:{"text-align":"center"}},"basemaps",-1),O=e("td",{style:{"text-align":"center"}},"Array",-1),V={style:{"text-align":"center"}},A={href:"http://mars2d.cn/api/Map.html#.basemapOptions",target:"_blank",rel:"noopener noreferrer"},E=e("td",{style:{"text-align":"center"}},"底图图层",-1),J=e("td",{style:{"text-align":"center"}},"operationallayers",-1),N=e("td",{style:{"text-align":"center"}},"Array",-1),S={style:{"text-align":"center"}},v={href:"http://mars2d.cn/api/Map.html#.layerOptions",target:"_blank",rel:"noopener noreferrer"},z=e("td",{style:{"text-align":"center"}},"图层",-1),B=e("tr",null,[e("td",{style:{"text-align":"center"}},"……"),e("td",{style:{"text-align":"center"}},"……"),e("td",{style:{"text-align":"center"}},"……"),e("td",{style:{"text-align":"center"}},"……")],-1),D={href:"http://mars2d.cn/api/Map.html#.mapOptions",target:"_blank",rel:"noopener noreferrer"},G=c('<h2 id="_2-config-json常见修改" tabindex="-1"><a class="header-anchor" href="#_2-config-json常见修改" aria-hidden="true">#</a> 2. config.json常见修改</h2><h3 id="_2-1-修改默认初始视角" tabindex="-1"><a class="header-anchor" href="#_2-1-修改默认初始视角" aria-hidden="true">#</a> 2.1 修改默认初始视角</h3><p><code>zoom</code>和<code>center</code>参数是地图的默认层级和视角中心点配置，该参数可以通过<code>map.getView()</code>方法获取当前视角，或者从地图页面右键菜单中单击相关菜单获取当前视角后拷贝到配置文件中。</p><h3 id="_2-2-修改默认显示的底图" tabindex="-1"><a class="header-anchor" href="#_2-2-修改默认显示的底图" aria-hidden="true">#</a> 2.2 修改默认显示的底图</h3><p>修改<code>basemaps</code>数组配置中，将已有的<code>&quot;show&quot;: true</code>的图层，将该值改为<code>&quot;show&quot;: false</code> ，并将需要默认需要展示的底图加上<code>&quot;show&quot;: true</code>， <img src="'+i+'" alt="配置图"></p><blockquote><p>1.注意是否缺少逗号造成json格式错误。<br> 2.注意在basemaps数组中只保留一个&quot;show&quot;: true的图层。</p></blockquote><h3 id="_2-3-瓦片底图服务配置" tabindex="-1"><a class="header-anchor" href="#_2-3-瓦片底图服务配置" aria-hidden="true">#</a> 2.3 瓦片底图服务配置</h3><p>先在相关示例中调试加载成功(需要有一定的GIS知识储备)，再拷贝对应的参数到config.json对应节点配置中。 此问题可能产生的原因有以下几种</p>',8),P=e("li",null,"（1）服务本身没允许跨域，瓦片加载失败",-1),Z=e("li",null,'（2）坐标系非墨卡托投影，是WGS84,配置加下： "crs": "EPSG:4326",',-1),L=e("li",null,"（3）缺少0级时，需要配置 minZoom 和 maxZoom 参数",-1),C=e("img",{src:d,alt:"配置图"},null,-1),T={href:"http://mars2d.cn/editor.html?id=layer-tile/type/xyz",target:"_blank",rel:"noopener noreferrer"},W=e("code",null,"http://localhost:8888/mapdata/exp/{z}/{x}/{y}.png",-1);function X(Y,F){const n=s("ExternalLinkIcon");return a(),l("div",null,[h,e("p",null,[t("Mars2D对地图的初始化进行了封装了"),e("a",p,[t("Map地图类"),o(n)]),t("，通过传入构造参数即可方便的对地图常用功能进行初始化。 Map构造参数为了后期方便切换，与代码脱离关系，可以将构造参数存放在json配置文件或后端数据库中，按加载配置文件的方式对地图进行初始化。"),g,t(" 当前Mars2D开源的功能示例、项目模板中都是用"),u,t("来传参构造"),e("a",f,[t("Map类"),o(n)]),t("的，这种方式比较方便后期修改和扩展。因为在大部分项目中，地图初始化都是类似的，不同的是一些相关参数和图层不同，我们使用时不用关注内部实现，只用按项目按权限需求修改或使用不同的配置信息即可。")]),m,e("p",null,[t("目前平台示例和项目中使用到的是"),e("a",x,[t("config.json"),o(n)]),t("静态json文件方式 文件中配置参数与"),e("a",b,[t("mars2d.Map类"),o(n)]),t("的构造参数是完成相同一致的，代码中加载json后传入到Map类中。")]),e("table",null,[y,e("tbody",null,[e("tr",null,[j,k,e("td",M,[e("a",q,[t("参数清单"),o(n)])]),w]),e("tr",null,[I,O,e("td",V,[e("a",A,[t("参数清单"),o(n)])]),E]),e("tr",null,[J,N,e("td",S,[e("a",v,[t("参数清单"),o(n)])]),z]),B])]),e("p",null,[t("更多参数及明细请阅读"),e("a",D,[t("API文档 Map类"),o(n)])]),G,e("ul",null,[P,Z,L,e("li",null,[t("（4）最终配置时建议加下rectangle参数，去掉无效请求，提高效率。 "),C,t(" 可以在Mars2D框架中打开"),e("a",T,[t("XYZ瓦片示例页面"),o(n)]),t("，在这个页面的根据已有示例修改url地址 "),W,t("，来调试图层参数。")])])])}const K=r(_,[["render",X],["__file","configJson.html.vue"]]);export{K as default};
