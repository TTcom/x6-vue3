import { createApp } from "vue"
import App from "./App.vue"
import { createHead } from "@vueuse/head"
import { createRouter, createWebHashHistory } from "vue-router"
import routes from "~pages"
import "./assets/common.scss"

import * as ElementPlusIconsVue from "@element-plus/icons-vue"

import "uno.css"
console.log("AA", routes)
const app = createApp(App)
const head = createHead()
const router = createRouter({
  history: createWebHashHistory(),
  routes,
})

for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component)
}

app.use(head)
app.use(router)

app.mount("#app")
