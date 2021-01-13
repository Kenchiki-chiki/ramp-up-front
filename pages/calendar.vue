<template>
  <div>
    <div class="">
      <div class="content">
        <h2>カレンダー {{ displayMonth }}</h2>
        <div class="button-area">
          <button @click="prevMonth" class="button">前の月</button>
          <button @click="nextMonth" class="button">次の月</button>
        </div>
        <div class="calendar">
          <div class="calendar-weekly">
            <div
              class="calendar-youbi"
              v-for="n in 7"
              :key="n"
            >
              {{ youbi(n-1) }}
                
            </div>
          </div>

          <div 
            class="calendar-weekly"
            v-for="(week, index) in calendars"
            :key="index"
          >
            <div
                class="calendar-daily"
                :class="{outside: currentMonth !== day.month}"
                v-for="(day, index) in week"
                :key="index"
              >
              <div class="calendar-day" @click="fetchThatDayStudyTimes('20210120')">
                <!-- <button class="calendar-day" @click="fetchThatDayStudyTimes"> -->
                  {{ day.day }}
                <!-- </button> -->
                
              </div>
            </div>

          </div>
        </div>
      </div>      

      
    </div>
    
    <account/>

  </div>
</template>

<script>
import moment from "moment"
import Navbar from '~/components/navbar.vue'
import Account from '~/components/account_icon.vue'
export default {
  data() {
    return {
      currentDate: moment(),
      // displayMonth: displayDate()
      current: 0,
    }
  },
  components: {
    Navbar,
    Account
  },
  computed: {
    calendars() {
      return this.getCalendar()
    },
    displayMonth(){
      return this.currentDate.format('YYYY[年]M[月]')
    },
    currentMonth() {
      return this.currentDate.format('YYYY-MM')
    } 
  },
  methods: {
    getStartDate() {
      let date = moment(this.currentDate)
      date.startOf("month")
      const youbiNum = date.day();
      return date.subtract(youbiNum, "days")
    },
    getEndDate() {
      let date = moment(this.currentDate)
      date.endOf("month")
      const youbiNum = date.day()
      return date.add(6- youbiNum, "days")
    },
    getCalendar() {
      let startDate = this.getStartDate();
      const endDate = this.getEndDate();
      const weekNumber = Math.ceil(endDate.diff(startDate, "days") / 7);

      let calendars = [];
      let calendarDate = this.getStartDate();

      for (let week = 0; week < weekNumber; week++) {
        let weekRow = [];
        for (let day = 0;  day < 7; day++) {
          weekRow.push({
            day: calendarDate.get("date"),
            month: calendarDate.format("YYYY-MM"),//追加
          });
          calendarDate.add(1, "days");
        }
        calendars.push(weekRow);
      }
     return calendars;
    },
    nextMonth() {
      this.currentDate = moment(this.currentDate).add(1, "month")
    },
    prevMonth() {
      this.currentDate = moment(this.currentDate).subtract(1, "month")
    },
    youbi(dayIndex) {
      const week = ["Sun", "Mon", "Tue", "Wed", "Tue", "Fri", "Sat"]
      return week[dayIndex]
    },

    async fetchThatDayStudyTimes(date) {
      console.log('===1===')
      // await this.$store.dispatch('calendar/fetchThatDayStudyTimes')
      this.$router.push(`/that_day_study_time/${date}`)
    }
},
  // mounted() {
  //   console.log(this.getCalendar())
  // }   
}
</script>

<style>
  .content{
  margin:2em auto;
  width:900px;
}
.button-area{
  margin:0.5em 0;
}
.button{
  padding:4px 8px;
  margin-right:8px;
}
.calendar{
  max-width:900px;
  border-top:1px solid #E0E0E0;
  font-size:0.8em;
}
.calendar-weekly{
  display:flex;
  border-left:1px solid #E0E0E0;
  /* background-color: black; */
}
.calendar-daily{
  flex:1;
  min-height:125px;
  border-right:1px solid #E0E0E0;
  border-bottom:1px solid #E0E0E0;
  margin-right:-1px;
}
.calendar-day{
  text-align: center;
  cursor: pointer;
}

.calendar-youbi{
  flex:1;
  border-right:1px solid #E0E0E0;
  margin-right:-1px;
  text-align:center;
}

.outside {
  background-color: #181823;
}
</style>