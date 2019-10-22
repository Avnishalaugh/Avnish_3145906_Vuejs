<template>
 <div>
 <div class="header">
    <img src="https://www.nagarro.com/hubfs/Nagarro-March2018-Theme/Images/nagarro-logo-2018-3.svg" width=130px height=50px alt="logo.png"/>
    <p class="title">Nagarro Discussion Portal</p>
  </div>
    <navigation></navigation>
  <div class="main-header">
    <div class="container">
      <h1>WELCOME TO NAGARRO PORTAL</h1> 
    </div>
  </div>
  <br/>

    <div class="main-body">
    <div class="login-container">
        <div class="modal-body"> 
            
            <div class="text-center"><h4 class="modal-title">Sign Up</h4></div>
             <ul class="error-messages" v-if="errors.length">
                <li v-for="error in errors" :key="error.username">{{error}}</li>
             </ul>
            <form>
            <div class="form-group">
			
			  <img class="pos" width=25px src="">
                  <input v-model="username" placeholder="Username" class="form-control textbox" type="text" autocomplete="off">
               
                </div>
				<div class="form-group">
                <img class="pos" width=25px src="">
                  <input v-model="email" placeholder="Email id" class="form-control textbox"  type="text" autocomplete="off">
                </div>
    
            <div class="form-group">
              <img class="pos1" width=30px src="">
              <input v-model="password" placeholder="Password" class="form-control textbox" type="password" autocomplete="off">
            </div>
              
            <div class="form-group">
            <button @click="register" class="btn btn-default btn-block btn-secondary" >Register</button>
          </div>
          </form>
        </div>
      </div>
    </div>
    <div class="footer border background">
    <div class="mL100"><p class="copyright">Copyright 2014 Nagarro Softwares Pvt Ltd  |  All rights reserved</p></div>
    <div class="align">
        Powered By <span class="logo"><img width=40px src="data:image/jpeg;base64,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" alt="Nagarro"></span>
      </div>
   </div>
 </div>
</template>

<script>
import router from '../router';
import Navigation from "@/components/Navigation.vue";

export default {
    components: {
        Navigation
    },
    data: function(){
        return {
            username: "",
            password: "",
            email: "",
            errors: []
        };
    },
    methods: {
        register() {
            this.$store.dispatch("users/registerUser", {
            username : this.username,
            email : this.email,
            password : this.password
            })
             .then(() => {
                   router.push({ name: "login" });
                 this.errors=[];
             })
             .catch( err => this.errors.push(err))
           }
    }
};
</script>
<style>
.main-body{
    width:100%;
    font-size: 14px;
    line-height: 1.42857143;
    font-family: robotoregular;
    margin:0px;
}

.header{
    position: absolute;
    left:190px;
    top:15px;
    float: left;
    height:90px;
}

.header p{
    margin:0px;
    float: right;
    text-align: right;
    position: relative;
    left: 800px;
    color:#fcb043   ;
    font-family: robotoregular;
    font-size: 21px;
    display: block;
    margin-block-start: 1em;
    margin-block-end: 1em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
    
  }
  
.main-header{
    height:90px;
    background: #105d98;
    position: relative;
    top: 50px;
}

.main-header .container{
    background: url(https://cas.nagarro.com/images/bg1.png) no-repeat center top;
    padding: 0;
    box-sizing: border-box;
    text-align: center;
    height: 100%;
    width: 1170px;
    margin-right: auto;
    margin-left: auto; 
}

.container h1{
    padding: 0px 120px;
    color: #fff;
    margin-top: 25px;
    font-size: 35px;
    position: relative;
    display: inline-block;
    text-align: center;
    line-height: 1;
    font-family: 'roboto-thin';
    margin-bottom: 10px;
    font-weight: 500;
}

.main-header h1:before{
    position: absolute;
    content: '';
    background: #67a0c5;
    height: 1px;
    width: 100px;
    left:10px;
    top: 22px;
}

.main-header h1:after {
    position: absolute;
    content: '';
    background: #67a0c5;
    right: 10px;
    height: 1px;
    width: 100px;
    top: 22px;
}

.login-container{
margin-bottom: 100px;
margin-top: 140px;
max-width: 430px;
margin-right: auto;
margin-left: auto;
border: 1px solid black;
-moz-box-shadow: -5px 3px 14px -1px rgba(0,0,0,0.58);
box-shadow: -5px 3px 14px -1px rgba(0,0,0,0.58);
}

.text-center {
    text-align: center;
}


.textbox {
    padding-left: 30px;
}

.btn-secondary {
    background: #fcb043;
    color: #fff;
    text-align: center;
    font-size: 18px;
    border:0px;
    margin-top: 15px;
}

.modal-title {
    padding: 0px 60px;
    color: #fcb043;
    font-size: 24px;
    position: relative;
    display: inline-block;
    text-align: center;
    line-height: 24px;
}

.modal-title:before {
    left: 0px;
}

.modal-title:before, .modal-title:after {
    position: absolute;
    content: '';
    background: #fcb043;
    height: 1px;
    width: 50px;
    top: 13px;
}

.modal-title:after {
    right: 0px;
}

.modal-title:before, .modal-title:after {
    position: absolute;
    content: '';
    background: #fcb043;
    height: 1px;
    width: 50px;
    top: 13px;
}

.form-group {
    margin-bottom: 0rem; 
}

.pos{
position: relative;
left: 4px;
bottom: -32px;
}

.pos1{
    position: relative;
    left: 2px;
    bottom: -35px;
    }

    .main-body{
    width:100%;
    font-size: 14px;
    line-height: 1.42857143;
    font-family: robotoregular;
    margin:0px;
}

.header{
    position: absolute;
    left:190px;
    top:15px;
    float: left;
    height:90px;
}

.header p{
    margin:0px;
    float: right;
    text-align: right;
    position: relative;
    left: 800px;
    color:#fcb043   ;
    font-family: robotoregular;
    font-size: 21px;
    display: block;
    margin-block-start: 1em;
    margin-block-end: 1em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
    
  }
  
.main-header{
    height:90px;
    background: #105d98;
    position: relative;
    top: 50px;
}

.main-header .container{
    background: url(https://cas.nagarro.com/images/bg1.png) no-repeat center top;
    padding: 0;
    box-sizing: border-box;
    text-align: center;
    height: 100%;
    width: 1170px;
    margin-right: auto;
    margin-left: auto; 
}

.container h1{
    padding: 0px 120px;
    color: #fff;
    margin-top: 25px;
    font-size: 35px;
    position: relative;
    display: inline-block;
    text-align: center;
    line-height: 1;
    font-family: 'roboto-thin';
    margin-bottom: 10px;
    font-weight: 500;
}

.main-header h1:before{
    position: absolute;
    content: '';
    background: #67a0c5;
    height: 1px;
    width: 100px;
    left:10px;
    top: 22px;
}

.main-header h1:after {
    position: absolute;
    content: '';
    background: #67a0c5;
    right: 10px;
    height: 1px;
    width: 100px;
    top: 22px;
}

.login-container{
position: relative;
top: 5px;
max-width: 430px;
padding-right: 15px;
padding-left: 15px;
margin-right: auto;
margin-left: auto;
border: 1px solid black;
}

.text-center {
    text-align: center;
    margin-top: 20px;
}

.form-group {
    margin-right: -15px;
    margin-left: -15px;
    position: relative;
    margin: 5px;
    margin-bottom: 15px;
}


.textbox {
    padding-left: 30px;
}

.form-control {
    box-shadow: 0 0 0 #fff;
}
.form-control {
    display: block;
    width: 99%;
    height: 30px;
    padding: 6px 12px;
    font-size: 14px;
    line-height: 1.42857143;
    color: #555;
    background-color: #fff;
    background-image: none;
    border: 1px solid #ccc;
}

.form-group .form-control {
    border-radius: 0;
}

input[type=submit].btn-block, input[type=reset].btn-block, input[type=button].btn-block {
    width: 100%;
}
button, html input[type=button], input[type=reset], input[type=submit] {
    -webkit-appearance: button;
    cursor: pointer;
    height: 40px;
}
.btn-secondary {
    background: #fcb043;
    color: #fff;
    text-align: center;
    font-size: 18px;
    border:0px;
}

.modal-title {
    padding: 0px 60px;
    margin: 0 0 20px;
    color: #fcb043;
    font-size: 24px;
    position: relative;
    display: inline-block;
    text-align: center;
    line-height: 24px;
}

.modal-title:before {
    left: 0px;
}

.modal-title:before, .modal-title:after {
    position: absolute;
    content: '';
    background: #fcb043;
    height: 1px;
    width: 50px;
    top: 13px;
}

.modal-title:after {
    right: 0px;
}

.modal-title:before, .modal-title:after {
    position: absolute;
    content: '';
    background: #fcb043;
    height: 1px;
    width: 50px;
    top: 13px;
}

.footer{
    width:100%;
    height:70px;
    overflow: hidden;
    bottom: 0px;
    top: 9px;
    position: relative;
}

.border{
   border: 1px solid #dee2e6!important;
}

.mT500{
    margin-top: 500px;
}

.mL100{
    margin-left: 200px;
    margin-top:20px;
    width:40%;
    float: left;
}

.align{
    text-align: right;
    margin-top:20px;
    margin-right:200px;
}
.background{
 background-color: #ccc;
}

img.center {
    display: block;
    margin: 0 auto;
}

html{
    padding-bottom:0px;
}

</style>