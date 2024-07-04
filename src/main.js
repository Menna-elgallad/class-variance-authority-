import { createApp } from "vue";
import App from "./App.vue";
import "normalize.css";
import "./index.css";
import { router } from "./routing";

const VueApp = createApp(App);

VueApp.use(router);

VueApp.mount("#app");
