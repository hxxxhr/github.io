<template><div><h1 id="接入说明文档" tabindex="-1"><a class="header-anchor" href="#接入说明文档" aria-hidden="true">#</a> 接入说明文档</h1>
<h2 id="前期准备" tabindex="-1"><a class="header-anchor" href="#前期准备" aria-hidden="true">#</a> <strong>前期准备</strong></h2>
<h3 id="_1-项目配置" tabindex="-1"><a class="header-anchor" href="#_1-项目配置" aria-hidden="true">#</a> <strong>1. 项目配置</strong></h3>
<blockquote>
<p>在接入支付中心系统之前，请先联系该系统负责人，在支付中西系统管理平台页面进行项目前期配置工作。配置流程如下：</p>
</blockquote>
<ul>
<li><strong>新增项目</strong></li>
</ul>
<blockquote>
<p>在【项目管理】-》【项目列表】页面点击 【新增项目】</p>
</blockquote>
<p><img src="http://static.zybuluo.com/Niudada-90/c5cadohwktoqv7rw640tqoqm/image_1gultp0oqa7s1fs711tmi745dr9.png" alt="image_1gultp0oqa7s1fs711tmi745dr9.png-73.1kB"></p>
<p><strong>参数说明</strong></p>
<table>
<thead>
<tr>
<th style="text-align:left">参数</th>
<th style="text-align:left">是否必填</th>
<th style="text-align:left">类型</th>
<th>说明</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:left">项目名称</td>
<td style="text-align:left">是</td>
<td style="text-align:left">string</td>
<td>对接外部项目的项目中文名称</td>
</tr>
<tr>
<td style="text-align:left">项目代码</td>
<td style="text-align:left">是</td>
<td style="text-align:left">string</td>
<td>大写的英文字母(建议中文名首字母缩写【例如:CMW(采蜜网)】)</td>
</tr>
<tr>
<td style="text-align:left">项目状态</td>
<td style="text-align:left">是</td>
<td style="text-align:left">string</td>
<td>默认值为 1(上线) 0(下线)</td>
</tr>
<tr>
<td style="text-align:left">支付通知Url</td>
<td style="text-align:left">否</td>
<td style="text-align:left">string</td>
<td>该Url为对接项目的付款通知Url</td>
</tr>
<tr>
<td style="text-align:left">退款通知Url</td>
<td style="text-align:left">否</td>
<td style="text-align:left">string</td>
<td>该Url为对接项目的退款通知Url</td>
</tr>
<tr>
<td style="text-align:left">项目IP白名单</td>
<td style="text-align:left">否</td>
<td style="text-align:left">string</td>
<td>对接项目的服务器IP白名单列表,用;分开 例如【192.168.0.1;】</td>
</tr>
</tbody>
</table>
<p><strong>创建</strong></p>
<blockquote>
<p>点击【创建】 系统后台会自动为该项目生成一对RSA的公钥和私钥，用于外部项目和支付中心系统接口交互加密签名使用。</p>
</blockquote>
<p><strong>备注</strong></p>
<blockquote>
<p>密钥应为支付中心系统负责人 私下 交给对接项目负责人【只交付公钥】，由对接项目负责人单独保管</p>
</blockquote>
<hr>
<h2 id="接入使用" tabindex="-1"><a class="header-anchor" href="#接入使用" aria-hidden="true">#</a> <strong>接入使用</strong></h2>
<blockquote>
<p>目前演示为<strong>接口调用</strong>方式进行支付交互,外部项目通过调用 支付中心系统 webapi方式进行整个支付流程的交互</p>
</blockquote>
<blockquote>
<p>BaseUrl:<a href="localhost:8081/api/Order">https://www.1caimi.com/xdData/xdDataManage.ashx?XAction=GetDataInterface&amp;XDLMCID=11001&amp;XDLMTID=11001001</a></p>
</blockquote>
<h3 id="_1-请求下单" tabindex="-1"><a class="header-anchor" href="#_1-请求下单" aria-hidden="true">#</a> <strong>1. 请求下单</strong></h3>
<table>
<thead>
<tr>
<th style="text-align:left">描述</th>
<th style="text-align:left">说明</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:left">接口功能描述</td>
<td style="text-align:left">当外部系统需要调起支付 显示支付二维码的时候，调用该接口</td>
</tr>
<tr>
<td style="text-align:left">URL</td>
<td style="text-align:left"><a href="localhost:8081/api/Order">&amp;XDLMDID=001&amp;XKLX_APPID=27208914&amp;XKLX=MPAY</a></td>
</tr>
<tr>
<td style="text-align:left">支持格式</td>
<td style="text-align:left">JSON</td>
</tr>
<tr>
<td style="text-align:left">请求方式</td>
<td style="text-align:left">POST</td>
</tr>
</tbody>
</table>
<p><strong>请求参数</strong></p>
<table>
<thead>
<tr>
<th style="text-align:left">参数</th>
<th style="text-align:left">必选</th>
<th style="text-align:left">类型</th>
<th>说明</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:left">ProjectCode</td>
<td style="text-align:left">ture</td>
<td style="text-align:left">string</td>
<td>项目代码</td>
</tr>
<tr>
<td style="text-align:left">Sign</td>
<td style="text-align:left">ture</td>
<td style="text-align:left">string</td>
<td>签名</td>
</tr>
</tbody>
</table>
<p><strong>请求参数示例</strong></p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>    {
        "ProjectCode": "CMW"
        "Sign": "Ja+0scOBhyQm0QAly3zpz/BuupZnvrKsUZUuUdWfcA4Pta5iC4cEow=="
    }
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote>
<p>备注：签名生成规则如下
默认【对接项目订单号#商品名称#付款金额#订单备注#请求IP】通过#连接 然后用项目公钥进行AES加密
下单参数可以由对接项目和支付中心系统 商定确认
例如:【CMW20230423120001#测试商品#0.01#测试订单#192.168.0.1】</p>
</blockquote>
<p><strong>返回字段</strong></p>
<table>
<thead>
<tr>
<th style="text-align:left">返回字段</th>
<th style="text-align:left">字段类型</th>
<th style="text-align:left">说明</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:left">code</td>
<td style="text-align:left">string</td>
<td style="text-align:left">返回代码</td>
</tr>
<tr>
<td style="text-align:left">success</td>
<td style="text-align:left">bool</td>
<td style="text-align:left">调用是否成功</td>
</tr>
<tr>
<td style="text-align:left">message</td>
<td style="text-align:left">string</td>
<td style="text-align:left">返回信息</td>
</tr>
</tbody>
</table>
<p><strong>返回示例</strong></p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>    {
      "code": "WaitPay",
      "success": true,
      "message": "weixin://wxpay/bizpayurl?pr=ecdyQuUzz"
    }
    {
      "code": "IllegalRequest",
      "success": false,
      "message": "非法请求"
    }
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>返回结果说明</strong></p>
<blockquote>
<p>当下单成功后，返回结果字段【mesage】会返回微信支付链接地址，对接项目拿到链接地址生成二维码返回给前端页面，以供用户扫码支付
当下单失败时，返回结果字段【message】会返回下单失败的提示信息，可供对接项目提示或者进行判断处理</p>
</blockquote>
<hr>
<h3 id="_2-订单查询" tabindex="-1"><a class="header-anchor" href="#_2-订单查询" aria-hidden="true">#</a> <strong>2. 订单查询</strong></h3>
<table>
<thead>
<tr>
<th style="text-align:left">描述</th>
<th style="text-align:left">说明</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:left">接口功能描述</td>
<td style="text-align:left">该接口提供了外部项目可以主动查询 付款订单的进度</td>
</tr>
<tr>
<td style="text-align:left">URL</td>
<td style="text-align:left"><a href="localhost:8081">&amp;XDLMDID=002&amp;XKLX_APPID=27208914&amp;XKLX=MPAY</a></td>
</tr>
<tr>
<td style="text-align:left">支持格式</td>
<td style="text-align:left">JSON</td>
</tr>
<tr>
<td style="text-align:left">请求方式</td>
<td style="text-align:left">GET</td>
</tr>
</tbody>
</table>
<p><strong>请求参数</strong></p>
<table>
<thead>
<tr>
<th style="text-align:left">参数</th>
<th style="text-align:left">必选</th>
<th style="text-align:left">类型</th>
<th>说明</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:left">ProjectCode</td>
<td style="text-align:left">是</td>
<td style="text-align:left">string</td>
<td>项目代码</td>
</tr>
<tr>
<td style="text-align:left">Sign</td>
<td style="text-align:left">是</td>
<td style="text-align:left">string</td>
<td>支付结果说明</td>
</tr>
</tbody>
</table>
<p><strong>请求参数示例</strong></p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>    {
        "ProjectCode": "CMW"
        "Sign": "Ja+0scOBhyQm0QAly3zpz/BuupZnvrKsUZUuUdWfcA4Pta5iC4cEow=="
    }
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote>
<p>备注：签名生成规则如下
默认由【订单ID】用项目私钥进行AES加密
例如:【CMW20230423120001】
特殊通知参数可以由对接项目和支付中心系统 商定确认</p>
</blockquote>
<p><strong>返回字段</strong></p>
<table>
<thead>
<tr>
<th style="text-align:left">返回字段</th>
<th style="text-align:left">字段类型</th>
<th style="text-align:left">说明</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:left">code</td>
<td style="text-align:left">string</td>
<td style="text-align:left">返回代码</td>
</tr>
<tr>
<td style="text-align:left">success</td>
<td style="text-align:left">bool</td>
<td style="text-align:left">调用是否成功</td>
</tr>
<tr>
<td style="text-align:left">message</td>
<td style="text-align:left">string</td>
<td style="text-align:left">返回信息</td>
</tr>
</tbody>
</table>
<p><strong>返回示例</strong></p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>    {
      "code": "PaySuccess",
      "success": true,
      "message": "支付成功"
    }
    {
      "code": "PayFail",
      "success": false,
      "message": "支付失败"
    }
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3-请求退款" tabindex="-1"><a class="header-anchor" href="#_3-请求退款" aria-hidden="true">#</a> <strong>3. 请求退款</strong></h3>
<table>
<thead>
<tr>
<th style="text-align:left">描述</th>
<th style="text-align:left">说明</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:left">接口功能描述</td>
<td style="text-align:left">当外部系统需要发起退款请求时，调用该接口</td>
</tr>
<tr>
<td style="text-align:left">URL</td>
<td style="text-align:left"><a href="localhost:8081">&amp;XDLMDID=003&amp;XKLX_APPID=27208914&amp;XKLX=MPAY</a></td>
</tr>
<tr>
<td style="text-align:left">支持格式</td>
<td style="text-align:left">JSON</td>
</tr>
<tr>
<td style="text-align:left">请求方式</td>
<td style="text-align:left">POST</td>
</tr>
</tbody>
</table>
<p><strong>请求参数</strong></p>
<table>
<thead>
<tr>
<th style="text-align:left">参数</th>
<th style="text-align:left">必选</th>
<th style="text-align:left">类型</th>
<th>说明</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:left">ProjectCode</td>
<td style="text-align:left">ture</td>
<td style="text-align:left">string</td>
<td>项目代码</td>
</tr>
<tr>
<td style="text-align:left">Sign</td>
<td style="text-align:left">ture</td>
<td style="text-align:left">string</td>
<td>签名</td>
</tr>
</tbody>
</table>
<p><strong>请求参数示例</strong></p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>    {
        "ProjectCode": "CMW"
        "Sign": "Ja+0scOBhyQm0QAly3zpz/BuupZnvrKsUZUuUdWfcA4Pta5iC4cEow=="
    }
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote>
<p>备注：签名生成规则如下
默认【订单号#退款原因#请求IP】通过#连接 然后用项目私钥进行AES加密
下单参数可以由对接项目和支付中心系统 商定确认
例如:【CMW20230423120001#测试退款#192.168.0.1】</p>
</blockquote>
<p><strong>返回字段</strong></p>
<table>
<thead>
<tr>
<th style="text-align:left">返回字段</th>
<th style="text-align:left">字段类型</th>
<th style="text-align:left">说明</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:left">code</td>
<td style="text-align:left">string</td>
<td style="text-align:left">返回代码</td>
</tr>
<tr>
<td style="text-align:left">success</td>
<td style="text-align:left">bool</td>
<td style="text-align:left">调用是否成功</td>
</tr>
<tr>
<td style="text-align:left">message</td>
<td style="text-align:left">string</td>
<td style="text-align:left">返回信息</td>
</tr>
</tbody>
</table>
<p><strong>返回示例</strong></p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>    {
      "code": "WaitRefund",
      "success": true,
      "message": "退款申请成功,到账请耐心等待"
    }
    {
      "code": "IllegalRequest",
      "success": false,
      "message": "非法请求"
    }
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_4-查询退款" tabindex="-1"><a class="header-anchor" href="#_4-查询退款" aria-hidden="true">#</a> <strong>4. 查询退款</strong></h3>
<table>
<thead>
<tr>
<th style="text-align:left">描述</th>
<th style="text-align:left">说明</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:left">接口功能描述</td>
<td style="text-align:left">该接口提供了外部项目可以主动查询 退款订单的进度</td>
</tr>
<tr>
<td style="text-align:left">URL</td>
<td style="text-align:left"><a href="localhost:8081">&amp;XDLMDID=004&amp;XKLX_APPID=27208914&amp;XKLX=MPAY</a></td>
</tr>
<tr>
<td style="text-align:left">支持格式</td>
<td style="text-align:left">JSON</td>
</tr>
<tr>
<td style="text-align:left">请求方式</td>
<td style="text-align:left">GET</td>
</tr>
</tbody>
</table>
<p><strong>请求参数</strong></p>
<table>
<thead>
<tr>
<th style="text-align:left">参数</th>
<th style="text-align:left">必选</th>
<th style="text-align:left">类型</th>
<th>说明</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:left">ProjectCode</td>
<td style="text-align:left">是</td>
<td style="text-align:left">string</td>
<td>项目代码</td>
</tr>
<tr>
<td style="text-align:left">Sign</td>
<td style="text-align:left">是</td>
<td style="text-align:left">string</td>
<td>支付结果说明</td>
</tr>
</tbody>
</table>
<p><strong>请求参数示例</strong></p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>    {
        "ProjectCode": "CMW"
        "Sign": "Ja+0scOBhyQm0QAly3zpz/BuupZnvrKsUZUuUdWfcA4Pta5iC4cEow=="
    }
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote>
<p>备注：签名生成规则如下
默认由【订单ID】用项目私钥进行AES加密
例如:【CMW20230423120001】
特殊通知参数可以由对接项目和支付中心系统 商定确认</p>
</blockquote>
<p><strong>返回字段</strong></p>
<table>
<thead>
<tr>
<th style="text-align:left">返回字段</th>
<th style="text-align:left">字段类型</th>
<th style="text-align:left">说明</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:left">code</td>
<td style="text-align:left">string</td>
<td style="text-align:left">返回代码</td>
</tr>
<tr>
<td style="text-align:left">success</td>
<td style="text-align:left">bool</td>
<td style="text-align:left">调用是否成功</td>
</tr>
<tr>
<td style="text-align:left">message</td>
<td style="text-align:left">string</td>
<td style="text-align:left">返回信息</td>
</tr>
</tbody>
</table>
<p><strong>返回示例</strong></p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>    {
      "code": "RefundSuccess",
      "success": true,
      "message": "退款成功"
    }
    {
      "code": "RefundFail",
      "success": false,
      "message": "退款失败"
    }
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></template>


