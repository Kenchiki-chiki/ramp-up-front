<template>
  <!-- <v-container class="intro grey darken-4 white--text"> -->
    <v-container class="intro  white--text">
    <v-layout row wrap justify-center align-center>
      <v-flex xs12 sm7 px-3 text-xs-center text-sm-left>
        <div class="intro-inner">
          <h3 class="intro-title">Ramp Upで簡単に学習記録を可視化しよう。</h3>
          <!-- <h1 class="intro-title">Ramp Up</h1> -->
          <!-- <div
            class="intro-meta"
          >Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti fugit incidunt accusantium ea rerum accusamus quia laboriosam quod molestias facilis.</div> -->
        </div>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  name: "HomeIntro"
};
</script>


<style scoped>
.intro {
  position: relative;
  padding-top: 70px;
  padding-bottom: 50px;
  overflow: hidden;
}

.intro-title {
  text-transform: uppercase;
  margin: 0 0 20px;
}

.intro-meta {
  margin: 0 0 20px;
}
</style>