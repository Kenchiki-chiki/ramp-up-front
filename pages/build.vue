<template>
  <div>
    <!-- <study/> -->
    <Errors :errors="errors" />
    <div class="comment">

      <div>一日お疲れさま。</div>
      <div>学習時間を入力しましょう。</div>
      <!-- <h2>ログイン状態:{{ $auth.loggedIn }}</h2> -->
      <!-- <p class="skill_name">{{ skillName[0] }}</p>
      <p class="skill_name">{{ skillName[1] }}</p> -->
    </div>

    <!-- <div>

    </div> -->
    
        <!-- <div class="flex-container"> -->
        
        <v-container>
          <v-row>
            <v-col v-for="(skill, index) in skills" class="skill-col">

              <v-card width="300px" class="card">
              <v-card-text class="flex-item" cols="12" sm="6" md="4">

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
        <!-- </div> -->
      

      
      

        <!-- <li v-for="skill in skillName">{{ skill }}</li> -->
      
    
    
    <account/>
    
  </div>
</template>



<script>
import { mapGetters } from 'vuex'
import Navbar from '~/components/navbar.vue'
import Account from '~/components/account_icon.vue'
import Study from '~/components/study_hours.vue'
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
    Study,
    Error
  },
  computed: {
    ...mapGetters({
      skills: 'skill/skills',
      // skillNames: 'skill/content'
    })
  },
  created() {
    // console.log('===1===')
    this.fetchSkills()
  },
  methods: {
    async fetchSkills() {
      // console.log('===2===')
      await this.$store.dispatch('skill/fetchSkills')
    },
    async onSubmit() {
      console.log('===1===')
      const params = { study_times: [] }
      this.skills.forEach((skill, index) => {
        params['study_times'].push({
          skill_id: skill.id,
          study_hour: this.studyHours[index]
        })
      })
      const res = await this.$store.dispatch('build/addStudyTimes', params)
      console.log(res)
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
  .comment {
    z-index: 10;
    font-size: 30px;
    position: absolute;
    top: 70px;
    right: 0px;
    left: 0px;
    margin: auto; 
    width: 100%;
    height: 105px;
    letter-spacing: 0.05em;
  }

  /* .container {
    margin: 20px 0 0 0 ;
  } */

  .container {
    display: flex;
    justify-content: center;
    /* flex-direction: row; */
    /* flex-wrap: wrap;  */
    /* height: 100vh; */
    /* position: absolute;
    top: 300px;
    left:100px; */
    margin: 200px auto;
  }
  .skill-col {
    display: flex;
    /* justify-content: flex-start; */
    justify-content: center;
    margin: 0 0 0 24px;
  }

  /* .card {
    
	  padding: 0 0 10px 0;
	  
	
  }
  .flex-item {
    height: 100px;
    margin: 30px 0 0 0px;
	  padding: 10px 15px;
	  box-sizing: border-box;
	
  } */

  /* .study_hours_form {
    width: 100px;
  } */

  /* .v-responsive__content {
    display: inline;
  } */

  /* .skill_name {
    height: 100px;
  } */
</style>