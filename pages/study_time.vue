<template>
  <div class="whole-wrapper">
    <Topbar />
    <div class="whole-content-wrapper">
      <Navbar />  

    <div class="main-content-wrapper">
      <div id="study-comment" class="non-flex-comment">

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
import Topbar from '~/components/top_bar.vue'
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
    Topbar,
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
.study-time-container {
  display: flex;
  justify-content: center;
  margin: 70px auto;
}

#study-comment {
  margin: 200px 0 0 0;
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