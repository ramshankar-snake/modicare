<template>
    <SideMenu></SideMenu>
   
    
    <main class="main-container">
        <section class="tnc">
            <div class="tnc-container modi-container">
                <div class="tnc-section">
                    <h1 class="tnc-section-header">Disclaimer</h1>
    
                    <p>All rights reserved. Neither this website nor any part of it may be downloaded, reproduced, stored, distributed,
                    adapted, translated, or transmitted in any form or by any means or medium, whether now known or hereinafter invented,
                    without prior permission of Modicare.</p>
                    <p>Any breach of this notice would entail severe civil and criminal penalties.</p>
                    <p>Information and content in the website pertains to the Indian operations only. personalize your experience on our site,
                    and they make your visit to our site more convenient for you.</p>
                    <p>Your privacy and security are not compromised when you
                    accept a cookie from our Web site. We do not use cookies to collect personal information. Cookies can't read data from
                    your computer's hard disk or read cookie files from other Web sites. In addition, companies we may hire to evaluate our
                    Web promotions may set cookies to assist with such an evaluation. Again, neither Modicare nor companies acting on our
                    behalf use cookies to collect personal information.</p>
    
                    <router-link to="/privacy-policy" class="icon-after icon-chevronright tnc-section-link">Privacy policy</router-link>
                </div>
            </div>
        </section>
    </main>
</template>


<script>
import SideMenu from '../components/SideMenu.vue';
export default {
    name: 'DisclaimerPage',
    components:{
        SideMenu
    }
}
</script>
