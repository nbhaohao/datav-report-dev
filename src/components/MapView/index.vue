<template>
  <div class="map-view">
    <div class="left">
      <b-map />
    </div>
  </div>
</template>

<script>
import Bmap from 'src/components/BMap'

export default {
  name: 'MapView',
  components: {
    BMap: Bmap
  }
}
</script>

<style scoped lang="scss">
.map-view {
  display: flex;
  margin-top: 20px;
  .left {
    width: 100%;
    height: 600px;
  }
}
</style>
