<template>
  <div>
    <Spin fix v-show="!loading">
      <Icon type="load-c" size="30" class="spin-icon-load"></Icon>
      <div>Loading</div>
    </Spin>
    <div class="select-car" v-show="loading">
      <top :showBack="true" title="选择车型"></top>
      <div class="marquee">
        <div class="wrap">
          <p>世界上一成不变的东西，只有“任何事物都是在不断变化的”这条真理。</p>
        </div>
      </div>
      <div class="cars">
        <ul>
          <li v-for="car in cars" class="car">
            <img :src="'http://localhost:8090/img/' + car.src" alt="">
            <div class="wrap">
              <div class="title">
                <h2>{{ car.name }}</h2>
                <p>{{ car.detail.size }} | {{ car.detail.num }} | {{ car.detail.people }}</p>
              </div>
              <div class="money">
                <div>￥<span>{{ car.money }}</span></div>/日均
              </div>
            </div>
          </li>
        </ul>
      </div>
      <div class="sort" @click="handleSort">
        <div v-if="!sort">
          <Icon type="arrow-up-a"></Icon>
          价格由低到高
        </div>
        <div v-else>
          <Icon type="arrow-down-a"></Icon>
          价格由高到低
        </div>
      </div>
    </div>
  </div>

</template>
<script>
  import top from '@/components/top'
  export default {
    data () {
      return {
        loading: false,
        cars: [],
        sort: false // 由低到高: false, 由高到低: true
      }
    },
    components: {
      top
    },
    created () {
      this.$http.post('http://localhost:8090/cars', {})
        .then(response => {
          this.cars = response.body.sort(function (a, b) {
            return +a.money - +b.money
          });
          this.loading = true
        })
        .catch(err => { this.$Message.error('数据请求失败'); setTimeout(() => { this.$router.go(-1); }, 2000) })
    },
    methods: {
      handleSort () {
        this.sort = !this.sort
        this.cars = this.cars.reverse()
      }
    }
  }
</script>
<style lang="scss" rel="stylesheet/scss" scoped>
  @import "../../common/scss/mixins";
  @keyframes marquee {
    from {
      transform: translate3d(100%, 0, 0);
    }
    to {
      transform: translate3d(-130%, 0, 0);
    }
  }
  .spin-icon-load{
    animation: ani-spin 1s linear infinite;
  }
  @keyframes ani-spin {
    from { transform: rotate(0deg);}
    50%  { transform: rotate(180deg);}
    to   { transform: rotate(360deg);}
  }
  .select-car {
    background-color: #eee;
    height: 100vh;
    display: flex;
    flex-direction: column;
    .marquee {
      width: 100%;
      height: 45px;
      line-height: 45px;
      background-color: #ffc;
      font-size: 14px;
      .wrap {
        width: 80%;
        margin: 0 auto;
        position: relative;
        overflow: hidden;
        height: 100%;
        p {
          animation: marquee linear 10s 1s infinite;
          white-space: nowrap;
        }
      }
    }
    .cars {
      flex: 1;
      overflow-y: auto;
      ul {
        display: block;
      }
      li {
        width: 100%;
        display: flex;
        align-items: center;
        margin: 10px 0;
        font-size: 0;
        padding: 7px 0;
        background-color: #fff;
        @include border-1px-top(#aaa);
        @include border-1px-bottom(#aaa);
        &:active {
          background-color: #999;
          color: #fff;
        }
        & > img {
          width: 120px;
          height: 75px;
          margin-left: 10px;
        }
        .wrap {
          margin-left: 10px;
          flex: 1;
          .title {
            @include border-1px-bottom(#aaa);
            padding-bottom: 5px;
            margin-bottom: 5px;
            h2 {
              font-size: 16px;
              font-weight: bold;
            }
            p {
              font-size: 12px;
            }
          }
          .money {
            font-size: 14px;
            display: flex;
            align-items: center;
            & > div {
              color: #edb718;
            }
            span {
              font-size: 20px;
            }
          }
        }
      }
    }
    .sort {
      height: 60px;
      line-height: 60px;
      text-align: center;
      font-size: 16px;
      background-color: #1b2b3b;
      color: #fff;
      &:active {
        background-color: darkslateblue;
      }
    }
  }
</style>
