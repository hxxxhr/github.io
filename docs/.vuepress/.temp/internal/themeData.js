export const themeData = JSON.parse("{\"lastUpdatedText\":\"最后更新\",\"lastUpdated\":\"Last Updated\",\"logo\":\"http://mars2d.cn/dev/img/logo.png\",\"contributors\":false,\"sidebar\":[{\"text\":\"1-前言\",\"collapsible\":true,\"children\":[\"/mapIntel/doc.md\",\"/mapIntel/video.md\",\"/mapIntel/open.md\",\"/mapIntel/support.md\",\"/mapIntel/env.md\",\"/mapIntel/language.md\",\"/mapIntel/Leaflet.md\",\"/mapIntel/change.md\",\"/mapIntel/help.md\"]},{\"text\":\"2-使用入门\",\"collapsible\":true,\"children\":[\"/start/architecture.md\",\"/start/get-started.md\",\"/start/download.md\",\"/start/import.md\",\"/start/configJson.md\",\"/start/example.md\",\"/start/jcxm.md\"]},{\"text\":\"3-基础知识点\",\"collapsible\":true,\"children\":[\"/mapKnow/map.md\",\"/mapKnow/control.md\",\"/mapKnow/layer.md\",\"/mapKnow/tileLayer.md\",\"/mapKnow/crs.md\",\"/mapKnow/camera.md\",\"/mapKnow/event..md\",\"/mapKnow/graphicLayer.md\",\"/mapKnow/graphic.md\",\"/mapKnow/thing.md\"]},{\"text\":\"4-数据及服务\",\"collapsible\":true,\"children\":[\"/data/xyzDown.md\",\"/data/xyz.md\",\"/data/geojson.md\",\"/data/server.md\"]},{\"text\":\"5-常见问题\",\"collapsible\":true,\"children\":[\"/issue/vue.md\",\"/issue/cors.md\",\"/issue/token.md\",\"/issue/other.md\"]}],\"locales\":{\"/\":{\"selectLanguageName\":\"English\"}},\"colorMode\":\"auto\",\"colorModeSwitch\":true,\"navbar\":[],\"repo\":null,\"selectLanguageText\":\"Languages\",\"selectLanguageAriaLabel\":\"Select language\",\"sidebarDepth\":2,\"editLink\":true,\"editLinkText\":\"Edit this page\",\"contributorsText\":\"Contributors\",\"notFound\":[\"There's nothing here.\",\"How did we get here?\",\"That's a Four-Oh-Four.\",\"Looks like we've got some broken links.\"],\"backToHome\":\"Take me home\",\"openInNewWindow\":\"open in new window\",\"toggleColorMode\":\"toggle color mode\",\"toggleSidebar\":\"toggle sidebar\"}")

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateThemeData) {
    __VUE_HMR_RUNTIME__.updateThemeData(themeData)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ themeData }) => {
    __VUE_HMR_RUNTIME__.updateThemeData(themeData)
  })
}
