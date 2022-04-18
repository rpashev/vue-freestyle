import { createRouter, createWebHistory } from "vue-router";

import ToDoApp from "../apps/ToDoApp/ToDoApp.vue";
import HomePage from "../HomePage.vue";
import AccordionStandard from "../components/AccordionStandard.vue";

const routes = [
  { path: "/to-do", component: ToDoApp },
  { path: "/", component: HomePage },
  { path: "/components/accordion", component: AccordionStandard },
  { path: "/:notFound(.*)", redirect: "/" },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
