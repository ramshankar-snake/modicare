import { createApp } from 'vue'
import App from './App.vue'
import router from './router.js'

import './assets/css/app.css'
// import './assets/css/app.css.map'
import './assets/css/bootstrap-select.min.css'
import './assets/icons/material-icons.css'

import './assets/css/daterangepicker.css'
// import './assets/css/jquery.fancybox.css'
import './assets/css/jquery.fancybox.min.css'
import './assets/css/swiper-bundle.min.css'



<>
<component is="script" src="./assets/js/jquery.js" ></component>
<component is="script" src="./assets/js/index.js" ></component>
<component is="script" src="./assets/js/jquery.min.js" ></component>

<component is="script" src="./assets/js/bootstrap.min.js" ></component>
<component is="script" src="./assets/js/mdb.min.js" ></component>
<component is="script" src="./assets/js/moment.min.js" ></component>
<component is="script" src="./assets/js/swiper-bundle.min.js" ></component>

<component is="script" src="./assets/js/bootstrap-select.js" ></component>
<component is="script" src="./assets/js/jquery.fancybox.min.js" ></component>
<component is="script" src="./assets/js/daterangepicker.js" ></component>

<component is="script" src="./assets/js/app.js" ></component>
<component is="script" src="./assets/js/main.js" ></component>
<component is="script" src="./assets/js/index.js" ></component>
</>

createApp(App).use(router).mount('#app')