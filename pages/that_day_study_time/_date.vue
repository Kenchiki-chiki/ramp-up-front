<template>
  <div>
    <div class="comment">

      <div>{{ kanjiClikedDate }}の学習時間は</div>

      <v-container>
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
      clikedDate: this.$route.params.date,
    }
  },
  components: {
    Navbar,
    Account,
  },
  computed: {
    ...mapGetters({
      thatDayTotalStudyTimes: 'calendar/thatDayStudyTimes'
    }),
    kanjiClikedDate: function() {
      console.log('===clickedDate2===')
      const yaer = this.clikedDate.slice(0,4)
      const y ='年'
      const month = this.clikedDate.slice(4,6)
      const m ='月'
      const day = this.clikedDate.slice(6,8)
      const d ='日'
      const kanjiCharacter = yaer + y + month + m + day + d
      
      return kanjiCharacter.replace(/\b0+/, '')
    }

    
    // function() {
    //   return this.$route.params.date + this.clikedDate
    // }
  },
  created() {
    this.fetchStudyTimes()
    console.log('_date')
    console.log(this.$route.params.date)

  },
  methods: {
    async fetchStudyTimes() {
      await this.$store.dispatch('calendar/fetchThatDayStudyTimes', this.$route.params.date)
    },   

  },
}
</script>

<style>
  .comment {
    z-index: 10;
    font-size: 30px;
    position: absolute;
    top: 50px;
    right: 0px;
    left: 0px;
    margin: auto; 
    width: 100%;
    height: 105px;
    letter-spacing: 0.05em;
  }

  .container {
    display: flex;
    justify-content: center;
    margin: 70px auto;
  }

  .study-time-col {
    display: flex;
    justify-content: center;
  }

  /* .study-time-card {
    height: 60px;
  } */

  #study-time {
    margin: 0;
    font-size: 24px;
  }
  
</style>