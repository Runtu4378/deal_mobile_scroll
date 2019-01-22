<style scoped lang="less">
.layout-content {
  // display: flex;
  // flex-direction: column;
  // min-height: 100%;
}
</style>

<template>
  <div class="layout-content">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'layout',
  data () {
    return {
    }
  },
}
</script>
