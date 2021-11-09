<!--
 * @Author: your name
 * @Date: 2021-11-09 08:41:49
 * @LastEditTime: 2021-11-09 09:06:52
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
    <view class="tui-title"> 我的上级 </view>
    <tui-card
      v-for="(card, index) in boss"
      :key="index"
      :image="card.img"
      :title="card.title"
      :tag="card.tag"
    >
      <template v-slot:body>
        <view class="tui-default"> 卡片内容部分 slot=>body </view>
      </template>
      <template v-slot:footer>
        <view class="tui-default"> 卡片底部 slot=>footer </view>
      </template>
    </tui-card>
  </view>
</template>

<script>
export default {
  data() {
    return {
      boss: [
        {
          img: {
            url: '/static/images/news/avatar_1.jpg',
            width: 80,
            height: 80,
            circle: true,
          },
          title: {
            text: '李总',
          },
          tag: {
            text: '1小时前',
          },
        },
      ],
    };
  },
  methods: {},
};
</script>

<style>
</style>
