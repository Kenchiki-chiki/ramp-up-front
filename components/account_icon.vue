<template>
    <v-app class="account_icon">
    <!-- <div class="account_icon"> -->
      <v-icon @click="drawer = true" color="#666666">
      mdi-account-circle
      </v-icon>
      <v-menu
        v-model="drawer"
      >
        <v-list
          class="list_position"
          nav
          dense
        >
          <v-list-item-group>
            <v-list-item>
              <v-list-item-title
                class="text--darken-3 mb-1"
                @click="$router.push('account_setting')"
              >
              アカウント編集
              </v-list-item-title>
            </v-list-item>
            <v-list-item>
              <v-list-item-title>スキル編集</v-list-item-title>
            </v-list-item>
            <v-list-item>
              <v-list-item-title
               class="text--darken-3 mb-1"
               @click="logout"
              >
              ログアウト
              </v-list-item-title>
            </v-list-item>
          </v-list-item-group>
          
        </v-list>
      </v-menu>
    <!-- </div> -->
    </v-app>
</template>




<script>
export default {
  middleware({ store, redirect }) {
    console.log('===== middleware ====')
    console.log(store.$auth.loggedIn)
    if(!store.$auth.loggedIn) {
      redirect('/login');
    }
  },
  name: 'App',
  data() {
    return {
      drawer: false
    }
  },
  created() {
    console.log('created')
  },
  methods: {
    logout () {
      console.log(this.$auth.user)
      this.$auth.logout();
      this.$store.dispatch(`message/setContent`,{
      content: 'ログアウトしました',
      timeout: 2000
      })
    },
    deleteUser() {
      this.$axios
        .delete('http://localhost:3000/api/v1/auth', {
          headers: {
            'access-token': localStorage.getItem('access-token'),
            uid: localStorage.getItem('uid'),
            client: localStorage.getItem('client'),
          },
        })
        .then((response) => {
          this.$auth.logout()
          window.location.href = '/'
        })
    },
  },
  
  
}
</script>




<style>
  .account_icon {
  z-index: 300;
  position: fixed;
  top: 20px;
  right: 20px;
}
  /* .v-list {
    position: absolute;
    top: 60px;
    right: 60px;
    width: 100%;
    height: 144px;
    
  } */

  .v-application--wrap {
  height: 24px !important;; 
}

</style>