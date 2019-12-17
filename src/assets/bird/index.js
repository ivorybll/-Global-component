import bird from './bird.vue'
let birdtransition = {
  install: function (vm) {
    function loading () {
      //引入组件
      vm.component('bird', bird)
      // 创建div元素
      var div = document.createElement('div')
      div.setAttribute('id', 'box')
      document.body.append(div)
      // 创建组件
      let birdcomponent = vm.extend({
        render (h) {
          return h('bird')
        }
      })
      // vue实例挂载到元素上
      new birdcomponent().$mount('#box')
      return () => {
        document.body.removeChild(document.getElementById('box'))
      }

    }
    // 生成方法到vue全局的构造函数上
    vm.prototype.$birdloading = loading

  }
}
export default birdtransition
