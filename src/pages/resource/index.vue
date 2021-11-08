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
    <view class="tui-title">
      新的微信好友
    </view>
    <tui-card v-for="card in cards" :image="card.img" :title="card.title" :tag="card.tag">
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
  methods: {
    detail(e) {},
  },
}
</script>

<style></style>
