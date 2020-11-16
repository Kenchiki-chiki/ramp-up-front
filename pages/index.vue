<template>
  <div>
    <v-container>
      <v-row align="center" justify="center">
      <v-col cols="12" class="">
        <div class="text-center">
          <h1 class="app-title">Ramp Up</h1>
        </div>
      </v-col>
      </v-row>

    <v-row align="center" justify="center">
      <v-col cols="12" class="top-buttons">
        <div class="text-center">
          <div class="my-2">
            <v-btn
            @click="$router.push('sign_up')"
            class="ma-2 top-btn"
            outlined
            color="white"
          >
            sing up
          </v-btn>
          </div>
          <div class="my-2">
            <v-btn
            @click="$router.push('sign_in')"
            class="ma-2 top-btn"
            outlined
            color="white"
          >
            sign in
          </v-btn>
          </div>
          <div class="my-2">
            <v-btn
            class="ma-2 top-btn"
            outlined
            color="white"
          >
            guest
          </v-btn>
          </div>
          
        </div>
      </v-col>
    </v-row>
  </v-container>
    
  </div>
    
</template>

<style>

  .app-title {
    font-size: 70px;
    font-weight: 300;
    margin-top: 250px;
    letter-spacing: 0.05em;
  }
  .top-btn {
    width: 180px;
  }
  .top-buttons{
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  margin: auto; 
  width: 100%;
  height: 200px;
}
</style>

<script>


export default {
  layout: 'default',
  components: {
    
  }
}
</script>
