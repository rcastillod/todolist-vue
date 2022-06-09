import Vue from 'vue'
//import { autoAnimatePlugin } from '@formkit/auto-animate/vue'
import App from './App.vue'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
