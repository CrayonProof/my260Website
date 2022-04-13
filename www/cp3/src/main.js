import Vue from 'vue'
import App from './App.vue'
import router from './router'
import designs from './designs.js'
import printers from './printers.js'

let data = {
  designs: designs,
  printers: printers,
  liked: []
}

new Vue({
  router,
  data,
  render: h => h(App)
}).$mount('#app')