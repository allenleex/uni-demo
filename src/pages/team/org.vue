<!--
 * @Author: your name
 * @Date: 2021-11-09 08:41:49
 * @LastEditTime: 2021-11-09 08:41:50
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
      <scroll-view scroll-x class="tui-scroll__view">
        <tui-org-tree collapsible :treeData="treeData"></tui-org-tree>
      </scroll-view>
  </view>
</template>

<script>
export default {
  data() {
    return {
      treeData: [
        {
          text: "广州叽叽喳喳信息科技有限公司",
          value: 1,
          //vertical,horizontal 为空则自适应排列
          align: "",
          children: [
            {
              text: "总经理：XXX",
              value: 100,
              children: [
                {
                  text: "市场部",
                  value: 200,
                  align: "horizontal",
                  children: [
                    {
                      text: "区域经理",
                      value: 201,
                      children: [],
                    },
                    {
                      text: "售后服务",
                      value: 202,
                      children: [],
                    },
                    {
                      text: "综合助理",
                      value: 203,
                      children: [],
                    },
                    {
                      text: "网络工程师",
                      value: 204,
                      children: [],
                    },
                  ],
                },
                {
                  text: "财务部",
                  value: 300,
                  align: "horizontal",
                  children: [
                    {
                      text: "财务",
                      value: 301,
                      children: [],
                    },
                    {
                      text: "出纳",
                      value: 302,
                      children: [],
                    },
                  ],
                },
                {
                  text: "研发部",
                  value: 400,
                  align: "horizontal",
                  children: [
                    {
                      text: "设计",
                      value: 401,
                      children: [],
                    },
                    {
                      text: "雕刻",
                      value: 402,
                      children: [],
                    },
                    {
                      text: "结构工程",
                      value: 403,
                      children: [],
                    },
                    {
                      text: "工艺工程",
                      value: 403,
                      children: [],
                    },
                  ],
                },
              ],
            },
          ],
        },
      ],
    };
  },
  methods: {

  },
};
</script>

<style>
</style>
