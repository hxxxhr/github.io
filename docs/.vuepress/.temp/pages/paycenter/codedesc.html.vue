<template><div><h1 id="源代码说明" tabindex="-1"><a class="header-anchor" href="#源代码说明" aria-hidden="true">#</a> 源代码说明</h1>
<hr>
<p><img src="http://static.zybuluo.com/Niudada-90/sh2flphq4890ddzh374bp85i/微信图片_20230509105830.png" alt="微信图片_20230509105830.png-18.1kB"></p>
<hr>
<h2 id="october-paycenter" tabindex="-1"><a class="header-anchor" href="#october-paycenter" aria-hidden="true">#</a> October.PayCenter</h2>
<blockquote>
<p>【主程序】</p>
</blockquote>
<h3 id="main" tabindex="-1"><a class="header-anchor" href="#main" aria-hidden="true">#</a> Main</h3>
<blockquote>
<p>主调函数，调用时由主库根据编号分配调用函数
调用URL【https://www.1caimi.com/xdData/xdDataManage.ashx】</p>
</blockquote>
<p>【XDLMDID】编号对应关系</p>
<ul>
<li>[ ] 001 请求下单</li>
<li>[ ] 002 查询订单进度</li>
<li>[ ] 003 请求退款</li>
<li>[ ] 004 查询退款进度</li>
</ul>
<h3 id="paycallback" tabindex="-1"><a class="header-anchor" href="#paycallback" aria-hidden="true">#</a> PayCallback</h3>
<blockquote>
<p>【支付回调类】专属URL调用【https://www.1caimi.com/api/Notify/Pay】</p>
</blockquote>
<h3 id="refundcallback" tabindex="-1"><a class="header-anchor" href="#refundcallback" aria-hidden="true">#</a> RefundCallback</h3>
<blockquote>
<p>【退款回调类】专属URL调用【https://www.1caimi.com/api/Refund/Pay】</p>
</blockquote>
<h3 id="service文件夹" tabindex="-1"><a class="header-anchor" href="#service文件夹" aria-hidden="true">#</a> Service文件夹</h3>
<blockquote>
<p>【Service预检查】</p>
<ul>
<li>Notify【封装对支付通知和退款通知的验签及核心方法调用】</li>
<li>Order【封装对下单和查询订单的核心方法调用】</li>
<li>Refund【封装对申请退款和查询退款进度的核心方法调用】</li>
</ul>
</blockquote>
<hr>
<h2 id="october-paycenter-common" tabindex="-1"><a class="header-anchor" href="#october-paycenter-common" aria-hidden="true">#</a> October.PayCenter.Common</h2>
<blockquote>
<p>【通用层】</p>
</blockquote>
<h3 id="commonhelp" tabindex="-1"><a class="header-anchor" href="#commonhelp" aria-hidden="true">#</a> CommonHelp</h3>
<blockquote>
<p>【通用帮助类】</p>
</blockquote>
<h3 id="rsahelp" tabindex="-1"><a class="header-anchor" href="#rsahelp" aria-hidden="true">#</a> RSAHelp</h3>
<blockquote>
<p>【RSA密钥帮助类 包含密钥生成，加解密，密钥格式化等】</p>
</blockquote>
<h3 id="snowflake" tabindex="-1"><a class="header-anchor" href="#snowflake" aria-hidden="true">#</a> SnowFlake</h3>
<blockquote>
<p>【雪花ID类 生成订单ID, 数据唯一ID】</p>
</blockquote>
<h3 id="systemenum" tabindex="-1"><a class="header-anchor" href="#systemenum" aria-hidden="true">#</a> SystemEnum</h3>
<blockquote>
<p>系统枚举类【包含支付类型，订单状态，通用状态，请求返回Code，日志类型等枚举】</p>
</blockquote>
<hr>
<h2 id="october-paycenter-repository" tabindex="-1"><a class="header-anchor" href="#october-paycenter-repository" aria-hidden="true">#</a> October.PayCenter.Repository</h2>
<blockquote>
<p>数据仓储层【基于SqlSugar 框架】</p>
</blockquote>
<h3 id="dbmodel" tabindex="-1"><a class="header-anchor" href="#dbmodel" aria-hidden="true">#</a> DBModel</h3>
<blockquote>
<p>【数据库表对应实体】</p>
</blockquote>
<h3 id="repository" tabindex="-1"><a class="header-anchor" href="#repository" aria-hidden="true">#</a> Repository</h3>
<blockquote>
<p>【表仓储类】</p>
</blockquote>
<h3 id="dbinit" tabindex="-1"><a class="header-anchor" href="#dbinit" aria-hidden="true">#</a> DBInit</h3>
<blockquote>
<p>【数据库初始化】目前适用【DBFrist】模式, 后期项目迁移可以单独调用【CodeFrist】</p>
</blockquote>
<h3 id="repository-1" tabindex="-1"><a class="header-anchor" href="#repository-1" aria-hidden="true">#</a> Repository</h3>
<blockquote>
<p>【仓储基类】</p>
</blockquote>
<h3 id="sqlsugarhelper" tabindex="-1"><a class="header-anchor" href="#sqlsugarhelper" aria-hidden="true">#</a> SqlSugarHelper</h3>
<blockquote>
<p>【SqlSugar帮助类】</p>
</blockquote>
<hr>
<h2 id="october-paycenter-service" tabindex="-1"><a class="header-anchor" href="#october-paycenter-service" aria-hidden="true">#</a> October.PayCenter.Service</h2>
<blockquote>
<p>【服务核心逻辑层】</p>
</blockquote>
<h3 id="service文件夹-1" tabindex="-1"><a class="header-anchor" href="#service文件夹-1" aria-hidden="true">#</a> Service文件夹</h3>
<h4 id="notifyservice" tabindex="-1"><a class="header-anchor" href="#notifyservice" aria-hidden="true">#</a> NotifyService</h4>
<blockquote>
<p>【通知核心类】</p>
<ul>
<li>PayNotify【支付通知】</li>
</ul>
</blockquote>
<p>核心逻辑步骤：</p>
<ol>
<li>是否重复通知</li>
<li>判断接收到的通知 付款状态</li>
<li>有没有异常订单</li>
<li>标记异常，正常，失败的订单状态</li>
<li>更新订单</li>
<li>通知外部系统</li>
<li>是否通知成功</li>
<li>处理结束</li>
</ol>
<blockquote>
<ul>
<li>RefundNotify【退款通知】</li>
</ul>
</blockquote>
<p>【逻辑流程如下】</p>
<div class="language-flow line-numbers-mode" data-ext="flow"><pre v-pre class="language-flow"><code>st<span class="token operator">=></span>start<span class="token operator">:</span> 收到通知
cond1<span class="token operator">=></span>condition<span class="token operator">:</span> 是否重复通知
op1<span class="token operator">=></span>operation<span class="token operator">:</span> 处理订单<span class="token punctuation">,</span>更新订单状态
op2<span class="token operator">=></span>operation<span class="token operator">:</span> 通知外部系统
e<span class="token operator">=></span>end<span class="token operator">:</span> 处理完成

st<span class="token operator">-</span><span class="token operator">></span>cond1
<span class="token function">cond1</span><span class="token punctuation">(</span>no<span class="token punctuation">)</span><span class="token operator">-</span><span class="token operator">></span>e
<span class="token function">cond1</span><span class="token punctuation">(</span>yes<span class="token punctuation">)</span><span class="token operator">-</span><span class="token operator">></span>op1<span class="token operator">-</span><span class="token operator">></span>op2<span class="token operator">-</span><span class="token operator">></span>e
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="orderservice" tabindex="-1"><a class="header-anchor" href="#orderservice" aria-hidden="true">#</a> OrderService</h4>
<blockquote>
<p>【订单核心类】</p>
<ul>
<li>Order 【下单操作】</li>
</ul>
</blockquote>
<p>下单需要验证和操作步骤：</p>
<ol>
<li>项目是否存在</li>
<li>项目状态是否下线</li>
<li>解密参数</li>
<li>加密IP和请求IP是否一致</li>
<li>金额是否规范</li>
<li>验证项目IP白名单</li>
<li>项目和支付配置绑定关系</li>
<li>重复下单判断是否在有效期</li>
<li>超过有效期关闭订单</li>
<li>订单入库【状态为初始化】</li>
<li>调用封装接口请求下单获取下单链接</li>
<li>更新订单【状态为下单成功】</li>
</ol>
<blockquote>
<ul>
<li>Query 【查询操作】</li>
</ul>
</blockquote>
<h4 id="projectconfigservice" tabindex="-1"><a class="header-anchor" href="#projectconfigservice" aria-hidden="true">#</a> ProjectConfigService</h4>
<blockquote>
<p>【项目配置类】</p>
<ul>
<li>Add【添加项目】</li>
<li>PageQuery【查询项目】</li>
</ul>
</blockquote>
<h4 id="refundservice" tabindex="-1"><a class="header-anchor" href="#refundservice" aria-hidden="true">#</a> RefundService</h4>
<blockquote>
<p>【退款核心类】</p>
<ul>
<li>ApplyRefund【申请退款】</li>
</ul>
</blockquote>
<p>核心逻辑步骤：</p>
<ol>
<li>判断项目状态</li>
<li>解密参数</li>
<li>判断IP</li>
<li>判断项目支付配置关系</li>
<li>判断申请退款的订单是否满足退款条件
【没有支付成功不予退款】
【支付时间超过一年的不予退款】</li>
<li>入库【退款表】</li>
<li>调用退款接口申请退款</li>
<li>申请成功更新订单状态【正在退款中】</li>
</ol>
<blockquote>
<ul>
<li>QueryRefundProgress【查询退款进度】
返回 退款表中订单状态【退款通知会实时更新该状态】</li>
</ul>
</blockquote>
<h4 id="syslogservice" tabindex="-1"><a class="header-anchor" href="#syslogservice" aria-hidden="true">#</a> SysLogService</h4>
<blockquote>
<p>【日志核心类】
记录普通，错误，异常，请求日志</p>
</blockquote>
<h3 id="wechatpay" tabindex="-1"><a class="header-anchor" href="#wechatpay" aria-hidden="true">#</a> WeChatPay</h3>
<blockquote>
<p>【微信封装类】</p>
</blockquote>
<p>包括：</p>
<ul>
<li>[ ] 创建二维码支付订单</li>
<li>[ ] 查询订单</li>
<li>[ ] 关闭订单</li>
<li>[ ] 获取平台证书公钥</li>
<li>[ ] 申请退款</li>
<li>[ ] 查询退款</li>
</ul>
<h2 id="october-paycenter-testapi" tabindex="-1"><a class="header-anchor" href="#october-paycenter-testapi" aria-hidden="true">#</a> October.PayCenter.TestApi</h2>
<blockquote>
<p>【测试October.PayCenter】</p>
</blockquote>
<h2 id="october-paycenter-webapi" tabindex="-1"><a class="header-anchor" href="#october-paycenter-webapi" aria-hidden="true">#</a> October.PayCenter.WebApi</h2>
<blockquote>
<p>【演示WebApi项目】</p>
</blockquote>
</div></template>


