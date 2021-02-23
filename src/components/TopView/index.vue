<template>
  <div class="top-view">
    <el-row :gutter="20">
      <el-col :span="6">
        <el-card shadow="hover">
          <total-sales />
        </el-card>
      </el-col>
      <el-col :span="6">
        <el-card shadow="hover">
          <total-orders />
        </el-card>
      </el-col>
      <el-col :span="6">
        <el-card shadow="hover">
          <today-user />
        </el-card>
      </el-col>
      <el-col :span="6">
        <el-card shadow="hover">
          <total-users />
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import TotalOrders from 'src/components/TotalOrders'
import TodayUser from 'src/components/TodayUser'
import TotalUsers from 'src/components/TotalUsers'
import TotalSales from 'src/components/TotalSales'
export default {
  name: 'TopView',
  components: { TotalSales, TotalUsers, TodayUser, TotalOrders }
}
</script>

<style scoped></style>
