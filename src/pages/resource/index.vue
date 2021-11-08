<!--
 * @Author: your name
 * @Date: 2021-11-08 07:57:41
 * @LastEditTime: 2021-11-08 17:38:36
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \uni-demo\src\pages\resource\index.vue
-->
<template>
  <view class="tui-container">
		<view class="tui-banner-swiper">
			<swiper class="tui-banner__height" @change="bannerChange" circular :indicator-dots="false" autoplay :interval="2000"
			 :duration="300">
				<block v-for="(item,index) in background" :key="index">
					<swiper-item>
						<view class="tui-swiper-item tui-banner__height" :class="[item]">Thor UI</view>
					</swiper-item>
				</block>
			</swiper>
			<!--实际使用按需传入props，此处只为演示-->
			<tui-swiper-dot :type="type" :count="count" :current="current" :currentTitle="currentTitle" :left="left" :right="right"
			 :bottom="bottom" :width="width" :height="height" :radius="radius" :backgroundColor="backgroundColor" :activeBgColor="activeBgColor"
			 :color="color" :activeColor="activeColor" :size="size" :margin="margin" :padding="padding"></tui-swiper-dot>
		</view>
    <view class="container">
      <tui-grid>
        <block v-for="(item, index) in navlinks" :key="index">
          <tui-grid-item :cell="4" @click="detail">
            <navigator :url="item.url">
              <text class="tui-grid-item-value" :wx-if="!item.icon">
                {{ item.value }}
              </text>
              <view class="tui-grid-icon" :wx-if="item.icon">
                <tui-icon
                  :name="item.name"
                  :size="30"
                  :color="item.color"
                ></tui-icon>
              </view>
              <text class="tui-grid-label">{{ item.title }}</text>
              <view class="tui-rate-container">
                <tui-rate :current="3" hollow="true" disabled="true"></tui-rate>
              </view>
            </navigator>
          </tui-grid-item>
        </block>
      </tui-grid>
    </view>
    <view class="tui-title">
      新的微信好友
    </view>
    <tui-card
      v-for="card in cards"
      :image="card.img"
      :title="card.title"
      :tag="card.tag"
    >
      <template v-slot:body>
        <view class="tui-default">
          卡片内容部分 slot=>body
        </view>
      </template>
      <template v-slot:footer>
        <view class="tui-default">
          卡片底部 slot=>footer
        </view>
      </template>
    </tui-card>
  </view>
</template>

<script>
//注意：如果tabs数据动态传值:itemWidth="(100/tabs.length)+'%'"
export default {
  data() {
    return {
      background: ['tui-bg__primary', 'tui-bg__green', 'tui-bg__white'],
      typeArr: ["round", "round无圆角", "nav", "indexes", "固定右侧indexes", "改变颜色"],
      current: 0,
      type: 1,
      count: 0,
      currentTitle: "",
      left: "0",
      right: "auto",
      bottom: "30rpx",
      width: "16rpx",
      height: "16rpx",
      radius: "50%",
      backgroundColor: "#bfbfbf",
      activeBgColor: "#5677fc",
      color: "#333",
      activeColor: "#fff",
      size: 28,
      margin: "0 8rpx",
      padding: "0 30rpx",
      navlinks: [
        {
          title: '微信用户',
          name: 'people-fill',
          value: 120,
          url: 'friend',
          icon: false,
          color: '#101010',
        },
        {
          title: '微信群',
          name: 'community-fill',
          value: 10,
          url: 'group',
          icon: false,
          color: '#101010',
        },
        {
          title: '推广渠道',
          name: 'category',
          value: 30,
          url: 'channel',
          icon: false,
          color: '#101010',
        },
        {
          title: '数据资产',
          name: 'manage-fill',
          value: 30,
          url: 'data',
          icon: true,
          color: '#101010',
        },
      ],
      cards: [
        {
          img: {
            url: '/static/images/news/avatar_1.jpg',
            width: 80,
            height: 80,
            circle: true,
          },
          title: {
            text: 'CSDN云计算',
          },
          tag: {
            text: '1小时前',
          },
        },
        {
          img: {
            url: '/static/images/news/avatar_2.jpg',
            width: 80,
            height: 80,
            circle: true,
          },
          title: {
            text: 'CSDN云计算',
          },
          tag: {
            text: '1小时前',
          },
        },
        {
          img: {
            url: '/static/images/news/avatar_1.jpg',
            width: 80,
            height: 80,
            circle: true,
          },
          title: {
            text: 'JavaScript',
          },
          tag: {
            text: '昨天',
          },
        },
      ],
    }
  },
  onLoad() {
    this.count = this.background.length
    this.currentTitle = this.titleArr[0]
  },
  methods: {
    bannerChange: function(e) {
      this.current = e.detail.current;
      this.currentTitle = this.titleArr[this.current]
    },
    detail(e) {},
  },
}
</script>

<style>
.tui-swiper-item {
  width: 100%;
  color: #ffffff;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 34rpx;
  font-weight: 600;
}

.tui-banner__height {
  height: 360rpx;
}

.tui-bg__primary {
  background-color: #222222;
}

.tui-bg__green {
  background-color: #07c160;
}

.tui-bg__white {
  background-color: #eeeeee;
  color: #000;
}

.tui-banner-swiper {
  position: relative;
}

.thorui-flex__between {
  width: 100%;
  padding: 40rpx 30rpx;
  box-sizing: border-box;
}
</style>
