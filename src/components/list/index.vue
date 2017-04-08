<template>
  <div>
    <Spin fix size="large" v-show="!getListed"></Spin>
    <div class="list" v-show="getListed">
      <div @click="handleSelect" class="handleSelect">
        <span>{{ selectType }}订单({{ listData.length }})</span>
        <Icon type="arrow-down-c" color="#edb718" v-if="!selected"></Icon>
        <Icon type="arrow-up-c" color="#edb718" v-else></Icon>
      </div>
      <transition name="fade">
        <div class="select-list" v-show="selectList">
          <div v-for="(type, index) in listType" @click="changeSelect(index)">
            {{ type }}
            <span style="float: right; margin-right: 20px;" v-if="type === selectType">
              <Icon type="checkmark-round"  color="#edb718"></Icon>
            </span>
          </div>
        </div>
      </transition>
      <div class="list-main">
        <div v-if="listData.length === 0">
          <Alert type="warning" show-icon>
            当前页面没有相关数据
          </Alert>
        </div>
        <h2 v-else>This is data</h2>
      </div>
      <my-nav></my-nav>
    </div>

  </div>
</template>
<script>
  import nav from '@/components/nav'
  import { indOfArr } from '@/lib/utils'
  export default {
    data () {
      return {
        getListed: false, // 加载订单是否完成
        selectList: false, // 订单类型列表
        selected: false, // 是否点击切换类型
        selectTypeEn: 'all',
        selectType: '全部', // 订单类型
        listTypeEn: ['all', 'deal', 'wait', 'success', 'ing', 'finish', 'cancel'],
        listType: ['全部', '处理中', '待付款', '预订成功', '租赁中', '已完成', '已取消'],
        list: {},
        listData: []
      }
    },
    methods: {
      handleSelect () {
        this.selectList = !this.selectList
        this.selected = !this.selected
      },
      changeSelect (ind) {
        var newType = this.listType[ind]
        if (newType !== this.selectType) {
          this.getListed = false
          this.selectType = newType
          this.selectTypeEn = this.listTypeEn[indOfArr(newType, this.listType)]
          this.getList()
        }
        this.selectList = !this.selectList
        this.selected = !this.selected
      },
      getList () {
        this.$http.get(`http://192.168.0.5:3000/list/${this.selectTypeEn}`)
          .then(response => {
            this.listData = response.body
            this.getListed = true
          })
          .catch(err => {
            this.$Message.error(err.message)
          })
      }
    },
    created () {
      this.$http.get(`http://192.168.0.5:3000/list/${this.selectTypeEn}`)
        .then(response => {
          this.listData = response.body
          this.getListed = true
        })
        .catch(err => {
          this.$Message.error(err.message)
        })
    },
    components: {
      'my-nav': nav
    }
  }
</script>
<style lang="scss" rel="stylesheet/scss" scoped>
  @import "../../common/scss/mixins";
  .fade-enter-active, .fade-leave-active {
    transition: opacity .5s, transform .5s;
  }
  .fade-enter, .fade-leave-to /* .fade-leave-active in <2.1.8 */ {
    opacity: 0;
    transform: translate3d(0, -100%, 0);
  }

  .list {
    background-color: #f7f7f8;
    .handleSelect {
      width: 100%;
      height: 50px;
      font-size: 16px;
      line-height: 50px;
      text-align: center;
      background-color: rgb(27, 43, 59 );
      color: #fff;
      box-shadow: 0 2px 5px #666;
      /*position: ;*/
    }
    .top {
      position: relative;
      z-index: 1000;
    }
    .select-list {
      width: 100%;
      box-shadow: 0 0 8px #999;
      margin-bottom: 30px;
      background-color: #F8F8F8;
      & > div {
        height: 50px;
        line-height: 50px;
        padding-left: 20px;
        font-size: 14px;
        &:not(:last-child) {
          @include border-1px-bottom(#aaa);
        }
      }
    }
    .list-main {
      min-height: 300px;
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }
</style>
