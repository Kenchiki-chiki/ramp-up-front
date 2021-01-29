<template>
  <v-app dark>
      
    <v-main>
        <message />
        <nuxt />
      
    </v-main>
    
  </v-app>
</template>

<script>
// 全てのページでmessage.vueが表示されるようにする
import Message from '~/components/message.vue'
export default {
  components: {
    Message
  },
  data () {
    return {
      clipped: false,
      drawer: false,
      fixed: false,
      items: [
        {
          icon: 'mdi-apps',
          title: 'Welcome',
          to: '/'
        },
        {
          icon: 'mdi-chart-bubble',
          title: 'Inspire',
          to: '/inspire'
        }
      ],
      miniVariant: false,
      right: true,
      rightDrawer: false,
      title: 'Vuetify.js'
    }
  }
}
</script>

<style>
.whole-wrapper {
  background-color: #121212;
  height: 100%;
}

.whole-content-wrapper {
  height: 100%;
  display: flex;
}

.main-content-wrapper {
  width: 100%;
}

.comment {
  text-align: center;
  z-index: 10;
  font-size: 30px;
  margin: 100px 0 0 0;
  width: 100%;
  letter-spacing: 0.05em;
  display: flex;
  justify-content: center;
}

.non-flex-comment {
  text-align: center;
  z-index: 10;
  font-size: 30px;
  margin: 100px 0 0 0 ; 
  width: 100%;
  letter-spacing: 0.05em;
}

.v-dialog {
  margin-left: 290px !important;
}

input:-webkit-autofill {
  border-radius:2px;
}

#task-container {
  display: flex;
  justify-content: center;
  margin: 30px auto 0px;
}

.devise-token-auth-form {
  margin: 70px 0 0 0 ; 
}
</style>


