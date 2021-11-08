<!--
 * @Author: your name
 * @Date: 2021-11-08 07:57:41
 * @LastEditTime: 2021-11-08 11:57:22
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
        :currentTab="currentResourceTab > 3 ? 0 : currentResourceTab"
        @change="change"
        :itemWidth="100 / tabs.length + '%'"
      ></tui-tabs>
    </view>
    <view class="tab tab1" v-if="currentResourceTab==0">
      <tui-grid>
        <block v-for="(item, index) in routers" v-if="index < 5" :key="index">
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
    </view>
    <view>
      
    </view>
  </view>
</template>

<script>
//注意：如果tabs数据动态传值:itemWidth="(100/tabs.length)+'%'"
export default {
  data() {
    return {
      currentResourceTab: 0,
      tabs: [
        {
          name: "微信好友",
          isDot: true,
        },
        {
          name: "微信群",
          isDot: true,
        },
        {
          name: "推广渠道",
        },
        {
          name: "数据资产",
        },
      ],
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
    };
  },
  methods: {
    change(e) {
      this.currentResourceTab = e.index;
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
.container {
  padding-bottom: env(safe-area-inset-bottom);
}

.tab {
  margin-top: 28px;
}

.tab1 {
  
}

.tab2 {

}

.tab3 {

}

.tab4 {

}

</style>
