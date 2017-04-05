<template>
  <div>
    <top title="宇涛租车会员服务条款"></top>
    <div class="server-terms">
      <Timeline>
        <Timeline-item>
          <p class="time">第一条 总则</p>
          <p class="content">为客户提供简单、安全、省钱的租车服务。</p>
        </Timeline-item>
        <Timeline-item>
          <p class="time">第二条 会员资格</p>
          <p class="content">凡年满18周岁、持有有效证件的客户、均可申请入会。</p>
        </Timeline-item>
        <Timeline-item color="red">
          <p class="time">第三条 最终解释</p>
          <p class="content">最终解释归杭州电子科技大学周宇涛同学所拥有</p>
        </Timeline-item>
      </Timeline>
    </div>
  </div>
</template>
<script>
  import top from '@/components/top'
  export default {
    data () {
      return {

      }
    },
    components: {
      top
    }
  }
</script>
<style lang="scss" rel="stylesheet/scss">
  .server-terms {
    width: 80%;
    margin: 50px auto 0;
    .time{
      font-size: 14px;
      font-weight: bold;
    }
    .content{
      padding-left: 5px;
    }
    ul {
      display: block;
    }
  }
</style>
