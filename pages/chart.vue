<template>
  <div class="whole-wrapper">
    <Topbar />
    <div class="whole-content-wrapper">
      <Navbar />
      <div class="main-content-wrapper">
        <account/> 
        <v-card
          class="mx-auto text-center bar-container"
          color="background-color:#212121;"
          dark
          max-width=""
        >
          <BarChart />

          <v-card-text>
            <div class="display-1 font-weight-thin">
              
            </div>
          </v-card-text>

          <v-divider></v-divider>

          <v-card-actions class="justify-center skill-label">
            スキル別学習時間
          </v-card-actions>
        </v-card>

        <v-card
          class="mx-auto text-center"
          color="#212121"
          dark
          max-width=""
        >
          <v-container id="pie-container-flex">
              <div class="pie-row">
                <div class="pie-rank-wrapper">

                  <div v-for="(pieChartData, index) in topThree" :key="index" class="pie-chart-col" >

                      <div class="flex-item">
                        <div id="pie-responsive-wrapper">
                          <v-row class="pie_wrapper">
                            <v-col cols="2" class="pie_wrapper-flex-item"><v-icon class="crown-icon">fas fa-crown</v-icon></v-col>
                            <v-col cols="3" class="pie_wrapper-flex-item">No. {{ rankDatas[index] }}</v-col>
                            <v-col cols="3" class="pie_wrapper-flex-item">{{ pieChartData[0] }}</v-col>
                            <v-col cols="4" class="pie_wrapper-flex-item">{{ pieChartData[1] + '時間' }} {{ '(' + percentageRound[index] + '%' + ')' }}</v-col>
                          </v-row>
                          <hr>
                        </div>    
                      </div>

                  </div>
                </div>

                <PieChart />
              </div>
            </v-container>

        </v-card>
      </div>
    </div>

  </div>

  
</template>


<script>
import { mapGetters } from 'vuex'
import Topbar from '~/components/top_bar.vue'
import Navbar from '~/components/navbar.vue'
import Account from '~/components/account_icon.vue'
import BarChart from '~/components/bar_chart.vue'
import PieChart from '~/components/pie_chart.vue'
export default {
  middleware({ store, redirect }) {
    if(!store.$auth.loggedIn) {
      redirect('/sign_in');
    }
  },
  components: {
    Topbar,
    Navbar,
    Account,
    BarChart,
    PieChart
  },
   computed: {
    ...mapGetters({
      pieChartDatas: 'pie_chart/pieChart',
      percentageDatas: 'pie_chart/percentage',
      percentageRound: 'pie_chart/percentageRound',
      rankDatas: 'pie_chart/rankDatas'
    }),
    topThree: function() {
      return this.pieChartDatas.slice(0,3)
    },
    created() {
      this.fetchPieCharts()
    }
  },
  methods:{
      async fetchPieCharts() {
        await this.$store.dispatch('pie_chart/fetchPieCharts')
      }
    },
}
</script>

<style>
.bar-container {
  margin: 65px 0 0 0;
  padding-top: 10px;
}

#pie-responsive-wrapper {
  width: 400px;
}
.pie_wrapper {
  display: flex;
  justify-content: center;    
}
.pie_wrapper-flex-item {
  margin: 30px auto 0px;
  padding: 5px 5px;
  line-height: 36px;
}

.pie_wrapper-flex-item:first-child {
  margin: 25px 0 0 0;
  text-align: center;
}

.crown-icon {
  margin: 0 0 0px 0;
}

#pie-container-flex {
  display: flex;
  justify-content: center;
  margin: 0 auto;
  padding: 20px 0 0 0;
}

.pie-row {
  display: flex;
  justify-content: center;
}

.pie-rank-wrapper {
  margin: 0 100px 0 0;
}

#pie-chart {
  display: block;
  height: 400px;
  width: 400px;
}

.skill-label {
  padding-top: 14px;
  font-size: 13px;
  background-color: #212121;
  color: #616161;
}

</style>