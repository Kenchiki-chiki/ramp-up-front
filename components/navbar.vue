<template>
  <v-app>
    
    <v-navigation-drawer
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
            @click="$router.push('build')"
          >
          BUILD
          </v-list-item-title>
        </v-list-item>
        <v-list-item>
          <v-list-item-title
            class="navbar-title"
            @click="$router.push('task')"
          >
          TASK
          </v-list-item-title>
        </v-list-item>
        <v-list-item>
          <v-list-item-title
            class="navbar-title"
            @click="$router.push('calendar')"
          >
          CALENDAR
          </v-list-item-title>
        </v-list-item>
        <v-list-item>
          <v-list-item-title
           class="navbar-title"
            @click="$router.push('chart')"
          >
          CHART
          </v-list-item-title>
        </v-list-item>
        
      </v-list-item-group>

    </v-list>

    </v-navigation-drawer>

  </v-app>
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
/* width 256 */
h1 {
  font-size: 44px;
  padding: 10px 0 45px 0;
}

#navbar {
  visibility: visible !important;
  transform: translateX(0%) !important;
  text-align: center;
}
.navbar-title {
  padding: 25px 0 25px 0;
  font-size: 18px !important;
}




</style>