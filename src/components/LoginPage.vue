<template>
<div class="login-form">
    <form>
        <h2 class="text-center">Log in</h2>       
        <div class="form-group">
            <input type="text" class="form-control" placeholder="Enter email" v-model="email">
        </div><br>
        <div class="form-group">
            <input type="password" class="form-control" placeholder="Enter Password" v-model="password">
        </div><br>
        <div class="form-group">
            <button type="button" class="btn btn-primary btn-block" @click="userLogin()">Log in</button>
        </div><br>
        <div class="clearfix">
            <!-- <label class="float-left form-check-label"><input type="checkbox"> Remember me</label> -->
            <a href="/sign-up" class="float-right">SignUp</a>
        </div>        
    </form>
    <p class="text-center"><a href="#">Create an Account</a></p>
</div>
</template>

<script>
    import axios from 'axios'
export default {
    name:"LoginPage",
    data(){
        return {
            email:'',
            password:''
            
        }
    },
    methods:{
        async userLogin() {
            let result = await axios.get(`http://localhost:3000/users?email=${this.email}&password=${this.password}`);
            if(result.status==200 && result.data.length>0) {
                localStorage.setItem("user-data", JSON.stringify(result.data));
                this.$router.push({name:'Home'});
                // alert('Logged in')

            }else{
                // this.$router.push({name:"sign-up"});
                alert('Wrong Credentials')
            }
        }
    }
}

</script>

<style>
    .login-form {
        width: 340px;
        margin: 50px auto;
          font-size: 15px;
    }
    .login-form form {
        margin-bottom: 15px;
        background: #f7f7f7;
        box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.3);
        padding: 30px;
    }
    .login-form h2 {
        margin: 0 0 15px;
    }
    .form-control, .btn {
        min-height: 38px;
        border-radius: 2px;
    }
    .btn {        
        font-size: 15px;
        font-weight: bold;
    }
</style>