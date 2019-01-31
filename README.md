# deal_mobile_scroll

handle how to watch scroll event in mobile

---

## 地址

[项目地址](https://runtu4378.github.io/deal_mobile_scroll/)

---

## 设计思路

### 问题

- 在pc端下，使用 `window.addEventListener('scroll', this.handleScroll, true)` 能够监听根元素的滚动事件，在此事件里可以针对页面滚动高度进行逻辑处理
- 在移动端部分浏览器（如华为荣耀v10的华为浏览器）中，`window.addEventListener('scroll')` 并没有达成预期的效果，原因是 `.scrollTop` 属性在部分浏览器下不支持（如safari内核的浏览器）

### 解决过程

- 检查事件的兼容性，发现在移动端可以使用 `touchmove` 或 `touchend` 来替换 `scroll` 事件
- 检查异常原因，发现事件能够正常触发，异常的实际原因是 `.scrollTop` 属性在部分浏览器下值始终为 0
- 现解决方法是采用以下兼容实现

```javascript
const handleScroll = () => {
  const htmlDOM = document.documentElement
  const scrolled =
    window.pageYOffset ||
    document.documentElement.scrollTop ||
    document.body.scrollTop ||
    0
  if (scrolled > 100) {
    htmlDOM.classList.add('show-fixed')
  } else {
    htmlDOM.classList.remove('show-fixed')
  }
}
document.querySelector('.body').addEventListener('touchend', handleScroll, true)
```

### 反省

- 解决过程有点毛躁，没有遵循冒烟的方式，先确定是不是 `scroll` 事件的兼容问题就直接先去百度了，结果发现百度有人问到 `scroll` 事件在移动端的问题就似是而非地认为是 `scroll` 事件出了问题
- 直接在现有项目上进行多机型测试和问题定位往往会受到现在已引用的库的影响，所以比较好的方式还是快速使用现有的脚手架针对性搭建一个新项目进行测试，也好方便后面对各个可能影响到实现效果的外部模块进行冒烟测试

---

## 测试浏览器列表

机型 | 浏览器 | 内核 | 效果
-- | -- | -- | --
华为荣耀V10 | chrome | | 有效
华为荣耀V10 | 华为浏览器 | | 有效
iPhoneSE | safari | | 有效
iPhoneSE | chrome | | 有效
