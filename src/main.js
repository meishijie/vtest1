// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Naver from '@/components/Naver'
import Footers from '@/components/Footer'
import './assets/css/bootstrap.min.css'
import './assets/js/bootstrap.min.js'


Vue.config.productionTip = false
Vue.component('footers', Footers)
Vue.component('naver', Naver)
    /* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    template: '<App/>',
    components: { App }
})