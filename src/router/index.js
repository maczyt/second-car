import VueRouter from 'vue-router'

import home from '@/components/router/home'
import near from '@/components/router/near'
import list from '@/components/login'

const routes = [
  {
    path: '/home',
    component: home
  }, {
    path: '/near',
    component: near
  }, {
    path: '/list',
    component: list
  }
];
const router = new VueRouter({
  routes,
  linkActiveClass: 'active'
});

export default router;
