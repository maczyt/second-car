<template>
  <div class="date">
    <div class="main">
      <div class="t">
        <a @click="handleCancel">取消</a>
        <h2>{{ title }}</h2>
        <a @click="handleFinish">完成</a>
      </div>
      <div class="setTime">
        <Date-picker @on-change="handleChange" :value="set_time" placement="top" type="datetime" format="yyyy-MM-dd HH:mm" placeholder="选择日期和时间" style="width: 200px"></Date-picker>
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    data () {
      return {
        set_time: '',
      }
    },
    methods: {
      handleCancel () {
        this.$emit('from-child-msg')
      },
      handleChange (date) {
        this.set_time = date
      },
      handleFinish () {
        this.$emit('from-child-msg', this.set_time, this.title)
      }
    },
    props: {
      title: {
        type: String,
        required: true
      }
    }
  }
</script>
<style lang="scss" rel="stylesheet/scss">
  .date {
    .ivu-time-picker-cells-ul {
      display: block;
    }
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 999;
    background-color: rgba(0, 0, 0, .5);
    .main {
      position: absolute;
      left: 0;
      bottom: 0;
      width: 100%;
      padding: 0;
      box-shadow: none;
    }
    .t {
      display: flex;
      justify-content: space-between;
      box-sizing: border-box;
      padding: 0 8px;
      width: 100%;
      height: 45px;
      line-height: 45px;
      border-bottom: 1px solid #888;
      background-color: #eee;
      h2 {
        font-size: 1.3em;
        color: #000;
      }
      a {
        color: #000;
        &:last-child {
          color: #edb718;
        }
      }
    }
    .setTime {
      height: 100px;
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }
</style>
