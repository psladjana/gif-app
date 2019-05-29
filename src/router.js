import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
    },
    {
      path: '/gif/:id',
      name: 'GifPage',
      component: () => import(/* webpackChunkName: "about" */ './views/GifPage.vue'),
    },
  ],
});
