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
                backgroundColor: 'rgba(248,121,121,0.9)',
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
    this.fetchBarCharts().then(() => {

      this.renderChart(this.chartdata, this.options)
    })
  },
  methods: {
    async fetchBarCharts() {
      const res = await this.$store.dispatch('bar_chart/fetchBarCharts')
      this.chartdata.datasets[0].data = res

      let date = new Date();
      let week = [];
      for (let i = 0; i < 12; i++) {
        let before = new Date();
        before.setMonth(date.getMonth() - i);
        week.unshift(before.getFullYear() + '/' + (before.getMonth()+1) );
      }

      this.chartdata.labels = week
    }
  }
}

</script>