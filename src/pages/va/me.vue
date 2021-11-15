<template>
  <view class="tui-container">
    <view
      class="tui-list-cell tui-cell-last"
      hover-class="tui-cell-hover"
      :hover-start-time="150"
    >
      <image src="/static/images/zaza.png" class="tui-img"></image>
      <view class="tui-name">Allen</view>
    </view>
    <view class="tui-title">
      推荐形象 <tui-icon class="icon-more" name="arrowright" :size="24" ></tui-icon>
    </view>
    <scroll-view scroll-x class="tui-bg__white">
      <view class="tui-goods__list">
        <view class="tui-goods__item" v-for="(item, index) in 8" :key="index">
          <view class="tui-goods__imgbox">
            <image
              :src="`/static/images/layout/${index % 2 == 0 ? 1 : 2}.jpg`"
              mode="widthFix"
              class="tui-goods__img"
            ></image>
          </view>
          <view class="tui-pri__box">
            <view class="tui-sale-pri">
              <view class="tui-size-sm">¥</view>
              <view>298</view>
              <view class="tui-size-sm">.50</view>
            </view>
          </view>
          <view class="tui-original__pri">¥399.00</view>
        </view>
        <view class="tui-more__box">
          <view class="tui-more__text">查看更多</view>
          <image
            src="/static/images/layout/icon_home_seemore.png"
            class="tui-more__ic"
          ></image>
        </view>
        <view class="tui-space__box"></view>
      </view>
    </scroll-view>
    <view class="tui-title">
      免费形象 <tui-icon class="icon-more" name="arrowright" :size="24" ></tui-icon>
    </view>
    <scroll-view scroll-x class="tui-bg__white">
      <view class="tui-goods__list">
        <view class="tui-goods__item" v-for="(item, index) in 8" :key="index">
          <view class="tui-goods__imgbox">
            <image
              :src="`/static/images/layout/${index % 2 == 0 ? 1 : 2}.jpg`"
              mode="widthFix"
              class="tui-goods__img"
            ></image>
          </view>
          <view class="tui-pri__box">
            <view class="tui-sale-pri">
              <view class="tui-size-sm">¥</view>
              <view>298</view>
              <view class="tui-size-sm">.50</view>
            </view>
          </view>
          <view class="tui-original__pri">¥399.00</view>
        </view>
        <view class="tui-more__box">
          <view class="tui-more__text">查看更多</view>
          <image
            src="/static/images/layout/icon_home_seemore.png"
            class="tui-more__ic"
          ></image>
        </view>
        <view class="tui-space__box"></view>
      </view>
    </scroll-view>
    <view class="tui-title">
      付费形象 <tui-icon class="icon-more" name="arrowright" :size="24" ></tui-icon>
    </view>
    <scroll-view scroll-x class="tui-bg__white">
      <view class="tui-goods__list">
        <view class="tui-goods__item" v-for="(item, index) in 8" :key="index">
          <view class="tui-goods__imgbox">
            <image
              :src="`/static/images/layout/${index % 2 == 0 ? 1 : 2}.jpg`"
              mode="widthFix"
              class="tui-goods__img"
            ></image>
          </view>
          <view class="tui-pri__box">
            <view class="tui-sale-pri">
              <view class="tui-size-sm">¥</view>
              <view>298</view>
              <view class="tui-size-sm">.50</view>
            </view>
          </view>
          <view class="tui-original__pri">¥399.00</view>
        </view>
        <view class="tui-more__box">
          <view class="tui-more__text">查看更多</view>
          <image
            src="/static/images/layout/icon_home_seemore.png"
            class="tui-more__ic"
          ></image>
        </view>
        <view class="tui-space__box"></view>
      </view>
    </scroll-view>
  </view>
</template>

<script>
export default {
  data() {
    return {}
  },
  methods: {},
}
</script>

<style>
.tui-bg__white {
  background-color: #ffffff;
  border-radius: 6rpx;
  overflow: hidden;
}

.tui-goods__list {
  display: flex;
  align-items: center;
  padding: 0 24rpx;
}

.tui-goods__item {
  background-color: #fff;
  width: 200rpx;
  height: 280rpx;
  border-radius: 6rpx;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  flex-shrink: 0;
  margin-right: 18rpx;
}

.tui-goods__imgbox {
  width: 150rpx;
  height: 150rpx;
  display: flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
}

.tui-goods__img {
  max-width: 150rpx;
  max-height: 150rpx;
  display: block;
}

.tui-pri__box {
  max-width: 150rpx;
  display: flex;
  justify-content: center;
  align-items: center;
}

.tui-sale-pri {
  display: flex;
  align-items: flex-end;
  padding: 10rpx 0 8rpx;
  box-sizing: border-box;
  font-size: 28rpx;
  line-height: 28rpx;
  color: #eb0909;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
}

.tui-size-sm {
  font-size: 24rpx;
  line-height: 24rpx;
  transform: scale(0.8);
  transform-origin: 0 50%;
}

.tui-original__pri {
  font-size: 24rpx;
  line-height: 24rpx;
  color: #999999;
  transform-origin: center 10%;
  transform: scale(0.8);
  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: line-through;
}

.tui-more__box {
  width: 70rpx;
  height: 210rpx;
  background: #fff0f0;
  border-radius: 6px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  box-sizing: border-box;
  margin-right: 23rpx;
}

.tui-more__text {
  color: #eb0909;
  font-size: 26rpx;
  width: 25rpx;
}

.tui-more__ic {
  width: 20rpx;
  height: 20rpx;
  margin-top: 13rpx;
  display: block;
}

.tui-space__box {
  width: 1rpx;
  height: 230rpx;
  background: #fff;
  flex-shrink: 0;
}

/**
	 *  案例二
	 */
.tui-menu__list {
  width: 100%;
  box-sizing: border-box;
  border-radius: 6rpx;
  overflow: hidden;
  padding: 10rpx 0;
}

.tui-menu__box {
  display: flex;
}

.tui-menu__item {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 168rpx;
  padding: 24rpx 0;
  box-sizing: border-box;
  flex-shrink: 0;
}

.tui-menu__ic {
  width: 90rpx;
  height: 90rpx;
  border-radius: 50%;
  background-color: #f2f2f2;
}

.tui-menu__text {
  font-size: 24rpx;
  color: #333;
  padding-top: 12rpx;
}

.tui-scroll__box {
  width: 100rpx;
  height: 8rpx;
  background-color: #f2f2f2;
  margin: 16rpx auto 24rpx;
  border-radius: 8rpx;
  position: relative;
}

.tui-scroll__bar {
  width: 40rpx;
  height: 8rpx;
  background-color: #5677fc;
  border-radius: 8rpx;
  position: absolute;
  left: 0;
  top: 0;
  z-index: 2;
  transition: all 0.2s linear;
}

.icon-more {
    float: right;
}
</style>
