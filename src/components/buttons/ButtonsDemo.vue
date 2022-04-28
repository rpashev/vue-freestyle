<template>
  <section class="section">
    <base-button to="/">submit</base-button>
    <base-button classes="blue flat">submit</base-button>
    <base-button classes="cta rounded">buy now</base-button>
    <base-button classes="cta-outline">learn more</base-button>
    <base-button classes="blue large sharp">login</base-button>
    <base-button classes="rounded blue small">buy now</base-button>
    <base-button classes="cta small">buy now</base-button>
    <base-button classes="cta large flat">login</base-button>
    <base-button classes="flat bump small">buy now</base-button>
    <base-button classes="bump sharp blue-outline">buy now</base-button>
    <base-button classes="full rounded">learn more</base-button>
    <base-button classes="sharp outline">buy now</base-button>
    <base-button classes="small rounded outline">buy now</base-button>
    <base-button classes="large outline" disabled>buy now</base-button>
    <base-button classes="large full blue" to="/" disabled>homepage</base-button>
  </section>
</template>

<script setup></script>

<style lang="scss" scoped>
.section {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  align-items: center;
  justify-items: center;
  gap: 2rem;
  width: 70%;
}
</style>
