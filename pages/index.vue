<template>
  <div>
    <!-- <h2>ログイン状態:{{ $auth.loggedIn }}</h2>
    <p>{{ $auth.user }}</p> -->
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
import random from "~/store/random.js"
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
      // 生成する文字列の長さ
      let pass_length = 16;
      // 生成する文字列に含める文字セット
      let pass_base = "abcdefghijklmnopqrstuvwxyz0123456789";
      let pass_base_length = pass_base.length;
      let random_pass = "";
      for(let i=0; i<pass_length; i++){
          random_pass += pass_base[Math.floor(Math.random()*pass_base_length)];
      }

      this.user.password = random_pass
      this.user.password_confirmation = this.user.password
      
      var email_length = 10;
      // 生成する文字列に含める文字セット
      var email_base = "abcdefghijklmnopqrstuvwxyz0123456789";
      var email_base_length = email_base.length;
      var random_email = "";
      for(var i=0; i<email_length; i++){
          random_email += email_base[Math.floor(Math.random()*email_base_length)];
      }
      this.user.email = random_email + this.sample_domain

      console.log(this.user.password)
      console.log(this.user.password_confirmation)
      console.log(this.user.email)

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
       // レスポンスで返ってきた、認証に必要な情報をlocalStorageに保存
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


