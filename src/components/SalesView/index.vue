<template>
  <v-chart :option="data" />
</template>

<script>
export default {
  name: 'SalesView',
  data() {
    return {
      data: {
        xAxis: {
          type: 'category'
        },
        yAxis: {},
        series: [
          {
            type: 'line',
            data: [100, 200, 300]
          }
        ]
      }
    }
  }
}
</script>

<style scoped lang="scss">
.echarts {
  width: 100%;
  height: 300px;
}
</style>
