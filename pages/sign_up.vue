<template>
  <v-container>
    <v-card width="400px" class="mx-auto mt-5">
      <v-card-title>
        <h1 class="display-1">
          新規登録
        </h1>
      </v-card-title>
      <v-card-text>
        <v-form ref="form" lazy-validation>
          <v-text-field
            v-model="user.email"
            prepend-icon="mdi-email"
            label="email"
          />
          <v-text-field
            v-model="user.password"
            prepend-icon="mdi-lock"
            append-icon="mdi-eye-off"
            label="password"
          />
          <v-text-field
            v-model="user.password_confirmation"
            prepend-icon="mdi-lock"
            append-icon="mdi-eye-off"
            label="comfirmation"
          />
          <v-card-actions>
            <v-btn
              color="#666666"
              class="white--text"
              @click="registerUser"
            >
              新規登録
            </v-btn>
          </v-card-actions>
        </v-form>
      </v-card-text>
    </v-card>
  </v-container>
</template>

<script>
export default {
  name: 'App',
  auth: false,
  data() {
    return {
      user: {
        password: '',
        email: '',
        password_confirmation: '',
      },
    }
  },
  methods: {
    registerUser() {
      this.$axios.post('http://localhost:3000/api/v1/auth', this.user ,{
        headers: {
            'access-token': localStorage.getItem('access-token'),
            uid: localStorage.getItem('uid'),
            client: localStorage.getItem('client'),
          },
      }
      
      )
      .then((response) => {
        
        this.$store.dispatch(`message/setContent`,{
        content: '新規登録に成功しました',
        timeout: 2000
      })
       // レスポンスで返ってきた、認証に必要な情報をlocalStorageに保存
      localStorage.setItem('access-token', response.headers['access-token'])
      console.log('===1===')
      localStorage.setItem('client', response.headers.client)
      localStorage.setItem('uid', response.headers.uid)
      localStorage.setItem('token-type', response.headers['token-type'])
      console.log('===2===')
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