import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

//导入element插件
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

Vue.use(ElementUI);


import router from './router/router.js'


new Vue({
  render: h => h(App),
  router
}).$mount('#app')



