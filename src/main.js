import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import "./assets/tailwind.css";
import "./assets/tailwind.css";

import VueObserveVisibility from 'vue3-observe-visibility';
import VueLazyLoad from 'vue3-lazyload'

const axios = require('axios').default;
window.axios = axios.create({
    baseURL: 'https://mixcart.com.tr/api/',
    headers: {'Accept': 'application/json'}
})

createApp(App)
    .use(router).use(VueObserveVisibility).use(VueLazyLoad)
    .mount("#app");