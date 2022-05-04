import { defineStore } from "pinia";
import { v4 as uuidv4 } from "uuid";

export const useTodos = defineStore("todos", {
  state: () => ({
    todos: [
      { task: "Get a job brah", status: "pending", id: 1 },
      { task: "Be a person", status: "completed", id: 2 },
    ],
  }),
  getters: {
    todosList: (state) => state.todos,
  },
  actions: {
    addToDo(task) {
      const id = uuidv4();
      const newToDo = { task, status: "pending", id };
      this.todos.unshift(newToDo);
    },

    deleteToDo(id) {
      const index = this.todos.findIndex((todo) => todo.id === id);
      if (index !== -1) {
        this.todos.splice(index, 1);
      }
    },

    changeStatus({ id, status }) {
      const toBeUpdatedTodo = this.todos.find((todo) => todo.id === id);
      toBeUpdatedTodo.status = status;
    },

    clearCompleted() {
      this.todos = this.todos.filter((todo) => todo.status !== "completed");
    },
  },
});
