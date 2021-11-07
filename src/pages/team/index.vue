<template>
  <view class="container">
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
              src="/static/images/img_new_friends.png"
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
// import list from '@/utils/index.list.js'
export default {
  data() {
    return {
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
        {
          letter: "B",
          data: [
            {
              name: "白城",
              mobile: "该主子没有留电话~",
              keyword: "白城BAICHENG",
            },
            {
              name: "白山",
              mobile: "13588889999",
              keyword: "白山BAISHAN13588889999",
            },
            {
              name: "白银",
              mobile: "13588889999",
              keyword: "白银BAIYIN13588889999",
            },
            {
              name: "保定",
              mobile: "13588889999",
              keyword: "保定BAODING13588889999",
            },
          ],
        },
        {
          letter: "C",
          data: [
            {
              name: "沧州",
              mobile: "13588889999",
              keyword: "沧州CANGZHOU13588889999",
            },
            {
              name: "长春",
              mobile: "13588889999",
              keyword: "长春CHANGCHUN13588889999",
            },
          ],
        },
        {
          letter: "D",
          data: [
            {
              name: "大理",
              mobile: "13588889999",
              keyword: "大理DALI13588889999",
            },
            {
              name: "大连",
              mobile: "13588889999",
              keyword: "大连DALIAN13588889999",
            },
          ],
        },
        {
          letter: "E",
          data: [
            {
              name: "鄂尔多斯",
              mobile: "13588889999",
              keyword: "鄂尔多斯EERDUOSI13588889999",
            },
            {
              name: "恩施",
              mobile: "13588889999",
              keyword: "恩施ENSHI13588889999",
            },
            {
              name: "鄂州",
              mobile: "13588889999",
              keyword: "鄂州EZHOU13588889999",
            },
          ],
        },
        {
          letter: "F",
          data: [
            {
              name: "防城港",
              mobile: "该主子没有留电话~",
              keyword: "防城港FANGCHENGGANG",
            },
            {
              name: "抚顺",
              mobile: "13588889999",
              keyword: "抚顺FUSHUN13588889999",
            },
            {
              name: "阜新",
              mobile: "13588889999",
              keyword: "阜新FUXIN13588889999",
            },
            {
              name: "阜阳",
              mobile: "13588889999",
              keyword: "阜阳FUYANG13588889999",
            },
            {
              name: "抚州",
              mobile: "13588889999",
              keyword: "抚州FUZHOU13588889999",
            },
            {
              name: "福州",
              mobile: "13588889999",
              keyword: "福州FUZHOU13588889999",
            },
          ],
        },
        {
          letter: "G",
          data: [
            {
              name: "甘南",
              mobile: "13588889999",
              keyword: "甘南GANNAN13588889999",
            },
            {
              name: "赣州",
              mobile: "13588889999",
              keyword: "赣州GANZHOU13588889999",
            },
            {
              name: "甘孜",
              mobile: "13588889999",
              keyword: "甘孜GANZI13588889999",
            },
          ],
        },
        {
          letter: "H",
          data: [
            {
              name: "哈尔滨",
              mobile: "13588889999",
              keyword: "哈尔滨HAERBIN13588889999",
            },
            {
              name: "海北",
              mobile: "13588889999",
              keyword: "海北HAIBEI13588889999",
            },
            {
              name: "海东",
              mobile: "13588889999",
              keyword: "海东HAIDONG13588889999",
            },
            {
              name: "海口",
              mobile: "13588889999",
              keyword: "海口HAIKOU13588889999",
            },
          ],
        },
        {
          letter: "I",
          data: [
            {
              name: "ice",
              mobile: "13588889999",
              keyword: "佳木斯JIAMUSI13588889999",
            },
          ],
        },
        {
          letter: "J",
          data: [
            {
              name: "佳木斯",
              mobile: "13588889999",
              keyword: "佳木斯JIAMUSI13588889999",
            },
            {
              name: "吉安",
              mobile: "13588889999",
              keyword: "吉安JIAN13588889999",
            },
            {
              name: "江门",
              mobile: "13588889999",
              keyword: "江门JIANGMEN13588889999",
            },
          ],
        },
        {
          letter: "K",
          data: [
            {
              name: "开封",
              mobile: "13588889999",
              keyword: "开封KAIFENG13588889999",
            },
            {
              name: "喀什",
              mobile: "13588889999",
              keyword: "喀什KASHI13588889999",
            },
            {
              name: "克拉玛依",
              mobile: "13588889999",
              keyword: "克拉玛依KELAMAYI13588889999",
            },
          ],
        },
        {
          letter: "L",
          data: [
            {
              name: "来宾",
              mobile: "13588889999",
              keyword: "来宾LAIBIN13588889999",
            },
            {
              name: "兰州",
              mobile: "13588889999",
              keyword: "兰州LANZHOU13588889999",
            },
            {
              name: "拉萨",
              mobile: "13588889999",
              keyword: "拉萨LASA13588889999",
            },
            {
              name: "乐山",
              mobile: "13588889999",
              keyword: "乐山LESHAN13588889999",
            },
            {
              name: "凉山",
              mobile: "13588889999",
              keyword: "凉山LIANGSHAN13588889999",
            },
            {
              name: "连云港",
              mobile: "13588889999",
              keyword: "连云港LIANYUNGANG13588889999",
            },
            {
              name: "聊城",
              mobile: "18322223333",
              keyword: "聊城LIAOCHENG18322223333",
            },
            {
              name: "辽阳",
              mobile: "18322223333",
              keyword: "辽阳LIAOYANG18322223333",
            },
            {
              name: "辽源",
              mobile: "18322223333",
              keyword: "辽源LIAOYUAN18322223333",
            },
            {
              name: "丽江",
              mobile: "18322223333",
              keyword: "丽江LIJIANG18322223333",
            },
            {
              name: "临沧",
              mobile: "18322223333",
              keyword: "临沧LINCANG18322223333",
            },
            {
              name: "临汾",
              mobile: "18322223333",
              keyword: "临汾LINFEN18322223333",
            },
            {
              name: "临夏",
              mobile: "18322223333",
              keyword: "临夏LINXIA18322223333",
            },
            {
              name: "临沂",
              mobile: "18322223333",
              keyword: "临沂LINYI18322223333",
            },
            {
              name: "林芝",
              mobile: "18322223333",
              keyword: "林芝LINZHI18322223333",
            },
            {
              name: "丽水",
              mobile: "18322223333",
              keyword: "丽水LISHUI18322223333",
            },
          ],
        },
        {
          letter: "M",
          data: [
            {
              name: "眉山",
              mobile: "15544448888",
              keyword: "眉山MEISHAN15544448888",
            },
            {
              name: "梅州",
              mobile: "15544448888",
              keyword: "梅州MEIZHOU15544448888",
            },
            {
              name: "绵阳",
              mobile: "15544448888",
              keyword: "绵阳MIANYANG15544448888",
            },
            {
              name: "牡丹江",
              mobile: "15544448888",
              keyword: "牡丹江MUDANJIANG15544448888",
            },
          ],
        },
        {
          letter: "N",
          data: [
            {
              name: "南昌",
              mobile: "15544448888",
              keyword: "南昌NANCHANG15544448888",
            },
            {
              name: "南充",
              mobile: "15544448888",
              keyword: "南充NANCHONG15544448888",
            },
            {
              name: "南京",
              mobile: "15544448888",
              keyword: "南京NANJING15544448888",
            },
            {
              name: "南宁",
              mobile: "15544448888",
              keyword: "南宁NANNING15544448888",
            },
            {
              name: "南平",
              mobile: "15544448888",
              keyword: "南平NANPING15544448888",
            },
          ],
        },
        {
          letter: "O",
          data: [
            {
              name: "欧阳",
              mobile: "15544448888",
              keyword: "欧阳ouyang15544448888",
            },
          ],
        },
        {
          letter: "P",
          data: [
            {
              name: "盘锦",
              mobile: "15544448888",
              keyword: "盘锦PANJIN15544448888",
            },
            {
              name: "攀枝花",
              mobile: "15544448888",
              keyword: "攀枝花PANZHIHUA15544448888",
            },
            {
              name: "平顶山",
              mobile: "15544448888",
              keyword: "平顶山PINGDINGSHAN15544448888",
            },
            {
              name: "平凉",
              mobile: "15544448888",
              keyword: "平凉PINGLIANG15544448888",
            },
            {
              name: "萍乡",
              mobile: "15544448888",
              keyword: "萍乡PINGXIANG15544448888",
            },
            {
              name: "普洱",
              mobile: "15544448888",
              keyword: "普洱PUER15544448888",
            },
            {
              name: "莆田",
              mobile: "15544448888",
              keyword: "莆田PUTIAN15544448888",
            },
            {
              name: "濮阳",
              mobile: "15544448888",
              keyword: "濮阳PUYANG15544448888",
            },
          ],
        },
        {
          letter: "Q",
          data: [
            {
              name: "黔东南",
              mobile: "15544448888",
              keyword: "黔东南QIANDONGNAN15544448888",
            },
            {
              name: "黔南",
              mobile: "15544448888",
              keyword: "黔南QIANNAN15544448888",
            },
            {
              name: "黔西南",
              mobile: "15544448888",
              keyword: "黔西南QIANXINAN15544448888",
            },
          ],
        },
        {
          letter: "R",
          data: [
            {
              name: "日喀则",
              mobile: "15544448888",
              keyword: "日喀则RIKAZE15544448888",
            },
            {
              name: "日照",
              mobile: "15544448888",
              keyword: "日照RIZHAO15544448888",
            },
          ],
        },
        {
          letter: "S",
          data: [
            {
              name: "三门峡",
              mobile: "15544448888",
              keyword: "三门峡SANMENXIA15544448888",
            },
            {
              name: "三明",
              mobile: "15544448888",
              keyword: "三明SANMING15544448888",
            },
            {
              name: "三沙",
              mobile: "15544448888",
              keyword: "三沙SANSHA15544448888",
            },
          ],
        },
        {
          letter: "T",
          data: [
            {
              name: "塔城",
              mobile: "15544448888",
              keyword: "塔城TACHENG15544448888",
            },
            {
              name: "漯河",
              mobile: "15544448888",
              keyword: "漯河TAHE15544448888",
            },
            {
              name: "泰安",
              mobile: "15544448888",
              keyword: "泰安TAIAN15544448888",
            },
          ],
        },
        {
          letter: "W",
          data: [
            {
              name: "潍坊",
              mobile: "15544448888",
              keyword: "潍坊WEIFANG15544448888",
            },
            {
              name: "威海",
              mobile: "15544448888",
              keyword: "威海WEIHAI15544448888",
            },
            {
              name: "渭南",
              mobile: "15544448888",
              keyword: "渭南WEINAN15544448888",
            },
            {
              name: "文山",
              mobile: "15544448888",
              keyword: "文山WENSHAN15544448888",
            },
          ],
        },
        {
          letter: "X",
          data: [
            {
              name: "厦门",
              mobile: "15544448888",
              keyword: "厦门XIAMEN15544448888",
            },
            {
              name: "西安",
              mobile: "15544448888",
              keyword: "西安XIAN15544448888",
            },
            {
              name: "湘潭",
              mobile: "15544448888",
              keyword: "湘潭XIANGTAN15544448888",
            },
          ],
        },
        {
          letter: "Y",
          data: [
            {
              name: "雅安",
              mobile: "15544448888",
              keyword: "雅安YAAN15544448888",
            },
            {
              name: "延安",
              mobile: "15544448888",
              keyword: "延安YANAN15544448888",
            },
            {
              name: "延边",
              mobile: "15544448888",
              keyword: "延边YANBIAN15544448888",
            },
            {
              name: "盐城",
              mobile: "15544448888",
              keyword: "盐城YANCHENG15544448888",
            },
          ],
        },
        {
          letter: "Z",
          data: [
            {
              name: "枣庄",
              mobile: "15544448888",
              keyword: "枣庄ZAOZHUANG15544448888",
            },
            {
              name: "张家界",
              mobile: "15544448888",
              keyword: "张家界ZHANGJIAJIE15544448888",
            },
            {
              name: "张家口",
              mobile: "15544448888",
              keyword: "张家口ZHANGJIAKOU15544448888",
            },
          ],
        },
        {
          letter: "well",
          data: [
            {
              name: "☆echo.",
              mobile: "16666666666",
              keyword: "echo16666666666",
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
  onLoad() {
    // 模拟异步获取数据场景
    setTimeout(() => {
      this.listData = [...list];
      this.init = false;
    }, 50);
  },
  methods: {
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
