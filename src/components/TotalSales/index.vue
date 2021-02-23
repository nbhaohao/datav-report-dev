<template>
  <common-card title="累计销售额" value="¥ 32,039,165">
    <template>
      <div class="compare-wrapper">
        <div class="compare">
          <span>日同比</span>
          <span class="emphasis">7.33%</span>
          <UpDownArrow :up="true" />
        </div>
        <div class="compare">
          <span>月同比</span>
          <span class="emphasis">7.33%</span>
          <UpDownArrow :up="false" />
        </div>
      </div>
    </template>
    <template #footer>
      <span>昨日销售额 </span>
      <span class="emphasis">¥ 30,000,000</span>
    </template>
  </common-card>
</template>

<script>
import commonCardMixins from 'src/mixins/commonCardMixins'
import UpDownArrow from 'src/components/UpDownArrow'
export default {
  name: 'TotalSales',
  components: { UpDownArrow },
  mixins: [commonCardMixins]
}
</script>

<style scoped lang="scss">
.compare-wrapper {
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  .compare {
    display: flex;
    align-items: center;
    margin-top: 3px;
    color: #666;
    font-size: 12px;
  }
}
</style>
<style></style>
