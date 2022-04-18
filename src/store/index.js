import { createStore } from "vuex";
import toDoModule from "./modules/to-do";

const store = createStore({
  modules: {
    todos: toDoModule,
  },
});

export default store;
