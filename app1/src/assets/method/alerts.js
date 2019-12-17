import alert from './alert.vue'
function Loading (msg) {
  const div = document.createElement('div')
  div.setAttribute('id', 'loading-wrapper')
  document.body.append(div)
  new LoadingComponent({
    props: {
      msg: {
        type: String,
        default: msg
      }
    }
  }).$mount('#loading-wrapper')
  return () => {
    document.body.removeChild(document.getElementById('loading-wrapper'))
  }
}
