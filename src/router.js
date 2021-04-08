import Vue from 'vue'
import VueRouter from 'vue-router'
import MainMenu from './components/main-menu.vue'
import TaskCard from './components/task-card.vue'
import store from './store'

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'Menu',
        component:  MainMenu
    }, {
        path: '/task/:id',
        name: 'Task',
        component: TaskCard,
        // eslint-disable-next-line no-unused-vars
        beforeEnter: (to, from, next) => {
            if (store.state.tasks[to.params.id]) next()
            else router.replace('/')
        }
    }, {
        path: '*', redirect: '/'
    }
]

const router = new VueRouter({
    mode: 'history',
    routes
})

export default router
