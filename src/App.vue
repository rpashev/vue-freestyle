<template>
  <router-view></router-view>
</template>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap");

:root {
  --color-gray-50: #f9fafb;
  --color-gray-100: #f3f4f6;
  --color-gray-200: #e5e7eb;
  --color-gray-300: #d1d5db;
  --color-gray-400: #9ca3af;
  --color-gray-500: #6b7280;
  --color-gray-600: #4b5563;
  --color-gray-700: #374151;
  --color-gray-800: #1f2937;
  --color-gray-900: #111827;

  --color-green-100: #dcfce7;
  --color-green-200: #86efac;
  --color-green-300: #4ade80;
  --color-green-400: #22c55e;
  --color-green-500: #16a34a;
  --color-green-600: #166534;

  --color-red-50: #fef2f2;
  --color-red-100: #fee2e2;
  --color-red-300: #fca5a5;
  --color-red-500: #ef4444;
  --color-red-600: #dc2626;
  --color-red-800: #991b1b;

  --color-blue-50: #eff6ff;
  --color-blue-100: #dbeafe;
  --color-blue-300: #93c5fd;
  --color-blue-500: #3b82f6;
  --color-blue-600: #2563eb;
  --color-blue-800: #1e40af;
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
#app {
  font-family: Inter, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: var(--color-gray-800);
  background-color: var(--color-gray-100);
  min-height: 100vh;
  min-width: 100vw;
  display: grid;
  place-items: center;
}
</style>
