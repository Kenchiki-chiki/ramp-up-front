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
      title: 'Vuetify.js',
    }
  }
}
</script>

<style>
  .comment {
  text-align: center;
}
</style>


