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

  </div>

  <!-- <ul class="navbar">
    <li><a href="#">ダッシュボード</a></li>
    <li><a href="#">推移グラフ</a></li>
    <li><a href="#">結果レポート</a></li>
    <li><a href="#">設定</a></li>
    <li><a href="#">問い合わせ</a></li>
  </ul> -->
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
  /* margin: 0; */
  /* margin: 0 200px 0 0;
  padding: 15px 0 0 0 ; */
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









/* width 256 */



/* ＊＊＊＊ */

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

/* ＊＊＊＊ */


/* .v-navigation-drawer {
  height: 100vh;
  top: 0px;
  transform: translateX(0%);
  width: 256px;
  background-color: rgb(80, 151, 244);
  border-color: rgb(80, 151, 244);
  max-height: calc(100% - 0px);
}

.v-navigation-drawer--fixed {
  position: fixed;
}

.v-navigation-drawer--fixed {
    z-index: 6;
}

.v-navigation-drawer {
    display: flex;
    flex-direction: column;
    left: 0;
    max-width: 100%;
    overflow: hidden;
    pointer-events: auto;
    transition-duration: .2s;
    transition-timing-function: cubic-bezier(.4,0,.2,1);
    will-change: transform;
    transition-property: transform,visibility,width;
} */

/* .v-navigation-drawer__content {
    height: 100%;
    overflow-y: auto;
    overflow-x: hidden;
}

* {
    background-repeat: no-repeat;
    padding: 0;
    margin: 0;
}

*, :after, :before {
    box-sizing: inherit;
}

div {
    display: block;
}

.v-navigation-drawer {
    
    pointer-events: auto;
    
}

.v-application {
    font-family: Roboto,sans-serif;
    line-height: 1.5;
}

:after, :before {
    text-decoration: inherit;
    vertical-align: inherit;
}
*, :after, :before {
    box-sizing: inherit;
}
:after, :before {
    text-decoration: inherit;
    vertical-align: inherit;
}
*, :after, :before {
    box-sizing: inherit;
}
::selection {
    background-color: #b3d4fc;
    color: #000;
    text-shadow: none;
} */

/* @media (min-width: 1264px)
.v-list-item-group {
    max-width: 1185px;
}
@media (min-width: 960px)
.v-list-item-group {
    max-width: 900px;
} */

/* .v-list-item-group {
    width: 100%;
    padding: 12px;
    margin-right: auto;
    margin-left: auto;
} */



</style>