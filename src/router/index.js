import Vue from 'vue';
import Router from 'vue-router';
import WorkSpace from '@/components/workspace/workspace';
import Login from '@/components/login/login';
Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/login'
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/workspace',
      name: 'WorkSpace',
      component: WorkSpace
    }
  ]
});
