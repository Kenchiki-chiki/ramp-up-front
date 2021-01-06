<template>
  <div class="comment">
    
    <account/>
    <div>chart</div>

    <!-- <div style="width:600px">
      <canvas id="myChart"></canvas>
    </div> -->

    <BarChart />
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import Navbar from '~/components/navbar.vue'
import Account from '~/components/account_icon.vue'
import BarChart from '~/components/bar_chart.vue'
export default {
  // data() {
    // return {
    //     chartdata: {
    //         labels: ['January', 'February'],
    //         datasets: [
    //             {
    //             label: ['Data One'],
    //             backgroundColor: '#f87979',
    //             data: [40, 30]
    //             }
    //         ]
    //     },
    //     options: {
    //         responsive: true,
    //         maintainAspectRatio: false
    //     }
    // }
  // },
  components: {
    Navbar,
    Account,
    BarChart
  },
  // computed: {
  //   ...mapGetters({
  //     charts: 'chart/charts'
  //   })
  // },
  // mounted() {
  //   this.renderChart(this.chartdata, this.options)
  //   console.log('===1===')
  //   this.fetchCharts().then(() => {

  //     // this.data = charts
      // this.displayGraph()
  //   })
  // },
  methods:{
    
    
      // displayGraph: function(){
      //   var ctx = document.getElementById('myChart').getContext('2d');
      //   var myChart = new Chart(ctx, {
      //   type: 'line',
      //   data: {
      //       labels: this.labels,
      //       datasets: [{
      //           label: '四半期の売上数の遷移',
      //           data: this.data
      //       }]
      //     }
      //   });
      // }
    },
    // mounted: function(){
    //   axios.get('/api/design_sum').then(response =>{

    //     this.data = response.data.map(sale=>sale.number);
    //     this.labels = response.data.map(sale=>sale.month);

    //     this.displayGraph();

    //   })
    // }
}
</script>

<style>
  
</style>




