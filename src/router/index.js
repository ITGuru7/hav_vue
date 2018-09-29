import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import Index from '@/components/Index'
import Kk from '@/components/kk-components'
import PaymentInvoice from './../components/invoices/PaymentInvoice.vue'
import ProfileModal from './../components/Profile.vue'
import CompareLinkPage from './../components/CompareLinkPage.vue'
import AdminIndex from './../components/admin/AdminIndex.vue'
import ResetPage from './../components/modals/Reset.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: Index
    },
    {
      path: '/kkcom',
      component: Kk
    },
    {
      path: '/nyn',
      component: Hello
    },
    {
      path: '/invoice',
      component: PaymentInvoice
    },
    {
      path: '/profile',
      component: ProfileModal,
      meta: {
        forAuth: true
      }
    },
    {
      path: '/profile1',
      component: Hello,
      meta: {
        forAuth: true
      }
    },
    {
      path: '/compare/:id',
      component: CompareLinkPage,
      meta: {
        forAuth: true,
        forVisitors: true
      }
    },
    {
      path: '/admin',
      component: AdminIndex,
      meta: {
        forAuth: true
      }
    },
    {
      path: '/reset/password/:id',
      component: ResetPage,
      meta: {
        forVisitors: true
      }
    },
    {
      path: '/reset-un',
      component: ResetPage,
      meta: {
        forVisitors: true
      }
    }
  ]
})
