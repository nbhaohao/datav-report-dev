import Vue from 'vue'
import App from './App.vue'
import router from './router'
import VueEcharts from 'vue-echarts'
import './style/index.scss'
import './plugins/element.js'
import './plugins/echarts'

Vue.config.productionTip = false
Vue.component('v-chart', VueEcharts)

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
