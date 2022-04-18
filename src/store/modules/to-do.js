export default {
  namespaced: true,
  state: () => ({
    todos: [
      { task: "Get a job brah", status: "pending", id: 1 },
      { task: "Be a person", status: "completed", id: 2 },
    ],
  }),
  mutations: {
    addToDo(state, payload) {
      state.todos.unshift(payload);
    },
  },
  getters: {
    todos(state) {
      return state.todos;
    },
  },
};
