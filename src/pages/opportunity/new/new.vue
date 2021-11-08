<template>
  <view class="container">
    <view class="tui-page__hd">
      <view class="tui-page__title">发布商机</view>
      <view class="tui-page__desc">这里描述一句话</view>
    </view>
    <view class="tui-page__bd">
      <view class="tui-section__title"><text>Input输入框</text></view>
      <tui-list-cell :hover="false">
        <view class="thorui-input-item">
          <view class="thorui-input-title">姓名</view>
          <input
            class="thorui-input"
            placeholder="请输入姓名"
            placeholder-class="thorui-phcolor"
          />
        </view>
      </tui-list-cell>
      <tui-list-cell :hover="false" unlined>
        <view class="thorui-input-item">
          <view class="thorui-input-title">联系电话</view>
          <input
            type="number"
            class="thorui-input"
            placeholder="请输入手机号"
            placeholder-class="thorui-phcolor"
            maxlength="11"
          />
        </view>
      </tui-list-cell>
      <view class="tui-section__title"><text>带清除按钮输入框</text></view>
      <tui-list-cell :hover="false" unlined>
        <view class="thorui-input-item">
          <view class="thorui-input-title">姓名</view>
          <input
            class="thorui-input"
            placeholder="请输入姓名"
            placeholder-class="thorui-phcolor"
            v-model="name"
          />
          <icon type="clear" :size="14" v-if="name" @tap="name = ''"></icon>
        </view>
      </tui-list-cell>
      <view class="tui-section__title"><text>无标题输入框</text></view>
      <tui-list-cell :hover="false"
        ><input
          class="thorui-input"
          placeholder="请输入姓名"
          placeholder-class="thorui-phcolor"
      /></tui-list-cell>
      <tui-list-cell :hover="false" unlined
        ><input
          class="thorui-input"
          placeholder="请输入手机号"
          placeholder-class="thorui-phcolor"
      /></tui-list-cell>

      <view class="tui-section__title"><text>圆角输入框</text></view>
      <tui-list-cell :hover="false" unlined>
        <view class="thorui-input-border"
          ><input
            class="thorui-input"
            placeholder="请输入姓名"
            placeholder-class="tui-phcolor"
        /></view>
      </tui-list-cell>
      <tui-list-cell :hover="false" unlined>
        <view class="thorui-input-border thorui-radius__fillet"
          ><input
            class="thorui-input"
            placeholder="请输入姓名"
            placeholder-class="tui-phcolor"
        /></view>
      </tui-list-cell>
      <tui-list-cell :hover="false" unlined>
        <view class="thorui-input-border thorui-flex__between">
          <view class="thorui-input-title">联系电话</view>
          <input
            class="thorui-input"
            placeholder="请输入手机号"
            placeholder-class="thorui-phcolor"
          />
        </view>
      </tui-list-cell>
      <tui-list-cell :hover="false" unlined>
        <view class="thorui-input-border thorui-flex__between">
          <view class="thorui-flex__between-input-title">消费总额</view>
          <input
            class="thorui-input thorui-text-right"
            placeholder="请输入消费总额"
            placeholder-class="tui-phcolor"
          />
        </view>
      </tui-list-cell>
      <view class="tui-section__title"><text>手机验证码</text></view>
      <tui-list-cell :hover="false" unlined padding="20rpx 30rpx">
        <view class="thorui-input-item">
          <view class="thorui-input-title">验证码</view>
          <input
            class="thorui-input"
            placeholder="请输入验证码"
            placeholder-class="thorui-phcolor"
            maxlength="6"
          />
          <tui-button
            type="gray-primary"
            width="200rpx"
            height="64rpx"
            :size="30"
            bold
            >获取验证码</tui-button
          >
        </view>
      </tui-list-cell>
      <view class="tui-section__title"><text>图形验证码</text></view>
      <tui-list-cell :hover="false" unlined padding="20rpx 30rpx">
        <view class="thorui-input-item">
          <view class="thorui-input-title">验证码</view>
          <input
            class="thorui-input"
            placeholder="请输入验证码"
            placeholder-class="thorui-phcolor"
            maxlength="6"
          />
          <image
            src="/static/images/index/verifyCode.png"
            class="thorui-verify__code"
          ></image>
        </view>
      </tui-list-cell>
      <view class="tui-section__title"><text>选择+输入</text></view>
      <tui-list-cell padding="0" unlined :hover="false">
        <view class="thorui-input-item">
          <view class="thorui-cells thorui-select thorui-select__line"
            >+86</view
          >
          <input
            type="number"
            class="thorui-input"
            placeholder="请输入号码"
            placeholder-class="thorui-phcolor"
            maxlength="18"
          />
        </view>
      </tui-list-cell>
    </view>
  </view>
</template>

<script>
export default {
  data() {
    return {
      name: "",
    };
  },
  methods: {},
};
</script>

<style></style>
