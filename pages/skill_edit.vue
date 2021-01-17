<template>
  <div class="wrapper">
    <!-- <study/> -->
    

    <div class="comment">

      <div class="skill_edit_title_comment">スキルを編集できます。</div>
      <div class="skill_add_btn_wrapper">
        <Add />       
      </div>

    </div>


        <v-container>
          <v-row class="skill-row">
            <v-col v-for="(skill, index) in skills" class="skill-edit-col" cols="12" sm="4" md="3">

              <v-card width="200px" class="skill_edit_card">
              <v-card-text class="skill_edit_flex-item" >

                <v-responsive
                  max-width="400"
                  class="skill_wrapper"
                >
                <div class="skill_wrapper">

                  <p id="skill_wrapper-flex-item">{{ skill.name }}</p>
                  <!-- <v-icon class="skill_wrapper-flex-item" @click="deleteSkill(skill.id)">fa fa-trash-alt</v-icon>                  -->
                  <v-icon class="skill_wrapper-flex-item" @click="deleteSkillBtn(skill.id)">fa fa-trash-alt</v-icon>   
                  
                </div>
                </v-responsive>    

              </v-card-text>

            </v-card>
            </v-col>
          </v-row>
        </v-container>
        <v-card-actions>
        </v-card-actions>
 
    <account/>

    <v-row justify="center">  

    <v-dialog
      v-model="dialog"
      max-width="290"
    >
      <v-card>
        <v-card-title class="headline">
          スキル削除
        </v-card-title>

        <v-card-text>本当に削除しますか？</v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>

          <v-btn
            color="white"
            text
            @click="dialog = false"
          >
            キャンセル
          </v-btn>

          <v-btn
            color="white"
            text
            @click="deleteSkill(skillID)"
          >
            削除
          </v-btn>
          <!-- {{ this.skill.id }} -->
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-row>
    
  </div>
</template>


<script>
import { mapGetters } from 'vuex'
import Navbar from '~/components/navbar.vue'
import Account from '~/components/account_icon.vue'
import Study from '~/components/study_hours.vue'
import Error from '~/components/errors.vue'
import Add from '~/components/add_skill_modal.vue'
export default {
  middleware({ store, redirect }) {
    if(!store.$auth.loggedIn) {
      redirect('/login');
    }
  },
  data() {
    return {
      errors: [],
      skillID: [],
      dialog: false
    }
  },
  components: {
    Navbar,
    Account,
    Study,
    Error,
    Add
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
    async deleteSkill(skillID) {
      console.log('===0===')
      console.log(skillID)
      await this.$store.dispatch('skill/deleteSkill', skillID)
      this.dialog = false 
      this.fetchSkills()
    },
    deleteSkillBtn(skillID) {
      this.dialog = true
      this.skillID = []
      this.skillID = skillID
    }
  }
}
</script>

<style>
.comment {
  z-index: 10;
  position: absolute;
  top: 70px;
  right: 0px;
  left: 0px;
  margin: auto; 
  width: 100%;
  height: 105px;
  letter-spacing: 0.05em;
  display: flex;
  justify-content: center;
}
  .skill_edit_title_comment {   
    font-size: 30px;
  }
  .skill_add_btn_wrapper {
    margin: 3px 0px 0 0 ;
    height: 30px;
    display: flex;
    justify-content: center;
  }
  #skill_add_btn {
    /* margin: 0 0 0 30px; */
    padding: 20px 10px;
  }
  .skill_add_icon {
    margin: 0 4px 0 0;
  }
  .skill_add_comment {
    margin: 0px 0 0 4px;
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

  /* .skill-row {
    justify-content: space-between;
  } */

  .skill-edit-col {
    display: flex;
    /* justify-content: flex-start; */
    justify-content: center;
    margin-top: 20px;
  }

  /* .skill-col::after {
    display: block;
    content:"";
    width: 300px;
  } */

  /* .skill_edit_card {
    margin: 30px 50px 0 0;
  } */

  .skill_edit_flex-item {
    padding: 8px 16px;
    height: 58px;
  }

  .skill_wrapper {
    display: flex;
    justify-content: center;
  }

  #skill_wrapper-flex-item {
    margin: 10px 0px 10px;
	  padding: 0px 20px 0 5px;
  }

  #skill_wrapper-flex-item:last-child {
    margin: 0 0 0 10px;
	  padding: 0px 5px;
    /* justify-content: end; */
  }

  .new_skill_form {
    width: 250px;
    margin: 0 auto;
  }

  /* #skill_wrapper-flex-item p {
    margin: 10px auto 10px;
	  padding: 0px 5px;
  } */

  /* .v-application p  {
    margin-bottom: 0px;
  } */

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