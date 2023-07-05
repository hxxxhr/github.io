import{_ as a,a as r,b as l}from"./liulan-531c46a6.js";import{_ as c,r as i,o as d,c as _,a as t,b as e,d as o,e as s}from"./app-0bc0dfa9.js";const h="/doc/assets/start-configJson-basepmap-b4291edb.jpg",p="/doc/assets/start-configJson-tile-baaa4426.jpg",g={},m=s('<h3> config.json 配置文件说明 </h3><img class="images" src="'+a+'" alt="来自依赖包的图片"><i class="text">Mars2D</i><img class="imagess" src="'+r+'" alt="来自依赖包的图片"><i class="text">30/6/2023</i><img class="imagess" src="'+l+'" alt="来自依赖包的图片"><i class="text">0</i>',7),f={href:"http://mars2d.cn/api/Map.html",target:"_blank",rel:"noopener noreferrer"},u=t("br",null,null,-1),x=t("code",null,"config.json",-1),b={href:"http://mars2d.cn/api/Map.html",target:"_blank",rel:"noopener noreferrer"},y=t("h2",{id:"_1-参数说明",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#_1-参数说明","aria-hidden":"true"},"#"),e(" 1.参数说明")],-1),j={href:"http://mars2d.cn/config/config.json",target:"_blank",rel:"noopener noreferrer"},M={href:"http://mars2d.cn/config/config.json",target:"_blank",rel:"noopener noreferrer"},k=t("thead",null,[t("tr",null,[t("th",{style:{"text-align":"center"}},"参数名"),t("th",{style:{"text-align":"center"}},"类型"),t("th",{style:{"text-align":"center"}},"参数 API"),t("th",{style:{"text-align":"center"}},"说明")])],-1),q=t("td",{style:{"text-align":"center"}},"control",-1),w=t("td",{style:{"text-align":"center"}},"Object",-1),I={style:{"text-align":"center"}},O={href:"http://mars2d.cn/api/Map.html#.controlOptions",target:"_blank",rel:"noopener noreferrer"},V=t("td",{style:{"text-align":"center"}},"控件",-1),A=t("td",{style:{"text-align":"center"}},"basemaps",-1),D=t("td",{style:{"text-align":"center"}},"Array",-1),E={style:{"text-align":"center"}},J={href:"http://mars2d.cn/api/Map.html#.basemapOptions",target:"_blank",rel:"noopener noreferrer"},N=t("td",{style:{"text-align":"center"}},"底图图层",-1),S=t("td",{style:{"text-align":"center"}},"operationallayers",-1),v=t("td",{style:{"text-align":"center"}},"Array",-1),z={style:{"text-align":"center"}},B={href:"http://mars2d.cn/api/Map.html#.layerOptions",target:"_blank",rel:"noopener noreferrer"},G=t("td",{style:{"text-align":"center"}},"图层",-1),P=t("tr",null,[t("td",{style:{"text-align":"center"}},"……"),t("td",{style:{"text-align":"center"}},"……"),t("td",{style:{"text-align":"center"}},"……"),t("td",{style:{"text-align":"center"}},"……")],-1),Z={href:"http://mars2d.cn/api/Map.html#.mapOptions",target:"_blank",rel:"noopener noreferrer"},L=s('<h2 id="_2-config-json-常见修改" tabindex="-1"><a class="header-anchor" href="#_2-config-json-常见修改" aria-hidden="true">#</a> 2. config.json 常见修改</h2><h3 id="_2-1-修改默认初始视角" tabindex="-1"><a class="header-anchor" href="#_2-1-修改默认初始视角" aria-hidden="true">#</a> 2.1 修改默认初始视角</h3><p><code>zoom</code>和<code>center</code>参数是地图的默认层级和视角中心点配置，该参数可以通过<code>map.getView()</code>方法获取当前视角，或者从地图页面右键菜单中单击相关菜单获取当前视角后拷贝到配置文件中。</p><h3 id="_2-2-修改默认显示的底图" tabindex="-1"><a class="header-anchor" href="#_2-2-修改默认显示的底图" aria-hidden="true">#</a> 2.2 修改默认显示的底图</h3><p>修改<code>basemaps</code>数组配置中，将已有的<code>&quot;show&quot;: true</code>的图层，将该值改为<code>&quot;show&quot;: false</code> ，并将需要默认需要展示的底图加上<code>&quot;show&quot;: true</code>， <img src="'+h+'" alt="配置图"></p><blockquote><p>1.注意是否缺少逗号造成 json 格式错误。<br> 2.注意在 basemaps 数组中只保留一个&quot;show&quot;: true 的图层。</p></blockquote><h3 id="_2-3-瓦片底图服务配置" tabindex="-1"><a class="header-anchor" href="#_2-3-瓦片底图服务配置" aria-hidden="true">#</a> 2.3 瓦片底图服务配置</h3><p>先在相关示例中调试加载成功(需要有一定的 GIS 知识储备)，再拷贝对应的参数到 config.json 对应节点配置中。 此问题可能产生的原因有以下几种</p>',8),C=t("li",null,"（1）服务本身没允许跨域，瓦片加载失败",-1),T=t("li",null,'（2）坐标系非墨卡托投影，是 WGS84,配置加下： "crs": "EPSG:4326",',-1),W=t("li",null,"（3）缺少 0 级时，需要配置 minZoom 和 maxZoom 参数",-1),X=t("img",{src:p,alt:"配置图"},null,-1),Y={href:"http://mars2d.cn/editor.html?id=layer-tile/type/xyz",target:"_blank",rel:"noopener noreferrer"},F=t("code",null,"http://localhost:8888/mapdata/exp/{z}/{x}/{y}.png",-1);function H(K,Q){const n=i("ExternalLinkIcon");return d(),_("div",null,[m,t("p",null,[e("Mars2D 对地图的初始化进行了封装了"),t("a",f,[e("Map 地图类"),o(n)]),e("，通过传入构造参数即可方便的对地图常用功能进行初始化。 Map 构造参数为了后期方便切换，与代码脱离关系，可以将构造参数存放在 json 配置文件或后端数据库中，按加载配置文件的方式对地图进行初始化。"),u,e(" 当前 Mars2D 开源的功能示例、项目模板中都是用"),x,e("来传参构造"),t("a",b,[e("Map 类"),o(n)]),e("的，这种方式比较方便后期修改和扩展。因为在大部分项目中，地图初始化都是类似的，不同的是一些相关参数和图层不同，我们使用时不用关注内部实现，只用按项目按权限需求修改或使用不同的配置信息即可。")]),y,t("p",null,[e("目前平台示例和项目中使用到的是"),t("a",j,[e("config.json"),o(n)]),e("静态 json 文件方式 文件中配置参数与"),t("a",M,[e("mars2d.Map 类"),o(n)]),e("的构造参数是完成相同一致的，代码中加载 json 后传入到 Map 类中。")]),t("table",null,[k,t("tbody",null,[t("tr",null,[q,w,t("td",I,[t("a",O,[e("参数清单"),o(n)])]),V]),t("tr",null,[A,D,t("td",E,[t("a",J,[e("参数清单"),o(n)])]),N]),t("tr",null,[S,v,t("td",z,[t("a",B,[e("参数清单"),o(n)])]),G]),P])]),t("p",null,[e("更多参数及明细请阅读"),t("a",Z,[e("API 文档 Map 类"),o(n)])]),L,t("ul",null,[C,T,W,t("li",null,[e("（4）最终配置时建议加下 rectangle 参数，去掉无效请求，提高效率。 "),X,e(" 可以在 Mars2D 框架中打开"),t("a",Y,[e("XYZ 瓦片示例页面"),o(n)]),e("，在这个页面的根据已有示例修改 url 地址 "),F,e("，来调试图层参数。")])])])}const $=c(g,[["render",H],["__file","configJson.html.vue"]]);export{$ as default};
