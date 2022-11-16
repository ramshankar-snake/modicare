// import HomePage from './components/HomePage.vue'
import SignUp from './components/SignUp.vue'
import LoginPage from './components/LoginPage.vue'
// import HomePage from './components/HomePage.vue'
import HelloWorld from './components/HelloWorld.vue'
import Update from './components/UpdateUser.vue'
import CareerPage from './pages/CareerPage.vue'
import OurStory from './pages/OurStory.vue'
import TheVisionary from './pages/TheVisionary.vue'


import { createRouter, createWebHistory } from 'vue-router';

const routes = [
    
    {
        name:'SignUp',
        component:SignUp,
        path:'/sign-up'
    },
    {
        name:'Login',
        component:LoginPage,
        path:'/login'
    },
    {
        name:'Home',
        component:HelloWorld,
        path:'/'
    },
    {
        name:'Update',
        component:Update,
        path:'/Update_User/:id'
    },
    {
        name:'CareerPage',
        component:CareerPage,
        path:'/Career'
    },
    {
        name:'OurStory',
        component:OurStory,
        path:'/our-story'
    },
    {
        name:'TheVisionary',
        component:TheVisionary,
        path:'/the-visionary'
    }
    
];
const router = createRouter({
    history:createWebHistory(),
    routes,
});
export default router;

