export const siteData = JSON.parse("{\"base\":\"/doc/\",\"lang\":\"zh-CN\",\"title\":\"Mars2D开发教程\",\"description\":\"\",\"head\":[[\"script\",{\"src\":\"http://busuanzi.ibruce.info/busuanzi/2.3/busuanzi.pure.mini.js\"}]],\"locales\":{}}")

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
