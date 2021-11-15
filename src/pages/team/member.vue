<!--
 * @Author: your name
 * @Date: 2021-11-09 08:41:49
 * @LastEditTime: 2021-11-09 08:41:50
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \uni-demo\src\pages\team\member.vue
-->
<!--
 * @Author: your name
 * @Date: 2021-11-08 07:57:41
 * @LastEditTime: 2021-11-08 17:46:02
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \uni-demo\src\pages\resource\index.vue
-->
<template>
  <view class="container">
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
          <view class="tui-list-cell-divider">{{
            list.letter == "well" ? "#" : list.letter
          }}</view>
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
        </template>
      </tui-sticky>
    </block>
    <!--联系人列表-->
    <view class="tui-footer" v-if="lists.length">120位联系人</view>
    <view
      class="tui-indexed-list-bar"
      :style="{ height: indexBarHeight + 'px' }"
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
        {{ items.letter == "well" ? "#" : items.letter }}
      </view>
    </view>
    <view
      class="tui-indexed-list-alert"
      v-if="touchmove && lists[touchmoveIndex].letter"
    >
      <text>{{
        lists[touchmoveIndex].letter == "well"
          ? "#"
          : lists[touchmoveIndex].letter
      }}</text>
    </view>
  </view>
</template>

<script>
import cityData from "@/utils/index.list.js";
export default {
  computed: {
    last() {
      return function (data, index) {
        return data.length - 1 == index ? true : false;
      };
    },
  },
  data() {
    return {
      lists: [],
      touchmove: false, // 是否在索引表上滑动
      touchmoveIndex: -1,
      titleHeight: 0, // A字距离窗口顶部的高度
      indexBarHeight: 0, // 索引表高度
      indexBarItemHeight: 0, // 索引表子项的高度
      winHeight: 0,
      scrollTop: 0,
    };
  },
  onLoad: function (options) {
    const that = this;
    setTimeout(() => {
      uni.getSystemInfo({
        success: function (res) {
          let winHeight = res.windowHeight;
          let barHeight = winHeight - uni.upx2px(232);
          that.winHeight = winHeight;
          that.indexBarHeight = barHeight;
          that.indexBarItemHeight = barHeight / 25;
          that.titleHeight = uni.upx2px(132);
          that.lists = cityData.list;
        },
      });
    }, 10);
  },
  watch: {
    touchmoveIndex: function () {
      if (this.touchmoveIndex != -1) {
        uni.pageScrollTo({
          scrollTop: this.lists[this.touchmoveIndex].stickyTop + 1,
          duration: 10,
        });
      }
    },
  },
  methods: {
    touchStart(e) {
      this.touchmove = true;
      let pageY = e.changedTouches[0].pageY - this.scrollTop;
      let index = Math.floor(
        (pageY - this.titleHeight) / this.indexBarItemHeight
      );
      let item = this.lists[index];
      if (item) {
        this.touchmoveIndex = index;
      }
    },
    touchMove(e) {
      let pageY = e.changedTouches[0].pageY - this.scrollTop;
      let index = Math.floor(
        (pageY - this.titleHeight) / this.indexBarItemHeight
      );
      let item = this.lists[index];
      if (item) {
        this.touchmoveIndex = index;
      }
    },
    touchEnd() {
      this.touchmove = false;
      this.touchmoveIndex = -1;
    },
    touchCancel() {
      this.touchmove = false;
      this.touchmoveIndex = -1;
    },
    handleClick(index) {
      if (index === undefined || this.touchmove) return;
      let item = this.lists[index];
      if (item) {
        this.touchmoveIndex = index;
      }
    },
    stickyChange: function (e) {
      let index = e.index;
      this.lists[index].stickyTop = e.top;
    },
    search: function () {
      uni.navigateTo({
        url: "../../news/search/search",
      });
    },
    detail: function () {
      console.log("------ chat");
      uni.navigateTo({
        url: "../chat/chat/chat",
      });
    },      
  },
  onPageScroll(e) {
    this.scrollTop = e.scrollTop;
  },
};
</script>

<style>
</style>
