<template>

<SideMenu></SideMenu>

<main class="main-container">

    <div class="sticky-social-buttons">
        <div class="sticky-social-buttons-container">
            <a href="javascript:;" class="sticky-social-button waves-effect"><img src="@/assets/images/icons/icon-facebook.svg" class="sticky-social-button-icon" alt="Modicare Facebook" loading="lazy" /></a>
            <a href="javascript:;" class="sticky-social-button waves-effect"><img src="@/assets/images/icons/icon-youtube.svg" class="sticky-social-button-icon" alt="Modicare YouTube" loading="lazy" /></a>
            <a href="javascript:;" class="sticky-social-button waves-effect"><img src="@/assets/images/icons/icon-instagram.svg" class="sticky-social-button-icon" alt="Modicare Instagram " loading="lazy" /></a>
        </div>
    </div>

    <section class="contact-us">
        <div class="contact-us-container modi-container">
            <div class="contact-us-help" style="padding: 70px 0;margin-top: 0px;">
                <h1 class="contact-us-help-title">How may we help you?</h1>
                <h3 class="contact-us-help-sub-title">Always here to help</h3>
                <div class="contact-us-cards-container">
                    <div class="contact-us-card">
                        <a href="javascript:;" class="contact-us-card-link">
                            <img src='@/assets/images/icons/icon-chat-primary.svg' class="contact-us-card-icon" style="width: 80px;height: 80px;margin: auto;" />
                            <div class="contact-us-card-text">Chat with Roshini</div>
                        </a>
                    </div>
                    <div class="contact-us-card">
                         <a href="tel:180030012999" class="contact-us-card-link">
                            <img src='@/assets/images/icons/icon-telephone-primary.svg' class="contact-us-card-icon" style="width: 80px;height: 80px;margin: auto;"/>
                            <div class="contact-us-card-text">Talk to us</div>
                         </a>
                    </div>
                    <div class="contact-us-card">
                         <a href="mailto:support-modicare@modi.com" class="contact-us-card-link">
                            <img src='@/assets/images/icons/icon-envelope-primary.svg' class="contact-us-card-icon" style="width: 80px;height: 80px;margin: auto;"/>
                            <div class="contact-us-card-text">Write to us</div>
                         </a>
                    </div>
                </div>
            </div>
        </div>

        <div class="contact-us-container">
            <div class="contact-us-form">
                <div class="contact-us-form-inner modi-container">

                    <div class="contact-us-form-left">
                        <h2 class="contact-us-form-left-title">Want to know more about the opportunity?</h2>
                        <div class="contact-us-form-left-text">Send us your details and we'll help you with your queries and steps to begin a new way of life.</div>
                        <a href="javascript:;" class="icon-after icon-chevronright">Business oppurtunity</a>
                    </div>
                    <div class="contact-us-form-right">
                        <div class="contact-us-form-container">
                            <div class="modi-form modi-form__secondary">
                                <div class="md-form">
                                    <input type="text" id="form-name" name="form-name" class="form-control" />
                                    <label for="form-name">Name</label>
                                </div>
                    
                                <div class="md-form">
                                    <input type="text" id="form-email" name="form-email" class="form-control" />
                                    <label for="form-email">Email</label>
                                </div>
                    
                                <div class="md-form">
                                    <input type="text" id="form-phone" name="form-phone" class="form-control" />
                                    <label for="form-phone">Phone</label>
                                </div>
                    
                                <div class="md-form">
                                    <input type="text" id="form-location" name="form-location" class="form-control" />
                                    <label for="form-location">Location</label>
                                </div>
                    
                                <input class="contact-us-form-btn btn modi-btn modi-btn__primary px-5" type="submit" value="Send" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="contact-us-container">
            <div class="contact-us-footer">
                <div class="contact-us-footer-inner modi-container">
                    <div class="contact-us-footer-left">
                        <div class="contact-us-footer-left-title">Head Office, India</div>
                        <div class="contact-us-footer-left-text">Modicare Limited 5,<br>Community Center,<br> New Friends Colony,<br> New Delhi, Pin - 110025</div>
                    </div>
                    <div class="contact-us-footer-right">
                        <div class="contact-us-footer-right-title">All-India Toll Free Number</div>
                        <div class="contact-us-footer-right-text">
                            <a href="tel:180030012999" class="font-regular text-black text-decoration-none">180030012999</a><br>
                            (10AM-10PM)<br>
                        </div>
                        <div class="contact-us-footer-right-title">Email</div>
                        <div class="contact-us-footer-right-text">
                            <a href="mailto:support-modicare@modi.com" class="font-regular text-black text-decoration-none">support-modicare@modi.com</a><br>
                            <a href="mailto:grievance-modicare@modi.com" class="font-regular text-black text-decoration-none">grievance-modicare@modi.com</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</main>
</template>

<script>
 
    import SideMenu from '../components/SideMenu.vue';
export default {
    name: 'ContactUs',
    components: {
      
        SideMenu,
      },
}
</script>