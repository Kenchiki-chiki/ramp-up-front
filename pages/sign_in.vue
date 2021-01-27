<template>
  <v-container>
    <v-card width="400px" class="mx-auto mt-5">
      <v-card-title>
        <h1 class="display-1">
          ログイン
        </h1>
      </v-card-title>
      <v-card-text>
        <v-form ref="form" lazy-validation>
          <v-text-field
            v-model="email"
            prepend-icon="mdi-email"
            label="email"
          />
          <v-text-field
            v-model="password"
            v-bind:append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
            prepend-icon="mdi-lock"            
            v-bind:type="showPassword ? 'text' : 'password'"
            @click:append="showPassword = !showPassword"
            label="password"
          />
          <v-card-actions>
            <v-btn
              color="#666666"
              class="white--text"
              @click="loginWithAuthModule"
            >
              ログイン
            </v-btn>
          </v-card-actions>
        </v-form>
      </v-card-text>
    </v-card>
  </v-container>
</template>

<script>
export default {
  middleware({ store, redirect }) {
    if(store.$auth.loggedIn) {
      redirect('/build');
    }
  },
  data() {
    return {
      password: '',
      email: '',
      showPassword: false
    }
  },
  methods: {
    // loginメソッドの呼び出し
    async loginWithAuthModule() {

      await this.$auth
        .loginWith('local', {
         // emailとpasswordの情報を送信
          data: {
            email: this.email,
            password: this.password,
          },
        })
       .then(
          (response) => {
            this.$store.dispatch(`message/setContent`,{
            content: 'ログインに成功しました',
            timeout: 2000
          })
            // レスポンスで返ってきた、認証に必要な情報をlocalStorageに保存
            localStorage.setItem('access-token', response.headers['access-token'])
            localStorage.setItem('client', response.headers.client)
            localStorage.setItem('uid', response.headers.uid)
            localStorage.setItem('token-type', response.headers['token-type'])
            this.$router.push({ path: '/build' })
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
input:-webkit-autofill {
  border-radius:2px;
}
</style>