<template>
  <button v-if="!to" :class="classes" class="btn">
    <slot></slot>
  </button>
  <router-link v-else :to="to" :class="classes" class="btn">
    <slot></slot>
  </router-link>
</template>

<script setup>
defineProps({
  to: {
    required: false,
  },
  type: {
    required: false,
    type: String,
  },
  classes: {
    required: false,
    type: String,
  },
});
</script>

<style scoped lang="scss">
.btn {
  border: none;
  cursor: pointer;
  font: inherit;
  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  font-weight: 500;
  color: var(--color-green-800);
  text-align: center;
  padding: 0.7rem 2.2rem;
  border-radius: 4px;
  background: var(--color-green-300);
  cursor: pointer;
  transition: all 0.25s ease-out;
  letter-spacing: 1px;
  text-transform: uppercase;

  &:hover,
  &:active,
  &:focus {
    outline: none;
    background: var(--color-green-200);
  }
}

.outline {
  border: 2px solid var(--color-green-300);
  color: var(--color-green-300);
  background: transparent;

  &:hover,
  &:active,
  &:focus {
    background: var(--color-green-300);
    color: var(--color-green-800);
  }
}

.cta {
  background-color: var(--color-red-500);
  font-size: 1.1rem;
  color: var(--color-red-50);

  &.flat {
    background-color: transparent;
    color: var(--color-red-500);
  }

  &:hover,
  &:active,
  &:focus {
    background-color: var(--color-red-600);
    color: var(--color-red-50);
  }
}

.cta-outline {
  border: 2px solid var(--color-red-500);
  background-color: transparent;
  color: var(--color-red-500);

  &:hover,
  &:active,
  &:focus {
    background-color: var(--color-red-500);
    color: var(--color-red-50);
  }
}

.blue {
  background-color: var(--color-blue-500);
  color: var(--color-blue-50);

  &.flat {
    background-color: transparent;
    color: var(--color-blue-500);
  }

  &:hover,
  &:active,
  &:focus {
    background-color: var(--color-blue-600);
    color: var(--color-blue-50);
  }
}

.blue-outline {
  border: 2px solid var(--color-blue-500);
  background-color: transparent;
  color: var(--color-blue-500);

  &:hover,
  &:active,
  &:focus {
    background-color: var(--color-blue-500);
    color: var(--color-blue-50);
  }
}

.sharp {
  border-radius: 0px;
}

.rounded {
  border-radius: 100px;
}

.small {
  padding: 0.5rem 1.4rem;
  font-size: 0.85rem;
}

.large {
  padding: 0.7rem 3rem;
  font-size: 1.1rem;
}

.full {
  width: 100%;
}

.bump {
  transition: all 0.3s;
  &:hover,
  &:focus {
    transform: translateY(-2px);
  }
  &:active {
    transform: translateY(0);
  }
}

.btn:disabled,
.btn:hover:disabled,
.btn:active:disabled {
  background: #ccc;
  color: #979797;
  border-color: #ccc;
  cursor: not-allowed;
}
</style>
