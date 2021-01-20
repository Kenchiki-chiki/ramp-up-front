<template>
  <div>
    <Errors :errors="errors" />
    <div class="comment">
      
      <account/>
      <!-- <div>明日のタスクを設定しましょう</div> -->

    </div>

    <v-container>
      <v-row class="task-row">
        <v-col class="task-col" cols="12" sm="4" md="3">
          <v-responsive
            max-width="400"
            class="task_wrapper"
          >
          <div class="task_wrapper">
            
            <form class="box"><input v-model="task1" type="text" class="task-form"></form>
            
          </div>
          </v-responsive>    
        </v-col>
        <v-col class="task-col" cols="12" sm="4" md="3">
          <v-responsive
            max-width="400"
            class="task_wrapper"
          >
          <div class="task_wrapper">
            <form class="box"><input v-model="task2" type="text" class="task-form"></form>           
          </div>
          </v-responsive>    
        </v-col>
        <v-col class="task-col" cols="12" sm="4" md="3">
          <v-responsive
            max-width="400"
            class="task_wrapper"
          >
          <div class="task_wrapper">
            <form class="box"><input v-model="task3" type="text" class="task-form"></form>           
          </div>
          </v-responsive>    
        </v-col>
        <v-col class="task-col" cols="12" sm="4" md="3">
          <v-responsive
            max-width="400"
            class="task_wrapper"
          >
          <div class="task_wrapper">
            <form class="box"><input v-model="task4" type="text" class="task-form"></form>           
          </div>
          </v-responsive>    
        </v-col>
        <v-col class="task-col" cols="12" sm="4" md="3">
          <v-responsive
            max-width="400"
            class="task_wrapper"
          >
          <div class="task_wrapper">
            <form class="box"><input v-model="task5" type="text" class="task-form"></form>           
          </div>
          </v-responsive>    
        </v-col>
        <v-col class="task-col" cols="12" sm="4" md="3">
          <v-responsive
            max-width="400"
            class="task_wrapper"
          >
          <div class="task_wrapper">
            <form class="box"><input v-model="task6" type="text" class="task-form"></form>           
          </div>
          </v-responsive>    
        </v-col>
        <v-col class="task-col" cols="12" sm="4" md="3">
          <v-responsive
            max-width="400"
            class="task_wrapper"
          >
          <div class="task_wrapper">
            <form class="box"><input v-model="task7" type="text" class="task-form"></form>           
          </div>
          </v-responsive>    
        </v-col>
        <v-col class="task-col" cols="12" sm="4" md="3">
          <v-responsive
            max-width="400"
            class="task_wrapper"
          >
          <div class="task_wrapper">
            <form class="box"><input v-model="task8" type="text" class="task-form"></form>           
          </div>
          </v-responsive>    
        </v-col>
        <v-col class="task-col" cols="12" sm="4" md="3">
          <v-responsive
            max-width="400"
            class="task_wrapper"
          >
          <div class="task_wrapper">
            <form class="box"><input v-model="task9" type="text" class="task-form"></form>           
          </div>
          </v-responsive>    
        </v-col>
        <v-col class="task-col" cols="12" sm="4" md="3">
          <v-responsive
            max-width="400"
            class="task_wrapper"
          >
          <div class="task_wrapper">
            <form class="box"><input v-model="task10" type="text" class="task-form"></form>           
          </div>
          </v-responsive>    
        </v-col>
        <v-col class="task-col" cols="12" sm="4" md="3">
          <v-responsive
            max-width="400"
            class="task_wrapper"
          >
          <div class="task_wrapper">
            <form class="box"><input v-model="task11" type="text" class="task-form"></form>           
          </div>
          </v-responsive>    
        </v-col>
        <v-col class="task-col" cols="12" sm="4" md="3">
          <v-responsive
            max-width="400"
            class="task_wrapper"
          >
          <div class="task_wrapper">
            <form class="box"><input v-model="task12" type="text" class="task-form"></form>           
          </div>
          </v-responsive>    
        </v-col>
        <v-col class="task-col" cols="12" sm="4" md="3">
          <v-responsive
            max-width="400"
            class="task_wrapper"
          >
          <div class="task_wrapper">
            <form class="box"><input v-model="task13" type="text" class="task-form"></form>           
          </div>
          </v-responsive>    
        </v-col>
        <v-col class="task-col" cols="12" sm="4" md="3">
          <v-responsive
            max-width="400"
            class="task_wrapper"
          >
          <div class="task_wrapper">
            <form class="box"><input v-model="task14" type="text" class="task-form"></form>           
          </div>
          </v-responsive>    
        </v-col>
        <v-col class="task-col" cols="12" sm="4" md="3">
          <v-responsive
            max-width="400"
            class="task_wrapper"
          >
          <div class="task_wrapper">
            <form class="box"><input v-model="task15" type="text" class="task-form"></form>           
          </div>
          </v-responsive>    
        </v-col>
        <v-col class="task-col" cols="12" sm="4" md="3">
          <v-responsive
            max-width="400"
            class="task_wrapper"
          >
          <div class="task_wrapper">
            <form class="box"><input v-model="task16" type="text" class="task-form"></form>           
          </div>
          </v-responsive>    
        </v-col>
        


      </v-row>
    </v-container>

    <v-card-actions>
      <v-btn
        @click="saveTasks"
        color="#666666"
        class="white--text"
      >
        保存
      </v-btn>
    </v-card-actions>
    <!-- <v-card-actions>
      <v-btn
        @click="deleteTasks"
        color="#666666"
        class="white--text"
      >
        削除
      </v-btn>
    </v-card-actions> -->
  </div>

  
</template>


<script>
import Navbar from '~/components/navbar.vue'
import Account from '~/components/account_icon.vue'
export default {
  data() {
    return {
      errors: [],
      tasks: [],
      task1: "",
      task2: "",
      task3: "",
      task4: "",
      task5: "",
      task6: "",
      task7: "",
      task8: "",
      task9: "",
      task10: "",
      task11: "",
      task12: "",
      task13: "",
      task14: "",
      task15: "",
      task16: "",
    }
  },
  components: {
    Navbar,
    Account
  },
  created() {
    this.fetchTasks()
  },
  methods: {
    async saveTasks() {
      this.tasks.push(...[this.task1,this.task2,this.task3,this.task4,this.task5,this.task6,this.task7,this.task8,this.task9,this.task10,this.task11,this.task12,this.task13,this.task14,this.task15,this.task16])      
      const res = await this.$store.dispatch('task/saveTasks', this.tasks)
      if (res.errors) {
        this.errors = res.errors
        this.tasks = []
      } 
      else {
        this.$router.push('/saved_task')     
      }
      
    },
    async fetchTasks() {
      const res = await this.$store.dispatch('task/fetchTasks')
      if (res.length !== 0) this.$router.push('/saved_task')
    },
    async deleteTasks() {
      await this.$store.dispatch('task/deleteTasks')
    }
  }
  



}
</script>

<style>
.container {
  display: flex;
  justify-content: center;
  margin: 200px auto;
}

.task-col {
  display: flex;
  justify-content: center;
  margin-top: 20px;
}

.task_wrapper {
  display: flex;
  justify-content: center;
}

.box {
  border: 2px solid #333;
  /* border: 6px solid #333; */
  height: 130px;
} 

.task-col form {
  border-radius: 240px 15px 100px 15px / 15px 200px 15px 185px;
  padding: 4%;
  width: 260px; 
  height: 130px; 
  margin: 10px;
}

.task-form {
  color: white;
  border: none;
  text-align: center;
  /* outline: none; */
  width: 100%;
  height: 100%;
  /* resize: none; */
}
  
</style>