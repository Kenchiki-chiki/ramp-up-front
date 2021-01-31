<template>
    <div class="whole-wrapper">
      <Errors :errors="errors" />
      <Topbar />
      <div class="whole-content-wrapper">
        <Navbar />

      <div class="main-content-wrapper">
        <div class="comment">

          <div class="skill-edit-title-comment">スキルの追加や削除ができます。</div>
          <div class="skill-add-btn-wrapper">
            <Add />       
          </div>

        </div>

          <v-container id="skill_edit_conteiner">
            <v-row class="skill-row">
              <v-col v-for="skill in skills" :key="skill.id" class="skill-edit-col" cols="12" sm="4" md="3">
                <v-flex xs12  px-3>
                  <div class="skill-edit-item skill-edit-wrapper">   
                    <p id="skill-edit-title">{{ skill.name }}</p>
                    <v-icon id="delete-skill-icon" class="skill-wrapper-flex-item" @click="deleteSkillBtn(skill.id)">fa fa-trash-alt</v-icon>                      
                  </div>
                </v-flex>      

              </v-col>
            </v-row>
          </v-container>
          

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
import Topbar from '~/components/top_bar.vue'
import Navbar from '~/components/navbar.vue'
import Account from '~/components/account_icon.vue'
import Error from '~/components/errors.vue'
import Add from '~/components/add_skill_modal.vue'
export default {
  middleware({ store, redirect }) {
    if(!store.$auth.loggedIn) {
      redirect('/sign_in');
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
    Topbar,
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

<style scoped>
.skill-add-btn-wrapper {
  margin: 3px 0px 0 0 ;
  height: 30px;
  display: flex;
  justify-content: center;
}
#skill-add-btn {
  padding: 20px 10px;
  background-color: #424242;
}
#add-skill-icon {
  margin: 0 4px 0 0;
  font-size: 1.5em;
}
.skill-add-comment {
  margin: 0px 0 0 4px;
}

#skill_edit_conteiner {
  display: flex;
  justify-content: center;
  margin: 60px auto;
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

.skill-edit-wrapper:last-child {
  /* justify-content: flex-end; */
  /* justify-content: space-between; */
}

#skill-wrapper-flex-item {
  margin: 10px 0px 10px;
  padding: 0px 20px 0 5px;
}

#skill-wrapper-flex-item:last-child {
  margin: 0 0 0 10px;
  padding: 0px 5px;
  justify-content: flex-end;
}

#delete-skill-icon {
  font-size: 1.5em;
  position: absolute;
    top: 41px;
    right: 20px;
}

.new-skill-form {
  width: 250px;
  margin: 0 auto;
}

.skill-edit-item {
  /* background:#1E1E1E; */
  /* background-color:#212121; */
  padding: 20px 10px 20px;
  margin-bottom: 15px;
  /* box-shadow: -1px 12px 25px rgba(119, 119, 119, 0.2); */
  box-shadow: -1px 3px 12px rgba(119, 119, 119, 0.2);
  position: relative;
}

#skill-edit-title {
  display: block;
  margin-block-start: 1.33em;
  margin-block-end: 1.33em;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
  font-weight: bold;
}

</style>