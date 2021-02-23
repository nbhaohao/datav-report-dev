<template>
  <div :class="arrowClass"></div>
</template>

<script>
export default {
  name: 'UpDownArrow',
  props: {
    up: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    arrowClass() {
      if (this.up) {
        return 'increase'
      }
      return 'decrease'
    }
  }
}
</script>

<style scoped lang="scss">
.increase {
  width: 0;
  height: 0;
  border-width: 3px;
  border-color: transparent transparent red transparent;
  border-style: solid;
  margin: 0 0 3px 5px;
}
.decrease {
  width: 0;
  height: 0;
  border-width: 3px;
  border-color: green transparent transparent transparent;
  border-style: solid;
  margin: 3px 0 0 5px;
}
</style>
