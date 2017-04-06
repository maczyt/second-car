<template>
  <div class="top">
    <a v-if="showBack" class="top-back" @click="back"><Icon type="chevron-left"></Icon></a>
    {{title}}
  </div>
</template>
<script>
  export default {
    props: {
      title: {
        type: String,
        required: true
      },
      showBack: {
        type: Boolean,
        required: true
      }
    },
    methods: {
      back () {
        this.$router.go(-1)
      }
    }
  }
</script>
<style lang="scss" rel="stylesheet/scss">
  .top {
    position: relative;
    width: 100%;
    height: 50px;
    font-size: 16px;
    line-height: 50px;
    text-align: center;
    background-color: rgb(27, 43, 59 );
    color: #fff;
    box-shadow: 0 2px 5px #666;
    .top-back {
      position: absolute;
      left: 15px;
    }
  }
</style>
