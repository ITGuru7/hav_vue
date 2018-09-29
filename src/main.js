// import Es6Promise from 'es6-promise'
// Es6Promise.polyfill()
import 'babel-polyfill'
// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Vuetify from 'vuetify'
import './stylus/main.styl'
import App from './App'
import router from './router'
import { storex } from './store'
import VueResource from 'vue-resource'
import VueCircleSlider from 'vue-circle-slider'
import Auth from './packages/auth/Auth.js'
import VueScrollTo from 'vue-scrollto'
import VueClipboards from 'vue-clipboards'
import VueTruncate from 'vue-truncate-filter'
import da from 'vee-validate/dist/locale/da'
import VeeValidate, { Validator } from 'vee-validate'
import VueConfig from 'vue-config'
import underscore from 'vue-underscore'
import 'vue-croppa/dist/vue-croppa.css'
import Croppa from 'vue-croppa'
import VueEditor from 'vue2-editor'
import Toasted from 'vue-toasted'
import VueTimeago from 'vue-timeago'
import VTooltip from 'v-tooltip'
import VueFuse from 'vue-fuse'

Vue.use(VueResource)
Vue.http.headers.common['Content-Type'] = 'application/json'
Vue.http.headers.common['Access-Control-Allow-Origin'] = '*'
Vue.http.headers.common['Accept'] = 'application/json, text/plain, */*'
Vue.http.headers.common['Access-Control-Allow-Headers'] = 'Origin, Accept, Content-Type, Authorization, Access-Control-Allow-Origin'
Vue.use(VueFuse)
Vue.use(VTooltip)
Vue.use(VueTimeago, {
  name: 'timeago', // component name, `timeago` by default
  locale: 'da-DK',
  locales: {
    // you will need json-loader in webpack 1
    'da-DK': require('vue-timeago/locales/da-DK.json')
  }
})
Vue.use(Toasted, {
  theme: 'primary',
  position: 'top-center',
  duration: 5000,
  action: {
    icon: 'clear',
    onClick: (e, toastObject) => {
      toastObject.goAway(0)
    }
  }
})
Validator.localize('da', da)
Vue.use(VueEditor)
const configs = {
  // baseUrl: 'http://localhost:8580/#/'
  baseUrl: 'https://www.kommunekontakt.dk/'
  // baseUrl: 'http://35.158.152.199:9898/#/'
}
Vue.use(Croppa)
Vue.use(VeeValidate)
Vue.use(VueTruncate)
Vue.use(VueClipboards)
Vue.use(Vuetify)
Vue.use(VueResource)
Vue.use(VueCircleSlider)
Vue.use(Auth)
Vue.use(VueConfig, configs)
Vue.use(underscore)
Vue.use(VueScrollTo, {
  container: 'body',
  duration: 1000,
  easing: 'ease',
  offset: 0,
  cancelable: true,
  onDone: false,
  onCancel: false,
  x: false,
  y: true
})
Vue.config.productionTip = false
// Vue.http.options.root = 'http://127.0.0.1:8000/'
Vue.http.options.root = 'https://kommunekontakt.dk/api2/public/'
// Vue.http.options.root = 'http://35.158.152.199:98/'
Vue.http.headers.common['Authorization'] = 'Bearer ' + Vue.auth.getToken()
/* eslint-disable no-new */
router.beforeEach(
  (to, from, next) => {
    if (to.matched.some(record => record.meta.forVisitors)) {
      if (Vue.auth.isAuthenticated()) {
        next(
          // {
          //     path: '/home'
          // }
        )
      } else {
        next()
      }
    } else if (to.matched.some(record => record.meta.forAuth)) {
      if (!Vue.auth.isAuthenticated()) {
        next({
          path: '/'
        })
      } else {
        next()
      }
    } else {
      next()
    }
  }
)

new Vue({
  el: '#app',
  router,
  store: storex,
  template: '<App/>',
  components: { App }
})
