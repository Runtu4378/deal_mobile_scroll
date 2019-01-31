<style lang="less" scoped>
.body {
  width: 100%;
  background-color: Bisque;
}

@menu_hei: 40px;
.menu {
  position: relative;
  width: 100%;
  height: @menu_hei;
  line-height: @menu_hei;
  text-align: center;
  border-bottom: 1px solid #000;
}

.show-fixed {
  .body {
    padding-top: @menu_hei;
    box-sizing: border-box;
  }
  .menu {
    position: fixed;
    top: 0;
    left: 0;
  }
}

.positionLab() {
  position: relative;
  display: flex;
  height: 300px;
  align-items: flex-end;
  justify-content: flex-end;
  padding: 0 15px;
  box-sizing: border-box;
  &:after {
    content: '';
    display: block;
    position: absolute;
    bottom: 0; left: 15px; right: 15px;
    height: 1px;
    border-bottom: 1px solid #000;
  }
}

.p-300 {
  .positionLab();
  height: 300px - @menu_hei;
}
.p-600 {
  .positionLab();
}
.p-900 {
  .positionLab();
}
.p-1200 {
  .positionLab();
}
.p-1500 {
  .positionLab();
}
</style>

<template>
  <div class="body">
    <div class="menu">置顶菜单</div>
    <div class="p-300">--300px</div>
    <div class="p-600">--600px</div>
    <div class="p-900">--900px</div>
    <div class="p-1200">--1200px</div>
    <div class="p-1500">--1500px</div>
  </div>
</template>

<script>
export default {
  data () {
    return {}
  },

  mounted () {
    // window.addEventListener('scroll', this.handleScroll, true)
    document.querySelector('.body').addEventListener('touchend', this.handleScroll, true)
    // const htmlDOM = document.querySelector('body')
    // alert(htmlDOM.clientHeight)
  },

  methods: {
    handleScroll () {
      const htmlDOM = document.documentElement
      // const htmlDOM = document.querySelector('html')
      const scrolled =
        window.pageYOffset ||
        document.documentElement.scrollTop ||
        document.body.scrollTop ||
        0
      // alert(scrolled)
      if (scrolled > 100) {
        htmlDOM.classList.add('show-fixed')
      } else {
        htmlDOM.classList.remove('show-fixed')
      }
    },
  },
}
</script>
