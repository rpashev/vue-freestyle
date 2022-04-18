<template>
  <div class="accordion">
    <div class="item" :class="{ visible: visiblePanel(1) }">
      <button class="btn" @click="togglePanel(1)">
        <span>Section 1</span><img src="../assets/chevron-forward-outline.svg" />
      </button>
      <div class="panel">
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Adipisci esse magnam
          sint dolorum mollitia nobis ratione! Natus nulla accusamus sapiente ullam
          asperiores delectus quo quod eaque itaque, quibusdam consequatur voluptatum.
        </p>
      </div>
    </div>
    <div class="item" :class="{ visible: visiblePanel(2) }">
      <button class="btn" @click="togglePanel(2)">
        <span>Section 2</span><img src="../assets/chevron-forward-outline.svg" />
      </button>
      <div class="panel">
        <p>
          2 Lorem ipsum dolor sit amet consectetur, adipisicing elit. Adipisci esse magnam
          sint dolorum mollitia nobis ratione! Natus nulla accusamus sapiente ullam
          asperiores delectus quo quod eaque itaque, quibusdam consequatur voluptatum.
        </p>
      </div>
    </div>
    <div class="item" :class="{ visible: visiblePanel(3) }">
      <button class="btn" @click="togglePanel(3)">
        <span>Section 3</span><img src="../assets/chevron-forward-outline.svg" />
      </button>
      <div class="panel">
        <p>
          3 Lorem ipsum dolor sit amet consectetur, adipisicing elit. Adipisci esse magnam
          sint dolorum mollitia nobis ratione! Natus nulla accusamus sapiente ullam
          asperiores delectus quo quod eaque itaque, quibusdam consequatur voluptatum.
        </p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

const active = ref(null);

const togglePanel = (id) => {
  if (active.value === id) return (active.value = null);
  active.value = id;
};

const visiblePanel = (id) => {
  return active.value === id ? true : false;
};
</script>

<style lang="scss" scoped>
.accordion {
  width: 700px;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  background-color: var(--color-gray-50);
  padding: 3rem 2rem;
  border-radius: 8px;
}

.btn {
  font: inherit;
  border: none;
  cursor: pointer;
  background-color: var(--color-gray-200);
  transition: all 0.3s;
  color: var(--color-gray-900);
  width: 100%;
  border-radius: 3px;
  padding: 1rem 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;

  &:hover,
  &:active {
    background-color: var(--color-gray-300);
  }

  img {
    width: 2rem;
    transition: all 0.3s;
  }
}

.panel {
  display: none;
  animation: slideDown 1.7s ease-out;

  p {
    margin: 0.5rem 0.25rem;
  }
}
.visible {
  .panel {
    display: block;
  }
  img {
    transform: rotate(90deg);
  }
}

@keyframes slideDown {
  from {
    max-height: 0;
  }
  to {
    max-height: 400px;
  }
}
</style>
