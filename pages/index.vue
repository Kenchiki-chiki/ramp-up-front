<template>
  <div>
    <v-container>
      <v-row align="center" justify="center">
      <v-col cols="12" class="">
        <div class="text-center">
          <h1 class="app-title">Ramp Up</h1>
        </div>
      </v-col>
      </v-row>

    <v-row align="center" justify="center">
      <v-col cols="12" class="top-buttons">
        <div class="text-center">
          <div class="my-2">
            <v-btn
            @click="$router.push('sign_up')"
            class="ma-2 top-btn"
            outlined
            color="white"
          >
            sing up
          </v-btn>
          </div>
          <div class="my-2">
            <v-btn
            @click="$router.push('sign_in')"
            class="ma-2 top-btn"
            outlined
            color="white"
          >
            sign in
          </v-btn>
          </div>
          <div class="my-2">
            <v-btn
            @click="randomSet"
            class="ma-2 top-btn"
            outlined
            color="white"
          >
            guest
          </v-btn>
          </div>
          
        </div>
      </v-col>
    </v-row>
  </v-container>
    
  </div>
    
</template>

<script>
export default {
  layout: 'default',
  name: 'App',
  auth: false,
  data() {
    return {
      sample_domain: '@example.com',
      user: {
        password: '',
        email: '',
        password_confirmation: '',
      },
    }
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
}
</script>

<style>

  .app-title {
    font-size: 70px;
    font-weight: 300;
    position: absolute;
    top: 280px;
    right: 0;
    left: 0;
    margin: auto; 
    width: 100%;
    height: 105px;
    letter-spacing: 0.05em;
  }
  .top-btn {
    width: 180px;
  }
  .top-buttons{
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  margin: auto; 
  width: 100%;
  height: 200px;
}
</style>
