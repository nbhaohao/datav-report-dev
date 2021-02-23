<template>
  <common-card title="今日交易用户数" value="81,014">
    <template #default>
      <div
        id="today-users-chart"
        :style="{ width: '100%', height: '100%' }"
      ></div>
    </template>
    <template #footer>
      <span>退货率 </span>
      <span class="emphasis">5.14%</span>
    </template>
  </common-card>
</template>

<script>
import commonCardMixins from 'src/mixins/commonCardMixins'
export default {
  name: 'TodayUser',
  mixins: [commonCardMixins],
  mounted() {
    const chartDOM = document.querySelector('#today-users-chart')
    const chart = this.$echarts.init(chartDOM)
    chart.setOption({
      color: ['#0170fe'],
      series: [
        {
          type: 'bar',
          data: [
            410,
            82,
            200,
            334,
            390,
            330,
            220,
            150,
            82,
            200,
            134,
            290,
            330,
            150
          ]
        }
      ],
      xAxis: {
        type: 'category',
        show: false,
        boundaryGap: false,
        data: new Array(14)
          .fill('')
          .map((value, index) => `${index < 10 ? 0 : ''}${index}:00`)
      },
      yAxis: {
        show: false,
        type: 'value'
      },
      tooltip: {
        trigger: 'axis',
        axisPointer: {
          type: 'line'
        }
      },
      grid: {
        left: 0,
        right: 0,
        bottom: 0,
        top: 0
      }
    })
  }
}
</script>

<style scoped></style>
