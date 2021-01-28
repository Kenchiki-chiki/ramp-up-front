<template>
  <span>
    <!-- <v-navigation-drawer v-model="sidebar" app>
      <v-list>
        <v-list-tile v-for="item in menuItems" :key="item.title" :to="item.path">
          <v-list-tile-action>
            <v-icon small>fas fa-{{item.icon}}</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>{{ item.title }}</v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer> -->

    <v-toolbar>
      <!-- <span class="hidden-sm-and-up">
        <v-toolbar-side-icon @click="sidebar = !sidebar">
          <v-icon>fas fa-bars</v-icon>
        </v-toolbar-side-icon>
      </span> -->
      <v-toolbar-title class="white--text toolbar" @click="$router.push('/')" style="font-weigth: bold; cursor: pointer;">
        Ramp Up
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items class="hidden-xs-only">
        
            <v-btn
            @click="$router.push('about')"                                    
          >
            about
          </v-btn>
            <v-btn
            @click="$router.push('sign_up')"                                    
          >
            sing up
          </v-btn>
          <v-btn
            @click="$router.push('sign_in')"            
          >
            sign in
          </v-btn>
          <v-btn
            @click="randomSet"           
          >
            guest
          </v-btn>
          
        <!-- <v-btn flat v-for="item in menuItems" :key="item.title" :to="item.path">{{ item.title }}</v-btn> -->
      </v-toolbar-items>

      <!-- <div v-if="!isAuthenticated">
        <v-toolbar-items>
          <v-btn dark small icon color="black" to="/signup">
            <v-icon small>fas fa-user-plus</v-icon>
          </v-btn>

          <v-btn dark small icon color="green" to="/signin">
            <v-icon small>fas fa-sign-in-alt</v-icon>
          </v-btn>
        </v-toolbar-items>
      </div> -->
      <!-- <div v-else>
        <v-btn outline small icon color="green" to="/dashboard">
          <v-icon small>fas fa-user</v-icon>
        </v-btn>
        <v-btn dark small icon color="green" @click="logout" data-cy="logout">
          <v-icon small>fas fa-sign-out-alt</v-icon>
        </v-btn>
      </div> -->
    </v-toolbar>
  </span>
</template>
<script>
export default {
  name: "AppNavigation",
  data() {
    return {
      sidebar: false,
      sample_domain: '@example.com',
      user: {
        password: '',
        email: '',
        password_confirmation: '',
      },
    };
  },
  methods: {
    randomSet() {
      let base = "abcdefghijklmnopqrstuvwxyz0123456789";
      let base_length = base.length;

      let pass_length = 16;     
      let random_pass = "";
      for(let i=0; i<pass_length; i++){
          random_pass += base[Math.floor(Math.random()*base_length)];
      }

      this.user.password = random_pass
      this.user.password_confirmation = this.user.password
      
      let email_length = 10;      
      let random_email = "";
      for(let i=0; i<email_length; i++){
          random_email += base[Math.floor(Math.random()*base_length)];
      }
      this.user.email = random_email + this.sample_domain

      this.registerUser()
    },
    registerUser() {
      this.$axios.post('/api/v1/auth', this.user ,{
        headers: {
            'access-token': localStorage.getItem('access-token'),
            uid: localStorage.getItem('uid'),
            client: localStorage.getItem('client'),
          },
      }
      
      )
      .then((response) => {
        this.$auth.loginWith('local',{
            data: this.user
        })
        
        this.$store.dispatch(`message/setContent`,{
        content: 'ゲスト登録しました',
        timeout: 2000
      })
      localStorage.setItem('access-token', response.headers['access-token'])
      localStorage.setItem('client', response.headers.client)
      localStorage.setItem('uid', response.headers.uid)
      localStorage.setItem('token-type', response.headers['token-type'])
      this.$router.push({ path: '/skill' })
      return response
      },
      (error) => {
        return error
      }      
      )
    },
  },
};
</script>
<style>
</style>
