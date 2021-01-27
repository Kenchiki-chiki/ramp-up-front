<template>
  <v-container>
    <Errors :errors="errors" />
    <v-card width="400px" class="mx-auto mt-5 skill-form">
      <v-card-title>
        <h1 class="display-1">
          スキルを設定しましょう。
        </h1>
      </v-card-title>
      <v-card-text>
        <v-form ref="form" lazy-validation>

          <v-row>

        <v-col
          cols="4"
        >
          <v-text-field
            v-model="skillName1"
            label="スキル 1"
            placeholder="(例)Vue"
            filled
          ></v-text-field>
        </v-col>
        <v-col
          cols="4"
        >
          <v-text-field
            v-model="skillName2"
            label="スキル 2"
            placeholder="(例)React"
            filled
          ></v-text-field>
        </v-col>
        <v-col
          cols="4"
        >
          <v-text-field
            v-model="skillName3"
            label="スキル 3"
            placeholder="(例)Angular"
            filled
          ></v-text-field>
        </v-col>
        <v-col
          cols="4"
        >
          <v-text-field
            v-model="skillName4"
            label="スキル 4"
            placeholder="(例)Rails"
            filled
          ></v-text-field>
        </v-col>
        <v-col
          cols="4"
        >
          <v-text-field
            v-model="skillName5"
            label="スキル 5"
            placeholder="(例)AWS"
            filled
          ></v-text-field>
        </v-col>
        <v-col
          cols="4"
        >
          <v-text-field
            v-model="skillName6"
            label="スキル 6"
            placeholder="(例)英語"
            filled
          ></v-text-field>
        </v-col>
          </v-row>
          
          
          
          <v-card-actions>
            <v-btn
              @click="onSubmit"
              color="#666666"
              class="white--text"
            >
              設定完了
            </v-btn>
          </v-card-actions>
        </v-form>
      </v-card-text>
    </v-card>
  </v-container>
</template>

<script>
export default {
  middleware({ store, redirect }) {
    if(store.$auth.loggedIn) {
      redirect('/build');
    }
  },
  data() {
    return{
      errors: [],
      skills: [],
      skillName1: "",
      skillName2: "",
      skillName3: "",
      skillName4: "",
      skillName5: "",
      skillName6: ""
    }
  },
  methods: {
    async onSubmit() {
      this.skills.push(...[this.skillName1,this.skillName2,this.skillName3,this.skillName4,this.skillName5,this.skillName6])
      const res = await this.$store.dispatch('skill/addSkills', this.skills)
      if (res.errors) {
        this.errors = res.errors
        this.skills = []
      } 
      else {
        this.$router.push('/build')     
      }  
    },   
    
  },  

}
</script>


<style>

</style>