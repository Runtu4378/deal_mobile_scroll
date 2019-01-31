import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const router = new Router({
  mode: 'history',
  /* eslint-disable-next-line */
  base: PUBLIC_PATH,
  scrollBehavior (to, from, savedPosition) {
    // 如果你的連結是帶 # 這種
    // to.hash 就會有值(值就是連結)
    // 例如 #3
    if (to.hash) {
      return {
        // 這個是透過 to.hash 的值來找到對應的元素
        // 照你的 html 來看是不用多加處理這樣就可以了
        // 例如你按下 #3 的連結，就會變成 querySelector('#3')，自然會找到 id = 3 的元素
        selector: to.hash,
      }
    } else {
      return { x: 0, y: 0 }
    }
  },
  routes: [
    {
      path: '/',
      name: 'layout',
      component: () => import('../components/layout'),
      title: '布局',
      redirect: '/index',
      children: [
        {
          path: '/index',
          name: 'index',
          component: () => import('../pages/index'),
          title: '首页',
        },
      ],
    },
    // {
    //   path: '*',
    //   name: '404',
    //   component: () => import('../pages/40x'),
    //   title: '页面走丢了',
    // },
  ],
})

export default router
