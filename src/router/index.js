import { createRouter, createWebHistory } from "vue-router";

import ToDoApp from "../apps/ToDoApp/ToDoApp.vue";
import HomePage from "../HomePage.vue";
import AccordionStandard from "../components/AccordionStandard.vue";
import CarouselStandard from "../components/CarouselStandard.vue";
import ButtonsDemo from "../components/buttons/ButtonsDemo.vue";

const routes = [
  { path: "/to-do", component: ToDoApp },
  { path: "/", component: HomePage },
  { path: "/components/accordion", component: AccordionStandard },
  { path: "/components/carousel", component: CarouselStandard },
  { path: "/components/buttons", component: ButtonsDemo },
  { path: "/:notFound(.*)", redirect: "/" },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
