<template>
 <div>
   <form class="login" @submit.prevent="login">
     <h1>Sign in</h1>
     <label>Email</label>
     <input required v-model="email" type="email" placeholder="Name"/>
     <label>Password</label>
     <input required v-model="password" type="password" placeholder="Password"/>
     <hr/>
     <button type="submit">Login</button>
   </form>
 </div>
</template>

<script>
  export default {
    data(){
      return {
        email : "",
        password : ""
      }
    },
    methods: {
      login: function () {
        var person_login = new FormData();
        
        person_login.append('email', this.email)
        person_login.append('password', this.password)
        
        this.$store.dispatch('login', person_login)
        .then(() => {this.$router.push('/')})
        .catch(err => console.log(err))
      }
    }
  }
</script>