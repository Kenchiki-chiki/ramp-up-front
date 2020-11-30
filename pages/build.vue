<template>
  <div class="comment">
    <navbar/>
    <account/>
    <div>一日お疲れさま。</div>
    <div>学習時間を入力しましょう。</div>
    <a @click="$auth.logout()">ログアウト2</a>
    <p>{{user}}</p>
  </div>
</template>



<script>
import Navbar from '~/components/navbar.vue'
import Account from '~/components/account_icon.vue'
export default {
  middleware({ store, redirect }) {
    console.log('===== build2 middleware ====')
    console.log(store.$auth.loggedIn)
    if(!store.$auth.loggedIn) {
      redirect('/login');
    }
  },
  components: {
    Navbar,
    Account
  },
  computed: {
    user() {
      console.log(this.$auth.user)
      return this.$auth.user;
    }
  },
  methods: {
    logout2 () {
      this.$auth.logout();
    },
  }
}
</script>

<style>
.comment {
  text-align: center;
}
</style>