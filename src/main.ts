import { createApp } from "vue";
import App from "./App.vue";
import {createPinia} from "pinia"
import router from "./router";
import TDesign  from 'tdesign-vue-next';
import piniaPluginPersistedstate from "pinia-plugin-persistedstate"

const app = createApp(App);

// 引入组件库全局样式资源
import 'tdesign-vue-next/es/style/index.css';
import 'tdesign-vue-next/dist/reset.css';

const pina = createPinia();
app.use(pina);
pina.use(piniaPluginPersistedstate)
app.use(TDesign );




app.use(router);
app.mount("#app");
