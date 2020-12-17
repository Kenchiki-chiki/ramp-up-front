<template>
  <div>
    <study/>
    <div class="comment">

      <div>一日お疲れさま。</div>
      <div>学習時間を入力しましょう。</div>
      <!-- <h2>ログイン状態:{{ $auth.loggedIn }}</h2> -->
      <p class="skill_name">{{ skillName }}</p>
      <p class="skill_name">{{ $store.state.skillName }}</p>

      <ul>
        <li v-for="skill in skillName">{{ skill }}</li>
      </ul>
    </div>
    
    <account/>
    
  </div>
</template>



<script>
import { mapState } from 'vuex'
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
    ...mapState(['skillName'])
  }
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

  /* .skill_name {
    height: 100px;
  } */
</style>