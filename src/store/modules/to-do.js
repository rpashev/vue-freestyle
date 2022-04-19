import { v4 as uuidv4 } from "uuid";

export default {
  namespaced: true,
  state: () => ({
    todos: [
      { task: "Get a job brah", status: "pending", id: 1 },
      { task: "Be a person", status: "completed", id: 2 },
    ],
  }),
  mutations: {
    addToDo(state, todo) {
      state.todos.unshift(todo);
    },

    deleteToDo(state, id) {
      const index = state.todos.findIndex((todo) => todo.id === id);
      if (index !== -1) {
        state.todos.splice(index, 1);
      }
    },

    changeStatus(state, { toBeUpdatedTodo, status }) {
      toBeUpdatedTodo.status = status;
    },

    clearCompleted(state) {
      state.todos = state.todos.filter((todo) => todo.status !== "completed");
    },
  },

  getters: {
    todos(state) {
      return state.todos;
    },
  },

  actions: {
    addToDo({ commit }, task) {
      const id = uuidv4();
      const newToDo = { task, status: "pending", id };
      commit("addToDo", newToDo);
    },

    deleteToDo({ commit }, id) {
      commit("deleteToDo", id);
    },

    changeStatus({ commit, state }, { id, status }) {
      const toBeUpdatedTodo = state.todos.find((todo) => todo.id === id);
      commit("changeStatus", { toBeUpdatedTodo, status });
    },

    clearCompleted({ commit }) {
      commit("clearCompleted");
    },
  },
};
