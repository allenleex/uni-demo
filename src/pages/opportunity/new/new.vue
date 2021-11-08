<!--
 * @Author: your name
 * @Date: 2021-11-08 16:02:47
 * @LastEditTime: 2021-11-08 16:25:10
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \uni-demo\src\pages\opportunity\new\new.vue
-->
<template>
  <view class="container">
		<view class="tui-page__hd">
			<view class="tui-page__title">表单结构</view>
			<view class="tui-page__desc">展示表单页面的信息结构样式。</view>
		</view>
		<view class="tui-page__hd">
            <form>
				<view class="thorui-cells thorui-arrow tui-title">单选列表项</view>
				<radio-group>
					<tui-list-cell padding="0" v-for="(item, index) in items" :key="index">
						<label class="thorui-checkmark thorui-primary thorui-flex__between thorui-padding">
							<text class="thorui-left__sm">{{ item.name }}</text>
							<radio :value="item.value" :checked="item.checked || false"></radio>
						</label>
					</tui-list-cell>
				</radio-group>
            </form>
        </view>
  </view>
</template>

<script>
export default {
  data() {
    return {
      items: [
        {
          value: "CHN",
          name: "中国 CHN",
          checked: true,
        },
        {
          value: "USA",
          name: "美国 USA",
        },
      ],
      date: "2020-05-20",
      companyName: "",
      range: ["+86", "+80", "+87", "+84"],
      areaCode: "+86",
      countrys: ["中国 CHN", "美国 USA", "日本 JPN"],
      area: "",
      country: "",
      serverUrl: "https://api.thorui.cn/",
      value: [], //初始化图片
    };
  },
  onLoad() {
    //实际应为请求返回数据
    setTimeout(() => {
      //实际开发中图片地址应为网络地址
      this.value = ["/static/images/my/mine_avatar_3x.jpg"];
    }, 200);
  },
  methods: {
    pickerDate(e) {
      this.date = e.detail.value;
    },
    pickerAreaCode(e) {
      console.log(e);
      this.areaCode = this.range[e.detail.value];
    },
    selectCountry(e) {
      this.area = this.countrys[e.detail.value];
    },
    pickerCountry(e) {
      this.country = this.countrys[e.detail.value];
    },
    result: function (e) {
      console.log(e);
    },
    remove: function (e) {
      //移除图片
      console.log(e);
    },
  },
};
</script>

<style>
page {
  background-color: #fff;
}
.tui-title {
  width: 100%;
  font-size: 28rpx;
  color: #888;
  padding: 40rpx 30rpx 20rpx;
  box-sizing: border-box;
}
.tui-btn__box {
  padding: 60rpx 0;
}
</style>
