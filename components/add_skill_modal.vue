<template>
  <v-row justify="center">
    <Errors :errors="errors" />
    <v-btn
    id="skill-add-btn"
      color="grey darken-4"
      dark
      @click.stop="dialog = true"
    >
      <v-icon id="add-skill-icon">fas fa-plus</v-icon>
      <div class="skill-add-comment">追加</div>
    </v-btn>

    <v-dialog
      v-model="dialog"
      max-width="290"
    >
      <v-card>
        <v-card-title class="headline">
          スキル追加
        </v-card-title>

        <v-card-text>スキル名を入力してください。</v-card-text>
        <v-text-field
          v-model="newSkillInputName"
          class="new-skill-form"
          type=""
          label="新しいスキル名"
          style=""
        >
        </v-text-field>
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
            @click="addNewSkill"
          >
            追加
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-row>
</template>

<script>
  export default {
    data () {
      return {
        errors: [],
        dialog: false,
        newSkillName: [],
        newSkillInputName: ""
        
      }
    },
    methods: {
      async addNewSkill() {
        this.newSkillName.push(...[this.newSkillInputName])
        const res = await this.$store.dispatch('skill/addSkills', this.newSkillName)
        if (res.errors) {
          this.errors = res.errors
          this.newSkillName = []
        } 
        else {        
          this.$store.dispatch(`message/setContent`, {
          content: 'スキルを追加しました',
          timeout: 2000
          })
        }  
        this.dialog = false
        this.newSkillName = []
          this.newSkillInputName = ""
        this.fetchSkills()
      },
      async fetchSkills() {
        await this.$store.dispatch('skill/fetchSkills')
    }
    }
  }
</script>

<style>
.new-skill-form {
  width: 250px;
  margin: 0 auto;
}
#skill-add-btn {
  background-color: #424242 !important;
}
.skill-add-comment {
  margin: 0 0 0 3px;
}
</style>