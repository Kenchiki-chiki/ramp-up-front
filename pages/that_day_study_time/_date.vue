<template>
  <div class="whole-wrapper">
    <Topbar />
    <div class="whole-content-wrapper">
      <Navbar />
    
    <div class="main-content-wrapper" v-show="kanjiClikedDateIsNaN()">
      <div id="that-day-syudy-time-comment">

        <div>{{ kanjiClikedDate }}の学習時間は</div>

        <v-container class="that-day-study-time-container">
          <v-row>
            <v-col class="study-time-col">

              <v-card width="300px" class="card">
              <v-card-text class="study-time-card" cols="12" sm="6" md="4">

                <v-responsive
                  max-width="400"
                  class="study-time-wrapper"
                >
                <div class="study-time-wrapper">

                  <p id="study-time">{{ thatDayTotalStudyTimes }} 時間</p>
              
                </div>
                </v-responsive>    

              </v-card-text>

            </v-card>
            </v-col>
          </v-row>
        </v-container>
        <v-card-actions>
          
        </v-card-actions>
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
      redirect('/sign_in');
    }
  },
  data() {
    return {
      clikedDate: this.$route.params.date,
    }
  },
  components: {
    Topbar,
    Navbar,
    Account,
  },
  computed: {
    ...mapGetters({
      thatDayTotalStudyTimes: 'calendar/thatDayStudyTimes'
    }),
    kanjiClikedDate: function() {
      const yaer = this.clikedDate.slice(0,4)
      const y ='年'
      const month = this.clikedDate.slice(4,6)
      const m ='月'
      const day = this.clikedDate.slice(6,8)
      const d ='日'
      const kanjiCharacter = yaer + y + month + m + day + d
      
      return kanjiCharacter.replace(/\b0+/, '')
    }
  },
  created() {
    if (isNaN(this.$route.params.date) === false) {
      this.fetchStudyTimes()
    } else{
        this.$router.push(`../${this.$route.params.date}`)
      }

  },
  methods: {
    async fetchStudyTimes() {
      await this.$store.dispatch('calendar/fetchThatDayStudyTimes', this.$route.params.date)
    },
    kanjiClikedDateIsNaN() {
      if (isNaN(this.kanjiClikedDate.slice(0,4)) === false) {
        return true
      } else {
        return false
      }
    }  

  },
}
</script>

<style>
#that-day-syudy-time-comment {
  text-align: center;
  z-index: 10;
  font-size: 30px;
  margin: 240px 0 0 0; 
  width: 100%;
  letter-spacing: 0.05em;
}

.that-day-study-time-container {
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