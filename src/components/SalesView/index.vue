<template>
  <div class="sales-view">
    <el-card shadow="hover">
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
        444
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
      date: null
    }
  },
  methods: {
    onMenuSelect(index) {
      this.activeIndex = index
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
}
</style>
