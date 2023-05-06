import { createWebHistory, createRouter } from 'vue-router';
import HomeVue from "./components/HomeVue.vue";
import ProfileComp from "./components/Profile.vue";
import NotFound from "./components/NotFound.vue";

const routes = [
  {
    path: '/',
    name: 'HomeVue',
    component: HomeVue,
  },
    {
    path: '/Profile/:nme/',
    name: 'Profile',
    component: ProfileComp,
  },
   {
    path: '/:pathMatch(.*)*',
    name: 'NotFound',
    component: NotFound,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;