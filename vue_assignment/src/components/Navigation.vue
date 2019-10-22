<template>
     <nav class="navbar navbar-light">
      <div class="container">
        <a class="navbar-brand" href="index.html"></a>
        <ul class="nav navbar-nav pull-xs-right">
          <li class="nav-item">
            <!-- Add "active" class when you're on that page" -->
            <a class="nav-link active" href="">Home</a>
          </li>
           <li v-if="username" class="nav-item">
              <router-link class="nav-link" to="/editor">
               <i class="ion-compose"></i>&nbsp;New Post</router-link>
            <!-- <a class="nav-link" href="">New Post</a> -->
          </li>
          <li v-if="username" class="nav-item">
             <router-link class="nav-link" to="/settings">
             <i class="ion-gear-a"></i>&nbsp;Settings</router-link>
          </li>
          <li v-if="username==null" class="nav-item">
               <router-link class="nav-link" to="/login"> Sign in </router-link>
          </li>
          <li v-if="username==null" class="nav-item">
              <router-link class="nav-link" to="/register">Sign up</router-link>
            <!-- <a class="nav-link" href="">Sign up</a> -->
          </li>
           <li v-if="username" class="nav-item">
              <router-link class="nav-link" :to="`/@${username}`"><b><i>{{username}}</i></b></router-link>
            <!-- <a class="nav-link" href="">Sign up</a> -->
          </li>
        </ul>
      </div>
    </nav>
</template>

<script>
export default {
    computed: {
        username() {
            return this.$store.getters["users/username"];
        }
    }
};
</script>