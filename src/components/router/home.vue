<template>
  <div>
    <top title="宇涛租车"></top>
    <my-nav></my-nav>
    <banner></banner>
    <div class="main">
      <div class="row">
        <a class="col">
          <div class="icon" style="background-color: #edb718;">
            <Icon type="model-s" size="35" color="#fff"></Icon>
          </div>
          <div class="wrap">
            <p>上门自取</p>
            <span>免费就是爽</span>
          </div>
        </a>
        <a class="col">
          <div class="icon" style="background-color: #9cf;">
            <Icon type="android-print" size="35" color="#fff"></Icon>
          </div>
          <div class="wrap">
            <p>到店取还</p>
            <span>24小时放肆租</span>
          </div>
        </a>
      </div>
      <div class="row horizontal">
        <a class="col">
          <Icon type="social-freebsd-devil" size="35" color="#9cf"></Icon>
          <div class="wrap">
            <p>上门自取</p>
            <span class="title">免费就是爽</span>
          </div>
        </a>
        <a class="col">
          <Icon type="android-car" size="35" color="#9cf"></Icon>
          <div class="wrap">
            <p>上门自取</p>
            <span>免费就是爽</span>
          </div>
        </a>
      </div>
      <div class="row horizontal">
        <a class="col">
          <Icon type="search" size="35" color="#9cf"></Icon>
          <div class="wrap">
            <p>上门自取</p>
            <span>免费就是爽</span>
          </div>
        </a>
        <a class="col">
          <Icon type="navigate" size="35" color="#9cf"></Icon>
          <div class="wrap">
            <p>上门自取</p>
            <span>免费就是爽</span>
          </div>
        </a>
      </div>
    </div>
  </div>
</template>
<script>
  import banner from '@/components/banner'
  import nav from '@/components/nav'
  import top from '@/components/top'
  export default {
    components: {
      banner,
      'my-nav': nav,
      top
    }
  }
</script>
<style lang="scss" rel="stylesheet/scss">
  .main {
    .row {
      display: flex;
      border-bottom: 1px solid #eee;

      &.horizontal {
        .col {
          flex-direction: row;
          .wrap {
            display: flex;
            flex-direction: column;
            margin-left: 10px;
          }
        }
      }
      .col {
        flex: 1;
        display: flex;
        padding: 10px;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        border-right: 1px solid #eee;
        color: #000;
        &:active {
          background-color: #eee;
        }
        &:last-child {
          border-right: none;
        }
        .icon {
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          width: 60px;
          height: 60px;
        }
        p {
          margin-top: 5px;
          font-size: 15px;
          text-align: center;
        }
        span {
          font-size: 12px;
          color: #666;
          &.title {
            color: red;
          }
        }
      }
    }
  }
</style>
