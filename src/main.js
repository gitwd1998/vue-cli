import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

//* 备注：如果不需要全局导入，则可以在指定组件中局部导入局部应用，不需要添加到Vue的原型对象上
//全局导入axios做http请求
import axios from 'axios'
Vue.prototype.$ajax = axios
// 全局导入qs处理post请求的参数
import qs from 'qs'
Vue.prototype.$qs = qs
// 全局导入querystring处理post请求的参数
import querystring from 'querystring'
Vue.prototype.$querystring = querystring
// 全局导入jquery
import jquery from 'jquery'
Vue.prototype.$ = jquery
// 全局导入swiper
import swiper from 'swiper'
import 'swiper/dist/css/swiper.css'
Vue.prototype.$swiper = swiper
// 全局导入elementUI
import elementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
Vue.use(elementUI)

// 注册一个全局自定义指令 `v-focus`
Vue.directive('focus', {
  inserted: function (el) {//参数为绑定当前指令的dom元素
    el.focus()
  }
})

// 全局注册组件1
Vue.component('anchored-heading', {
  render: function (c) {
    return c('h1', '用render方法全局注册组件')
  },
})
// 全局注册组件2
import hhh from "./components/prop-component";
Vue.component(hhh.name, hhh)



Vue.config.productionTip = false
new Vue({
  router,
  store,
  render: h => h(App),
  mounted() { console.log('Vue', this) }
}).$mount('#app')
