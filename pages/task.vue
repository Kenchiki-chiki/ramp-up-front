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
                  <v-card-actions class="justify-center">
                    <input v-model="task1" type="text" class="task-form">
                  </v-card-actions>
                </v-card>
              </v-col>
              
              <v-col
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
                  <v-card-actions class="justify-center">
                    <input v-model="task2" type="text" class="task-form">
                  </v-card-actions>
                </v-card>
              </v-col>
              <v-col
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
                  <v-card-actions class="justify-center">
                    <input v-model="task3" type="text" class="task-form">
                  </v-card-actions>
                </v-card>
              </v-col>
              <v-col
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
                  <v-card-actions class="justify-center">
                    <input v-model="task4" type="text" class="task-form">
                  </v-card-actions>
                </v-card>
              </v-col>
              <v-col
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
                  <v-card-actions class="justify-center">
                    <input v-model="task5" type="text" class="task-form">
                  </v-card-actions>
                </v-card>
              </v-col>
              <v-col
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
                  <v-card-actions class="justify-center">
                    <input v-model="task6" type="text" class="task-form">
                  </v-card-actions>
                </v-card>
              </v-col>
              <v-col
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
                  <v-card-actions class="justify-center">
                    <input v-model="task7" type="text" class="task-form">
                  </v-card-actions>
                </v-card>
              </v-col>
              <v-col
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
                  <v-card-actions class="justify-center">
                    <input v-model="task8" type="text" class="task-form">
                  </v-card-actions>
                </v-card>
              </v-col>
              <v-col
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
                  <v-card-actions class="justify-center">
                    <input v-model="task9" type="text" class="task-form">
                  </v-card-actions>
                </v-card>
              </v-col>
              <v-col
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
                  <v-card-actions class="justify-center">
                    <input v-model="task10" type="text" class="task-form">
                  </v-card-actions>
                </v-card>
              </v-col>
              <v-col
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
                  <v-card-actions class="justify-center">
                    <input v-model="task11" type="text" class="task-form">
                  </v-card-actions>
                </v-card>
              </v-col>
              <v-col
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
                  <v-card-actions class="justify-center">
                    <input v-model="task12" type="text" class="task-form">
                  </v-card-actions>
                </v-card>
              </v-col>
              <v-col
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
                  <v-card-actions class="justify-center">
                    <input v-model="task13" type="text" class="task-form">
                  </v-card-actions>
                </v-card>
              </v-col>
              <v-col
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
                  <v-card-actions class="justify-center">
                    <input v-model="task14" type="text" class="task-form">
                  </v-card-actions>
                </v-card>
              </v-col>
              <v-col
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
                  <v-card-actions class="justify-center">
                    <input v-model="task15" type="text" class="task-form">
                  </v-card-actions>
                </v-card>
              </v-col>
              <v-col
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
                  <v-card-actions class="justify-center">
                    <input v-model="task16" type="text" class="task-form">
                  </v-card-actions>
                </v-card>
              </v-col>

              <v-col>
                <v-card-actions class="task-v-card-actions">
                  <v-btn
                    @click="saveTasks"
                    color="#666666"
                    class="white--text task-btn"
                  >
                    保存
                    <v-icon id="task-icon">fas fa-save</v-icon>  
                  </v-btn>
                </v-card-actions>
              </v-col>             

            </v-row>
          </v-container>
        </div>
    </div>
    <account/>
  </div>

  
</template>


<script>
import Topbar from '~/components/top_bar.vue'
import Navbar from '~/components/navbar.vue'
import Account from '~/components/account_icon.vue'
export default {
  middleware({ store, redirect }) {
    if(!store.$auth.loggedIn) {
      redirect('/sign_in');
    }
  },
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
    Topbar,
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
.task-form {
  color: white;
  border: none;
  text-align: center;
  outline: none;
  width: 100%;
  /* height: 100%; */
  height: 116px;
  /* resize: none; */
}

.v-card__subtitle, .v-card__text, .v-card__title {
    padding: 12px;
}
  
</style>