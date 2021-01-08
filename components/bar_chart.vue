<script>
import { mapGetters } from 'vuex'
import { Bar } from 'vue-chartjs'
export default {
  extends: Bar,
  data(){
    return {
        chartdata: {
            labels: [],
            datasets: [
                {
                label: ['月別学習時間'],
                backgroundColor: '#f87979',
                data: []
                }
            ]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false
        }
    }
  },
  // computed: {
  //   ...mapGetters({
  //     charts: 'chart/charts'
  //   })
  // },
   mounted() {
    console.log('===1===')
    this.fetchCharts().then(() => {

      this.renderChart(this.chartdata, this.options)
    })
  },
  methods: {
    async fetchCharts() {
      console.log('===2===')
      const res = await this.$store.dispatch('chart/fetchCharts')
      console.log('===6===')
      // const monthlyStudyTimes = monthlyStudyTimes.reduce(function(sum, element) {
      //   return sum + element
      // })
      console.log(res)
      this.chartdata.datasets[0].data = res
      // this.chartdata.datasets[0].data.concat(res)
      console.log(this.chartdata.datasets[0].data)

      let date = new Date();
      let week = [];
      for (let i = 0; i < 12; i++) {
        let before = new Date();
        before.setMonth(date.getMonth() - i);
        week.unshift(before.getFullYear() + '/' + (before.getMonth()+1) );
      }
      console.log(week);

      this.chartdata.labels = week
      



    }
  }
}

</script>