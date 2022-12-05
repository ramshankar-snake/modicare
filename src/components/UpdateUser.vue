<template>

    <div class="login-form">
        <form action="/examples/actions/confirmation.php" method="post">
            <h2 class="text-center">Update User</h2>       
            <div class="form-group">
                <input type="text" class="form-control" placeholder="Name" required="required" v-model="user.name">
            </div><br>
            <div class="form-group">
                <input type="email" class="form-control" placeholder="Email" required="required" v-model="user.email">
            </div>
            <br>
            <div class="form-group">
                <input type="password" class="form-control" placeholder="Password" required="required" v-model="user.password">
            </div><br>
            <div class="form-group">
                <button type="button" @click="Update" class="btn btn-primary btn-block">Update</button>
            </div><br>
                 
        </form>
       
    </div>
    </template>
    <script>
        import axios from "axios"
        export default {
            data(){
                return{
                    user:{
                        name:'',
                        email:'',
                        password:''
                    }
                }
            },
            methods:{
                    async Update(){
                        let id = this.$route.params.id;
                   let result =  await axios.put("http://localhost:3000/users/"+id,{
                    
                            name:this.user.name,
                            email:this.user.email,
                            password:this.user.password
                    });
                    console.log(result);
                    if(result.status == 200){
                        this.$router.push({name:"Home"});
                    }

                }
            },
            async mounted(){
                let id = this.$route.params.id;
            let result = await axios.get("http://localhost:3000/users/"+id);
            if(result.status==200) {
                this.user = result.data;
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