<template>
  <div>
    
    <v-navigation-drawer 
      hide-overlay
      id="navbar"
      v-model="drawer"
      fixed
      temporary
    >
    <v-list
      nav
      dense
    >
      <v-list-item-group>
          <h1>Ramp Up</h1>
        <v-list-item>
          <v-list-item-title
            class="navbar-title"
            @click="$router.push('/build')"
          >
          BUILD
          </v-list-item-title>
        </v-list-item>
        <v-list-item>
          <v-list-item-title
            class="navbar-title"
            @click="$router.push('/task')"
          >
          TASK
          </v-list-item-title>
        </v-list-item>
        <v-list-item>
          <v-list-item-title
            class="navbar-title"
            @click="$router.push('/calendar')"
          >
          CALENDAR
          </v-list-item-title>
        </v-list-item>
        <v-list-item>
          <v-list-item-title
           class="navbar-title"
            @click="$router.push('/chart')"
          >
          CHART
          </v-list-item-title>
        </v-list-item>
        
      </v-list-item-group>

    </v-list>

    </v-navigation-drawer>

  </div>

</template>

<script>
export default {
  data() {
    return {
      drawer:true
    }
  }
}
</script>

<style>

.navbar {
  /* position: fixed;
  top: 0px;
  left: 0px; */
  width: 256px;
  /* height: 100%; */
  background-color: #181812;
}
.navbar li {
  padding: 25px 0 25px 35px;
  list-style: none;
}
.navbar li:hover {
  background-color: #181812;
}
.navbar li a{
  color: white;
  font-weight: bold;
  text-decoration: none;
}

.v-application a {
  color: white;
}

h1 {
  font-size: 44px;
  padding: 10px 0 45px 0;
}

#navbar {
  position: sticky;
  visibility: visible !important;
  transform: translateX(0%) !important;
  text-align: center;
}
.navbar-title {
  padding: 25px 0 25px 0;
  font-size: 18px !important;
}


</style>