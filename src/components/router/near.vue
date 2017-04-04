<template>
  <div>
    <div id="map" style="width:100%;height:750px;"></div>
  </div>
</template>
<script>
  export default {
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
    }
  }
</script>
<style lang="scss" rel="stylesheet/scss">
</style>
