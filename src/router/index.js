import { createWebHistory, createRouter } from "vue-router";


// All lazy-loaded
const HomePage = () => import('@/components/pages/HomePage.vue')

const routes = [
  {
    path: "/",
    name: "HomePage",
    component: HomePage,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
