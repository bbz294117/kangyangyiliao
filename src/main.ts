import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import 'element-ui/lib/theme-chalk/index.css';

import ElementPlus from 'element-plus';
import 'element-plus/dist/index.css';
import * as ElementPlusIconsVue from '@element-plus/icons-vue';

// 引入 vue-echarts 和 echarts
import Echarts from 'vue-echarts';
import * as echarts from 'echarts';

// 创建应用实例
const app = createApp(App);

// 注册 ElementPlus 和其图标
app.use(store).use(ElementPlus).use(router);

for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component);
}

// 注册 vue-echarts 组件
app.component('v-chart', Echarts);

// 将 echarts 添加到全局属性
app.config.globalProperties.$echarts = echarts;

// 挂载应用
app.mount('#app');
