import { createWebHistory, createRouter } from "vue-router";


// All lazy-loaded
const HomePage = () => import('@/components/pages/HomePage.vue')
const GamePage = () => import('@/components/pages/GamePage.vue')

const routes = [
  {
    path: "/",
    name: "homePage",
    component: HomePage,
  },
  {
    path: "/game",
    name: "gamePage",
    component: GamePage,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
