<template>
  <div class="whole-wrapper">
    <Errors :errors="errors" />
    <Topbar />
    <div class="whole-content-wrapper">
      <Navbar />

      <div class="main-content-wrapper">
        <v-container class="devise-token-auth-form">
          <v-card width="400px" id="account-setting-card" class="mx-auto mt-5">
            <v-card-title>
              <h1 class="display-1">
                メールアドレス変更
              </h1>
            </v-card-title>
            <v-card-text>
              <v-form ref="form" lazy-validation>
                <v-text-field
                  v-model="user.email"
                  prepend-icon="mdi-email"
                  label="new email"
                />
                <v-text-field
                  v-model="user.password"
                  v-bind:append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
                  prepend-icon="mdi-lock"
                  v-bind:type="showPassword ? 'text' : 'password'"
                  @click:append="showPassword = !showPassword"
                  label="password"
                />
                <v-card-actions>
                  <v-btn
                    color="#616161"
                    class="white--text"
                    @click="editEmail"
                  >
                    保存する
                  </v-btn>
                </v-card-actions>
              </v-form>
            </v-card-text>
          </v-card>
        </v-container>
        
      </div>

    </div>

    <account/>
  </div>
</template>

<script>
import Topbar from '~/components/top_bar.vue'
import Navbar from '~/components/navbar.vue'
import Account from '~/components/account_icon.vue'
export default {
  name: 'App',
  data() {
    return {
      user: {
        password: '',
        email: '',
      },
      showPassword:false,
      errors: []
    }
  },
  components: {
    Topbar,
    Navbar,
    Account,
  },
  methods: {
    editEmail() {
      this.$axios
        .put('/api/v1/auth', this.user, {
          headers: {
            'access-token': localStorage.getItem('access-token'),
            uid: localStorage.getItem('uid'),
            client: localStorage.getItem('client'),
          },
        })
          .then((response) => {
            this.$store.dispatch(`message/setContent`,{
            content: 'メールアドレスを変更しました',
            timeout: 2000
          })
          localStorage.setItem('access-token', response.headers['access-token'])
          localStorage.setItem('client', response.headers.client)
          localStorage.setItem('uid', response.headers.uid)
          localStorage.setItem('token-type', response.headers['token-type'])
          this.$router.push('/build')     
        },
        ).catch((errors) => {
        this.errors = errors.response.data.errors.full_messages
      })
    },
  },
}
</script>
<style>
#account-setting-card {
  box-shadow: -1px 3px 12px rgba(119, 119, 119, 0.2);
}
</style>