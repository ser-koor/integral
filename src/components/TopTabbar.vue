<template>
  <div class="top-tabbar">
    <div class="wrap top-bar-wrap">
      <div class="l">欢迎来到天狼商城</div>
      <div class="r">
        <ul>
          <li>
            <img class="user-img" src="../assets/img/userImg.f8bbec5e.png" alt />
            用户名: 游客
          </li>
          <li>我的积分: --</li>
          <li>获取积分</li>
          <li>天狼官网</li>
          <li class="login-btn">登录</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "TopTabbar"
};
</script>

<style lang="less" scoped>
.top-tabbar {
  height: 40px;
  background-color: #242b39;
  color: #fffefe;
  line-height: 40px;
  .top-bar-wrap {
    // background-color: pink;
    height: 40px;
    display: flex;
    justify-content: space-between;
    font-size: 14px;
    .r {
      ul {
        display: flex;
        li {
          margin-left: 20px;
          display: flex;
          align-items: center;
          .user-img {
            width: 26px;
            height: 26px;
            margin-right: 6px;
            border-radius: 50%;
          }
          &.login-btn {
            width: 124px;
            height: 40px;
            background-color: #0a328e;
            display: flex;
            justify-content: center;
          }
        }
      }
    }
  }
}
</style>