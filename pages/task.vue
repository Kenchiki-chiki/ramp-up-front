<template>
  <div class="comment">
    <navbar/>
    <account/>
    <div>明日のタスクを設定しましょう</div>
  </div>
</template>


<script>
import Navbar from '~/components/navbar.vue'
import Account from '~/components/account_icon.vue'
export default {
  components: {
    Navbar,
    Account
  }
}
</script>

<style>
  
</style>