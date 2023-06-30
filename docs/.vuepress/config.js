/*
 * @Author: hxh 1641512047@qq.com
 * @Date: 2023-05-16 16:18:26
 * @LastEditors: hxh 1641512047@qq.com
 * @LastEditTime: 2023-06-30 16:38:43
 * @FilePath: \demo\docs\.vuepress\config.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { defineUserConfig, defaultTheme } from 'vuepress'
import vuepressPluginAnchorRight from 'vuepress-plugin-anchor-right'
import { searchPlugin } from '@vuepress/plugin-search'
import { gitPlugin } from '@vuepress/plugin-git'

export default defineUserConfig({
  base: '/doc/',
  lang: 'zh-CN',
  title: 'Mars2D开发教程',
  description: '该文档中心用于展示 October 下所有子系统相关文档',
  theme: defaultTheme({
    lastUpdatedText: '最后更新',
    lastUpdated: 'Last Updated',
    contributors: false,
    sidebar: [
      {
        text: '1-前言',
        collapsible: true,
        children: [
          '/mapIntel/doc.md',
          '/mapIntel/video.md',
          '/mapIntel/open.md',
          '/mapIntel/support.md',
          '/mapIntel/env.md',
          '/mapIntel/language.md',
          '/mapIntel/Leaflet.md',
          '/mapIntel/change.md',
          '/mapIntel/help.md'
        ]
      },
      {
        text: '2-使用入门',
        collapsible: true,
        children: [
          '/start/architecture.md',
          '/start/get-started.md',
          '/start/download.md',
          '/start/import.md',
          '/start/configJson.md',
          '/start/example.md',
          '/start/jcxm.md'
        ]
      },
      {
        text: '3-基础知识点',
        collapsible: true,
        children: [
          '/mapKnow/map.md',
          '/mapKnow/control.md',
          '/mapKnow/layer.md',
          '/mapKnow/tileLayer.md',
          '/mapKnow/crs.md',
          '/mapKnow/camera.md',
          '/mapKnow/event..md',
          '/mapKnow/graphicLayer.md',
          '/mapKnow/graphic.md',
          '/mapKnow/thing.md'
        ]
      },
      {
        text: '4-数据及服务',
        collapsible: true,
        children: [
          '/data/xyzDown.md',
          '/data/xyz.md',
          '/data/geojson.md',
          '/data/server.md'
        ]
      },
      {
        text: '5-常见问题',
        collapsible: true,
        children: [
          '/issue/vue.md',
          '/issue/cors.md',
          '/issue/token.md',
          '/issue/other.md'
        ]
      },
    ],
  }),
  plugins: [
    [vuepressPluginAnchorRight()],
    searchPlugin({
      // 配置项
    }),
    gitPlugin({
      // 配置项
    }),
  ]
})