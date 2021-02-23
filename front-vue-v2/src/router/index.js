import Vue from 'vue';
import VueRouter from 'vue-router';
import NProgress from 'nprogress';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'New Doctor',
    component: () => import('../components/pages/create-doctor/CreateDoctorComponent'),
  },
  {
    path: '/list-doctor',
    name: 'List All Doctor',
    component: () => import('../components/pages/list-doctor/ListDoctorComponent'),
  },
  {
    path: '/edit-doctor/:id',
    name: 'Update Doctor',
    component: () => import('../components/pages/edit-doctor/EditDoctorComponent'),
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

router.beforeEach((to, from, next) => {
  if (to.name) {
    NProgress.start();
  }
  next();
});

router.afterEach((to, from) => {
  NProgress.done();
});

export default router;
