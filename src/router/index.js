import { createRouter, createWebHistory } from 'vue-router'
import Homeveiw from '../views/Homeveiw.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Homeveiw',
      component: Homeveiw,
    },
    {
      name: 'blogveiw',
      path: '/blogs',
      component: () => import('../views/Blogveiw.vue'),
    },
    {
      name: 'Eachblogveiw',
      path: '/blog/:blog_id',
      component: () => import('../views/EachBlogveiw.vue'),
    },
    {
      name: 'contact-us',
      path: '/contact-us',
      component: () => import('../views/ContactView.vue'),
    },
    {
      name: 'about-us',
      path: '/about-us',
      component: () => import('../views/AboutView.vue'),
    },
    // service
    {
      name: 'services',
      path: '/services',
      component: () => import('../views/ServicesView.vue'),
    },
    // not found
    {
      name: 'not-found',
      path: '/:pathMatch(.*)*',
      component: () => import('../views/NotFoundView.vue'),
    }
  ]
})

router.beforeEach((to, from, next) => {
  window.scrollTo(0, 0);
  next();
});


export default router
