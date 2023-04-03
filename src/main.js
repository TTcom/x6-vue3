import Vue from 'vue'
import { createApp, h } from 'vue-demi'
import VueCompositionApi from '@vue/composition-api'
import App from "./App.vue"
import "uno.css"


Vue.use(VueCompositionApi)

const app = createApp({
  render: () => h(App),
})
app.mount("#app")
