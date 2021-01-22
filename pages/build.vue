<template>
  <div class="whole-wrapper">
    <Errors :errors="errors" />
    


     <div class="whole-content-wrapper">
       <Navbar />
     
    
    

    

      <div class="main-content-wrapper">
        <div class="comment">

          <div>一日お疲れさま。</div>
          <div>学習時間を入力しましょう。</div>
          <!-- <h2>ログイン状態:{{ $auth.loggedIn }}</h2> -->
          <!-- <p class="skill_name">{{ skillName[0] }}</p>
          <p class="skill_name">{{ skillName[1] }}</p> -->
        </div>
            
            <v-container>
              
              <v-row>
                <v-col v-for="(skill, index) in skills" class="skill-col" cols="12" sm="4" md="4">

                  <v-card width="300px" class="card">
                  <v-card-text class="flex-item">

                    <v-responsive
                      max-width="400"
                      class="skill_wrapper"
                    >
                    <div class="skill_wrapper">

                      <p>{{ skill.name }}</p>
                      <v-text-field
                        class="study_hours_form"
                        v-model="studyHours[index]"
                        type="number"
                        label="学習時間"
                        min="0"
                        max="24"
                        step="0.5"
                      ></v-text-field>

                      
                    </div>
                    </v-responsive>    

                  </v-card-text>

                </v-card>
                </v-col>
              </v-row>
            </v-container>
            <v-card-actions>
              <v-btn
                @click="onSubmit"
                color="#666666"
                class="white--text"
              >
                入力完了
              </v-btn>
            </v-card-actions>
      </div>
    
        
    </div>

    <account/>
    
    
  </div>
</template>



<script>
import { mapGetters } from 'vuex'
import Navbar from '~/components/navbar.vue'
import Account from '~/components/account_icon.vue'
import Error from '~/components/errors.vue'
export default {
  middleware({ store, redirect }) {
    if(!store.$auth.loggedIn) {
      redirect('/login');
    }
  },
  data() {
    return {
      studyHours: [],
      errors: []
    }
  },
  components: {
    Navbar,
    Account,
    Error
  },
  computed: {
    ...mapGetters({
      skills: 'skill/skills',
      // skillNames: 'skill/content'
    })
  },
  created() {
    this.fetchSkills()
  },
  methods: {
    async fetchSkills() {
      await this.$store.dispatch('skill/fetchSkills')
    },
    async onSubmit() {
      const params = { study_times: [] }
      this.skills.forEach((skill, index) => {
        params['study_times'].push({
          skill_id: skill.id,
          study_hour: this.studyHours[index]
        })
      })
      const res = await this.$store.dispatch('build/addStudyTimes', params)
      if (res.errors) {
        this.errors = res.errors
      } 
      else {
        this.$router.push('/study_time')
        
      }
    }
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


  .comment {
    z-index: 10;
    font-size: 30px;
    /* position: absolute;
    top: 70px;
    right: 0px;
    left: 0px; */
    /* margin: auto;  */
    margin: 70px 0 0 0 ;
    width: 100%;
    height: 105px;
    letter-spacing: 0.05em;
  }

  .container {
    display: flex;
    justify-content: center;
    margin: 100px auto;
  }

  .skill-col {
    display: flex;
    justify-content: center;
  }
  
</style>