<template>
  <div class="page">
    <h1>To Do App</h1>
    <div class="main">
      <div class="new-todo">
        <input type="text" placeholder="Create a new to do" v-model.trim="newTask" />
        <button @click="createToDo">add to do</button>
      </div>
      <ul class="todos" v-if="filteredToDos.length !== 0">
        <li v-for="todo in filteredToDos" class="todo">
          <input
            type="checkbox"
            :id="todo.id"
            @change="changeStatus($event, todo.id)"
            :checked="todo.status === 'completed' ? true : false"
          />
          <label :for="todo.id">{{ todo.task }}</label>
          <button @click="deleteToDo(todo.id)">Delete</button>
        </li>
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
import { useStore } from "vuex";

const store = useStore();

const todos = computed(() => store.getters["todos/todos"]);

const newTask = ref(null);

const createToDo = () => {
  if (!newTask.value) return;
  store.dispatch("todos/addToDo", newTask.value);
};

const deleteToDo = (id) => {
  store.dispatch("todos/deleteToDo", id);
};

const changeStatus = (event, id) => {
  const status = event.target.checked ? "completed" : "pending";
  store.dispatch("todos/changeStatus", { id, status });
};

const filter = ref("all");

const setFilter = (status) => {
  if (status !== filter.value) {
    filter.value = status;
  }
};

const filteredToDos = computed(() => {
  if (filter.value === "all") return todos.value;

  return todos.value.filter((todo) => todo.status === filter.value);
});

const pendingAmount = computed(() => {
  const pending = todos.value.filter((todo) => todo.status === "pending");
  return `Tasks left to complete: ${pending.length}`;
});

const clearCompleted = () => {
  store.dispatch("todos/clearCompleted");
};
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

  button {
    font: inherit;
    cursor: pointer;
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

.todo {
  display: grid;
  grid-template-columns: auto 4fr 1fr;
  align-items: center;
  transition: all 0.2s;
  height: 2.5rem;
  gap: 1rem;

  &:hover {
    transform: scale(1.02);
    box-shadow: 0 5px 10px rgba(0, 0, 0, 0.2);
    cursor: pointer !important;
    background-color: var(--color-gray-50);
  }

  label,
  input {
    cursor: inherit;
    height: 100%;
  }

  label {
    display: flex;
    align-items: center;
  }

  input {
    accent-color: var(--color-green-500);
    height: 1.5;
    width: 1.5rem;
    margin-left: 0.5rem;
  }

  button {
    border: none;
    padding: 0.3rem 1rem;
    background-color: rgb(255, 134, 134);
    border-radius: 2px;
    height: 100%;
    &:hover,
    &:active {
      outline: none;
      background-color: rgba(255, 134, 134, 0.696);
    }
  }
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
