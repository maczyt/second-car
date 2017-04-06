<template>
  <div class="toDoor">
    <top :showBack="false" title="上门送取车"></top>
    <div class="main">
      <div class="startPos item">
        <div class="select">
          <Select style="width: 75px;" size="small">
            <Option v-for="item in cityList" :value="item.value" :key="item">{{ item.label }}</Option>
          </Select>
        </div>
        <div class="pos">杭州火车城站服务点</div>
        <div class="switch">
          <i-switch size="large">
            <span slot="open">送车</span>
            <span slot="close">送车</span>
          </i-switch>
        </div>
      </div>
      <div class="endPos item">
        <div class="select">
          <Select style="width: 75px;" size="small">
            <Option v-for="item in cityList" :value="item.value" :key="item">{{ item.label }}</Option>
          </Select>
        </div>
        <div class="pos">杭州火车城站服务点</div>
        <div class="switch">
          <i-switch size="large">
            <span slot="open">取车</span>
            <span slot="close">取车</span>
          </i-switch>
        </div>
      </div>
      <div class="time item">
        <a class="start" @click="handleDate('取车时间')">
          <span class="title">取车</span>
          <time class="t1">{{ getCar.t1 || '04-05' }}</time>
          <time class="t2">{{ getCar.t2 || '周四 08:30' }}</time>
        </a><div class="interval">
          <span>{{ interval }}</span>
          <span>天</span>
        </div><a class="end" @click="handleDate('还车时间')">
          <span class="title">还车</span>
          <time class="t1">{{ returnCar.t1 || '04-05' }}</time>
          <time class="t2">{{ returnCar.t2 || '周四 08:30' }}</time>
        </a>
      </div>
      <Button long type="warning" @click="toChoose">去选车</Button>
      <transition name="date-fade">
        <date v-show="date_flag" :title="date_title" @from-child-msg="listenChildMsg"></date>
      </transition>
    </div>
    <div id="map"></div>
  </div>
</template>
<script>
  import top from '@/components/top'
  import date from '@/components/common/date'
  import { weekFormat, hourDis } from '@/lib/utils'
  export default {
    data () {
      return {
        date_flag: false,
        date_title: '',
        getCar: {
          t1: '',
          t2: ''
        },
        returnCar: {
          t1: '',
          t2: ''
        },
        cityList: [
          {
            value: 'beijing',
            label: '北京市'
          }
        ]
      }
    },
    methods: {
      handleDate (title) {
        this.date_flag = true
        this.date_title = title
      },
      listenChildMsg (msg, type) {
        this.date_flag = false
        if (!msg) return
        if (type === '取车时间') {
          var time = moment(msg)
          this.getCar.t1 = time.format('MM-DD')
          this.getCar.t2 = weekFormat(time.format('dddd')) + ' ' + time.format('HH:mm');
        } else {
          var time = moment(msg)
          this.returnCar.t1 = time.format('MM-DD')
          this.returnCar.t2 = weekFormat(time.format('dddd')) + ' ' + time.format('HH:mm');
        }
      },
      toChoose () {
        this.$router.push('select-car')
      }
    },
    computed: {
      interval () {
        this.$Message.error
        var i = hourDis(moment(this.returnCar.t1), moment(this.getCar.t1))
        if (i <= 0) {
          this.$Message.error('爸爸, 请不要这样, 请把还车日调后, 不然我烦死你')
        }
        return i
      }
    },
    mounted () {
      var now = moment()
      this.getCar.t1 = now.format('MM-DD')
      this.getCar.t2 = weekFormat(now.format('dddd')) + ' ' + now.format('HH:mm');
      var tTomorrow = now.add(2, 'days')
      this.returnCar.t1 = tTomorrow.format('MM-DD')
      this.returnCar.t2 = weekFormat(tTomorrow.format('dddd')) + ' ' + tTomorrow.format('HH:mm');

      var map = new BMap.Map("map");
      var point = new BMap.Point(116.404, 39.915);  // 创建点坐标
      map.centerAndZoom(point, 15);

      var geolocation = new BMap.Geolocation();
      geolocation.getCurrentPosition(function (r) {
        if (this.getStatus() == BMAP_STATUS_SUCCESS) {
          var mk = new BMap.Marker(r.point);
          map.addOverlay(mk);
          map.panTo(r.point);
        }
      },{ enableHighAccuracy: true })
    },
    components: {
      top, date
    }
  }
</script>
<style lang="scss" rel="stylesheet/scss">
  .date-fade-enter-active, .date-fade-leave-active {
    transition: opacity .5s;
  }
  .date-fade-enter, .date-fade-leave-to /* .fade-leave-active in <2.1.8 */ {
    opacity: 0;
  }
  .toDoor {
    .ivu-btn {
      margin: 10px 0;
    }
    .ivu-select-dropdown-list {
      display: block;
    }
    .ivu-select-selection {
      border: none;
    }
    #map {
      position: absolute;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      z-index: -1;
    }
    .main {
      background-color: #fff;
      box-shadow: 0 0 8px rgba(0, 0, 0, .7);
      padding: 10px 10px 5px 10px;
      .item {
        line-height: 30px;
        & > div {
          float: left;
        }
        &:after {
          content: '';
          clear: both;
          display: block;
          height: 0;
          visibility: hidden;
        }
        border-bottom: 1px solid #ccc;
        padding-bottom: 10px;
        padding-top: 10px;
        .switch {
          float: right;
        }
      }
      .time {
        display: flex;
        justify-content: space-around;
        &:after {
          display: none;
        }
        .interval {
          width: 45px;
          height: 45px;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-direction: column;
          border-radius: 50%;
          border: 1px solid #edb718;
          span {
            line-height: 1.2;
            color: #000;
            &:first-child {
              color: #edb718;
              font-size: 1.5em;
            }
          }
        }
        .start, .end {
          display: flex;
          flex-direction: column;
          justify-content: center;
          color: inherit;
          span, time {
            text-align: center;
            display: inline;
            line-height: 1.2;
          }
          .t1 {
            font-size: 20px;
            color: #000;
          }
        }
      }
    }
  }
</style>
