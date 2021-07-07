import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import "./assets/tailwind.css";
import VueLazyLoad from 'vue3-lazyload'
import VueObserveVisibility from 'vue3-observe-visibility'

const axios = require('axios').default;
window.axios = axios.create({
    baseURL: 'https://mixcart.com.tr/api/',
    headers: {'Accept': 'application/json'}
})

createApp(App)
    .use(router).use(VueLazyLoad)
    .use(VueObserveVisibility)
    .mount("#app");