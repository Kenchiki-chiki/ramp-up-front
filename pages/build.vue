<template>
  <div>
    <study/>
    <div class="comment">

      <div>一日お疲れさま。</div>
      <div>学習時間を入力しましょう。</div>
      <!-- <h2>ログイン状態:{{ $auth.loggedIn }}</h2> -->
    </div>
    
    <account/>
    
  </div>
</template>



<script>
import Navbar from '~/components/navbar.vue'
import Account from '~/components/account_icon.vue'
import Study from '~/components/study_hours.vue'
export default {
  middleware({ store, redirect }) {
    if(!store.$auth.loggedIn) {
      redirect('/login');
    }
  },
  components: {
    Navbar,
    Account,
    Study
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
    z-index: 10;
    font-size: 30px;
    position: absolute;
    top: 50px;
    left:120px;
    margin: auto; 
    width: 100%;
    height: 105px;
    letter-spacing: 0.05em;
  }
</style>