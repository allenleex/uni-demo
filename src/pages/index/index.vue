<!--
<template>
	<view class="content">
		<image class="logo" src="/static/logo.png"></image>
		<view>
			<text class="title">{{title}}</text>
		</view>
	</view>
</template>
-->

<template>
    <view>
        <uni-segmented-control :current="current" :values="items" @clickItem="onClickItem" styleType="button" activeColor="#4cd964"></uni-segmented-control>
        <view class="content">
            <view v-show="current === 0">
                选项卡1的内容
            </view>
            <view v-show="current === 1">
                选项卡2的内容
            </view>
            <view v-show="current === 2">
                选项卡3的内容
            </view>
        </view>
    </view>
</template>


<script>
	export default {
		data() {
			return {
				title: 'Hello'
			}
		},
		onLoad() {

		},
		methods: {

		}
	}
</script>

<style>
	.content {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}

	.logo {
		height: 200rpx;
		width: 200rpx;
		margin: 200rpx auto 50rpx auto;
	}

	.text-area {
		display: flex;
		justify-content: center;
	}

	.title {
		font-size: 36rpx;
		color: #8f8f94;
	}
</style>
