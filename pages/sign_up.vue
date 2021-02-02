<template>
  <div class="whole-wrapper">
    <Errors :errors="errors" />
    <AppNavigation />

    <v-container class="devise-token-auth-form">
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
              v-bind:append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
              prepend-icon="mdi-lock"
              v-bind:type="showPassword ? 'text' : 'password'"
              @click:append="showPassword = !showPassword"
              label="password"
            />
            <v-text-field
              v-model="user.password_confirmation"
              v-bind:append-icon="showConfirmation ? 'mdi-eye' : 'mdi-eye-off'"
              prepend-icon="mdi-lock"
              v-bind:type="showConfirmation ? 'text' : 'password'"
              @click:append="showConfirmation = !showConfirmation"
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
  </div>
</template>

<script>
import AppNavigation from "~/components/AppNavigation";
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
      showPassword:false,
      showConfirmation:false,
      errors: []
    }
  },
  components: {
    AppNavigation,
  },
  methods: {
    registerUser() {
      const res = this.$axios.post('/api/v1/auth', this.user ,{
        headers: {
            'access-token': localStorage.getItem('access-token'),
            uid: localStorage.getItem('uid'),
            client: localStorage.getItem('client'),
          },
      }
      
      ).then((response) => {
        this.$auth.loginWith('local',{
            data: this.user
        })
        
        this.$store.dispatch(`message/setContent`,{
        content: '新規登録に成功しました',
        timeout: 2000
      })
      localStorage.setItem('access-token', response.headers['access-token'])
      localStorage.setItem('client', response.headers.client)
      localStorage.setItem('uid', response.headers.uid)
      localStorage.setItem('token-type', response.headers['token-type'])
      this.$router.push({ path: '/skill' })
      return response
      },
      
      ).catch((errors) => {
        this.errors = errors.response.data.errors.full_messages
      })
      
    },
    
  },
}
</script>