<template>
  <li class="todo">
    <input
      type="checkbox"
      :id="props.todo.id"
      @change="onChange"
      :checked="props.todo.status === 'completed' ? true : false"
    />
    <label :for="props.todo.id">{{ props.todo.task }}</label>
    <button @click="onDelete">Delete</button>
  </li>
</template>

<script setup>
import { getCurrentInstance } from "vue";

const props = defineProps({
  todo: Object,
});

const emits = defineEmits(["onChange", "onDelete"]);

const { emit } = getCurrentInstance();

const onDelete = () => {
  emit("onDelete", props.todo.id);
};

const onChange = (event) => {
  emit("onChange", event, props.todo.id);
};
</script>

<style lang="scss" scoped>
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
    font: inherit;
    cursor: pointer;
    &:hover,
    &:active {
      outline: none;
      background-color: rgba(255, 134, 134, 0.696);
    }
  }
}
</style>
