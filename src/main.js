import { createApp } from "vue";
import { createPinia } from "pinia";
import App from "./App.vue";
import store from "./store/index";

import router from "./router";

import BaseButton from "./components/buttons/BaseButton.vue";

const app = createApp(App);

app.use(createPinia());
app.use(store);
app.use(router);

app.mount("#app");

app.component("base-button", BaseButton);
