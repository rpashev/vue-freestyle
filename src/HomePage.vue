<template>
  <div class="home">
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
          <ul>
            <li>
              <router-link to="/components/accordion">Accordion</router-link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  </div>
</template>

<style lang="scss" scoped>
.home {
  background-color: #1e293b;
  height: 100vh;
  width: 100%;
  padding-top: 15rem;
  color: #cbd5e1;
}
.nav {
  display: flex;
  gap: 8rem;
  width: 100%;
  justify-content: center;

  h1 {
    font-size: 2.5rem;
  }

  ul {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    list-style: none;
    margin-top: 2rem;

    a {
      text-decoration: none;
      font: inherit;
      color: #d946ef;
      font-size: 1.3rem;

      &:hover {
        color: #d808f8;
      }
    }
  }
}
</style>
