import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import ShowProduct from "../views/ShowProduct.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/product/:id",
    name: "ShowProduct",
    component: ShowProduct,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
