<template>
  <div class="index-whole-wrapper">
    <AppNavigation/>
    <HomeIntro/>
    <HomeAbout/>
    <HomeService/>
    
  </div>

    
</template>

<script>
import AppNavigation from "~/components/AppNavigation";
import HomeIntro from "~/components/HomeIntro.vue";
import HomeAbout from "~/components/HomeAbout.vue";
import HomeService from "~/components/HomeService.vue";
export default {
  layout: 'default',
  name: 'App',
  auth: false,
  middleware({ store, redirect }) {
    if(store.$auth.loggedIn) {
      redirect('/build');
    }
  },
  data() {
    return {
      
    }
  },
  components: {
    AppNavigation,
    HomeIntro,
    HomeAbout,
    HomeService
  },
  
}
</script>

<style>
.index-whole-wrapper {
  background-color: #000000;
}
.app-title {
  font-size: 70px;
  font-weight: 300;
  position: absolute;
  top: 280px;
  right: 0;
  left: 0;
  margin: auto; 
  width: 100%;
  height: 105px;
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
