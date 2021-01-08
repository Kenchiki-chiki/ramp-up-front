<script>
import { Pie } from 'vue-chartjs'

export default {
  extends: Pie,
  data() {
    return {
      chartData: {
        labels: [],
        datasets: [
          {
          backgroundColor: [
            'rgba(255, 60, 60, 0.3)',
            'rgba(60, 60, 60, 0.3)',
            'rgba(60, 255, 60, 0.3)',
            'rgba(60, 60, 255, 0.3)',
          ],
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
  mounted() {
    this.fetchPieCharts().then(() => {

      this.renderChart(this.chartData, this.options)
    })
  },
  methods: {
      async fetchPieCharts() {
        const res = await this.$store.dispatch('pie_chart/fetchPieCharts')

        console.log('===Pie6===')
        console.log(res[0])
        console.log(res[1])
  //       var today = new Date();
  // console.log(today.getFullYear() + "/" +  today.getMonth() + 1 + "/"+ today.getDate()  + "/" + today.getDay());
        this.chartData.labels = res[0]
        this.chartData.datasets[0].data = res[1]
        console.log(this.chartData.datasets[0].data)
        console.log(this.chartData.labels)
        
      }
    }

  
}
</script>