<!--
 * @Author: your name
 * @Date: 2021-11-08 07:57:41
 * @LastEditTime: 2021-11-08 10:27:11
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \uni-demo\src\pages\resource\index.vue
-->
<template>
  <view class="container">
    <tui-tabs
      :tabs="tabs"
      :top="0"
      :isFixed="true"
      :currentTab="currentTab > 3 ? 0 : currentTab"
      @change="change"
      :itemWidth="100 / tabs.length + '%'"
    ></tui-tabs>
  </view>
</template>

<script>
//注意：如果tabs数据动态传值:itemWidth="(100/tabs.length)+'%'"
export default {
  data() {
    return {
      currentTab: 0,
      tabs: [
        {
          name: "名录",
          isDot: true,
        },
        {
          name: "架构",
        },
        {
          name: "管理",
        },
        {
          name: "我的",
        },
      ],
    };
  },
  methods: {
    change(e) {
      this.currentTab = e.index;
    },
  },
};
</script>

<style>
.container {
  padding: 40rpx 0 120rpx 0;
  box-sizing: border-box;
}

.header {
  padding: 80rpx 90rpx 60rpx 90rpx;
  box-sizing: border-box;
}

.title {
  font-size: 34rpx;
  color: #333;
  font-weight: 500;
}

.sub-title {
  font-size: 24rpx;
  color: #7a7a7a;
  padding-top: 18rpx;
}

.tui-primary {
  color: #5677fc;
}
</style>
