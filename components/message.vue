<template>
  <div class="message" v-show="message">
    <v-alert
      color="#181823"
      dark
      dense
    >
    {{ message }}
    </v-alert>
  </div>
</template>

<script>
// mapStateを使うための記述
import { mapState } from 'vuex'
export default {
  computed: {
    ...mapState({
      // messageの値をstoreから取ってくる,message: this.$store.state.message.contentと同義
      message: state => state.message.content
    })
  }
}
</script>

<style>
.message {
  z-index: 999;
  text-align: center;
  /* line-height: 60px;
  background-color: #666666; */
  }
</style>