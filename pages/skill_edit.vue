<template>
  <div>
    <div class="whole-wrapper">
      <Errors :errors="errors" />
      <div class="whole-content-wrapper">
        <Navbar />

      <div class="main-content-wrapper">
        <div class="comment">

          <div class="skill-edit-title-comment">スキルの追加や削除ができます。</div>
          <div class="skill-add-btn-wrapper">
            <Add />       
          </div>

        </div>

          <v-container>
            <v-row class="skill-row">
              <v-col v-for="(skill, index) in skills" class="skill-edit-col" cols="12" sm="4" md="3">

                <v-card width="200px" class="skill_edit_card">
                <v-card-text class="skill-edit-flex-item" >

                  <v-responsive
                    max-width="400"
                    class="skill-edit-wrapper"
                  >
                  <div class="skill-edit-wrapper">

                    <p id="skill-wrapper-flex-item">{{ skill.name }}</p>
                    <v-icon id="delete-skill-icon" class="skill-wrapper-flex-item" @click="deleteSkillBtn(skill.id)">fa fa-trash-alt</v-icon>   
                    
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


      <account/>

    </div>

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
    Error,
    Add
  },
  computed: {
    ...mapGetters({
      skills: 'skill/skills',
    })
  },
  created() {
    this.fetchSkills()
  },
  methods: {
    async fetchSkills() {
      await this.$store.dispatch('skill/fetchSkills')
    },
    async deleteSkill(skillID) {
      await this.$store.dispatch('skill/deleteSkill', skillID)
      this.dialog = false 
      this.$store.dispatch(`message/setContent`, {
        content: 'スキルを削除しました',
        timeout: 2000
      })
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
  margin: 70px 0 0 0;
  width: 100%;
  letter-spacing: 0.05em;
  display: flex;
  justify-content: center;
}
  .skill-edit-title-comment {   
    font-size: 30px;
  }
  .skill-add-btn-wrapper {
    margin: 3px 0px 0 0 ;
    height: 30px;
    display: flex;
    justify-content: center;
  }
  #skill-add-btn {
    padding: 20px 10px;
  }
  #add-skill-icon {
    margin: 0 4px 0 0;
    font-size: 1.5em;
  }
  .skill-add-comment {
    margin: 0px 0 0 4px;
  }

  .container {
    display: flex;
    justify-content: center;
    margin: 100px auto;
  }

  .skill-edit-col {
    display: flex;
    justify-content: center;
    margin-top: 20px;
  }

  .skill-edit-flex-item {
    padding: 8px 16px;
    /* height: 58px; */
  }

  .skill-edit-wrapper {
    display: flex;
    justify-content: center;
  }

  #skill-wrapper-flex-item {
    margin: 10px 0px 10px;
	  padding: 0px 20px 0 5px;
  }

  #skill-wrapper-flex-item:last-child {
    margin: 0 0 0 10px;
	  padding: 0px 5px;
  }

  #delete-skill-icon {
    font-size: 1.5em;
  }

  .new-skill-form {
    width: 250px;
    margin: 0 auto;
  }

  .v-dialog {
    margin-left: 290px;
  }

</style>