import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import "./assets/tailwind.css";
import "./assets/tailwind.css";

import VueObserveVisibility from 'vue3-observe-visibility';

window.axios = require('axios');

createApp(App).use(router).use(VueObserveVisibility).mount("#app");