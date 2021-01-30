<template>
  <span>
    <v-toolbar id="topbar">
      <v-spacer></v-spacer>
      <v-toolbar-items class="hidden-xs-only">
          
      </v-toolbar-items>
    </v-toolbar>
  </span>
</template>
<script>
export default {
  name: "AppNavigation",
  data() {
    return {
      
    }
  },
  
};
</script>
<style>
#topbar {
  position: fixed;
  top: 0;
  width: 100%;
  background-color: #1E1E1E;
  /* background-color: #262626; */
}
</style>