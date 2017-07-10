import Vue from 'vue'
import Router from 'vue-router'
import ChatPage from '@/components/chat/ChatPage'
import UserPage from '@/components/user/UserPage'
import Login from '@/components/user/Login'
import Signup from '@/components/user/Signup'
import Logout from '@/components/user/Logout'
import Account from '@/components/user/Account'
import LegalTerms from '@/components/info/LegalTerms'

Vue.use(Router)

const routes = [
  {
    name: 'Chat',
    path: '/',
    component: ChatPage,
  }, {
    name: 'User',
    path: '/user',
    component: UserPage,
    children: [
      {
        name: 'Login',
        path: 'login',
        component: Login,
      },
      {
        name: 'Signup',
        path: 'signup',
        component: Signup,
      },
      {
        name: 'Account',
        path: 'account',
        component: Account,
      },
      {
        name: 'Logout',
        path: 'logout',
        component: Logout,
      },
    ]
  }, {
    name: 'LegalTerms',
    path: '/legal-terms',
    component: LegalTerms,
  }
]

export default new Router({ routes })
