import Vue from 'vue';
import VueRouter from 'vue-router';
import Vuex from 'vuex';
import App from './app.vue';
import VueBus from './vue-bus';
import './style.css';


Vue.use(VueRouter);
Vue.use(Vuex);
Vue.use(VueBus);
const Routers =[
    {
        path:'/index',
        meta:{
            title:'首页'
        },
        component:(resolve) => require(['./views/index.vue'],resolve)
    },
    {
        path:'/about',
        meta:{
            title:'关于'
        },
        component:(resolve) => require(['./views/about.vue'],resolve)
    },
    {
        path:'/user/:id',
        meta:{
          title:'个人主页'
        },
        component:(resolve) => require(['./views/user.vue'],resolve)
    },
    {
        path:'*',
        redirect:'/index'
    }
];
const RouterConfig ={
    mode:'history',
    routes:Routers
};
const router = new VueRouter(RouterConfig);
router.beforeEach((to,from,next) => {
    window.document.title = to.meta.title;
    next();
});
const store = new Vuex.Store({
    //vuex的配置

});
new Vue({
    el: '#app',
    router:router,
    //使用vuex
    store:store,
    render: h => {
        return h(App)
    }
});