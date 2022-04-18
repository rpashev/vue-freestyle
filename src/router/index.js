import { createRouter, createWebHistory } from "vue-router";

import ToDoApp from "../apps/ToDoApp/ToDoApp.vue";
import HomePage from "../HomePage.vue";

const routes = [
  { path: "/to-do", component: ToDoApp },
  { path: "/", component: HomePage },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
