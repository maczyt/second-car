<template>
  <div class="nav">
    <ul>
      <li class="active">
        <router-link to="/home">
          <Icon type="model-s" size="25" color="#777"></Icon>
          <span>租车</span>
        </router-link>
      </li>
      <li>
        <router-link to="/near">
          <Icon type="ios-location-outline" size="25" color="#777"></Icon>
          <span>附近</span>
        </router-link>
      </li>
      <li>
        <router-link to="/list">
          <Icon type="android-list" size="25" color="#777"></Icon>
          <span>订单</span>
        </router-link>
      </li>
      <li>
        <router-link to="/user">
          <Icon type="person" size="25" color="#777"></Icon>
          <span>我的</span>
        </router-link>
      </li>
    </ul>
  </div>
</template>
<script>
  export default {}
</script>
<style lang="scss" rel="stylesheet/scss">
  .nav {
    width: 100%;
    padding-top: 10px;
    li {
      width: 25%;
      & > a {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        color: inherit;
        &.active {
          color: #edb718;
          i {
            color: inherit !important;
          }
        }
      }
    }
  }
  ul {
    display: flex;
    padding-top: 5px;
  }

</style>
