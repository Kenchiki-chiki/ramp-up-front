<template>
    <div class="account_icon">
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
              <v-list-item-title
                @click="$router.push('skill_edit')"
              >
              スキル編集
              </v-list-item-title>
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
    </div>
</template>


<script>
export default {
  middleware({ store, redirect }) {
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

  },
  methods: {
    logout () {
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

.v-application--wrap {
  height: 24px !important;; 
}

.v-menu__content {
    min-width: 0px ;
    top: 18px !important;
    right: 50px !important;
    left: initial !important;
    transform-origin: right top !important;
    z-index: 302 ;
}

</style>