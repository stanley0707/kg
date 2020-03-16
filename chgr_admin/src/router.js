import Vue from 'vue'
import Router from 'vue-router'
import store from './store.js'
import Home from './components/resources/Base.vue'
import Login from './components/auth/Login.vue'
import Accaunt from './components/resources/Accaunt.vue'
import Tags from './components/resources/Tags.vue'
import Register from './components/auth/Register.vue'



Vue.use(Router)

let router = new Router({
    mode: 'history',
    routes: [
    {
        path: '/',
        name: 'home',
        component: Home,
        meta: { 
            requiresAuth: true
        }
    },
    {
        path: '/login',
        name: 'login',
        component: Login
    },
    {
        path: '/register',
        name: 'register',
        component: Register,
        meta: { 
            requiresAuth: true
        }
    },
    {
        path: '/secure',
        name: 'secure',
        component: Accaunt,
        meta: { 
            requiresAuth: true
        }
    },
    {
        path: '/tags',
        name: 'tags',
        component: Tags,
        meta: { 
            requiresAuth: true
        }
    }]
})

router.beforeEach((to, from, next) => {
    if(to.matched.some(record => record.meta.requiresAuth)) {
        if (store.getters.isLoggedIn) {
            next()
            return
        }
        
        next('/login')
    } else {

        next()
    }
})

export default router

