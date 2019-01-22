<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',
}
</script>

<style lang="less">
#app {
  height: 100%;
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #333;
}
html {
  overflow-x: hidden;
}
body {
  // height: 100%;
  // overflow: auto;
  width: 100%;
  margin: 0;
  padding: 0;
  background: #fff;
}
</style>
