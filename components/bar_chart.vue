<script>
import { mapGetters } from 'vuex'
import { Bar } from 'vue-chartjs'
export default {
  extends: Bar,
  data(){
    return {
        chartdata: {
            labels: ['2020/2', '2020/3', '2020/4', '2020/5', '2020/6', '2020/7', '2020/8', '2020/9', '2020/10', '2020/11', '2020/12', '2021/1'],
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
      // this.chartdata.datasets[0].data = res
      this.chartdata.datasets[0].data.concat(res)
      console.log(this.chartdata.datasets[0].data)
    }
  }
}

</script>