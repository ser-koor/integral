<template>
  <div class="home">
    <header>首{{this.$store.state.message}}页</header>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'Home',
  created() {
    // axios.get('http://kumanxuan1.f3322.net:8881/cms/products/recommend').then(res => {
    //   console.log(res.data);
    // })
  }

}
</script>

<style lang="less" scoped>
header {
  background-color: pink;
}
</style>
