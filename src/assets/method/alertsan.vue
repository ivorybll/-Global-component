<template>
  <div id="loading-wrapper">{{msg}}</div>
</template>

<script>
export default {
  props: {
    msg: {
      type: String,
      default: 'loading...1234'
    }
  },
  data () {
    return {

    }
  }

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
