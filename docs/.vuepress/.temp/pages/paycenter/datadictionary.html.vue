<template><div><h1 id="数据字典" tabindex="-1"><a class="header-anchor" href="#数据字典" aria-hidden="true">#</a> 数据字典</h1>
<h2 id="订单交易表" tabindex="-1"><a class="header-anchor" href="#订单交易表" aria-hidden="true">#</a> 订单交易表</h2>
<blockquote>
<p>表名【order_transaction】</p>
</blockquote>
<table>
<thead>
<tr>
<th style="text-align:left">列名</th>
<th style="text-align:left">字段类型</th>
<th style="text-align:left">是否为空</th>
<th style="text-align:left">备注说明</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:left">id</td>
<td style="text-align:left">int</td>
<td style="text-align:left">NOT NULL</td>
<td style="text-align:left">自增编号</td>
</tr>
<tr>
<td style="text-align:left">order_no</td>
<td style="text-align:left">varchar(50)</td>
<td style="text-align:left">NOT NULL</td>
<td style="text-align:left">订单号[交易系统内部订单号]</td>
</tr>
<tr>
<td style="text-align:left">outside_order_no</td>
<td style="text-align:left">varchar(50)</td>
<td style="text-align:left">NOT NULL</td>
<td style="text-align:left">项目订单号</td>
</tr>
<tr>
<td style="text-align:left">project_code</td>
<td style="text-align:left">varchar(50)</td>
<td style="text-align:left">NOT NULL</td>
<td style="text-align:left">项目Code</td>
</tr>
<tr>
<td style="text-align:left">pay_type</td>
<td style="text-align:left">varchar(50)</td>
<td style="text-align:left">NOT NULL</td>
<td style="text-align:left">支付方式:WX</td>
</tr>
<tr>
<td style="text-align:left">transaction_id</td>
<td style="text-align:left">varchar(50)</td>
<td style="text-align:left">NULL</td>
<td style="text-align:left">支付交易订单号</td>
</tr>
<tr>
<td style="text-align:left">order_status</td>
<td style="text-align:left">int</td>
<td style="text-align:left">NOT NULL</td>
<td style="text-align:left">订单状态</td>
</tr>
<tr>
<td style="text-align:left">goods_name</td>
<td style="text-align:left">varchar(200)</td>
<td style="text-align:left">NOT NULL</td>
<td style="text-align:left">商品名称</td>
</tr>
<tr>
<td style="text-align:left">goods_code</td>
<td style="text-align:left">varchar(50)</td>
<td style="text-align:left">NULL</td>
<td style="text-align:left">商品Code</td>
</tr>
<tr>
<td style="text-align:left">goods_type</td>
<td style="text-align:left">varchar(50)</td>
<td style="text-align:left">NULL</td>
<td style="text-align:left">商品类型</td>
</tr>
<tr>
<td style="text-align:left">order_desc</td>
<td style="text-align:left">varchar(500)</td>
<td style="text-align:left">NULL</td>
<td style="text-align:left">订单备注</td>
</tr>
<tr>
<td style="text-align:left">order_amount</td>
<td style="text-align:left">decimal(10,2)</td>
<td style="text-align:left">NOT NULL</td>
<td style="text-align:left">实付金额</td>
</tr>
<tr>
<td style="text-align:left">code_url</td>
<td style="text-align:left">varchar(200)</td>
<td style="text-align:left">NULL</td>
<td style="text-align:left">二维码链接</td>
</tr>
<tr>
<td style="text-align:left">expire_datetime</td>
<td style="text-align:left">datetime</td>
<td style="text-align:left">NULL</td>
<td style="text-align:left">订单过期时间</td>
</tr>
<tr>
<td style="text-align:left">pay_datetime</td>
<td style="text-align:left">datetime</td>
<td style="text-align:left">NULL</td>
<td style="text-align:left">付款时间</td>
</tr>
<tr>
<td style="text-align:left">is_notify</td>
<td style="text-align:left">int</td>
<td style="text-align:left">NULL</td>
<td style="text-align:left">是否已通知</td>
</tr>
<tr>
<td style="text-align:left">notify_datetime</td>
<td style="text-align:left">datetime</td>
<td style="text-align:left">NULL</td>
<td style="text-align:left">通知外部系统时间</td>
</tr>
<tr>
<td style="text-align:left">request_ip</td>
<td style="text-align:left">varchar(50)</td>
<td style="text-align:left">NOT NULL</td>
<td style="text-align:left">请求IP</td>
</tr>
<tr>
<td style="text-align:left">create_datetime</td>
<td style="text-align:left">datetime</td>
<td style="text-align:left">NULL</td>
<td style="text-align:left">创建时间</td>
</tr>
<tr>
<td style="text-align:left">update_datetime</td>
<td style="text-align:left">datetime</td>
<td style="text-align:left">NULL</td>
<td style="text-align:left">修改时间</td>
</tr>
</tbody>
</table>
<blockquote>
<p>主键1：order_no
主键2：outside_order_no</p>
</blockquote>
<h2 id="订单退款表" tabindex="-1"><a class="header-anchor" href="#订单退款表" aria-hidden="true">#</a> 订单退款表</h2>
<blockquote>
<p>表名【order_refund】</p>
</blockquote>
<table>
<thead>
<tr>
<th style="text-align:left">列名</th>
<th style="text-align:left">字段类型</th>
<th style="text-align:left">是否为空</th>
<th style="text-align:left">备注说明</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:left">id</td>
<td style="text-align:left">int</td>
<td style="text-align:left">NOT NULL</td>
<td style="text-align:left">自增编号</td>
</tr>
<tr>
<td style="text-align:left">refund_no</td>
<td style="text-align:left">varchar(50)</td>
<td style="text-align:left">NOT NULL</td>
<td style="text-align:left">退款单号[交易系统内部退款号]</td>
</tr>
<tr>
<td style="text-align:left">order_no</td>
<td style="text-align:left">varchar(50)</td>
<td style="text-align:left">NOT NULL</td>
<td style="text-align:left">订单号</td>
</tr>
<tr>
<td style="text-align:left">outside_order_no</td>
<td style="text-align:left">varchar(50)</td>
<td style="text-align:left">NOT NULL</td>
<td style="text-align:left">外部订单号</td>
</tr>
<tr>
<td style="text-align:left">project_code</td>
<td style="text-align:left">varchar(50)</td>
<td style="text-align:left">NOT NULL</td>
<td style="text-align:left">外部系统Code</td>
</tr>
<tr>
<td style="text-align:left">pay_type</td>
<td style="text-align:left">varchar(50)</td>
<td style="text-align:left">NOT NULL</td>
<td style="text-align:left">支付方式:WX</td>
</tr>
<tr>
<td style="text-align:left">transaction_id</td>
<td style="text-align:left">varchar(50)</td>
<td style="text-align:left">NOT NULL</td>
<td style="text-align:left">支付交易订单号</td>
</tr>
<tr>
<td style="text-align:left">refund_id</td>
<td style="text-align:left">varchar(50)</td>
<td style="text-align:left">NULL</td>
<td style="text-align:left">退款交易订单号</td>
</tr>
<tr>
<td style="text-align:left">order_status</td>
<td style="text-align:left">int</td>
<td style="text-align:left">NOT NULL</td>
<td style="text-align:left">退款状态</td>
</tr>
<tr>
<td style="text-align:left">refund_reason</td>
<td style="text-align:left">varchar(200)</td>
<td style="text-align:left">NULL</td>
<td style="text-align:left">退款原因</td>
</tr>
<tr>
<td style="text-align:left">order_desc</td>
<td style="text-align:left">varchar(200)</td>
<td style="text-align:left">NULL</td>
<td style="text-align:left">订单备注</td>
</tr>
<tr>
<td style="text-align:left">refund_amount</td>
<td style="text-align:left">decimal(10,2)</td>
<td style="text-align:left">NOT NULL</td>
<td style="text-align:left">退款金额</td>
</tr>
<tr>
<td style="text-align:left">order_amount</td>
<td style="text-align:left">decimal(10,2)</td>
<td style="text-align:left">NOT NULL</td>
<td style="text-align:left">原订单金额</td>
</tr>
<tr>
<td style="text-align:left">refund_datetime</td>
<td style="text-align:left">datetime</td>
<td style="text-align:left">NULL</td>
<td style="text-align:left">退款时间</td>
</tr>
<tr>
<td style="text-align:left">is_notify</td>
<td style="text-align:left">int</td>
<td style="text-align:left">NULL</td>
<td style="text-align:left">是否已通知</td>
</tr>
<tr>
<td style="text-align:left">notify_datetime</td>
<td style="text-align:left">datetime</td>
<td style="text-align:left">NULL</td>
<td style="text-align:left">通知外部系统时间</td>
</tr>
<tr>
<td style="text-align:left">request_ip</td>
<td style="text-align:left">varchar(50)</td>
<td style="text-align:left">NOT NULL</td>
<td style="text-align:left">请求IP</td>
</tr>
<tr>
<td style="text-align:left">create_datetime</td>
<td style="text-align:left">datetime</td>
<td style="text-align:left">NULL</td>
<td style="text-align:left">创建时间</td>
</tr>
<tr>
<td style="text-align:left">update_datetime</td>
<td style="text-align:left">datetime</td>
<td style="text-align:left">NULL</td>
<td style="text-align:left">修改时间</td>
</tr>
</tbody>
</table>
<blockquote>
<p>主键1：refund_no
主键2：order_no</p>
</blockquote>
<h2 id="项目配置表" tabindex="-1"><a class="header-anchor" href="#项目配置表" aria-hidden="true">#</a> 项目配置表</h2>
<blockquote>
<p>表名【project_config】</p>
</blockquote>
<table>
<thead>
<tr>
<th style="text-align:left">列名</th>
<th style="text-align:left">字段类型</th>
<th style="text-align:left">是否为空</th>
<th style="text-align:left">备注说明</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:left">id</td>
<td style="text-align:left">int</td>
<td style="text-align:left">NOT NULL</td>
<td style="text-align:left">自增编号</td>
</tr>
<tr>
<td style="text-align:left">project_code</td>
<td style="text-align:left">varchar(50)</td>
<td style="text-align:left">NOT NULL</td>
<td style="text-align:left">项目代码</td>
</tr>
<tr>
<td style="text-align:left">project_name</td>
<td style="text-align:left">varchar(200)</td>
<td style="text-align:left">NOT NULL</td>
<td style="text-align:left">项目名称</td>
</tr>
<tr>
<td style="text-align:left">project_status</td>
<td style="text-align:left">int</td>
<td style="text-align:left">NOT NULL</td>
<td style="text-align:left">项目状态</td>
</tr>
<tr>
<td style="text-align:left">pay_notifyurl</td>
<td style="text-align:left">varchar(200)</td>
<td style="text-align:left">NULL</td>
<td style="text-align:left">付款成功NotifyUrl</td>
</tr>
<tr>
<td style="text-align:left">refund_notifyurl</td>
<td style="text-align:left">varchar(200)</td>
<td style="text-align:left">NULL</td>
<td style="text-align:left">退款成功NotifyUrl</td>
</tr>
<tr>
<td style="text-align:left">white_list</td>
<td style="text-align:left">varchar(500)</td>
<td style="text-align:left">NULL</td>
<td style="text-align:left">IP白名单(用;号隔开)</td>
</tr>
<tr>
<td style="text-align:left">public_key</td>
<td style="text-align:left">varchar(2000)</td>
<td style="text-align:left">NOT NULL</td>
<td style="text-align:left">项目公钥</td>
</tr>
<tr>
<td style="text-align:left">private_key</td>
<td style="text-align:left">varchar(2000)</td>
<td style="text-align:left">NOT NULL</td>
<td style="text-align:left">项目私钥</td>
</tr>
<tr>
<td style="text-align:left">create_datetime</td>
<td style="text-align:left">datetime</td>
<td style="text-align:left">NULL</td>
<td style="text-align:left">创建时间</td>
</tr>
<tr>
<td style="text-align:left">update_datetime</td>
<td style="text-align:left">datetime</td>
<td style="text-align:left">NULL</td>
<td style="text-align:left">修改时间</td>
</tr>
</tbody>
</table>
<blockquote>
<p>主键1：project_code</p>
</blockquote>
<h2 id="支付配置表" tabindex="-1"><a class="header-anchor" href="#支付配置表" aria-hidden="true">#</a> 支付配置表</h2>
<blockquote>
<p>表名【pay_config】</p>
</blockquote>
<table>
<thead>
<tr>
<th style="text-align:left">列名</th>
<th style="text-align:left">字段类型</th>
<th style="text-align:left">是否为空</th>
<th style="text-align:left">备注说明</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:left">id</td>
<td style="text-align:left">int</td>
<td style="text-align:left">NOT NULL</td>
<td style="text-align:left">自增编号</td>
</tr>
<tr>
<td style="text-align:left">app_id</td>
<td style="text-align:left">varchar(50)</td>
<td style="text-align:left">NOT NULL</td>
<td style="text-align:left">AppId</td>
</tr>
<tr>
<td style="text-align:left">mch_id</td>
<td style="text-align:left">varchar(50)</td>
<td style="text-align:left">NOT NULL</td>
<td style="text-align:left">商户号</td>
</tr>
<tr>
<td style="text-align:left">mch_name</td>
<td style="text-align:left">varchar(50)</td>
<td style="text-align:left">NOT NULL</td>
<td style="text-align:left">商户名称</td>
</tr>
<tr>
<td style="text-align:left">serial_no</td>
<td style="text-align:left">varchar(50)</td>
<td style="text-align:left">NOT NULL</td>
<td style="text-align:left">证书序列号</td>
</tr>
<tr>
<td style="text-align:left">v3_private_key</td>
<td style="text-align:left">varchar(50)</td>
<td style="text-align:left">NOT NULL</td>
<td style="text-align:left">V3密钥</td>
</tr>
<tr>
<td style="text-align:left">aes_key</td>
<td style="text-align:left">varchar(2000)</td>
<td style="text-align:left">NOT NULL</td>
<td style="text-align:left">商户私钥</td>
</tr>
<tr>
<td style="text-align:left">use_status</td>
<td style="text-align:left">int</td>
<td style="text-align:left">NOT NULL</td>
<td style="text-align:left">使用状态</td>
</tr>
<tr>
<td style="text-align:left">create_datetime</td>
<td style="text-align:left">datetime</td>
<td style="text-align:left">NULL</td>
<td style="text-align:left">创建时间</td>
</tr>
<tr>
<td style="text-align:left">update_datetime</td>
<td style="text-align:left">datetime</td>
<td style="text-align:left">NULL</td>
<td style="text-align:left">修改时间</td>
</tr>
</tbody>
</table>
<blockquote>
<p>主键1：mch_id</p>
</blockquote>
<h2 id="项目支付关系表" tabindex="-1"><a class="header-anchor" href="#项目支付关系表" aria-hidden="true">#</a> 项目支付关系表</h2>
<blockquote>
<p>表名【project_pay_relation】</p>
</blockquote>
<table>
<thead>
<tr>
<th style="text-align:left">列名</th>
<th style="text-align:left">字段类型</th>
<th style="text-align:left">是否为空</th>
<th style="text-align:left">备注说明</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:left">id</td>
<td style="text-align:left">int</td>
<td style="text-align:left">NOT NULL</td>
<td style="text-align:left">自增编号</td>
</tr>
<tr>
<td style="text-align:left">project_code</td>
<td style="text-align:left">varchar(50)</td>
<td style="text-align:left">NOT NULL</td>
<td style="text-align:left">项目代码</td>
</tr>
<tr>
<td style="text-align:left">mch_id</td>
<td style="text-align:left">varchar(50)</td>
<td style="text-align:left">NOT NULL</td>
<td style="text-align:left">商户号</td>
</tr>
<tr>
<td style="text-align:left">is_bind</td>
<td style="text-align:left">int</td>
<td style="text-align:left">NOT NULL</td>
<td style="text-align:left">是否绑定</td>
</tr>
<tr>
<td style="text-align:left">create_datetime</td>
<td style="text-align:left">datetime</td>
<td style="text-align:left">NULL</td>
<td style="text-align:left">创建时间</td>
</tr>
<tr>
<td style="text-align:left">update_datetime</td>
<td style="text-align:left">datetime</td>
<td style="text-align:left">NULL</td>
<td style="text-align:left">修改时间</td>
</tr>
</tbody>
</table>
<blockquote>
<p>主键1：project_code,mch_id</p>
</blockquote>
<h2 id="系统日志表" tabindex="-1"><a class="header-anchor" href="#系统日志表" aria-hidden="true">#</a> 系统日志表</h2>
<blockquote>
<p>表名【sys_log】</p>
</blockquote>
<table>
<thead>
<tr>
<th style="text-align:left">列名</th>
<th style="text-align:left">字段类型</th>
<th style="text-align:left">是否为空</th>
<th style="text-align:left">备注说明</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:left">id</td>
<td style="text-align:left">int</td>
<td style="text-align:left">NOT NULL</td>
<td style="text-align:left">自增编号</td>
</tr>
<tr>
<td style="text-align:left">log_level</td>
<td style="text-align:left">varchar(50)</td>
<td style="text-align:left">NOT NULL</td>
<td style="text-align:left">项目代码</td>
</tr>
<tr>
<td style="text-align:left">name_space</td>
<td style="text-align:left">varchar(50)</td>
<td style="text-align:left">NOT NULL</td>
<td style="text-align:left">商户号</td>
</tr>
<tr>
<td style="text-align:left">class_name</td>
<td style="text-align:left">varchar(50)</td>
<td style="text-align:left">NOT NULL</td>
<td style="text-align:left">是否绑定</td>
</tr>
<tr>
<td style="text-align:left">class_function</td>
<td style="text-align:left">varchar(50)</td>
<td style="text-align:left">NOT NULL</td>
<td style="text-align:left">修改时间</td>
</tr>
<tr>
<td style="text-align:left">log_content</td>
<td style="text-align:left">varchar(5000)</td>
<td style="text-align:left">NOT NULL</td>
<td style="text-align:left">商户号</td>
</tr>
<tr>
<td style="text-align:left">create_datetime</td>
<td style="text-align:left">datetime</td>
<td style="text-align:left">NOT NULL</td>
<td style="text-align:left">创建时间</td>
</tr>
</tbody>
</table>
<h2 id="微信支付通知表" tabindex="-1"><a class="header-anchor" href="#微信支付通知表" aria-hidden="true">#</a> 微信支付通知表</h2>
<blockquote>
<p>表名【wx_pay_notify】</p>
</blockquote>
<table>
<thead>
<tr>
<th style="text-align:left">列名</th>
<th style="text-align:left">字段类型</th>
<th style="text-align:left">是否为空</th>
<th style="text-align:left">备注说明</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:left">id</td>
<td style="text-align:left">int</td>
<td style="text-align:left">NOT NULL</td>
<td style="text-align:left">自增编号</td>
</tr>
<tr>
<td style="text-align:left">notify_id</td>
<td style="text-align:left">varchar(50)</td>
<td style="text-align:left">NOT NULL</td>
<td style="text-align:left">通知ID</td>
</tr>
<tr>
<td style="text-align:left">appid</td>
<td style="text-align:left">varchar(50)</td>
<td style="text-align:left">NOT NULL</td>
<td style="text-align:left">应用ID</td>
</tr>
<tr>
<td style="text-align:left">mchid</td>
<td style="text-align:left">varchar(50)</td>
<td style="text-align:left">NOT NULL</td>
<td style="text-align:left">商户号</td>
</tr>
<tr>
<td style="text-align:left">out_trade_no</td>
<td style="text-align:left">varchar(50)</td>
<td style="text-align:left">NOT NULL</td>
<td style="text-align:left">商户订单号</td>
</tr>
<tr>
<td style="text-align:left">transaction_id</td>
<td style="text-align:left">varchar(50)</td>
<td style="text-align:left">NOT NULL</td>
<td style="text-align:left">微信支付订单号</td>
</tr>
<tr>
<td style="text-align:left">trade_type</td>
<td style="text-align:left">varchar(50)</td>
<td style="text-align:left">NOT NULL</td>
<td style="text-align:left">交易类型</td>
</tr>
<tr>
<td style="text-align:left">trade_state</td>
<td style="text-align:left">varchar(50)</td>
<td style="text-align:left">NOT NULL</td>
<td style="text-align:left">交易状态</td>
</tr>
<tr>
<td style="text-align:left">trade_state_desc</td>
<td style="text-align:left">varchar(500)</td>
<td style="text-align:left">NOT NULL</td>
<td style="text-align:left">交易状态描述</td>
</tr>
<tr>
<td style="text-align:left">bank_type</td>
<td style="text-align:left">varchar(50)</td>
<td style="text-align:left">NOT NULL</td>
<td style="text-align:left">付款银行</td>
</tr>
<tr>
<td style="text-align:left">attach</td>
<td style="text-align:left">varchar(200)</td>
<td style="text-align:left">NULL</td>
<td style="text-align:left">附加数据</td>
</tr>
<tr>
<td style="text-align:left">success_time</td>
<td style="text-align:left">varchar(200)</td>
<td style="text-align:left">NOT NULL</td>
<td style="text-align:left">支付完成时间</td>
</tr>
<tr>
<td style="text-align:left">openid</td>
<td style="text-align:left">varchar(50)</td>
<td style="text-align:left">NOT NULL</td>
<td style="text-align:left">用户标识</td>
</tr>
<tr>
<td style="text-align:left">total</td>
<td style="text-align:left">varchar(50)</td>
<td style="text-align:left">NOT NULL</td>
<td style="text-align:left">总金额</td>
</tr>
<tr>
<td style="text-align:left">payer_total</td>
<td style="text-align:left">varchar(50)</td>
<td style="text-align:left">NOT NULL</td>
<td style="text-align:left">用户支付金额</td>
</tr>
<tr>
<td style="text-align:left">currency</td>
<td style="text-align:left">varchar(50)</td>
<td style="text-align:left">NOT NULL</td>
<td style="text-align:left">货币类型</td>
</tr>
<tr>
<td style="text-align:left">payer_currency</td>
<td style="text-align:left">varchar(50)</td>
<td style="text-align:left">NOT NULL</td>
<td style="text-align:left">用户支付币种</td>
</tr>
<tr>
<td style="text-align:left">create_datetime</td>
<td style="text-align:left">datetime</td>
<td style="text-align:left">NULL</td>
<td style="text-align:left">创建时间</td>
</tr>
</tbody>
</table>
<blockquote>
<p>主键1：notify_id</p>
</blockquote>
<h2 id="微信退款通知表" tabindex="-1"><a class="header-anchor" href="#微信退款通知表" aria-hidden="true">#</a> 微信退款通知表</h2>
<blockquote>
<p>表名【wx_refund_notify】</p>
</blockquote>
<table>
<thead>
<tr>
<th style="text-align:left">列名</th>
<th style="text-align:left">字段类型</th>
<th style="text-align:left">是否为空</th>
<th style="text-align:left">备注说明</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:left">id</td>
<td style="text-align:left">int</td>
<td style="text-align:left">NOT NULL</td>
<td style="text-align:left">自增编号</td>
</tr>
<tr>
<td style="text-align:left">notify_id</td>
<td style="text-align:left">varchar(50)</td>
<td style="text-align:left">NOT NULL</td>
<td style="text-align:left">通知ID</td>
</tr>
<tr>
<td style="text-align:left">mchid</td>
<td style="text-align:left">varchar(50)</td>
<td style="text-align:left">NOT NULL</td>
<td style="text-align:left">商户号</td>
</tr>
<tr>
<td style="text-align:left">out_trade_no</td>
<td style="text-align:left">varchar(50)</td>
<td style="text-align:left">NOT NULL</td>
<td style="text-align:left">商户订单号</td>
</tr>
<tr>
<td style="text-align:left">transaction_id</td>
<td style="text-align:left">varchar(50)</td>
<td style="text-align:left">NOT NULL</td>
<td style="text-align:left">微信支付订单号</td>
</tr>
<tr>
<td style="text-align:left">out_refund_no</td>
<td style="text-align:left">varchar(50)</td>
<td style="text-align:left">NOT NULL</td>
<td style="text-align:left">商户退款单号</td>
</tr>
<tr>
<td style="text-align:left">refund_id</td>
<td style="text-align:left">varchar(50)</td>
<td style="text-align:left">NOT NULL</td>
<td style="text-align:left">微信支付退款单号</td>
</tr>
<tr>
<td style="text-align:left">refund_status</td>
<td style="text-align:left">varchar(50)</td>
<td style="text-align:left">NOT NULL</td>
<td style="text-align:left">退款状态</td>
</tr>
<tr>
<td style="text-align:left">success_time</td>
<td style="text-align:left">varchar(200)</td>
<td style="text-align:left">NOT NULL</td>
<td style="text-align:left">退款成功时间</td>
</tr>
<tr>
<td style="text-align:left">user_received_account</td>
<td style="text-align:left">varchar(200)</td>
<td style="text-align:left">NOT NULL</td>
<td style="text-align:left">退款入账账户</td>
</tr>
<tr>
<td style="text-align:left">total</td>
<td style="text-align:left">int</td>
<td style="text-align:left">NOT NULL</td>
<td style="text-align:left">订单金额</td>
</tr>
<tr>
<td style="text-align:left">refund</td>
<td style="text-align:left">int</td>
<td style="text-align:left">NOT NULL</td>
<td style="text-align:left">退款金额</td>
</tr>
<tr>
<td style="text-align:left">payer_total</td>
<td style="text-align:left">int</td>
<td style="text-align:left">NOT NULL</td>
<td style="text-align:left">用户支付金额</td>
</tr>
<tr>
<td style="text-align:left">payer_refund</td>
<td style="text-align:left">int</td>
<td style="text-align:left">NOT NULL</td>
<td style="text-align:left">用户退款金额</td>
</tr>
<tr>
<td style="text-align:left">create_datetime</td>
<td style="text-align:left">datetime</td>
<td style="text-align:left">NULL</td>
<td style="text-align:left">创建时间</td>
</tr>
</tbody>
</table>
<blockquote>
<p>主键1：notify_id</p>
</blockquote>
</div></template>


