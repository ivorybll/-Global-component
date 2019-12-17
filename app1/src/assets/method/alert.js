// export const loadingPlugin = {
import alertsan from './alertsan.vue'
export const loadingPlugin = {
  install: function (vm) {
    // vm.component('alertsan', alertsan)
    // const LoadingComponent = vm.extend({
    //   template: '<div id="loading-wrapper">{{msg}}</div>',
    //   // render (h) {
    //   props: {
    //     msg: {
    //       type: String,
    //       default: 'loading...123456'
    //     }
    //   }
    //   //   return h('alertsan')

    //   // }

    // }, 'LoadingComponent')
    function Loading (msg) {
      vm.component('alertsan', alertsan)
      const div = document.createElement('div')
      div.setAttribute('id', 'loading-wrapper')
      document.body.append(div)
      let LoadingComponent = vm.extend({
        render (h) {
          let props = {
            msg: msg
          }
          return h(alertsan, { props })

        }
      })
      // let myLoadingComponent = new LoadingComponent()
      new LoadingComponent().$mount('#loading-wrapper')
      return () => {
        document.body.removeChild(document.getElementById('loading-wrapper'))
      }
    }
    vm.prototype.$loading = Loading
  }
}
// }
// Vue.use(loadingPlugin)
// new Vue({
//   el: '#root',
//   methods: {
//     showLoading () {
//       const hide = this.$loading('正在加载，请稍等...')
//       setTimeout(() => {
//         hide()
//       }, 2000)
//     }
//   }
// })
export default loadingPlugin
