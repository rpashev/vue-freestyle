<template>
  <section class="carousel">
    <button @click="previousSlide">PREVIOUS</button>
    <img :src="images[current].url" :key="images[current].url" alt="cat" />
    <button @click="nextSlide">NEXT</button>
  </section>
</template>

<script setup>
import { ref, watch, watchEffect } from "vue";

const images = [
  {
    url: "https://images.unsplash.com/photo-1548802673-380ab8ebc7b7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=435&q=80",
  },
  {
    url: "https://images.unsplash.com/photo-1592194996308-7b43878e84a6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
  },
  {
    url: "https://images.unsplash.com/photo-1543852786-1cf6624b9987?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
  },
  {
    url: "https://images.unsplash.com/photo-1526336024174-e58f5cdd8e13?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
  },
  {
    url: "https://images.unsplash.com/photo-1577023311546-cdc07a8454d9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
  },
];

const current = ref(0);

const nextSlide = () => {
  if (current.value === images.length - 1) {
    current.value = 0;
  } else {
    current.value = current.value + 1;
  }
};

const previousSlide = () => {
  if (current.value === 0) {
    current.value = images.length - 1;
  } else {
    current.value = current.value - 1;
  }
};
</script>
