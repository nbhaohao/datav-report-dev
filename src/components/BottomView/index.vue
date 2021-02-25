<template>
  <div class="bottom-view">
    <div class="view">
      <el-card shadow="hover">
        <template #header>
          <div class="title-wrapper">关键词搜索</div>
        </template>
        <template #default>
          <div class="chart-wrapper">
            <div class="chart-inner">
              <div class="chart">
                <div class="chart-title">搜索用户数</div>
                <div class="chart-data">93,634</div>
                <v-chart :option="searchUserOptions" />
              </div>
              <div class="chart">
                <div class="chart-title">搜索量</div>
                <div class="chart-data">198,782</div>
                <v-chart :option="searchUserOptions" />
              </div>
            </div>
            <div class="table-wrapper">
              <el-table :data="tableData">
                <el-table-column prop="rank" label="排名" width="180" />
                <el-table-column prop="keyword" label="关键词" width="180" />
                <el-table-column prop="count" label="总搜索量" />
                <el-table-column prop="users" label="搜索用户数" />
              </el-table>
              <el-pagination
                layout="prev, pager, next"
                :total="100"
                :page-size="4"
                background
                @current-change="onPageChange"
              />
            </div>
          </div>
        </template>
      </el-card>
    </div>
    <div class="view">
      <el-card shadow="hover">
        <template #header>
          <div class="title-wrapper">
            <div class="title">分类销售排行</div>
            <div class="radio-wrapper">
              <el-radio-group v-model="radioSelect" size="small">
                <el-radio-button label="品类"></el-radio-button>
                <el-radio-button label="商品"></el-radio-button>
              </el-radio-group>
            </div>
          </div>
        </template>
        <template #default>
          <v-chart :options="categoryOptions" />
        </template>
      </el-card>
    </div>
  </div>
</template>

<script>
export default {
  name: 'BottomView',
  data() {
    return {
      tableData: new Array(4).fill('').map((_, index) => {
        return {
          id: index + 1,
          rank: index + 1,
          keyword: `北京${index}`,
          count: 100 + index,
          users: 90 + index,
          range: '45%'
        }
      }),
      radioSelect: '品类'
    }
  },
  methods: {
    onPageChange(page) {
      console.log(page)
    }
  },
  computed: {
    searchUserOptions() {
      return {
        xAxis: {
          type: 'category',
          show: false,
          boundaryGap: false
        },
        yAxis: {
          show: false,
          min: 0,
          max: 300
        },
        series: [
          {
            type: 'line',
            data: [100, 150, 200, 250, 200, 150, 100, 50, 100, 150],
            areaStyle: {
              color: 'rgba(95,187,255,0.5)'
            },
            lineStyle: {
              color: 'rgb(95, 187, 255)'
            },
            itemStyle: {
              opacity: 0
            },
            smooth: true
          }
        ],
        grid: {
          top: 0,
          left: 0,
          right: 0,
          bottom: 0
        }
      }
    },
    searchNumberOptions() {
      return {}
    },
    categoryOptions() {
      return {}
    }
  }
}
</script>

<style scoped lang="scss">
.bottom-view {
  display: flex;
  margin-top: 20px;
  .view {
    flex: 1;
    width: 50%;
    box-sizing: border-box;
    &:first-child {
      padding: 0 10px 0 0;
    }
    &:last-child {
      padding: 0 0 0 10px;
    }
    .title-wrapper {
      display: flex;
      align-items: center;
      height: 60px;
      box-sizing: border-box;
      border-bottom: 1px solid #eee;
      font-size: 14px;
      font-weight: 500;
      padding: 0 0 0 20px;
      .radio-wrapper {
        flex: 1;
        display: flex;
        justify-content: flex-end;
        padding-right: 20px;
      }
    }
    .chart-wrapper {
      display: flex;
      flex-direction: column;
      height: 452px;
      .chart-inner {
        display: flex;
        padding: 0 10px;
        margin-top: 20px;
        .chart {
          flex: 1;
          padding: 0 10px;
          .chart-title {
            color: #999;
            font-size: 14px;
          }
          .chart-data {
            font-size: 22px;
            color: #333;
            font-weight: 500;
            letter-spacing: 2px;
          }
          .echarts {
            height: 50px;
          }
        }
      }
      .table-wrapper {
        flex: 1;
        margin-top: 20px;
        padding: 0 20px 20px;
        .el-pagination {
          display: flex;
          justify-content: flex-end;
          margin-top: 15px;
        }
      }
    }
  }
}
</style>
