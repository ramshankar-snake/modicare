// import HomePage from './components/HomePage.vue'
import SignUp from './components/SignUp.vue'
import LoginPage from './components/LoginPage.vue'
// import HomePage from './components/HomePage.vue'
import HelloWorld from './components/HelloWorld.vue'

import CareerPage from './pages/CareerPage.vue'
import OurStory from './pages/OurStory.vue'
import TheVisionary from './pages/TheVisionary.vue'
import SuccessStories from './pages/SuccessStories.vue'
import EventsPage from './pages/EventsPage.vue'
import EventGallery from './pages/EventGallery.vue'
import ContactUs from './pages/ContactUs.vue'
import SignIn from './pages/SignIn.vue'
import RegisterType from './pages/RegisterType.vue'
import RegisterForm from './pages/RegisterForm.vue'
import RegisterForm2 from './pages/RegisterForm2.vue'
import RegisterForm3 from './pages/RegisterForm3.vue'
import RegisterConfirmation from './pages/RegisterConfirmation.vue'
import JoinUs from './pages/JoinUs.vue'
import Joinus2Personaldetails from './pages/Joinus2Personaldetails.vue'
import Joinus2Coapplicant from './pages/Joinus2Coapplicant.vue'
import Joinus2Addresscontact from './pages/Joinus2Addresscontact.vue'
import Joinus2Bankdetails from './pages/Joinus2Bankdetails.vue'
import Joinus2Confirmation from './pages/Joinus2Confirmation.vue'
import AchieversArticle from './pages/AchieversArticle.vue'

import TermsConditions from './pages/TermsConditions.vue'
import ForgotPassword from './pages/ForgotPassword.vue'
import ForgotPasswordConfirmation from './pages/ForgotPasswordConfirmation.vue'
import ProductListing from './pages/ProductListing.vue'
import ProductDetails from './pages/ProductDetails.vue'
import DisclaimerPage from './pages/DisclaimerPage.vue'
import PrivacyPolicy from './pages/PrivacyPolicy.vue'
import PoliciesCompliance from './pages/PoliciesCompliance.vue'
import ConsultantLocator from './pages/ConsultantLocator.vue'
import CataloguePage from './pages/CataloguePage.vue'


import IndexPage from './pages/post/IndexPage.vue'
import MyInfo from './pages/MyInfo.vue'
import MyOrders from './pages/MyOrders.vue'


import { createRouter, createWebHistory } from 'vue-router';

const routes = [

    {
        name: 'SignUp',
        component: SignUp,
        meta: { layout: 'PreLayout' },
        path: '/sign-up'
    },
    {
        name: 'Login',
        component: LoginPage,
        meta: { layout: 'PreLayout' },
        path: '/login'
    },
    {
        name: 'Home',
        component: HelloWorld,
         meta: { layout: 'PreLayout' },
        path: '/'
    },
    {
        name: 'CareerPage',
        component: CareerPage,
         meta: { layout: 'PreLayout' },
        path: '/Career'
    },
    {
        name: 'OurStory',
        component: OurStory,
         meta: { layout: 'PreLayout' },
        path: '/our-story'
    },
    {
        name: 'TheVisionary',
        component: TheVisionary,
         meta: { layout: 'PreLayout' },
        path: '/the-visionary'
    },
    {
        name: 'SuccessStories',
        component: SuccessStories,
         meta: { layout: 'PreLayout' },
        path: '/achievers'
    },
    {
        name: 'EventsPage',
        component: EventsPage,
         meta: { layout: 'PreLayout' },
        path: '/events'
    },
    {
        name: 'EventGallery',
        component: EventGallery,
         meta: { layout: 'PreLayout' },
        path: '/event-gallery'
    },
    {
        name: 'ContactUs',
        component: ContactUs,
         meta: { layout: 'PreLayout' },
        path: '/contact-us'
    },
    {
        name: 'SignIn',
        component: SignIn,
         meta: { layout: 'PreLayout' },
        path: '/sign-in'
    },
    {
        name: 'RegisterType',
        component: RegisterType,
         meta: { layout: 'PreLayout' },
        path: '/register-registration-type'
    },
    {
        name: 'RegistRegisterFormerType',
        component: RegisterForm,
         meta: { layout: 'PreLayout' },
        path: '/register-form'
    },
    {
        name: 'RegisterForm2',
        component: RegisterForm2,
         meta: { layout: 'PreLayout' },
        path: '/register-form-2'
    },
    {
        name: 'RegisterForm3',
        component: RegisterForm3,
         meta: { layout: 'PreLayout' },
        path: '/register-form-3'
    },
    {
        name: 'RegisterConfirmation',
        component: RegisterConfirmation,
         meta: { layout: 'PreLayout' },
        path: '/register-confirmation'
    },
    {
        name: 'JoinUs',
        component: JoinUs,
         meta: { layout: 'PreLayout' },
        path: '/join-us-2-sponsoring'
    },
    {
        name: 'Joinus2Personaldetails',
        component: Joinus2Personaldetails,
         meta: { layout: 'PreLayout' },
        path: '/join-us-2-personal-details'
    },
    {
        name: 'Joinus2Coapplicant',
        component: Joinus2Coapplicant,
         meta: { layout: 'PreLayout' },
        path: '/join-us-2-co-applicant'
    },
    {
        name: 'Joinus2Addresscontact',
        component: Joinus2Addresscontact,
         meta: { layout: 'PreLayout' },
        path: '/join-us-2-address-contact'
    },
    {
        name: 'Joinus2Bankdetails',
        component: Joinus2Bankdetails,
         meta: { layout: 'PreLayout' },
        path: '/join-us-2-bank-details'
    },
    {
        name: 'Joinus2Confirmation',
        component: Joinus2Confirmation,
         meta: { layout: 'PreLayout' },
        path: '/join-us-2-confirmation'
    },
    {
        name: 'TermsConditions',
        component: TermsConditions,
         meta: { layout: 'PreLayout' },
        path: '/terms-and-conditions'
    },
    {
        name: 'ForgotPassword',
        component: ForgotPassword,
         meta: { layout: 'PreLayout' },
        path: '/forgot-password'
    },
    {
        name: 'ForgotPasswordConfirmation',
        component: ForgotPasswordConfirmation,
         meta: { layout: 'PreLayout' },
        path: '/forgot-password-confirmation'
    },
    {
        name: 'ProductListing',
        component: ProductListing,
         meta: { layout: 'PreLayout' },
        path: '/products/:category',
        props: true
    },
    {
        name: 'ProductDetails',
        component: ProductDetails,
         meta: { layout: 'PreLayout' },
        path: '/product/details/:id'
    },
    {
        name: 'DisclaimerPage',
        component: DisclaimerPage,
         meta: { layout: 'PreLayout' },
        path: '/disclaimer'
    },
    {
        name: 'PrivacyPolicy',
        component: PrivacyPolicy,
         meta: { layout: 'PreLayout' },
        path: '/privacy-policy'
    },
    {
        name: 'PoliciesCompliance',
        component: PoliciesCompliance,
         meta: { layout: 'PreLayout' },
        path: '/policy-compliance'
    },
    {
        name: 'ConsultantLocator',
        component: ConsultantLocator,
         meta: { layout: 'PreLayout' },
        path: '/consultant-locator'
    },
    {
        name: 'CataloguePage',
        component: CataloguePage,
         meta: { layout: 'PreLayout' },
        path: '/catalogues'
    },
    {
        name: 'AchieversArticle',
        component: AchieversArticle,
         meta: { layout: 'PreLayout' },
        path: '/achievers-article'
    },

    {
        name: 'IndexPage',
        component: IndexPage,
        meta: { layout: 'Post-layout' },
        path: '/post/index'
    },
    {
        name: 'MyInfo',
        component: MyInfo,
        meta: { layout: 'Post-layout' },
        path: '/post/my-info'
    },
    {
        name: 'MyOrders',
        component: MyOrders,
        meta: { layout: 'Post-layout' },
        path: '/post/my-orders'
    },
    {
        path: "/pre2",
        component: IndexPage,
        name: "pre2"
    },


    {
        name: 'PostCareerPage',
        component: CareerPage,
        meta: { layout: 'PostLayout' },
        path: '/post/Career'
    },
    {
        name: 'PostOurStory',
        component: OurStory,
        meta: { layout: 'PostLayout' }, 
        path: '/post/our-story'
    },
    {
        name: 'PostTheVisionary',
        component: TheVisionary,
        meta: { layout: 'PostLayout' }, path: '/post/the-visionary'
    },
    {
        name: 'PostSuccessStories',
        component: SuccessStories,
        meta: { layout: 'PostLayout' },
        path: '/post/achievers'
    },
    {
        name: 'PostEventsPage',
        component: EventsPage,

        meta: { layout: 'PostLayout' }, path: '/post/events'
    },
    {
        name: 'PostContactUs',
        component: ContactUs,

        meta: { layout: 'Post-layout' }, path: '/post/contact-us'
    },
    {
        name: 'PostTermsConditions',
        component: TermsConditions,
         meta: { layout: 'PostLayout' },
        path: '/post/terms-and-conditions'
    },
  
];
const router = createRouter({
    history: createWebHistory(),
    routes,
    scrollBehavior(to, from, savedPosition) {
        // always scroll to top
        return { top: 0 }
      },
});
export default router;

