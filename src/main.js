import Vue from 'vue'
import App from './App.vue'
import router from './router'
import VueEcharts from 'vue-echarts'
import './plugins/element.js'
import './plugins/echarts'
import './style/index.scss'

Vue.config.productionTip = false
Vue.component('v-chart', VueEcharts)

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
