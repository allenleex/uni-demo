<template>
  <view class="tui-container">
    <view class="tui-searchbox">
      <view class="tui-rolling-search">
        <icon type="search" :size="13" color="#999"></icon>
        <swiper vertical autoplay circular interval="8000" class="tui-swiper">
          <swiper-item
            v-for="(item, index) in hotSearch"
            :key="index"
            class="tui-swiper-item"
            @tap="search"
          >
            <view class="tui-hot-item">大家正在搜：{{ item }}</view>
          </swiper-item>
        </swiper>
      </view>
    </view>
    <!--banner-->
    <swiper
      indicator-dots
      autoplay
      circular
      :interval="5000"
      :duration="150"
      indicator-color="rgba(255, 255, 255, 0.9)"
      indicator-active-color="#5677fc"
      class="tui-banner-swiper"
    >
      <swiper-item
        v-for="(item, index) in banner"
        :key="index"
        @tap.stop="bannerDetail"
      >
        <view class="tui-banner-title">{{ item.title }}</view>
        <image
          :src="'/static/images/news/' + item.img"
          class="tui-slide-image"
          mode="widthFix"
        />
      </swiper-item>
    </swiper>

    <tui-grid>
      <block v-for="(item, index) in routers" :key="index">
        <navigator :url="item.url" hover-class="none">
          <tui-grid-item :cell="5">
            <view class="tui-grid-icon">
              <!-- <image
                  class="tui-grid-img"
                  :src="'https://thorui.cn/images/basic/' + item.img + '.png'"
                  :style="{
                    width: item.width + 'rpx',
                    height: item.height + 'rpx',
                  }"
                /> -->
              <text class="tui-grid-item-value">###</text>
            </view>
            <text class="tui-grid-label">{{ item.name }}</text>
          </tui-grid-item>
        </navigator>
      </block>
    </tui-grid>

    <!--新闻列表-->
    <view class="tui-news-view">
      <block v-for="(item, index) in newsList" :key="index">
        <tui-list-cell :index="index" @click="detail" :unlined="count == index">
          <view
            class="tui-news-flex"
            :class="[
              item.isVideo || item.imgNum > 1
                ? 'tui-flex-column'
                : 'tui-flex-start',
            ]"
          >
            <view
              class="tui-news-picbox"
              :class="[
                item.isVideo || item.imgNum > 1
                  ? 'tui-w-full'
                  : 'tui-w220 tui-h165',
                item.imgNum > 1 ? 'tui-flex-between' : '',
              ]"
              v-if="item.imgNum > 0"
            >
              <block v-for="(items, index2) in item.img" :key="index2">
                <image
                  :src="'/static/images/news/' + items"
                  mode="widthFix"
                  class="tui-block"
                  :class="[
                    item.imgNum > 1 ? 'tui-one-third' : '',
                    item.isVideo ? 'tui-w-full' : '',
                  ]"
                ></image>
              </block>
              <view
                class="tui-btm-badge"
                v-if="item.isVideo || item.imgNum > 3"
                >{{ item.isVideo ? item.time : item.imgNum + "图" }}</view
              >
              <view class="tui-video" v-if="item.isVideo">
                <tui-icon name="play" color="#fff" :size="24"></tui-icon>
              </view>
            </view>
            <view
              class="tui-news-tbox tui-flex-column tui-flex-between"
              :class="[
                item.imgNum === 1 && !item.isVideo ? 'tui-h165 tui-pl-20' : '',
              ]"
            >
              <view
                class="tui-news-title"
                :class="[
                  (!item.isVideo && item.imgNum === 1) || item.imgNum === 0
                    ? ''
                    : 'tui-pt20',
                ]"
                >{{ item.title }}</view
              >
              <view
                class="tui-sub-box"
                :class="[!item.isVideo && item.imgNum === 1 ? '' : 'tui-pt20']"
              >
                <view class="tui-sub-source">{{ item.source }}</view>
                <view class="tui-sub-cmt">
                  <view>{{ item.cmtsNum }}评论</view>
                  <view class="tui-scale">
                    <tui-tag
                      padding="10rpx 24rpx"
                      :plain="true"
                      shape="circleRight"
                      v-if="item.isTop"
                      >置顶</tui-tag
                    >
                  </view>
                </view>
              </view>
            </view>
          </view>
        </tui-list-cell>
      </block>
    </view>
    <tui-tips ref="toast"></tui-tips>
    <!--加载loadding-->
    <tui-loadmore v-if="loadding" :index="3" type="primary"></tui-loadmore>
    <tui-nomore v-if="!pullUpOn"></tui-nomore>
    <!--加载loadding-->

    <tui-fab :btnList="btnList" maskClosable="true"></tui-fab>
  </view>
</template>

<script>
export default {
  computed: {
    count() {
      return this.newsList.length - 1;
    },
  },
  data() {
    return {
      hotSearch: ["早安D站", "2019退役球星", "卡拉斯科"],
      banner: [
        {
          img: "banner_1.jpg",
          title: "山东官方：德尔加多已完成全部手续办理，具备上场比赛资格",
        },
        {
          img: "banner_2.jpg",
          title: "这个世界上，或许没有真正的托黑",
        },
        {
          img: "banner_3.jpg",
          title: "金童再见！西班牙前锋托雷斯宣布退役",
        },
      ],
      newsList: [],
      dataSources: [
        {
          title: "卡拉斯科：俱乐部一些人的态度令我不解；需要解决出现的问题",
          source: "手机中国网",
          cmtsNum: 2019,
          isTop: true,
          isVideo: false,
          time: "00:00",
          img: ["list_1.jpg"],
          imgNum: 1,
        },
        {
          title: "荷兰媒体：德利赫特接近加盟尤文，转会费7000万，年薪2000万",
          source: "央视网新闻",
          cmtsNum: 3620,
          isTop: true,
          isVideo: false,
          time: "00:00",
          img: ["list_2.jpg"],
          imgNum: 1,
        },
        {
          title: "申花客场1-0江苏终结九轮不胜，莫雷诺争议进球经VAR判罚有效",
          source: "体坛大精汇",
          cmtsNum: 5230,
          isTop: true,
          isVideo: false,
          time: "00:00",
          img: [],
          imgNum: 0,
        },
        {
          title: "卡拉斯科：俱乐部一些人的态度令我不解；需要解决出现的问题",
          source: "体坛大精汇",
          cmtsNum: 7690,
          isTop: true,
          isVideo: false,
          time: "00:00",
          img: ["list_3.jpg", "list_2.jpg", "list_1.jpg"],
          imgNum: 20,
        },
        {
          title: "敲锣鼓、放鞭炮！本周国际赛事MVP提名揭晓",
          source: "体坛大精汇",
          cmtsNum: 2019,
          isTop: true,
          isVideo: false,
          time: "00:00",
          img: ["list_3.jpg"],
          imgNum: 1,
        },
        {
          title: "申花客场1-0江苏终结九轮不胜，莫雷诺争议进球经VAR判罚有效",
          source: "手机中国网",
          cmtsNum: 2019,
          isTop: true,
          isVideo: false,
          time: "00:00",
          img: ["list_4.jpg"],
          imgNum: 1,
        },
        {
          title: "荷兰媒体：德利赫特接近加盟尤文，转会费7000万，年薪2000万",
          source: "手机中国网",
          cmtsNum: 2019,
          isTop: true,
          isVideo: true,
          time: "00:58",
          img: ["banner_2.jpg"],
          imgNum: 1,
        },
        {
          title: "敲锣鼓、放鞭炮！本周国际赛事MVP提名揭晓",
          source: "体坛大精汇",
          cmtsNum: 5230,
          isTop: true,
          isVideo: false,
          time: "00:00",
          img: [],
          imgNum: 0,
        },
        {
          title: "卡拉斯科：俱乐部一些人的态度令我不解；需要解决出现的问题",
          source: "体坛大精汇",
          cmtsNum: 7690,
          isTop: true,
          isVideo: false,
          time: "00:00",
          img: ["list_3.jpg", "list_2.jpg", "list_4.jpg"],
          imgNum: 8,
        },
        {
          title: "申花客场1-0江苏终结九轮不胜，莫雷诺争议进球经VAR判罚有效",
          source: "手机中国网",
          cmtsNum: 2019,
          isTop: true,
          isVideo: true,
          time: "00:49",
          img: ["banner_1.jpg"],
          imgNum: 1,
        },
      ],
      pageIndex: 1,
      loadding: false,
      pullUpOn: true,
      routers: [
        {
          name: "指标名称",
          url: "",
          img: "color",
          width: 74,
          height: 74,
        },
        {
          name: "指标名称",
          url: "",
          img: "flex",
          width: 60,
          height: 60,
        },
        {
          name: "指标名称",
          url: "",
          img: "icon",
          width: 56,
          height: 56,
        },
        {
          name: "指标名称",
          url: "",
          img: "button",
          width: 64,
          height: 64,
        },
        {
          name: "指标名称",
          url: "",
          img: "tag",
          width: 64,
          height: 64,
        },
      ],
      btnList: [
        {
          bgColor: "#5677FC",
          //名称
          text: "发布",
          //字体大小
          fontSize: 28,
          //字体颜色
          color: "#fff",
        },
      ],
    };
  },
  onLoad: function (options) {
    this.newsList = this.dataSources;
  },
  methods: {
    search: function () {
      uni.navigateTo({
        url: "../search/search",
      });
    },
    bannerDetail: function () {
      uni.navigateTo({
        url: "../newsDetail/newsDetail",
      });
    },
    detail(e) {
      console.log("-------- detail");
      let index = e.index;
      let url = "../newsDetail/newsDetail";
      if (this.newsList[index].isVideo) {
        url = "../newsVideo/newsVideo";
      }
      uni.navigateTo({
        url: url,
      });
    },
  },
  //页面相关事件处理函数--监听用户下拉动作
  onPullDownRefresh: function () {
    this.newsList = this.dataSources;
    this.pageIndex = 1;
    this.pullUpOn = true;
    this.loadding = false;
    uni.stopPullDownRefresh();
    let options = {
      msg: "刷新成功，为你更新了10条数据",
      duration: 2000,
      type: "translucent",
    };
    setTimeout(() => {
      this.$refs.toast.showTips(options);
    }, 300);
  },

  // 页面上拉触底事件的处理函数
  onReachBottom: function () {
    if (!this.pullUpOn) return;
    this.loadding = true;
    if (this.pageIndex == 3) {
      this.loadding = false;
      this.pullUpOn = false;
    } else {
      let arr = JSON.parse(JSON.stringify(this.dataSources));
      if (this.pageIndex >= 1) {
        for (let item of arr) {
          item.isTop = false;
        }
      }
      this.newsList = this.newsList.concat(arr);
      this.pageIndex = this.pageIndex + 1;
      this.loadding = false;
    }
  },
};
</script>

<style>
/* #ifdef MP-WEIXIN  */
.tui-banner-swiper .wx-swiper-dots.wx-swiper-dots-horizontal {
  width: 100%;
  top: 280rpx;
  text-align: right;
  padding-right: 30rpx;
  box-sizing: border-box;
}

.tui-banner-swiper .wx-swiper-dot {
  width: 8rpx;
  height: 8rpx;
  display: inline-flex;
  background: none;
  justify-content: space-between;
}

.tui-banner-swiper .wx-swiper-dot::before {
  content: "";
  flex-grow: 1;
  background: rgba(255, 255, 255, 0.9);
  border-radius: 8rpx;
}

.tui-banner-swiper .wx-swiper-dot-active::before {
  background: #5677fc;
}

.tui-banner-swiper .wx-swiper-dot.wx-swiper-dot-active {
  width: 18rpx;
}

/* #endif */

/* #ifndef MP-WEIXIN */
>>> .tui-banner-swiper .uni-swiper-dots.uni-swiper-dots-horizontal {
  width: 100%;
  top: 280rpx;
  text-align: right;
  padding-right: 30rpx;
  box-sizing: border-box;
}

>>> .tui-banner-swiper .uni-swiper-dot {
  width: 8rpx;
  height: 8rpx;
  display: inline-flex;
  background: none;
  justify-content: space-between;
}

>>> .tui-banner-swiper .uni-swiper-dot::before {
  content: "";
  flex-grow: 1;
  background: rgba(255, 255, 255, 0.9);
  border-radius: 8rpx;
}

>>> .tui-banner-swiper .uni-swiper-dot-active::before {
  background: #5677fc;
}

>>> .tui-banner-swiper .uni-swiper-dot.uni-swiper-dot-active {
  width: 18rpx;
}

/* #endif */
</style>
