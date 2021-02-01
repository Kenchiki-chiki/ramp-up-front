<template>
  <div class="message" v-show="message">
    <v-alert
      id="alert"
      color="#181823"
      dark      
    >
    {{ message }}
    </v-alert>
  </div>
</template>

<script>
// mapGetterを使うための記述
import { mapGetters } from 'vuex'
export default {
  computed: {
    ...mapGetters({
      // messageの値をstoreから取ってくる,message: this.$store.getters.contentと同義
      message: 'message/content'
    })
  }
}
</script>

<style>
.message {
  z-index: 999;
  text-align: center;
  position: absolute;
  top: 0px;
  right: 0;
  left: 0; 
  }
  #alert {
    padding-top: 8px;
    padding-bottom: 8px;
  }
</style>