<template>
  <div class="top">{{title}}</div>
</template>
<script>
  export default {
    props: {
      title: {
        type: String,
        required: true
      }
    }
  }
</script>
<style lang="scss" rel="stylesheet/scss">
  .top {
    width: 100%;
    height: 50px;
    font-size: 16px;
    line-height: 50px;
    text-align: center;
    background-color: rgb(27, 43, 59 );
    color: #fff;
    box-shadow: 0 2px 5px #666;
  }
</style>
