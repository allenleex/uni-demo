import Vue from 'vue'
import App from './App'

import tuiIndexList from "@/components/thorui/tui-index-list/tui-index-list"
Vue.component("tuiIndexList", tuiIndexList)
import tuiTab from "@/components/thorui/tui-tab/tui-tab"
Vue.component("tuiTab", tuiTab)

Vue.config.productionTip = false
 
App.mpType = 'app'

const app = new Vue({
  ...App
})
app.$mount()
