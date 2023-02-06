import { createApp } from "vue";
import App from "./App.vue";
import {createPinia} from "pinia"
import router from "./router";
import TDesign  from 'tdesign-vue-next';
import piniaPluginPersistedstate from "pinia-plugin-persistedstate"
//自定义方法 检查是否有权限
import { permissionDirective } from "./directives/permission";


// 引入封装好的初始化方法
import { drawChart } from "@/composables/initEcharts";

const app = createApp(App);
// 引入组件库全局样式资源
import 'tdesign-vue-next/es/style/index.css';
import 'tdesign-vue-next/dist/reset.css';
import '@/assets/css/main.css'

const pina = createPinia();
app.use(pina);
pina.use(piniaPluginPersistedstate)
app.use(TDesign );



app.directive("permission", permissionDirective)
app.use(router);



app.mount("#app");
