<template>
  <div class="whole-wrapper">
    <Errors :errors="errors" />

     <div class="whole-content-wrapper">
       <Navbar />

        <div class="main-content-wrapper">
          <div class="non-flex-comment">
            <div>一日お疲れさまです。</div>
            <div>学習時間を入力しましょう。</div>       
          </div>
            
          <v-container class="build-cantainer">
            
            <v-row>
              <v-col v-for="(skill, index) in skills" :key="skill.id" class="skill-col" cols="12" sm="4" md="4">

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
              <v-col class="build-btn-col" cols="12">
                <v-card-actions class="build-v-card-actions">
                  <v-btn
                    @click="onSubmit"
                    color="#666666"
                    class="white--text build-btn"
                  >
                    入力完了
                  </v-btn>
                </v-card-actions>
              </v-col>
            </v-row>
          </v-container>
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
      skills: 'skill/skills'
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
  },
}
</script>

<style>
.non-flex-comment {
  text-align: center;
  z-index: 10;
  font-size: 30px;
  margin: 70px 0 0 0 ; 
  width: 100%;
  letter-spacing: 0.05em;
}

.build-cantainer {
  /* display: flex;
  justify-content: center; */
  margin: 100px auto 40px;
}

.skill-col {
  display: flex;
  justify-content: center;
}

.build-v-card-actions{
  display: flex;
  justify-content: flex-end;
}

.build-btn-col {
  position: relative;
}

.build-btn {
  position: absolute;
  top: 48px;
  right: 48px;
}
  
</style>