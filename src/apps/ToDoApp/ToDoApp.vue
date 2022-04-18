<template>
  <h1>To Do App</h1>
</template>

<script setup>
import { useStore } from "vuex";

const store = useStore();
const todos = store.getters["todos/todos"];

console.log(todos);
</script>
