<template>
  <div class="door-list">
    <top :showBack="true" title="门店"></top>
    <div class="wrapper" style="position: relative;">
      <div class="menu">
        <ul>
          <li @click="wheel" :data-href="item.id" :data-index="ind" v-for="(item, ind) in doors" :class="ind == index ? 'active': ''">
            {{ item.name }}
          </li>
        </ul>
      </div>
      <div class="main" id="main" style="display: block; position: relative;">
        <div class="item" v-for="item in doors">
          <h3 :id="item.id">{{ item.name }}</h3>
          <ul>
            <li v-for="d in item.list">
              <h4>{{ d.name }}</h4>
              <p>{{ d.address }}</p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  import top from '@/components/top';
  const doors = require('./doors.json');
  export default {
    data () {
      return {
        doors: doors,
        index: 0,
        mainList: null
      }
    },
    components: {
      top
    },
    mounted () {
      this.main = document.querySelector('#main')
      window.main = this.main
    },
    methods: {
      wheel (e) {
        var id = e.target.dataset.href;
        var index = e.target.dataset.index;
        var top = document.getElementById(id).offsetTop;

        this.index = index;
        var pos = this.main.scrollTop || 0;
        var timer = setInterval(() => {
          var speed = (top - pos) / 6;
          if (speed < 0) speed = Math.floor(speed);
          else speed = Math.ceil(speed);
          this.main.scrollTop = pos + speed;
          pos = Math.ceil(this.main.scrollTop);
          if (pos == top) clearInterval(timer);
        }, 60);
      }
    }
  }
</script>

<style lang="scss" rel="stylesheet/scss" scoped>
  @import "../../common/scss/mixins";
  .door-list {
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
    background-color: #eee;
    .wrapper {
      margin-top: 25px;
      padding-top: 1px;
      @include border-1px-top(#aaa);
      flex: 1;
      display: flex;
      overflow: hidden;
      .menu, .main {
        overflow-x: hidden;
        overflow-y: auto;
        position: relative;
        &::-webkit-scrollbar {
          display: none;
        }
      }
      .menu {
        flex: 0 0 80px;
        width: 80px;
        ul {
          display: block;
          border-right: 1px solid #aaa;
        }
        li {
          font-size: 14px;
          height: 40px;
          line-height: 40px;
          text-align: center;
          @include border-1px-bottom(#aaa);
          &.active {
            background-color: #fff;
          }
          a {
            color: inherit;
          }
        }
      }
      .main {
        flex: 1;
        position: relative;
        .item {
          h3 {
            padding: 3px 10px;
          }
          ul {
            display: block;
            background-color: #fff;
          }
          li {
            padding: 8px 10px;
            h4 {
              font-size: 16px;
              color: #000;
              margin-bottom: 5px;
            }
            &:not(:last-child) {
              @include border-1px-bottom(#aaa);
            }
          }
        }
      }
    }
  }
</style>
