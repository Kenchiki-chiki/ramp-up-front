<template>
    <v-app class="account_icon">
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
               @click="$auth.logout()"
              >
              ログアウト
              </v-list-item-title>
            </v-list-item>
          </v-list-item-group>
          
        </v-list>
      </v-menu>
    </v-app>
</template>




<script>
export default {
  name: 'App',
  data() {
    return {
      drawer: false
    }
  },
  methods: {
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

</style>