// import HomePage from './components/HomePage.vue'
import SignUp from './components/SignUp.vue'
import LoginPage from './components/LoginPage.vue'
// import HomePage from './components/HomePage.vue'
import HelloWorld from './components/HelloWorld.vue'
import Update from './components/UpdateUser.vue'
import CareerPage from './pages/CareerPage.vue'
import OurStory from './pages/OurStory.vue'
import TheVisionary from './pages/TheVisionary.vue'
import SuccessStories from './pages/SuccessStories.vue'
import EventsPage from './pages/EventsPage.vue'
import ContactUs from './pages/ContactUs.vue'
import SignIn from './pages/SignIn.vue'
import RegisterType from './pages/RegisterType.vue'
import RegisterForm from './pages/RegisterForm.vue'
import JoinUs from './pages/JoinUs.vue'
import TermsConditions from './pages/TermsConditions.vue'
import ForgotPassword from './pages/ForgotPassword.vue'
import ForgotPasswordConfirmation from './pages/ForgotPasswordConfirmation.vue'
import ProductListing from './pages/ProductListing.vue'


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
    },
    {
        name:'SuccessStories',
        component:SuccessStories,
        path:'/achievers'
    },
    {
        name:'EventsPage',
        component:EventsPage,
        path:'/events'
    },
    {
        name:'ContactUs',
        component:ContactUs,
        path:'/contact-us'
    },
    {
        name:'SignIn',
        component:SignIn,
        path:'/sign-in'
    },
    {
        name:'RegisterType',
        component:RegisterType,
        path:'/register-registration-type'
    },
    {
        name:'RegistRegisterFormerType',
        component:RegisterForm,
        path:'/register-form'
    },
    {
        name:'JoinUs',
        component:JoinUs,
        path:'/join-us-2-sponsoring'
    },
    {
        name:'TermsConditions',
        component:TermsConditions,
        path:'/terms-and-conditions'
    },
    {
        name:'ForgotPassword',
        component:ForgotPassword,
        path:'/forgot-password'
    },
    {
        name:'ForgotPasswordConfirmation',
        component:ForgotPasswordConfirmation,
        path:'/forgot-password-confirmation'
    },
    {
        name:'ProductListing',
        component:ProductListing,
        path:'/product-listing'
    },
];
const router = createRouter({
    history:createWebHistory(),
    routes,
});
export default router;

