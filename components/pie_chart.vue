<script>
import { Pie } from 'vue-chartjs'

export default {
  extends: Pie,
  data() {
    return {
      chartData: {
        labels: ['スキル１', 'スキル２', 'スキル３', 'スキル４'],
        datasets: [{
          backgroundColor: [
            'rgba(255, 60, 60, 0.3)',
            'rgba(60, 60, 60, 0.3)',
            'rgba(60, 255, 60, 0.3)',
            'rgba(60, 60, 255, 0.3)',
          ],
          data: [100, 120, 30, 70]
        }],
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
      }
    }
  
}
</script>