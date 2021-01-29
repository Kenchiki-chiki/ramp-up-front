<template>
  <div class="whole-wrapper">
    <div class="whole-content-wrapper">
      <Navbar />

      <div class="main-content-wrapper">
        <v-container class="account-setting-form">
          <v-card width="400px" class="mx-auto mt-5">
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
                  label="新しいメールアドレス"
                />
                <v-text-field
                  v-model="user.password"
                  v-bind:append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
                  prepend-icon="mdi-lock"
                  v-bind:type="showPassword ? 'text' : 'password'"
                  @click:append="showPassword = !showPassword"
                  label="パスワード"
                />
                <v-card-actions>
                  <v-btn
                    color="#666666"
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
      showPassword:false
    }
  },
  components: {
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
          localStorage.setItem('access-token', response.headers['access-token'])
          localStorage.setItem('client', response.headers.client)
          localStorage.setItem('uid', response.headers.uid)
          localStorage.setItem('token-type', response.headers['token-type'])
          this.$router.push('/build')     
        })
    },
  },
}
</script>

<style>
.whole-content-wrapper {
  display: flex;
  width: 100%;
}

.main-content-wrapper {
  width: 100%;
}

.account-setting-form {
  margin: 70px 0 0 0 ; 
}

input:-webkit-autofill {
  /* box-shadow: 0 0 0px 1000px #666666 inset; */
  /* color: -internal-light-dark(black, aqua) !important; */
  border-radius:2px;
}

</style>
