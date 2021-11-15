<!--
 * @Author: your name
 * @Date: 2021-11-08 07:57:41
 * @LastEditTime: 2021-11-09 10:50:54
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \uni-demo\src\pages\resource\index.vue
-->
<template>
  <view class="container">
    <view>
      <tui-tabs
        :tabs="tabs"
        :top="0"
        :isFixed="true"
        :currentTab="currentTeamTab > 3 ? 0 : currentTeamTab"
        @change="change"
        :itemWidth="100 / tabs.length + '%'"
      ></tui-tabs>
    </view>
    <view class="tab tab1" v-if="currentTeamTab == 0">
      <view class="tui-searchbox">
        <view class="tui-search-input" @tap="search">
          <icon type="search" :size="15" color="#999"></icon>
          <text class="tui-search-text">搜索</text>
        </view>
      </view>
      <view
        class="tui-list-cell tui-cell-last"
        hover-class="tui-cell-hover"
        :hover-start-time="150"
        @tap="detail"
      >
        <image src="/static/images/news/2.jpg" class="tui-img"></image>
        <view class="tui-name">新的朋友</view>
      </view>
      <!--searchbox-->
      <!--联系人列表-->
      <block v-for="(list, index) in lists" :key="index">
        <tui-sticky
          :recalc="1"
          :scrollTop="scrollTop"
          stickyHeight="66rpx"
          :index="index"
          @change="stickyChange"
        >
          <!--tips:sticky组件中最好不要嵌套其他自定义组件-->
          <template v-slot:header>
            <view class="tui-list-cell-divider">
              {{ list.letter == 'well' ? '#' : list.letter }}
            </view>
          </template>
          <template v-slot:content>
            <view
              class="tui-list-cell"
              :class="{ 'tui-cell-last': last(list.data, index2) }"
              hover-class="tui-cell-hover"
              :hover-start-time="150"
              @tap="detail"
              v-for="(item, index2) in list.data"
              :key="index2"
            >
              <image
                :src="
                  '/static/images/news/' +
                  (index2 % 2 === 0 && index2 !== 0
                    ? 'avatar_1.jpg'
                    : 'avatar_2.jpg')
                "
                class="tui-img"
              ></image>
              <view class="tui-name">{{ item.name }}</view>
            </view>
            <text class="tui-grid-label">{{ item.title }}</text>
            <!-- <view class="tui-rate-container">
              <tui-rate :current="3" hollow="true" disabled="true"></tui-rate>
            </view> -->
          </navigator>
        </tui-grid-item>
      </block>
    </tui-grid>

    <view class="container">
      <view class="tui-title"> 我创建的团队 </view>
      <my-team-card
        v-for="(card, index) in teams"
        :key="index"
        :image="card.img"
        :title="card.title"
        :tag="card.tag"
        @click="detail"
      >
        <view
          @touchstart.stop="touchStart"
          @touchmove.stop.prevent="touchMove"
          @touchend.stop="touchEnd"
          @touchcancel.stop="touchCancel"
          @tap="handleClick(index3)"
          v-for="(items, index3) in lists"
          :key="index3"
          class="tui-indexed-list-text"
          :style="{ height: indexBarItemHeight + 'px' }"
        >
          {{ items.letter == 'well' ? '#' : items.letter }}
        </view>
      </view>
      <view
        class="tui-indexed-list-alert"
        v-if="touchmove && lists[touchmoveIndex].letter"
      >
        <text>
          {{
            lists[touchmoveIndex].letter == 'well'
              ? '#'
              : lists[touchmoveIndex].letter
          }}
        </text>
      </view>
    </view>

    <view class="container">
      <view class="tui-title"> 已加入的团队 </view>
      <tui-card
        v-for="(card, index) in teams"
        :key="index"
        :image="card.img"
        :title="card.title"
        :tag="card.tag"
        @click="detail"
      >
        <!-- <template v-slot:body>
          <view class="tui-default"> 卡片内容部分 slot=>body </view>
        </template> -->
        <!-- <template v-slot:footer>
          <view class="tui-default"> 卡片底部 slot=>footer </view>
        </template> -->
      </tui-card>
    </view>
    <view class="tui-me__box" @tap.stop="btnMe">
      <tui-icon size="64" unit="rpx" color="#fff" name="people"></tui-icon>
    </view>
  </view>
</template>

<script>
import cityData from '@/utils/index.list.js'
//注意：如果tabs数据动态传值:itemWidth="(100/tabs.length)+'%'"
export default {
  computed: {
    last() {
      return function (data, index) {
        return data.length - 1 == index ? true : false
      }
    },
  },
  data() {
    return {
      navlinks: [
        {
          name: '成员名录',
          isDot: true,
        },
        {
          name: '组织架构',
        },
        {
          name: '团队管理',
        },
        {
          name: '我的主页',
        },
      ],
      teams: [
        {
          img: {
            url: "/static/images/news/avatar_1.jpg",
            width: 80,
            height: 80,
            circle: false,
          },
          title: {
            text: "神鹰一号团队",
          },
          tag: {
            text: "成员 22",
          },
        },
        {
          text: '广州叽叽喳喳信息科技有限公司',
          value: 1,
          //vertical,horizontal 为空则自适应排列
          align: '',
          children: [
            {
              text: '总经理：XXX',
              value: 100,
              children: [
                {
                  text: '市场部',
                  value: 200,
                  align: 'horizontal',
                  children: [
                    {
                      text: '区域经理',
                      value: 201,
                      children: [],
                    },
                    {
                      text: '售后服务',
                      value: 202,
                      children: [],
                    },
                    {
                      text: '综合助理',
                      value: 203,
                      children: [],
                    },
                    {
                      text: '网络工程师',
                      value: 204,
                      children: [],
                    },
                  ],
                },
                {
                  text: '财务部',
                  value: 300,
                  align: 'horizontal',
                  children: [
                    {
                      text: '财务',
                      value: 301,
                      children: [],
                    },
                    {
                      text: '出纳',
                      value: 302,
                      children: [],
                    },
                  ],
                },
                {
                  text: '研发部',
                  value: 400,
                  align: 'horizontal',
                  children: [
                    {
                      text: '设计',
                      value: 401,
                      children: [],
                    },
                    {
                      text: '雕刻',
                      value: 402,
                      children: [],
                    },
                    {
                      text: '结构工程',
                      value: 403,
                      children: [],
                    },
                    {
                      text: '工艺工程',
                      value: 403,
                      children: [],
                    },
                  ],
                },
              ],
            },
          ],
        },
      ],
      lists: [],
      touchmove: false, // 是否在索引表上滑动
      touchmoveIndex: -1,
      titleHeight: 0, // A字距离窗口顶部的高度
      indexBarHeight: 0, // 索引表高度
      indexBarItemHeight: 0, // 索引表子项的高度
      winHeight: 0,
      scrollTop: 0,
    }
  },
  onLoad: function (options) {
    const that = this
    setTimeout(() => {
      uni.getSystemInfo({
        success: function (res) {
          let winHeight = res.windowHeight
          let barHeight = winHeight - uni.upx2px(232)
          that.winHeight = winHeight
          that.indexBarHeight = barHeight
          that.indexBarItemHeight = barHeight / 25
          that.titleHeight = uni.upx2px(132)
          that.lists = cityData.list
        },
      })
    }, 10)
  },
  watch: {
    touchmoveIndex: function () {
      if (this.touchmoveIndex != -1) {
        uni.pageScrollTo({
          scrollTop: this.lists[this.touchmoveIndex].stickyTop + 1,
          duration: 10,
        })
      }
    },
  },
  methods: {
    change(e) {
      this.currentTeamTab = e.index
    },
    touchStart(e) {
      this.touchmove = true
      let pageY = e.changedTouches[0].pageY - this.scrollTop
      let index = Math.floor(
        (pageY - this.titleHeight) / this.indexBarItemHeight,
      )
      let item = this.lists[index]
      if (item) {
        this.touchmoveIndex = index
      }
    },
    touchMove(e) {
      let pageY = e.changedTouches[0].pageY - this.scrollTop
      let index = Math.floor(
        (pageY - this.titleHeight) / this.indexBarItemHeight,
      )
      let item = this.lists[index]
      if (item) {
        this.touchmoveIndex = index
      }
    },
    touchEnd() {
      this.touchmove = false
      this.touchmoveIndex = -1
    },
    touchCancel() {
      this.touchmove = false
      this.touchmoveIndex = -1
    },
    handleClick(index) {
      if (index === undefined || this.touchmove) return
      let item = this.lists[index]
      if (item) {
        this.touchmoveIndex = index
      }
    },
    stickyChange: function (e) {
      let index = e.index
      this.lists[index].stickyTop = e.top
    },
    search: function () {
      uni.navigateTo({
        url: '../../news/search/search',
      })
    },
    detail: function () {
      console.log('------ chat')
      uni.navigateTo({
        url: '../chat/chat/chat',
      })
    },
    btnMe() {
      uni.navigateTo({
        url: "/pages/va/me",
      });
    },
  },
  onPageScroll(e) {
    this.scrollTop = e.scrollTop
  },
}
</script>

<style>
.container {
  box-sizing: border-box;
}
.tab {
  margin-top: 28px;
}
.tui-me__box {
  width: 108rpx;
  height: 108rpx;
  border-radius: 50%;
  background-color: rgba(86, 119, 252, 0.95);
  box-shadow: 0px 0px 15px rgba(86, 119, 252, 0.75);
  position: fixed;
  bottom: 100rpx;
  right: 60rpx;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
