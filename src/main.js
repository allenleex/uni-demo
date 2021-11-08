/*
 * @Author: your name
 * @Date: 2021-11-08 07:56:43
 * @LastEditTime: 2021-11-08 10:13:51
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \uni-demo\src\main.js
 */
import Vue from 'vue'
import App from './App'

Vue.config.productionTip = false
 
App.mpType = 'app'

const app = new Vue({
  ...App
})
app.$mount()
