<template>
  <div class="sales-view">
    <el-card shadow="hover" :body-style="{ padding: '0px 0px 20px' }">
      <template #header>
        <div class="menu-wrapper">
          <el-menu
            class="sale-menu"
            :default-active="activeIndex"
            mode="horizontal"
            @select="onMenuSelect"
          >
            <el-menu-item index="1">销售额</el-menu-item>
            <el-menu-item index="2">访问量</el-menu-item>
          </el-menu>
          <div class="menu-right">
            <el-radio-group v-model="radioSelect" size="small">
              <el-radio-button label="今日" />
              <el-radio-button label="本周" />
              <el-radio-button label="本月" />
              <el-radio-button label="今年" />
            </el-radio-group>
            <el-date-picker
              class="sales-view-date-picker"
              :unlink-panels="true"
              size="small"
              start-placeholder="开始日期"
              end-placeholder="结束日期"
              type="daterange"
              v-model="date"
              range-separator="至"
              :picker-options="pickerOptions"
            />
          </div>
        </div>
      </template>
      <template>
        <div class="sales-view-chart-wrapper">
          <v-chart :option="chartOption" />
          <div class="sales-view-list">
            <div class="sales-view-title">排行榜</div>
            <div class="list-item-wrapper">
              <div class="list-item" v-for="item in rankData" :key="item.no">
                <div :class="[item.no <= 3 ? 'top-no' : '', 'list-item-no']">
                  {{ item.no }}
                </div>
                <div class="list-item-name">{{ item.name }}</div>
                <div class="list-item-money">{{ item.money }}</div>
              </div>
            </div>
          </div>
        </div>
      </template>
    </el-card>
  </div>
</template>

<script>
import Dayjs from 'dayjs'

export default {
  name: 'SalesView',
  created() {
    this.pickerOptions = {
      shortcuts: [
        {
          text: '最近一周',
          onClick(picker) {
            picker.$emit(
              'pick',
              [
                Dayjs()
                  .subtract(7, 'day')
                  .toDate(),
                Dayjs().toDate()
              ],
              false
            )
          }
        },
        {
          text: '最近一个月',
          onClick(picker) {
            picker.$emit(
              'pick',
              [
                Dayjs()
                  .subtract(30, 'day')
                  .toDate(),
                Dayjs().toDate()
              ],
              false
            )
          }
        },
        {
          text: '最近三个月',
          onClick(picker) {
            picker.$emit(
              'pick',
              [
                Dayjs()
                  .subtract(90, 'day')
                  .toDate(),
                Dayjs().toDate()
              ],
              false
            )
          }
        }
      ]
    }
  },
  data() {
    return {
      activeIndex: '1',
      radioSelect: '今日',
      date: null,
      rankData: [
        {
          no: 1,
          name: '麦当劳',
          money: '323,234'
        },
        {
          no: 2,
          name: '麦当劳',
          money: '323,234'
        },
        {
          no: 3,
          name: '麦当劳',
          money: '323,234'
        },
        {
          no: 4,
          name: '麦当劳',
          money: '323,234'
        },
        {
          no: 5,
          name: '麦当劳',
          money: '323,234'
        },
        {
          no: 6,
          name: '麦当劳',
          money: '323,234'
        },
        {
          no: 7,
          name: '麦当劳',
          money: '323,234'
        }
      ]
    }
  },
  methods: {
    onMenuSelect(index) {
      this.activeIndex = index
    }
  },
  computed: {
    chartOption() {
      return {
        title: {
          text: '年度销售额',
          textStyle: {
            fontSize: 12,
            color: '#666'
          }
        },
        xAxis: {
          type: 'category',
          data: new Array(11).fill('').map((value, index) => `${index + 1}月`)
        },
        yAxis: {},
        series: [
          {
            type: 'bar',
            barWidth: '35%',
            data: [200, 250, 300, 350, 300, 250, 200, 250, 300, 350, 300, 250]
          }
        ]
      }
    }
  }
}
</script>

<style scoped lang="scss">
.sales-view {
  margin-top: 20px;
  .menu-wrapper {
    display: flex;
    position: relative;
    .sale-menu {
      width: 100%;
      padding-left: 20px;
      .el-menu-item {
        height: 50px;
        line-height: 50px;
        margin: 0 20px;
      }
    }
    .menu-right {
      position: absolute;
      right: 20px;
      height: 50px;
      display: flex;
      align-items: center;
      justify-content: flex-end;
      .sales-view-date-picker {
        margin-left: 20px;
      }
    }
  }
  .sales-view-chart-wrapper {
    display: flex;
    height: 270px;
    .echarts {
      flex: 0 0 70%;
      width: 70%;
      height: 100%;
    }
    .sales-view-list {
      flex: 1;
      width: 100%;
      height: 100%;
      overflow: hidden;
      .sales-view-title {
        margin-top: 20px;
        font-size: 12px;
        color: #666;
        font-weight: 500;
      }
      .list-item-wrapper {
        margin-top: 15px;
        .list-item {
          display: flex;
          align-items: center;
          font-size: 12px;
          height: 20px;
          padding: 6px 20px 6px 0;
          .list-item-no {
            display: flex;
            align-items: center;
            justify-content: center;
            width: 20px;
            height: 20px;
            color: #333;
            &.top-no {
              background: #000;
              border-radius: 50%;
              color: #fff;
              font-weight: 500;
            }
          }
          .list-item-name {
            margin-left: 10px;
            color: #333;
          }
          .list-item-money {
            flex: 1;
            text-align: right;
          }
        }
      }
    }
  }
}
</style>
