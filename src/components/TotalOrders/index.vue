<template>
  <common-card title="累计订单量" value="2,157,420">
    <template>
      <v-chart :option="chartOption" />
      <div id="total-orders-chart" :style="{ width: '100%', height: '100%' }" />
    </template>
    <template #footer>
      <span>昨日订单量 </span>
      <span class="emphasis">2,000,000</span>
    </template>
  </common-card>
</template>

<script>
import commonCardMixins from 'src/mixins/commonCardMixins'
export default {
  name: 'TotalOrders',
  mixins: [commonCardMixins],
  computed: {
    chartOption() {
      return {
        xAxis: {
          type: 'category',
          show: false,
          boundaryGap: false
        },
        yAxis: {
          show: false
        },
        series: [
          {
            type: 'line',
            data: [
              620,
              432,
              220,
              534,
              790,
              430,
              220,
              320,
              532,
              320,
              834,
              690,
              530,
              220,
              620
            ],
            areaStyle: {
              color: 'purple'
            },
            smooth: true,
            lineStyle: {
              width: 0
            },
            itemStyle: {
              opacity: 0
            }
          }
        ],
        grid: {
          left: 0,
          right: 0,
          bottom: 0,
          top: 0
        }
      }
    }
  }
}
</script>

<style scoped lang="scss"></style>
