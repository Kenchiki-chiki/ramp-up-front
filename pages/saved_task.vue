<template>
<div class="whole-wrapper">
    <Errors :errors="errors" />
    <Topbar />
    <div class="whole-content-wrapper">
      <Navbar />
      <div class="main-content-wrapper">
        <div class="comment">            
          <div>明日のタスクを設定しましょう。</div>
        </div>

        <v-container id="task-container">
          <v-row>

            <v-col
                class="task-item"
                v-for="task in tasks" :key="task.id"
                cols="12"
                sm="6"
                md="3"
              >
                <v-card
                  class="mx-auto text-center task-item-card"
                  color="#1f1f22"
                  dark
                >
                  <v-card-text>
                    <div class="display-1 font-weight-thin">
                      
                    </div>
                  </v-card-text>
                  <v-divider></v-divider>
                  <v-card-actions class="justify-center" id="saved-task-v-card-actions">
                    <form class="saved-box">
                      <div class="box-item" id="saved-task-form">
                        {{ task.name }}
                        <v-icon small id="edit-task-icon" @click="editTaskBtn(task.id)">fas fa-edit</v-icon>
                      </div>
                    </form>          
                  </v-card-actions>
                </v-card>
              </v-col>

            <v-col>
            <v-card-actions class="task-v-card-actions">
              <v-btn
                @click="deleteTasks"
                color="#666666"
                class="white--text task-btn"
              >
                削除
                <v-icon id="task-icon">fa fa-trash-alt</v-icon>   
              </v-btn>
            </v-card-actions>
            </v-col>    
          </v-row>
        </v-container>

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
      errors: [],
      task: [],
      taskID: [],
      editTaskName: "",
      dialog: false
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
      tasks: 'task/tasks'
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
.saved-box {
  /* display: flex;
  justify-content: center;
  flex-direction: column; */
  height: 116px;
} 

.v-card__subtitle, .v-card__text, .v-card__title {
    padding: 12px;
}

#saved-task-v-card-actions {
  margin: 0 0 0 6px;
}

#saved-task-form {
  color: white;
  border: none;
  text-align: initial !important;
  /* text-align: center; */
  /* width: 100%; */
  height: 100%;
  /* resize: none; */
  display: flex;
  justify-content: center;
  flex-direction: column;
}

.edit_task_form {
  width: 250px;
  margin: 0 auto;
}

#edit-task-icon {
  font-size: 1.2em;
  position: absolute;
  top: 3px;
  right: 0px;
}
  
</style>