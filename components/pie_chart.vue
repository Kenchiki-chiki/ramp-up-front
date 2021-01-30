<script>
import { mapGetters } from 'vuex'
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
            'rgb(248, 121, 121, 0.9)',
            'rgba(255, 196, 12, 0.9)',
            'rgba(94, 214, 134, 0.9)',
            'rgba(102, 200, 232, 0.9)',
            'rgba(242, 119, 82, 0.9)', 
            'rgba(27, 142, 242, 0.9)',
            'rgba(5, 250, 202, 0.9)',
            'rgba(158, 171, 242, 0.9)',
            'rgba(90, 132, 245, 0.9)',
            'rgba(203, 90,245, 0.9)',
            'rgba(35, 126, 231, 0.9)',
            'rgba(53, 253, 157, 0.9)',
            'rgba(240, 105, 103, 0.9)',    
            'rgba(113, 125, 244, 0.9)',
            'rgba(240, 103, 38, 0.9)', 
            'rgba(111, 232, 0, 0.9)',
            'rgba(217, 237, 80, 0.9)',
            'rgba(243, 54, 180, 0.9)',
            'rgba(234, 71, 26, 0.9)',
            'rgba(105, 103, 103, 0.9)',
            'rgba(240, 105, 103, 0.9)',
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
  computed: {
    ...mapGetters({
      pieChartDatas: 'pie_chart/pieChart',
      percentageDatas: 'pie_chart/percentage',
      percentageRound: 'pie_chart/percentageRound',
      skillDatas: 'pie_chart/skillDatas'
    })
  },
  mounted() {
    this.fetchPieCharts().then(() => {

      this.renderChart(this.chartData, this.options)
    })
  },
  methods: {
      async fetchPieCharts() {
        await this.$store.dispatch('pie_chart/fetchPieCharts')
        
        this.chartData.labels = this.skillDatas
        this.chartData.datasets[0].data = this.percentageDatas    
      }
    }
  
}
</script>