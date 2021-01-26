<template>
<div class="whole-wrapper">
  <div class="whole-content-wrapper">
    <Navbar />  

    <div class="main-content-wrapper">     
      <account/>
      
      <div class="bar-container">
        <BarChart />
      </div>

        <v-container id="pie-container-flex">
          <div class="pie-row">
            <div class="pie-rank-wrapper">

              <div v-for="(pieChartData, index) in topThree" :key="index" class="pie-chart-col" >

                  <div class="flex-item">
                    <div id="pie-responsive-wrapper">
                      <v-row class="pie_wrapper">
                        <v-col cols="2" class="pie_wrapper-flex-item"><v-icon class="crown-icon">fas fa-crown</v-icon></v-col>
                        <v-col cols="3" class="pie_wrapper-flex-item">No. {{ index + 1 }}</v-col>
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

    </div>
  </div>
</div>
</template>

<script>
import { mapGetters } from 'vuex'
import Navbar from '~/components/navbar.vue'
import Account from '~/components/account_icon.vue'
import BarChart from '~/components/bar_chart.vue'
import PieChart from '~/components/pie_chart.vue'
export default {
  data() {
    return {
      pieChartRainkingDatas: this.pieChartDatas
    }
  },
  components: {
    Navbar,
    Account,
    BarChart,
    PieChart
  },
   computed: {
    ...mapGetters({
      pieChartDatas: 'pie_chart/pieChart',
      percentageDatas: 'pie_chart/percentage',
      percentageRound: 'pie_chart/percentageRound'
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
        console.log('===fetchPieCharts===')
        await this.$store.dispatch('pie_chart/fetchPieCharts')
      }
    },
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

  .bar-container {
    padding: 60px 0 0 0;
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
    padding: 60px 0 0 0;
  }

  .pie-row {
    display: flex;
    justify-content: center;
  }

  .pie-rank-wrapper {
    margin: 0 100px 0 0;
  }

</style>