<template>
  <!-- <div class="whole-wrapper">
    <Errors :errors="errors" />

    <div class="whole-content-wrapper">
      <Navbar />

      <div class="main-content-wrapper">
        <div class="comment">
          
          
          <div>明日のタスクを設定しましょう。</div>

        </div>

        <v-container>
          <v-row class="task-row" style="height: 600px;">
            <v-col class="task-col" cols="12" sm="4" lg="3">
              <v-responsive
                max-width="400"
                class="task_wrapper"
              >
              <div class="task_wrapper">
                
                <form class="box"><div class="box-bar"></div><input v-model="task1" type="text" class="task-form"></form>
                
              </div>
              </v-responsive>    
            </v-col>
            <v-col class="task-col" cols="12" sm="4" lg="3">
              <v-responsive
                max-width="400"
                class="task_wrapper"
              >
              <div class="task_wrapper">
                <form class="box"><input v-model="task2" type="text" class="task-form"></form>           
              </div>
              </v-responsive>    
            </v-col>
            <v-col class="task-col" cols="12" sm="4" lg="3">
              <v-responsive
                max-width="400"
                class="task_wrapper"
              >
              <div class="task_wrapper">
                <form class="box"><input v-model="task3" type="text" class="task-form"></form>           
              </div>
              </v-responsive>    
            </v-col>
            <v-col class="task-col" cols="12" sm="4" lg="3">
              <v-responsive
                max-width="400"
                class="task_wrapper"
              >
              <div class="task_wrapper">
                <form class="box"><input v-model="task4" type="text" class="task-form"></form>           
              </div>
              </v-responsive>    
            </v-col>
            <v-col class="task-col" cols="12" sm="4" lg="3">
              <v-responsive
                max-width="400"
                class="task_wrapper"
              >
              <div class="task_wrapper">
                <form class="box"><input v-model="task5" type="text" class="task-form"></form>           
              </div>
              </v-responsive>    
            </v-col>
            <v-col class="task-col" cols="12" sm="4" lg="3">
              <v-responsive
                max-width="400"
                class="task_wrapper"
              >
              <div class="task_wrapper">
                <form class="box"><input v-model="task6" type="text" class="task-form"></form>           
              </div>
              </v-responsive>    
            </v-col>
            <v-col class="task-col" cols="12" sm="4" lg="3">
              <v-responsive
                max-width="400"
                class="task_wrapper"
              >
              <div class="task_wrapper">
                <form class="box"><input v-model="task7" type="text" class="task-form"></form>           
              </div>
              </v-responsive>    
            </v-col>
            <v-col class="task-col" cols="12" sm="4" lg="3">
              <v-responsive
                max-width="400"
                class="task_wrapper"
              >
              <div class="task_wrapper">
                <form class="box"><input v-model="task8" type="text" class="task-form"></form>           
              </div>
              </v-responsive>    
            </v-col>
            <v-col class="task-col" cols="12" sm="4" lg="3">
              <v-responsive
                max-width="400"
                class="task_wrapper"
              >
              <div class="task_wrapper">
                <form class="box"><input v-model="task9" type="text" class="task-form"></form>           
              </div>
              </v-responsive>    
            </v-col>
            <v-col class="task-col" cols="12" sm="4" lg="3">
              <v-responsive
                max-width="400"
                class="task_wrapper"
              >
              <div class="task_wrapper">
                <form class="box"><input v-model="task10" type="text" class="task-form"></form>           
              </div>
              </v-responsive>    
            </v-col>
            <v-col class="task-col" cols="12" sm="4" lg="3">
              <v-responsive
                max-width="400"
                class="task_wrapper"
              >
              <div class="task_wrapper">
                <form class="box"><input v-model="task11" type="text" class="task-form"></form>           
              </div>
              </v-responsive>    
            </v-col>
            <v-col class="task-col" cols="12" sm="4" lg="3">
              <v-responsive
                max-width="400"
                class="task_wrapper"
              >
              <div class="task_wrapper">
                <form class="box"><input v-model="task12" type="text" class="task-form"></form>           
              </div>
              </v-responsive>    
            </v-col>
            <v-col class="task-col" cols="12" sm="4" lg="3">
              <v-responsive
                max-width="400"
                class="task_wrapper"
              >
              <div class="task_wrapper">
                <form class="box"><input v-model="task13" type="text" class="task-form"></form>           
              </div>
              </v-responsive>    
            </v-col>
            <v-col class="task-col" cols="12" sm="4" lg="3">
              <v-responsive
                max-width="400"
                class="task_wrapper"
              >
              <div class="task_wrapper">
                <form class="box"><input v-model="task14" type="text" class="task-form"></form>           
              </div>
              </v-responsive>    
            </v-col>
            <v-col class="task-col" cols="12" sm="4" lg="3" style="background-color: #FFCDD2">
              <v-responsive
                max-width="400"
                class="task_wrapper"
              >
              <div class="task_wrapper">
                <form class="box"><input v-model="task15" type="text" class="task-form"></form>           
              </div>
              </v-responsive>    
            </v-col>
            <v-col class="task-col" cols="12" sm="4" lg="3" style="background-color: #F8BBD0">
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
        
      </div>

      </div>


    <account/>
  </div> -->









  <!-- <div class="whole-wrapper">
    <Errors :errors="errors" />

    <div class="whole-content-wrapper">
      <Navbar />

      <div class="main-content-wrapper">
        <div class="comment">
          
          
          <div>明日のタスクを設定しましょう。</div>

        </div>

        <v-container>
          <v-row class="task-row" style="height: 600px;">
            <v-col class="task-col" cols="12" sm="4" lg="3">
              <v-responsive
                max-width="400"
                class="task_wrapper"
              >
              <div class="task_wrapper">
                
                <form class="box"><div class="box-bar"></div><input v-model="task1" type="text" class="task-form"></form>
                
              </div>
              </v-responsive>    
            </v-col>
            <v-col class="task-col" cols="12" sm="4" lg="3">
              <v-responsive
                max-width="400"
                class="task_wrapper"
              >
              <div class="task_wrapper">
                <form class="box"><input v-model="task2" type="text" class="task-form"></form>           
              </div>
              </v-responsive>    
            </v-col>
            <v-col class="task-col" cols="12" sm="4" lg="3">
              <v-responsive
                max-width="400"
                class="task_wrapper"
              >
              <div class="task_wrapper">
                <form class="box"><input v-model="task3" type="text" class="task-form"></form>           
              </div>
              </v-responsive>    
            </v-col>
            <v-col class="task-col" cols="12" sm="4" lg="3">
              <v-responsive
                max-width="400"
                class="task_wrapper"
              >
              <div class="task_wrapper">
                <form class="box"><input v-model="task4" type="text" class="task-form"></form>           
              </div>
              </v-responsive>    
            </v-col>
            <v-col class="task-col" cols="12" sm="4" lg="3">
              <v-responsive
                max-width="400"
                class="task_wrapper"
              >
              <div class="task_wrapper">
                <form class="box"><input v-model="task5" type="text" class="task-form"></form>           
              </div>
              </v-responsive>    
            </v-col>
            <v-col class="task-col" cols="12" sm="4" lg="3">
              <v-responsive
                max-width="400"
                class="task_wrapper"
              >
              <div class="task_wrapper">
                <form class="box"><input v-model="task6" type="text" class="task-form"></form>           
              </div>
              </v-responsive>    
            </v-col>
            <v-col class="task-col" cols="12" sm="4" lg="3">
              <v-responsive
                max-width="400"
                class="task_wrapper"
              >
              <div class="task_wrapper">
                <form class="box"><input v-model="task7" type="text" class="task-form"></form>           
              </div>
              </v-responsive>    
            </v-col>
            <v-col class="task-col" cols="12" sm="4" lg="3">
              <v-responsive
                max-width="400"
                class="task_wrapper"
              >
              <div class="task_wrapper">
                <form class="box"><input v-model="task8" type="text" class="task-form"></form>           
              </div>
              </v-responsive>    
            </v-col>
            <v-col class="task-col" cols="12" sm="4" lg="3">
              <v-responsive
                max-width="400"
                class="task_wrapper"
              >
              <div class="task_wrapper">
                <form class="box"><input v-model="task9" type="text" class="task-form"></form>           
              </div>
              </v-responsive>    
            </v-col>
            <v-col class="task-col" cols="12" sm="4" lg="3">
              <v-responsive
                max-width="400"
                class="task_wrapper"
              >
              <div class="task_wrapper">
                <form class="box"><input v-model="task10" type="text" class="task-form"></form>           
              </div>
              </v-responsive>    
            </v-col>
            <v-col class="task-col" cols="12" sm="4" lg="3">
              <v-responsive
                max-width="400"
                class="task_wrapper"
              >
              <div class="task_wrapper">
                <form class="box"><input v-model="task11" type="text" class="task-form"></form>           
              </div>
              </v-responsive>    
            </v-col>
            <v-col class="task-col" cols="12" sm="4" lg="3">
              <v-responsive
                max-width="400"
                class="task_wrapper"
              >
              <div class="task_wrapper">
                <form class="box"><input v-model="task12" type="text" class="task-form"></form>           
              </div>
              </v-responsive>    
            </v-col>
            <v-col class="task-col" cols="12" sm="4" lg="3">
              <v-responsive
                max-width="400"
                class="task_wrapper"
              >
              <div class="task_wrapper">
                <form class="box"><input v-model="task13" type="text" class="task-form"></form>           
              </div>
              </v-responsive>    
            </v-col>
            <v-col class="task-col" cols="12" sm="4" lg="3">
              <v-responsive
                max-width="400"
                class="task_wrapper"
              >
              <div class="task_wrapper">
                <form class="box"><input v-model="task14" type="text" class="task-form"></form>           
              </div>
              </v-responsive>    
            </v-col>
            <v-col class="task-col" cols="12" sm="4" lg="3" style="background-color: #FFCDD2">
              <v-responsive
                max-width="400"
                class="task_wrapper"
              >
              <div class="task_wrapper">
                <form class="box"><input v-model="task15" type="text" class="task-form"></form>           
              </div>
              </v-responsive>    
            </v-col>
            <v-col class="task-col" cols="12" sm="4" lg="3" style="background-color: #F8BBD0">
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
        
      </div>

      </div>


    <account/>
  </div> -->
  
<div class="whole-wrapper">
  <Errors :errors="errors" />
  <div class="whole-content-wrapper">
      <Navbar />
      <div class="main-content-wrapper">
        <div class="comment">          
          
          <div>明日のタスクを設定しましょう。</div>

        </div>
        <v-container id="task-container">
          <v-row>
            <v-col
              cols="12"
              sm="6"
              md="3"
            >
              <v-card height="140px">
                <v-card-title class="blue white--text">
                  <span class="headline"></span>
                  <v-spacer></v-spacer>
                </v-card-title>
                  <input v-model="task1" type="text" class="task-form">
                
              </v-card>
            </v-col>
            <v-col
              cols="12"
              sm="6"
              md="3"
            >
              <v-card height="140px">
                <v-card-title class="blue white--text">
                  <span class="headline"></span>
                  <v-spacer></v-spacer>
                </v-card-title>
                  <input v-model="task2" type="text" class="task-form">
                
              </v-card>
            </v-col>
            <v-col
              cols="12"
              sm="6"
              md="3"
            >
              <v-card height="140px">
                <v-card-title class="blue white--text">
                  <span class="headline"></span>
                  <v-spacer></v-spacer>
                </v-card-title>
                  <input v-model="task3" type="text" class="task-form">
                
              </v-card>
            </v-col>
            <v-col
              cols="12"
              sm="6"
              md="3"
            >
              <v-card height="140px">
                <v-card-title class="blue white--text">
                  <span class="headline"></span>
                  <v-spacer></v-spacer>
                </v-card-title>
                  <input v-model="task4" type="text" class="task-form">
                
              </v-card>
            </v-col>
            <v-col
              cols="12"
              sm="6"
              md="3"
            >
              <v-card height="140px">
                <v-card-title class="blue white--text">
                  <span class="headline"></span>
                  <v-spacer></v-spacer>
                </v-card-title>
                  <input v-model="task5" type="text" class="task-form">
                
              </v-card>
            </v-col>
            <v-col
              cols="12"
              sm="6"
              md="3"
            >
              <v-card height="140px">
                <v-card-title class="blue white--text">
                  <span class="headline"></span>
                  <v-spacer></v-spacer>
                </v-card-title>
                  <input v-model="task6" type="text" class="task-form">
                
              </v-card>
            </v-col>
            <v-col
              cols="12"
              sm="6"
              md="3"
            >
              <v-card height="140px">
                <v-card-title class="blue white--text">
                  <span class="headline"></span>
                  <v-spacer></v-spacer>
                </v-card-title>
                  <input v-model="task7" type="text" class="task-form">
                
              </v-card>
            </v-col>
            <v-col
              cols="12"
              sm="6"
              md="3"
            >
              <v-card height="140px">
                <v-card-title class="blue white--text">
                  <span class="headline"></span>
                  <v-spacer></v-spacer>
                </v-card-title>
                  <input v-model="task8" type="text" class="task-form">
                
              </v-card>
            </v-col>
            <v-col
              cols="12"
              sm="6"
              md="3"
            >
              <v-card height="140px">
                <v-card-title class="blue white--text">
                  <span class="headline"></span>
                  <v-spacer></v-spacer>
                </v-card-title>
                  <input v-model="task9" type="text" class="task-form">
                
              </v-card>
            </v-col>
            <v-col
              cols="12"
              sm="6"
              md="3"
            >
              <v-card height="140px">
                <v-card-title class="blue white--text">
                  <span class="headline"></span>
                  <v-spacer></v-spacer>
                </v-card-title>
                  <input v-model="task10" type="text" class="task-form">
                
              </v-card>
            </v-col>
            <v-col
              cols="12"
              sm="6"
              md="3"
            >
              <v-card height="140px">
                <v-card-title class="blue white--text">
                  <span class="headline"></span>
                  <v-spacer></v-spacer>
                </v-card-title>
                  <input v-model="task11" type="text" class="task-form">
                
              </v-card>
            </v-col>
            <v-col
              cols="12"
              sm="6"
              md="3"
            >
              <v-card height="140px">
                <v-card-title class="blue white--text">
                  <span class="headline"></span>
                  <v-spacer></v-spacer>
                </v-card-title>
                  <input v-model="task12" type="text" class="task-form">
                
              </v-card>
            </v-col>
            <v-col
              cols="12"
              sm="6"
              md="3"
            >
              <v-card height="140px">
                <v-card-title class="blue white--text">
                  <span class="headline"></span>
                  <v-spacer></v-spacer>
                </v-card-title>
                  <input v-model="task113" type="text" class="task-form">
                
              </v-card>
            </v-col>
            <v-col
              cols="12"
              sm="6"
              md="3"
            >
              <v-card height="140px">
                <v-card-title class="blue white--text">
                  <span class="headline"></span>
                  <v-spacer></v-spacer>
                </v-card-title>
                  <input v-model="task14" type="text" class="task-form">
                
              </v-card>
            </v-col>
            <v-col
              cols="12"
              sm="6"
              md="3"
            >
              <v-card height="140px">
                <v-card-title class="blue white--text">
                  <span class="headline"></span>
                  <v-spacer></v-spacer>
                </v-card-title>
                  <input v-model="task15" type="text" class="task-form">
                
              </v-card>
            </v-col>
            <v-col
              cols="12"
              sm="6"
              md="3"
            >
              <v-card height="140px">
                <v-card-title class="blue white--text">
                  <span class="headline"></span>
                  <v-spacer></v-spacer>
                </v-card-title>
                  <input v-model="task16" type="text" class="task-form">
                
              </v-card>
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
      </div>
  </div>
  <account/>
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

#task-container {
  display: flex;
  justify-content: center;
  margin: 70px auto;
}

.task-col {
  display: flex;
  justify-content: center;
  /* margin-top: 20px; */
  padding: 0px;
  width: inherit;
}

.task_wrapper {
  display: flex;
  justify-content: center;
}

.box {
  background-color: #1E1E1E;
  /* border: 2px solid #333;
  box-sizing: border-box; */
  /* outline: 2px solid #333; */
  /* outline-offset: -2px; */
  /* border: 6px solid #333; */
  width: 250px;
  height: 130px;
  /* height: 250px; */
}

.box-bar {
  background-color: aqua;
  height: 10px;
  width: 100%;
}

.task-col form {
  /* border-radius: 240px 15px 100px 15px / 15px 200px 15px 185px; */
  /* padding: 4%; */
  /* width: 200px;  */
  /* height: 200px;  */
  /* margin: 10px; */
}

.v-card__subtitle, .v-card__text, .v-card__title {
    padding: 12px;
}

.task-form {
  color: white;
  border: none;
  text-align: center;
  /* outline: none; */
  width: 100%;
  /* height: 100%; */
  height: 106px;
  /* resize: none; */
}
  
</style>