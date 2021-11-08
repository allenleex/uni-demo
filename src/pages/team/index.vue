<template>
  <view class="container">
    <tui-tabs
      :top="0"
      :tabs="tabs"
      :isFixed="true"
      :currentTab="currentTab"
      @change="change"
      color="#101010"
      :itemWidth="100 / tabs3.length + '%'"
    >
    </tui-tabs>
    <tui-index-list @click="itemClick" :list-data="listData">
      <template v-slot:header>
        <tui-searchbar
          backgroundColor="#ededed"
          placeholder="搜索"
          @input="input"
          @search="search"
          @clear="clearInput"
        ></tui-searchbar>
        <tui-list-cell padding="16rpx 30rpx">
          <!--此处样式App端偶尔会丢失-->
          <view
            class="tui-list__item"
            style="display: flex; align-items: center"
            @tap="newFriends"
          >
            <image
              class="tui-avatar"
              style="width: 68rpx; height: 68rpx"
              src="https://thorui.cn/extend/avatar/img_new_friends.png"
            ></image>
            <view style="padding-left: 20rpx">新的朋友</view>
          </view>
        </tui-list-cell>
      </template>
      <!-- 小程序端目前仅支持解构插槽 -->
      <!-- #ifdef APP-PLUS || H5 -->
      <template v-slot:item="slotProps">
        <tui-list-cell padding="16rpx 30rpx">
          <view class="tui-list__item">
            <image class="tui-avatar" :src="slotProps.entity.avatar"></image>
            <view class="tui-name">{{ slotProps.entity.name }}</view>
          </view>
        </tui-list-cell>
      </template>
      <!-- #endif -->
      <!-- #ifndef APP-PLUS || H5 -->
      <template slot-scope="{ entity, index, subi }" slot="item">
        <tui-list-cell padding="16rpx 30rpx">
          <view class="tui-list__item">
            <image class="tui-avatar" :src="entity.avatar"></image>
            <view class="tui-name">{{ entity.name }}</view>
          </view>
        </tui-list-cell>
      </template>
      <!-- #endif -->
      <template v-slot:footer>
        <tui-loadmore v-if="getTotal == 0 && init"></tui-loadmore>
        <view class="tui-footer__total" v-if="getTotal > 0 || !init"
          >{{ getTotal }}位联系人</view
        >
      </template>
    </tui-index-list>
  </view>
</template>

<script>
//注意：如果tabs数据动态传值:itemWidth="(100/tabs.length)+'%'"
// import list from "@/utils/index.list.js";
export default {
  data() {
    return {
      currentTab: 0,
      tabs: [
        {
          name: "名录",
          num: 2,
        },
        {
          name: "架构",
        },
        {
          name: "管理",
        },
      ],
      listData: [
        {
          letter: "A",
          data: [
            {
              name: "阿拉斯加",
              mobile: "13588889999",
              keyword: "阿拉斯加ABA13588889999",
            },
            {
              name: "阿克苏",
              mobile: "0551-4386721",
              keyword: "阿克苏AKESU0551-4386721",
            },
            {
              name: "阿拉善",
              mobile: "4008009100",
              keyword: "阿拉善ALASHAN4008009100",
            },
            {
              name: "阿勒泰",
              mobile: "13588889999",
              keyword: "阿勒泰ALETAI13588889999",
            },
            {
              name: "阿里",
              mobile: "13588889999",
              keyword: "阿里ALI13588889999",
            },
            {
              name: "安阳",
              mobile: "13588889999",
              keyword: "13588889999安阳ANYANG",
            },
          ],
        },
      ],
      init: true,
    };
  },
  computed: {
    getTotal() {
      let total = 0;
      for (let item of this.listData) {
        total += item.data.length;
      }
      return total;
    },
  },
  onLoad() {},
  methods: {
    change(e) {
      this.currentTab = e.index;
    },
    goNavBar() {
      uni.navigateTo({
        url: "/pages/index/navbar/navbar",
      });
    },
    search(e) {
      console.log(e);
      let value = e.value;
      this.searchResult(value);
    },
    clearInput() {
      this.searchResult("");
    },
    input(e) {
      console.log(e);
      let value = e.value;
      this.searchResult(value);
    },
    searchResult(value) {
      let result = [];
      for (let item of list) {
        let data = item.data.filter(
          (item) =>
            item.name.indexOf(value) > -1 ||
            item.keyword
              .toLocaleLowerCase()
              .indexOf(value.toLocaleLowerCase()) > -1
        );
        if (data.length > 0) {
          result.push({
            letter: item.letter,
            data: data,
          });
        }
      }
      this.listData = result;
    },
    itemClick(e) {
      console.log(e);
      this.tui.toast(`id=${e.id},name=${e.name}`);
    },
    newFriends() {
      this.tui.toast("Hi小友~");
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

.tui-mtop {
  margin-top: 80rpx;
}

.tui-footer__total {
  width: 100%;
  height: 90rpx;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #999;
  font-size: 30rpx;
}

.tui-list__item {
  width: 100%;
  display: flex;
  align-items: center;
}

.tui-avatar {
  width: 68rpx;
  height: 68rpx;
  border-radius: 8rpx;
  flex-shrink: 0;
  background-color: #ccc;
}

.tui-name {
  width: 90%;
  font-size: 32rpx;
  padding-left: 20rpx;
  padding-right: 40rpx;
  box-sizing: border-box;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
</style>
