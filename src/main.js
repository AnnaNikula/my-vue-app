import { createApp } from "vue";
import App from "./App.vue";
import router from "./router/router"; // Ensure the correct path to the router

const app = createApp(App);

app.use(router);

app.mount("#app");
