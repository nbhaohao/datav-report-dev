import Vue from 'vue'
import * as Echarts from 'echarts'

const EChartsPlugin = {
  install(Vue, options) {
    Vue.prototype.$echarts = Echarts
  }
}

Vue.use(EChartsPlugin)
