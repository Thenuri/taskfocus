import { createRouter, createWebHistory } from 'vue-router'
import {getAuth , onAuthStateChanged} from 'firebase/auth'
import Home from '../views/Home.vue'
import Login from '../views/Login.vue'
import Signup from '../views/Signup.vue'
import Dashboard from '../views/Dashboard.vue'
import Task from '../views/Task.vue'
import Timer from '../views/Timer.vue'
import Settings from '../views/Settings.vue'


const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/Login',
    name: 'login',
    component: Login

    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    // component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')

  },
  {
    path: '/Signup',
    name: 'signup',
    component: Signup
  },
  {
    path:'/Task',
    name: 'task',
    component: Task,

  },
  {
    path:'/Timer',
    name: 'timer',
    component: Timer,
  },
  {
    path: '/Dashboard',
    name: 'dashboard',
    component: Dashboard,
    meta: {
      requiresAuth: true,
    },
  },
  {
    path:'/Settings',
    name: 'settings',
    component: Settings,
  }

]
const router = createRouter({
  history: createWebHistory(),
  routes
});

const getCurrentUser = () => {
  return new Promise((resolve, reject) => {
    const removeListener = onAuthStateChanged(
      getAuth(), 
      (user) => {
      removeListener();
      resolve(user);
    }, 
    reject
    );
  });
};
router.beforeEach(async(to, from, next) => {
  if(to.matched.some((record) => record.meta.requiresAuth)){
    if(await getCurrentUser()){
      next();
    }else{
      alert('You must be logged in to see this page');
      next("/");
    }
  }else{
    next();
  }
});

export default router
