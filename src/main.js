import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import App from './App.vue'
import routes from '~pages'
import './styles/index.css'

const router = createRouter({
    history: createWebHistory(),
    routes
})

router.beforeEach((to, from, next) => {
    console.log(to, from)
    if (to.name !== 'index' && !false){
        next({ name: 'index' })
    }
    else{
        next()
    }
})

createApp(App)
    .use(router)
    .mount('#app')
