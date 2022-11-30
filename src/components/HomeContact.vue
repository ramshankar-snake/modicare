<template>
    <section class="home-contact-us">
        <div class="home-contact-us-container">
            <div class="col-12">
                <div class="col-md-6 mx-auto d-flex justify-content-center align-items-center">
                    <div class="home-contact-us-text-container">
                        <h1 class="mb-4">Drop us a note</h1>
                        <p>Send us your details and we'll help you with your queries and steps to begin a new way of life</p>
                    </div>
                </div>
    
                <div class="home-contact-us-form-container">
                    <div class="modi-form">
                        <div class="home-contact-us-type-toggle-container">
                            <div class="home-contact-us-type active" id="home-contact-us-type-shopping">
                                Shopping
                            </div>
                            <input type="checkbox" name="type"  id="home-contact-us-type-toggle">
                            <label for="home-contact-us-type-toggle"></label>
                            <div class="home-contact-us-type" id="home-contact-us-type-business-opportunity">
                                Business Opportunity
                            </div>
                        </div>
                        <div class="modi-form-row modi-form-row__1-1">
                            <div class="md-form">
                                <input type="text" id="form-name" name="name" v-model="name" class="form-control" />
                                <label for="form-name">Name</label>
                            </div>
    
                            <div class="md-form">
                                <input type="text" id="form-phone" name="mobile" v-model="mobile" class="form-control" />
                                <label for="form-phone">Phone</label>
                            </div>
                        </div>
    
                        <div class="modi-form-row modi-form-row__1-1">
                            <div class="md-form">
                                <input type="email" id="form-email" name="email" v-model="email" class="form-control" />
                                <label for="form-email">Email</label>
                            </div>
    
                            <div class="md-form">
                                <input type="text" id="form-location" name="location" v-model="location" class="form-control" />
                                <label for="form-location">Location</label>
                            </div>
                        </div>
    
                        <input class="home-contact-us-btn btn modi-btn modi-btn__primary px-5" type="submit" @click="submit()" value="Send" />
    
                        <div class="modi-form-checkbox-container modi-form-checkbox-container__px mt-4">
                            <label for="form-checkbox-1">
                                <input type="checkbox" id="form-checkbox-1" name="form-checkbox-1" class="" />
                                <div class="modi-form-checkbox"></div>
                                <div class="modi-form-checkbox-title">
                                    I agree to the <a href="./privacy.policy.html" target="_blank">privacy policy</a>
                                </div>
                            </label>
                        </div>
                    </div>
                </div>
    
                <div class="home-contact-us-social-container">
                    <div class="home-contact-us-text-container">
                        <h1 class="mb-4">Stay In Touch</h1>
    
                        <div class="home-contact-us-social-links">
                            <a href="javascript:;" class="home-contact-us-social-link">
                                <img src="@/assets/images/home/btn-instagram.png" alt="Modicare Instagram" />
                            </a>
                            <a href="javascript:;" class="home-contact-us-social-link">
                                <img src="@/assets/images/home/btn-facebook.png" alt="Modicare Facebook" />
                            </a>
                            <a href="javascript:;" class="home-contact-us-social-link">
                                <img src="@/assets/images/home/btn-youtube.png" alt="Modicare YouTube" />
                            </a>
                            <a href="javascript:;" class="home-contact-us-social-link">
                                <img src="@/assets/images/home/btn-linkedin.png" alt="Modicare Linkedin" />
                            </a>
                        </div>
    
                        <a href="./contact-us.html" class="join-us-confirmation-button btn modi-btn modi-btn__primary">Contact us</a>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>
<script>
import axios from "axios";
export default {
    name: 'GuranTee',
    data(){
                return{
                name:'',
                email:'',
                mobile:'',
                location:''
                }
            },
            methods:{
                    async submit(){
                     await axios.post("https://uat-api.modicare.com/api/app/prelogin/enquiry",{
                            name:this.name,
                            email:this.email,
                            mobile:this.mobile,
                            location:this.location
                    });
                    
                        // this.$router.push({name:"Login"});
                   

                }
            },
}
</script>