<template>
  <div>
    <top :showBack="false" title="门店"></top>
    <div class="door-list" @click="toDoor">
      <Icon type="navicon-round" size="30" color="#fff"></Icon>
    </div>
    <my-nav></my-nav>
    <div id="map" style="width:100%;height:750px;"></div>
  </div>
</template>
<script>
  import top from '@/components/top'
  import nav from '@/components/nav'
  export default {
    components: {
      top,
      'my-nav': nav
    },
    mounted () {
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
    methods: {
      toDoor () {
        this.$router.push('door-list')
      }
    }
  }
</script>
<style lang="scss" rel="stylesheet/scss" scoped>
  .door-list {
    display: flex;
    position: absolute;
    width: 50px;
    height: 50px;
    align-items: center;
    justify-content: center;
    top: 0;  right: 0;
  }
</style>
