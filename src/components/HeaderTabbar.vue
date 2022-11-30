<template>
  <div class="header wrap">
    <h1>
      <img src="../assets/img/indexLogo.6f8ac4f0.png" alt="">
    </h1>
    <div class="nav">
      <ul>
        <li class="check">首页</li>
        <li>全部商品</li>
        <li>个人中心</li>
        <li>我的订单</li>
        <li>专属福利</li>
      </ul>
    </div>
    <div class="search">
      <input type="text" placeholder="输入关键字">
      <span><img src="../assets/img/search.png" alt=""></span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HeaderTabbar'
}
</script>

<style lang="less" scoped>
.header {
  height: 200px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  .nav ul {
    display: flex;
    width: 500px;
    justify-content: space-between;
    .check {
      color: #0a328e;
      font-weight: 700;
    }
  }
  .search {
    display: flex;
    input {
      width: 240px;
      height: 38px;
      border: 1px solid #dedede;
      border-radius: 20px 0 0 20px;
      text-indent: 12px;
    }
    span {
      width: 50px;
      height: 40px;
      background-color: #0a328e;
      border-radius: 0 20px 20px 0;
      display: flex;
      justify-content: center;
      align-items: center;
      cursor: pointer;
      img {
        width: 15px;
        height: 15px;
      }
    }
  }
}
</style>