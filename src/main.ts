import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import 'element-ui/lib/theme-chalk/index.css';

import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'


createApp(App).use(store).use(ElementPlus).use(router).mount('#app')



for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  createApp(App).component(key, component)
}