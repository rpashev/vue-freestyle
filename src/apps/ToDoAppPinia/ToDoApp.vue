<template>
  <div class="page">
    <h1>To Do App</h1>
    <div class="main">
      <div class="new-todo">
        <input type="text" placeholder="Create a new to do" v-model.trim="newTask" />
        <button @click="createToDoHandler">add to do</button>
      </div>
      <ul class="todos" v-if="filteredToDos && filteredToDos.length !== 0">
        <ToDoItem
          v-for="todo in filteredToDos"
          :todo="todo"
          @on-change="changeStatusHandler"
          @on-delete="deleteHandler"
        />
      </ul>
      <p v-else class="notification">No items matching the criteria!</p>
      <div class="actions">
        <button @click="setFilter('all')" :class="{ active: filter === 'all' }">
          All
        </button>
        <button @click="setFilter('pending')" :class="{ active: filter === 'pending' }">
          Active
        </button>
        <button
          @click="setFilter('completed')"
          :class="{ active: filter === 'completed' }"
        >
          Completed
        </button>
        <button @click="clearCompleted" class="danger">Clear Completed</button>
      </div>
      <p>{{ pendingAmount }}</p>
    </div>
  </div>
</template>

<script setup>
import { computed } from "@vue/reactivity";
import { ref } from "vue";
import { useTodos } from "../../stores-pinia/ToDoStore";
import { storeToRefs } from "pinia";
import ToDoItem from "./ToDoItem.vue";

const store = useTodos();
const { todosList } = storeToRefs(store);
const { addToDo, clearCompleted, changeStatus, deleteToDo } = store;

const newTask = ref(null);

const createToDoHandler = () => {
  if (!newTask.value) return;
  addToDo(newTask.value);
  newTask.value = "";
};

const deleteHandler = (id) => {
  deleteToDo(id);
};

const changeStatusHandler = (event, id) => {
  const status = event.target.checked ? "completed" : "pending";
  changeStatus({ id, status });
};

const filter = ref("all");

const setFilter = (status) => {
  if (status !== filter.value) {
    filter.value = status;
  }
};

const filteredToDos = computed(() => {
  if (filter.value === "all") return todosList.value;

  return todosList.value.filter((todo) => todo.status === filter.value);
});

const pendingAmount = computed(() => {
  const pending = todosList.value.filter((todo) => todo.status === "pending");
  return `Tasks left to complete: ${pending.length}`;
});
</script>

<style lang="scss" scoped>
.page {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  h1 {
    font-size: 2.5rem;
    text-align: center;
  }
}

.main {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.new-todo {
  display: flex;
  width: 100%;
  margin-bottom: 1.5rem;
  input {
    padding: 0.6rem;
    flex-grow: 1;
    font: inherit;
    font-size: 1.1rem;
    border: 2px solid var(--color-green-200);

    &:focus {
      outline: none;
      border: 2px solid var(--color-green-400);
    }

    &::placeholder {
      font-size: 1rem;
    }
  }
  button {
    border: none;
    padding: 0.5rem 1.2rem;
    background-color: var(--color-green-200);
    text-transform: uppercase;
    letter-spacing: 1px;
    font-size: 0.85rem;
    font-weight: 500;
    cursor: pointer;
    transition: all 0.2s;
    color: var(--color-green-600);
    font: inherit;
    cursor: pointer;

    &:hover,
    &:active {
      background-color: var(--color-green-300);
    }
  }
}

.todos {
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.actions {
  display: flex;
  justify-content: space-between;
  gap: 0.5rem;

  button {
    border: 2px solid var(--color-green-300);
    padding: 0.4rem 1rem;
    background-color: var(--color-green-100);
    color: var(--color-green-600);
    font: inherit;
    cursor: pointer;

    &:active,
    &:hover {
      background-color: var(--color-green-300);
    }
  }

  .active {
    background-color: var(--color-green-300);
  }
  .danger {
    background-color: rgb(255, 134, 134);
    border: 2px solid rgba(255, 134, 134, 0.696);
    color: var(--color-gray-800);
    &:hover,
    &:active {
      background-color: rgba(255, 134, 134, 0.696);
    }
  }
}

.notification {
  text-align: center;
  margin: 2rem 0;
}
</style>
