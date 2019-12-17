<template>
  <div>
    <button @click="myclick" style="z-index:999;position:absolute;">恭喜发财</button>
    <!-- <alertsan></alertsan> -->
  </div>
</template>

<script>
// import alertsan from '../assets/method/alertsan'
export default {
  data () { return {} },
  methods: {
    myclick () {
      // const hide = this.$loading('正在加载，请稍等...')
      // console.log(hide)
      // setTimeout(() => {
      //   hide()
      // }, 2000)
      const birdloading = this.$birdloading()
      console.log(birdloading)
      setTimeout(() => {
        birdloading()
      }, 5000)
      // this.$message.info('lalal')
    }
  },
  // components: {
  //   alertsan
  // }
  // methodes: {
  //   myclick () {
  //     console.log(12345)
  //     // const hide = this.$loading('正在加载，请稍等...')
  //     // // console.log(hide)
  //     // setTimeout(() => {
  //     //   hide()
  //     // }, 2000)
  //   }
  // }
}
</script>

<style scoped>
#loading-wrapper {
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.7);
  color: #fff;
}
</style>
