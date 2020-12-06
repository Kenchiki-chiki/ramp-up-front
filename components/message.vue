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
import { mapGetters } from 'vuex'
export default {
  computed: {
    ...mapGetters({
      message: 'message/content'
    }),
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
