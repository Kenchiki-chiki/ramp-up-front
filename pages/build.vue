<template>
  <div class="whole-wrapper">
    <Errors :errors="errors" />
    <Topbar />

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
                <v-flex xs12  px-3>
                  <div class=" skill-item">   
                    <p id="skill-title">{{ skill.name }}</p>
                    
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
                </v-flex>                   
              </v-col>              

              <v-col class="build-btn-col" cols="12">
                <v-card-actions class="build-v-card-actions">
                </v-card-actions>
                <v-btn
                  @click="onSubmit"
                  color="#616161"
                  class="white--text build-btn"
                >
                  入力完了
                </v-btn>                
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
import Topbar from '~/components/top_bar.vue'
import Navbar from '~/components/navbar.vue'
import Account from '~/components/account_icon.vue'
import Error from '~/components/errors.vue'
export default {
  middleware({ store, redirect }) {
    if(!store.$auth.loggedIn) {
      redirect('/sign_in');
    }
  },
  data() {
    return {
      studyHours: [],
      errors: []
    }
  },
  components: {
    Topbar,
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
.build-cantainer {
  margin: 60px auto 40px;
}

.skill-col {
  display: flex;
  justify-content: center;
}

.build-btn-col {
  position: relative;
}

.build-btn {
  position: absolute;
  top: 48px;
  right: 48px;
}

.skill-item {
  /* background:#1E1E1E; */
  /* background-color:#212121; */
  padding: 20px 10px 20px;
  margin-bottom: 15px;
  /* box-shadow: -1px 12px 25px rgba(119, 119, 119, 0.2); */
  box-shadow: -1px 3px 12px rgba(119, 119, 119, 0.2);
}

#skill-title {
  display: block;
  margin-block-start: 1.33em;
  margin-block-end: 1.33em;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
  font-weight: bold;
}
</style>