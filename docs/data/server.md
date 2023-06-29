---
title: 发布地图数据服务
date: 2022-09-22 15:39:13
---

 <h3> 发布地图数据服务</h3>

通过数据处理的流程我们大概了解了目前二维相关的影像、地形、模型都是瓦片形式的静态资源文件，如果我们需要发布为服务，只需要通过 HTTP 方式发布后，平台即可调用。

## 1. Nginx 软件安装

如果您服务器已安装有其他可以发布 web 前端静态资源的 http 容器，可以跳过此步骤，直接按您说熟悉的技术路线发布网站，如 IIS、Tomcat、NodeJS 等均可。

### 1.1 解压 nginx.rar 至 D 盘根目录，解压后效果如下

[nginx 下载地址](data.mars2d.cn/tool/nginx.rar)

### 1.2 安装注册至 window 服务

打开电脑自动启动服务，打开“命令说明.txt”复制`nginx-service.exe install`命令进行安装操作。

 - 如果没有放在 D 盘根目录，修改`nginx-service.xml`里的目录路径为实际安装路径。
 - 默认端口为 80，如有冲突请修改`nginx\conf\host\localhsot_80.conf`文件 <br />
如果不需要注册 window 服务，单次启动输入`start nginx`命令即可。

### 1.3 启动 nginx 服务

通过 window 服务中启动 nginx 服务，访问`http://localhost/`校验服务是否正常启动。
![配置图][1]

## 2. 二维数据发布

下载[mars2d-data 示例数据]()放在电脑的`D:\mars2d-data\`目录，<br />
如果需要放其他盘或其他目录时参考已有配置修改`nginx\conf\host\localhsot_80.conf`配置即可。<br />
`D:\mars2d-data\`中可以按数据类型分子目录后放各类数据。<br />
![配置图][2]

### 1.1 将各种工具处理后的数据放在目录中即可

我们已示例数据中标绘数据 `D:\mars2d-data\file\geojson\mars2d-draw.json`为例做讲解。

我们将 mars2d-draw.json 标绘数据，放在`D:\mars2d-data\`子目录后， 文件路径为`D:\mars2d-data\file\geojson\mars2d-draw.json`

### 1.2 Nginx 启动后服务就自动发布好了

对应的服务 url 地址为[http://localhost/mars2d-data/file/geojson/mars2d-draw.json](http://localhost/mars2d-data/file/geojson/mars2d-draw.json)可以测试任意一个文件，如果浏览器可以正常访问，说明服务是发布成功的。
![配置图][3]

## 1.3 对应代码中测试服务 URL

- XYZ 底图时：可以参考教程[加载 XYZ 数据步骤]()

[1]: ../public/image/data-server-nginx.jpg
[2]: ../public/image/data-server-path.jpg
[3]: ../public/image/data-server-demo.jpg
