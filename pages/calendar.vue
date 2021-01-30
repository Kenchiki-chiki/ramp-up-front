<template>
  <div class="whole-wrapper">
    <Topbar />
    <div class="whole-content-wrapper">
      <Navbar />

      <div id="content" class="main-content-wrapper">
        <div class="calendar-title">
          <h2>カレンダー {{ displayMonth }}</h2>
          <div class="button-area">
            <button @click="prevMonth" class="button">前の月</button>
            <button @click="nextMonth" class="button">次の月</button>
          </div>
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
                @click="fetchThatDayStudyTimes(date(day))"
                v-for="(day, index) in week"
                :key="index"
                :style="`background-color:${day.color}`"
              >
              <div class="calendar-day calendar-event" @click="fetchThatDayStudyTimes(date(day))">
                  {{ day.day }}                
              </div>

              <div v-for="dayEvent in day.dayEvents" :key="dayEvent.studied_on" >
                <div 
                  class="calendar-event"
                  :style="`background-color:${dayEvent.color}`"
                >
                  <!-- {{ dayEvent.name }} -->
                
                </div>
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
      currentDate: moment(),
      // displayMonth: displayDate()
      current: 0,
      events: [],
      colors:[]
    }
  },
  components: {
    Topbar,
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
  created() {
    this.fetchAllStudytimes()
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
          let dayEvents = this.getDayEvents(calendarDate)
          weekRow.push({
            day: calendarDate.get("date"),
            month: calendarDate.format("YYYY-MM"),
            dayEvents
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
    date(day) {
      day.day = ("0"+day.day).slice(-2)
      let date = `${day.month}${day.day}`
      return date.replace(/-/g, '')
    },

    async fetchThatDayStudyTimes(date) {
      if (isNaN(date) === false) {
        await this.$store.dispatch('calendar/fetchThatDayStudyTimes', date)
        this.$router.push(`/that_day_study_time/${date}`)
      } else{
      }
    },
    getDayEvents(date){
        return this.events.filter(event => {
        let startDate = moment(event.studied_on).format('YYYY-MM-DD')
        let endDate = moment(event.studied_on).format('YYYY-MM-DD')
        let Date = date.format('YYYY-MM-DD')
        if(startDate <= Date && endDate >= Date) return true;
      });
    },
    async fetchAllStudytimes() {
      const res = await this.$store.dispatch('calendar/fetchAllStudytimes')
      this.events = res     
    }
  
  },
}
</script>

<style>
.calendar-title {
  margin: 48px 0 0 0;
}

#content{
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
  cursor: pointer;
  position: relative;
}
.calendar-day{
  text-align: center;
  cursor: pointer;
  z-index: 100;
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

.calendar-event{
  color:white;
  margin-bottom:1px;
  /* height:25px; */
  /* margin: 0px; */
  line-height:25px;

  position: absolute;
  top: 0px;
  left: 0;
  height: 125px;
  width: 129px;
}
</style>