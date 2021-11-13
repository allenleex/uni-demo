<!--
 * @Author: your name
 * @Date: 2021-11-08 07:57:41
 * @LastEditTime: 2021-11-09 10:50:54
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \uni-demo\src\pages\resource\index.vue
-->
<template>
  <view class="tui-container">
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
        <template v-slot:body>
          <view class="tui-default">
          </view>
        </template>
      </my-team-card>
      <!-- <tui-card
        v-for="(card, index) in teams"
        :key="index"
        :image="card.img"
        :title="card.title"
        :tag="card.tag"
        @click="detail"
      >
        <template v-slot:body>
          <view class="tui-default">
            <view class="tui-rate-container">
              <tui-rate :current="3" hollow="true" disabled="true"></tui-rate>
            </view>
          </view>
        </template>
      </tui-card> -->
      <view class="tui-btn-box"
        ><tui-button @click="detail">创建团队</tui-button></view
      >
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
  </view>
</template>

<script>
import MyTeamCard from '../../components/my/my-team-card.vue';
//注意：如果tabs数据动态传值:itemWidth="(100/tabs.length)+'%'"
export default {
  components: {
    MyTeamCard
  },
  data() {
    return {
      navlinks: [
        {
          title: "我创建的",
          name: "people-fill",
          value: 3,
          url: "friend",
          icon: false,
          color: "#101010",
        },
        {
          title: "已加入的",
          name: "community-fill",
          value: 10,
          url: "group",
          icon: false,
          color: "#101010",
        },
        {
          title: "导航链接",
          name: "applets",
          value: 30,
          url: "channel",
          icon: true,
          color: "#101010",
        },
        {
          title: "导航链接",
          name: "applets",
          value: 30,
          url: "data",
          icon: true,
          color: "#101010",
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
          img: {
            url: "/static/images/news/avatar_2.jpg",
            width: 80,
            height: 80,
            circle: false,
          },
          title: {
            text: "神鹰二号团队",
          },
          tag: {
            text: "成员 18",
          },
        },
      ],
    };
  },
  methods: {
    detail(e) {
      uni.navigateTo({
        url: "./team",
      });
    },
  },
};
</script>

<style>
.container {
  box-sizing: border-box;
}

.tui-btn-box {
  padding: 20rpx 30rpx 40rpx 30rpx;
}
</style>
