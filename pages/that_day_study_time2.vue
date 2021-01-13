<template>
  <div>
    <div class="comment">

      <div>◯月◯日の学習時間は</div>

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
      
    }
  },
  components: {
    Navbar,
    Account,
  },
  computed: {
    ...mapGetters({
      thatDayTotalStudyTimes: 'calendar/thatDayStudyTimes'
    })
  },
  // created() {
  //   this.fetchStudyTimes()
  // },
  // methods: {
  //   async fetchStudyTimes() {
  //     await this.$store.dispatch('calendar/fetchThatDayStudyTimes')
  //   },
  // }
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