<template>
  <div class="whole-wrapper">

    <div class="whole-content-wrapper">
      <Navbar />  

    <div class="main-content-wrapper">
      <div id="study-time-comment">

          <div>今日の学習時間は</div>       
          <v-container class="study-time-container">
            <v-row>
              <v-col class="study-time-col">

                <v-card width="300px" class="card">
                <v-card-text class="study-time-card" cols="12" sm="6" md="4">

                  <v-responsive
                    max-width="400"
                    class="study-time-wrapper"
                  >
                  <div class="study-time-wrapper">

                    <p id="study-time">{{ totalStudyTimes }} 時間</p>
                
                  </div>
                  </v-responsive>    

                </v-card-text>

              </v-card>
              </v-col>
            </v-row>
          </v-container>
          <v-card-actions>
          </v-card-actions>

          <div>明日も最高の1日にしましょう！</div>

        </div>
      </div>
    </div>    
    
    <account/>
    
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import Navbar from '~/components/navbar.vue'
import Account from '~/components/account_icon.vue'
export default {
  middleware({ store, redirect }) {
    if(!store.$auth.loggedIn) {
      redirect('/login');
    }
  },
  data() {
    return {
      
    }
  },
  components: {
    Navbar,
    Account,
  },
  computed: {
    ...mapGetters({
      totalStudyTimes: 'build/content'
    })
  },
  created() {
    this.fetchStudyTimes()
  },
  methods: {
    async fetchStudyTimes() {
      await this.$store.dispatch('build/fetchStudyTimes')
    },
  }
}
</script>

<style>
.whole-wrapper {
  height: 100vh;
}

.whole-content-wrapper {
  display: flex;
  width: 100%;
  height: 100vh;
}

.main-content-wrapper {
  width: 100%;
}

#study-time-comment {
  text-align: center;
  z-index: 10;
  font-size: 30px;
  margin: 70px 0 0 0 ; 
  width: 100%;
  letter-spacing: 0.05em;
}

.study-time-container {
  display: flex;
  justify-content: center;
  margin: 70px auto;
}

.study-time-col {
  display: flex;
  justify-content: center;
}

#study-time {
  margin: 0;
  font-size: 24px;
}
  
</style>