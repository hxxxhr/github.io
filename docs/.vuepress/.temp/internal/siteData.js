export const siteData = JSON.parse("{\"base\":\"/doc/\",\"lang\":\"zh-CN\",\"title\":\"Mars2D开发教程\",\"description\":\"该文档中心用于展示 October 下所有子系统相关文档\",\"head\":[],\"locales\":{}}")

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateSiteData) {
    __VUE_HMR_RUNTIME__.updateSiteData(siteData)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ siteData }) => {
    __VUE_HMR_RUNTIME__.updateSiteData(siteData)
  })
}
