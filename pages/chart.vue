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
          <v-row class="pie-row">
            <div class="pie-rank-wrapper">

              <v-col v-for="(pieChartData, index) in pieChartDatas" class="pie-chart-col" v-if="index >= 0 && index < 3">

                <div class="flex-item" cols="12">
                    <div                   
                      id="pie-responsive-wrapper"
                    >
                    <div class="pie_wrapper">
                      <v-icon class="crown-icon pie_wrapper-flex-item">fas fa-crown</v-icon>
                      <!-- <v-icon>mdi-crown</v-icon> -->
                      <p class="pie_wrapper-flex-item">No. {{ index + 1 }}</p>
                      <p class="pie_wrapper-flex-item">{{ pieChartData[0] }}</p>
                      <p class="pie_wrapper-flex-item">{{ pieChartData[1] + '時間' }}</p>
                      <p class="pie_wrapper-flex-item">{{ '(' + percentageRound[index] + '%' + ')' }}</p>
                    
                    </div>
                    <hr>
                  </div>    

                </div>

              </v-col>
            </div>

            <PieChart />
          </v-row>
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
    limitCount() {
      return this.pieChartDatas.slice(0,1)
    }
  },
  methods:{
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
  
  .flex-item {
    display: flex;
    justify-content: center;
  }
  #pie-responsive-wrapper {
    width: 400px;
  }
  .pie_wrapper {
    display: flex;
    justify-content: center;    
  }
  .pie_wrapper-flex-item {
    margin: 10px auto;
	  padding: 5px 5px;
  }

  .pie_wrapper-flex-item:nth-child(4) {
    margin: 10px 0 10px 30px;
  }

  .pie_wrapper-flex-item:last-child {
    margin: 10px 0;
    padding: 5px 0;
  }

  .crown-icon {
    margin: 0 0 10px 0;
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