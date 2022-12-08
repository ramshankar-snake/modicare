<template>
    <div class="login-form">
        <form action="/examples/actions/confirmation.php" method="post">
            <h2 class="text-center">SignUp</h2>       
            <div class="form-group">
                <input type="text" class="form-control" placeholder="Name" required="required" v-model="name">
            </div><br>
            <div class="form-group">
                <input type="email" class="form-control" placeholder="Email" required="required" v-model="email">
            </div>
            <br>
            <div class="form-group">
                <input type="password" class="form-control" placeholder="Password" required="required" v-model="password">
            </div><br>
            <div class="form-group">
                <button type="button" @click="signUp" class="btn btn-primary btn-block">SignUp</button>
            </div><br>
            <div class="clearfix">
                <label class="float-left form-check-label"> Already have an account </label>
                <a href="/sign-up" class="float-right">Login</a>
            </div>        
        </form>
       
    </div>
    </template>
    <script>
        import axios from "axios"
        export default {
            data(){
                return{
                name:'',
                email:'',
                password:''
                }
            },
            methods:{
                    async signUp(){
                     await axios.post("http://localhost:3000/users",{
                            name:this.name,
                            email:this.email,
                            password:this.password
                    });
                    
                        this.$router.push({name:"Login"});
                   

                }
            },
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