<template>
  <header class="header">
    <nav class="nav">
      <div>
        <h1>Apps</h1>
        <ul>
          <li>
            <router-link to="/to-do">To Do App</router-link>
          </li>
        </ul>
      </div>
      <div>
        <h1>Pages</h1>
        <ul></ul>
      </div>
      <div>
        <h1>Components</h1>
        <ul></ul>
      </div>
    </nav>
  </header>
</template>

<style lang="scss" scoped>
.nav {
  display: flex;
  gap: 3rem;
  width: 100%;
  justify-content: center;
}
</style>
