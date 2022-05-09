import * as Vue from 'vue'
import Portofolio from './Portofolio'

Vue.createApp({
  setup() {
    return () => Vue.h(Portofolio)
  },
}).mount('#app')