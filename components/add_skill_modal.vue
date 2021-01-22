<template>
  <v-row justify="center">
    <v-btn
    id="skill_add_btn"
      color="grey darken-4"
      dark
      @click.stop="dialog = true"
    >
      <v-icon class="skill_add_icon">fas fa-plus</v-icon>
      <div class="skill_add_comment">追加</div>
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
          class="new_skill_form"
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
        dialog: false,
        newSkillName: [],
        newSkillInputName: ""
        
      }
    },
    methods: {
      async addNewSkill() {
        this.newSkillName.push(...[this.newSkillInputName])
        console.log(this.newSkillName)
        await this.$store.dispatch('skill/addSkills', this.newSkillName)
        this.newSkillName = []
        this.newSkillInputName = []
        this.dialog = false
        this.$store.dispatch(`message/setContent`, {
          content: 'スキルを追加しました',
          timeout: 2000
        })
        this.fetchSkills()
      },
      async fetchSkills() {
        await this.$store.dispatch('skill/fetchSkills')
    }
    }
  }
</script>