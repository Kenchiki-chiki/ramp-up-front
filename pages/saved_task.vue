<template>
  <!-- <div>
    <Errors :errors="errors" />
    <div class="comment">
      
      <account/> -->
      <!-- <div>明日のタスクを設定しましょう(保存後)</div> -->

    <!-- </div>

    <v-container>
      <v-row class="task-row">
        <v-col v-for="(task, index) in tasks" class="task-col" cols="12" sm="4" md="3">
          <v-responsive
            max-width="400"
            class="task_wrapper"
          >
          <div class="task_wrapper">

            <form class="box">
              <div class="box-item" id="task_wrapper-flex-item">
                {{ task.name }}
                <v-icon class="task_wrapper-flex-item" @click="editTaskBtn(task.id)">fas fa-edit</v-icon>
              </div>
            </form>          
            
          </div>
          </v-responsive>    
        </v-col>

      </v-row>
    </v-container> -->

    <!-- <v-card-actions>
      <v-btn
        @click=""
        color="#666666"
        class="white--text"
      >
        保存
      </v-btn>
    </v-card-actions>
    <v-card-actions>
      <v-btn
        @click="deleteTasks"
        color="#666666"
        class="white--text"
      >
        削除
      </v-btn>
    </v-card-actions>

    <v-row justify="center">  

      <v-dialog
        v-model="dialog"
        max-width="290"
      >
        <v-card>
          <v-card-title class="headline">
            タスク編集
          </v-card-title>

          <v-card-text>タスクを編集できます。</v-card-text>
          <v-text-field
            v-model="editTaskName"
            class="edit_task_form"
            type=""
            label=""
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
              @click="editTask(taskID)"
            >
              更新
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </v-row> -->

  <!-- </div> -->



<div class="whole-wrapper">
    <Errors :errors="errors" />
    <div class="whole-content-wrapper">
      <Navbar />
      <div class="main-content-wrapper">
        <div class="comment">
            
          <div>明日のタスクを設定しましょう(保存後)</div>

        </div>

        <v-container class="saved-task-container">
          <v-row>
            <v-col v-for="(task, index) in tasks" class="" cols="12" sm="6" md="3">
              
              <v-card height="140px" id="saved-task-v-card">
                <v-card-title class="blue white--text">
                  <!-- <v-icon id="edit-task-icon2" @click="editTaskBtn(task.id)">fas fa-edit</v-icon> -->
                  <span class="headline"></span>
                  <v-spacer></v-spacer>
                </v-card-title>
                <form class="saved-box">
                  <div class="box-item saved-task-form" id="task_wrapper-flex-item">
                    {{ task.name }}
                    <v-icon id="edit-task-icon" @click="editTaskBtn(task.id)">fas fa-edit</v-icon>
                    <!-- <v-icon class="" @click="editTaskBtn(task.id)" v-text="'mdi-circle-edit-outline'"></v-icon> -->
                  </div>
                </form>          

              </v-card>

                
              
              
            </v-col>

          </v-row>
        </v-container>
        <v-card-actions class="saved-task-v-card-actions">
        <v-btn
          @click="deleteTasks"
          color="#666666"
          class="white--text delete-task-btn"
        >
          削除
          <v-icon id="delete-task-icon">fa fa-trash-alt</v-icon>   
        </v-btn>
      </v-card-actions>

    <v-row justify="center">  

      <v-dialog
        v-model="dialog"
        max-width="290"
      >
        <v-card>
          <v-card-title class="headline">
            タスク編集
          </v-card-title>

          <v-card-text>タスクを編集できます。</v-card-text>
          <v-text-field
            v-model="editTaskName"
            class="edit_task_form"
            type=""
            label=""
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
              @click="editTask(taskID)"
            >
              更新
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </v-row>
        
      </div>
    </div>
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
      errors: [],
      task: [],
      taskID: [],
      editTaskName: "",
      dialog: false
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
      tasks: 'task/tasks',
      // skillNames: 'skill/content'
    })
  },
  created() {
    this.fetchTasks()
  },
  methods: {
    async fetchTasks() {
      await this.$store.dispatch('task/fetchTasks')
    },
    async deleteTasks() {
      await this.$store.dispatch('task/deleteTasks')
      this.fetchTasks()
      this.$router.push('/task')
    },
    async editTask() {
      this.task = []
      this.task.push(...[this.taskID,this.editTaskName])
      const res = await this.$store.dispatch('task/editTask', this.task)
      if (res.errors) {
        this.errors = []
        this.errors = res.errors
      } else{
        this.errors = []
      }
      this.dialog = false
      // this.editTaskName = "" 
      this.fetchTasks()
    },
    async editTaskBtn(taskID) {
      this.taskID = taskID
      const res = await this.$store.dispatch('task/fetchEditTask', this.taskID)
      this.editTaskName = res.name
      this.taskID = []      
      this.taskID = res.id
      this.dialog = true
    },
  }
}
</script>

<style>
.whole-wrapper {
  height: 100vh;
}

.whole-content-wrapper {
  display: flex;
  height: 100vh;
}

.main-content-wrapper {
  width: 100%;
}

.comment {
  z-index: 10;
  font-size: 30px;
  margin: 70px 0 0 0;
  width: 100%;
  letter-spacing: 0.05em;
  display: flex;
  justify-content: center;
}

.saved-task-container {
  display: flex;
  justify-content: center;
  margin: 70px auto 0px;
}

/* .task-col {
  display: flex;
  justify-content: center;
  margin-top: 20px;
} */

/* .task_wrapper {
  display: flex;
  justify-content: center;
} */

.saved-box {
  /* display: flex;
  justify-content: center;
  flex-direction: column; */
  /* border: 2px solid #333; */
  /* border: 6px solid #333; */
  height: 116px;
} 

/* .box-item {
  text-align: center;
  
} */

/* .task-col form {
  border-radius: 240px 15px 100px 15px / 15px 200px 15px 185px;
  padding: 4%;
  width: 260px; 
  height: 130px; 
  margin: 10px;
} */

.v-card__subtitle, .v-card__text, .v-card__title {
    padding: 12px;
}

#saved-task-v-card {
  position: relative;
}

.saved-task-form {
  color: white;
  border: none;
  text-align: center;
  /* outline: none; */
  /* width: 100%; */
  height: 100%;
  
  /* resize: none; */
  display: flex;
  justify-content: center;
  /* justify-content: flex-end; */
  flex-direction: column;
}

.edit_task_form {
  width: 250px;
  margin: 0 auto;
}

#edit-task-icon {
  font-size: 1.2em;
  position: absolute;
  top: 2px;
  right: 0px;
  /* align-self: flex-end; */
  /* margin-top: auto; */
}

.saved-task-v-card-actions {
  display: flex;
  justify-content: flex-end;
  margin: 0 6px 0 0;
}

.v-dialog {
  margin-left: 290px;
}

#delete-task-icon {
  font-size: 1.2em;
  margin-left: 4px;
}
  
</style>