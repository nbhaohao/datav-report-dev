<template>
  <common-card title="累计用户数" value="1,087,503">
    <template #default>
      <v-chart
        :option="chartOption"
        :style="{ width: '100%', height: '100%' }"
      />
    </template>
    <template #footer>
      <div class="total-users-footer">
        <span>日同比</span>
        <span class="emphasis">8.73%</span>
        <UpDownArrow :up="true" />
        <span class="month">月同比</span>
        <span class="emphasis">35.91%</span>
        <UpDownArrow :up="false" />
      </div>
    </template>
  </common-card>
</template>

<script>
import commonCardMixins from 'src/mixins/commonCardMixins'
import UpDownArrow from 'src/components/UpDownArrow'
export default {
  name: 'TotalUsers',
  components: { UpDownArrow },
  mixins: [commonCardMixins],
  computed: {
    chartOption() {
      return {
        xAxis: {
          boundaryGap: false,
          show: false,
          type: 'value'
        },
        yAxis: {
          show: false,
          type: 'category'
        },
        series: [
          {
            type: 'bar',
            data: [200],
            stack: '总量',
            barWidth: 10
          },
          {
            type: 'bar',
            data: [250],
            stack: '总量',
            barWidth: 10
          },
          {
            // 上 M112.081705 791.942807 512 232.057193 911.918295 791.942807Z
            // 下 M911.918 253.39l-399.918 559.886-399.918-559.886z
            type: 'custom',
            data: [200],
            stack: '总量',
            renderItem(params, api) {
              const value = api.value(0)
              const endPoint = api.coord([value, 0])
              return {
                type: 'group',
                position: endPoint,
                children: [
                  {
                    type: 'path',
                    shape: {
                      d:
                        'M112.081705 791.942807 512 232.057193 911.918295 791.942807Z ',
                      x: -7.5,
                      y: 5,
                      width: 15,
                      height: 15
                    },
                    style: {
                      fill: '#91cc75'
                    }
                  },
                  {
                    type: 'path',
                    shape: {
                      d: 'M911.918 253.39l-399.918 559.886-399.918-559.886z',
                      x: -7.5,
                      y: -20,
                      width: 15,
                      height: 15
                    },
                    style: {
                      fill: '#91cc75'
                    }
                  }
                ]
              }
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

<style scoped lang="scss">
.total-users-footer {
  display: flex;
  align-items: center;
  .month {
    margin-left: 10px;
  }
}
</style>
