<template>
  <ve-bmap
    :settings="option"
    height="100%"
    :title="option.title"
    :tooltip="option.tooltip"
    :series="option.series "
  />
</template>

<script>
import { BMAP_SALES_DATA, BMAP_STYLE_JSON } from 'src/const/bmap'

export default {
  name: 'Bmap',
  data() {
    return {}
  },
  computed: {
    option() {
      const commonSeriesOption = {
        coordinateSystem: 'bmap',
        encode: {
          value: 2
        },
        itemStyle: {
          color: 'purple',
          shadowBlur: 10,
          shadowColor: '#333'
        },
        symbolSize: value => {
          return value[2] / 10
        },
        label: {
          show: true,
          position: 'right',
          formatter: item => `${item.data.name} - ${item.data.value[2]}`,
          color: 'purple'
        },
        hoverAnimation: true,
        rippleEffect: {
          brushType: 'stroke'
        }
      }
      return {
        key: process.env.BMAP_TOKEN,
        title: {
          show: true,
          text: '销售数据大盘',
          subtext: '趋势统计',
          left: 'center'
        },
        bmap: {
          center: [104.114129, 37.550339],
          zoom: 5,
          roam: true,
          mapStyle: {
            styleJson: BMAP_STYLE_JSON
          }
        },
        tooltip: {},
        series: [
          {
            name: '销售额',
            type: 'scatter',
            data: BMAP_SALES_DATA,
            ...commonSeriesOption
          },
          {
            name: 'Top 2',
            type: 'effectScatter',
            data: BMAP_SALES_DATA.slice(0, 10),
            ...commonSeriesOption
          }
        ]
      }
    }
  }
}
</script>

<style scoped lang="scss"></style>
