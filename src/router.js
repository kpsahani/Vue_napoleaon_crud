
import firebase from 'firebase'


import Vue from 'vue'
import Router from 'vue-router'
import store from './store'



import Home from './views/Home.vue'
import Login from './views/Login.vue'
import SignUp from './views/SignUp.vue'

import Overview from './pages/Overview.vue'
import Products from './pages/Products.vue'
import Profile from './pages/Profile.vue'
import UserList from './pages/UserList.vue'
import AddUser from './pages/AddUser.vue'//AddUser
import Orders from './pages/Orders.vue'
import NewUsers from './pages/NewUsers.vue'

//import AddItem from './views/AddItem.vue' ItemList AddList


Vue.use(Router)

const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path:'*',
      redirect:'login'
    },
    {
      path:'',
      redirect:'login'
    },
    {
      path: '/login',
      name: 'Login',
      component: Login

    },
    {
      path: '/signup',
      name: 'SignUp',
      component: SignUp

    },
    {
      path: '/home',
      name: 'Home',
      component: Home,
      meta : {
        requiresAuth :true,
      },
      children:[
        {
          path: "overview",
          name: "overview",
          component: Overview,
          meta : {
            requiresAuth :true,
          },
        },
        {
          path: "products",
          name: "products",
          component: Products,
          meta : {
            requiresAuth :true,
          },
        },
        {
          path: "profile",
          name: "profile",
          component: Profile,
          meta : {
            requiresAuth :true,
          },
        },
        {
          path: "userlist",
          name: "userlist",
          component: UserList,
          meta : {
            requiresAuth :true,
          },
        },
        {
          path: "adduser",
          name: "adduser",
          component: AddUser,
          meta : {
            requiresAuth :true,
          },
        },
        {
          path: "newusers",
          name: "newusers",
          component: NewUsers,
          meta : {
            requiresAuth :true,
          },
        },
        {
          path: "orders",
          name: "orders",
          component: Orders,
          meta : {
            requiresAuth :true,
          },
        }
      ]
    }
   
  ]
});

// router.beforeEach((to, from, next) => {
//   // ...
//   const currentUser = firebase.auth().currentUser;
//   const requiresAuth = to.matched.some(record => record.meta.requiresAuth);

//   if( requiresAuth && !currentUser) next('login');
//   else if(!requiresAuth && currentUser) next('home');
//   else next();
// });
//  export default router;

export default router 
router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    if (store.getters.isLoggedIn) {
      next()
      return
    }
    next('/login')
  } else {
    next()
  }
})