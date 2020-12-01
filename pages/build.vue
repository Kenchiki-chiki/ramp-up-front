<template>
  <div class="comment">
    <navbar/>
    <account/>
    <div>一日お疲れさま。</div>
    <div>学習時間を入力しましょう。</div>
  </div>
</template>



<script>
import Navbar from '~/components/navbar.vue'
import Account from '~/components/account_icon.vue'
export default {
  middleware({ store, redirect }) {
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
}
</script>

<style>
.comment {
  text-align: center;
}
</style>