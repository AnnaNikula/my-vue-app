import { createApp } from "vue";
import router from "/router"; //Hjälp
import App from "./App.vue";

const app = createApp(App);
app.use(router);

createApp(App).mount("#app");
