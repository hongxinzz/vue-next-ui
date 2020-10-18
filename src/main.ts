/*
 * @Author: xinghe
 * @LastEditors: xinghe
 * @Date: 2020-10-13 22:51:04
 * @FilePath: /gulu-vue3/src/main.ts
 * @LastEditTime: 2020-10-18 20:50:07
 * @不想有bug xinghe@gaoding.com
 */
import { createApp } from 'vue'
import App from './App.vue'
import './index.css'
import router from './router'
const app = createApp(App)
app.use(router)
app.mount('#app')
