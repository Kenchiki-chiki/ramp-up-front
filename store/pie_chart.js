export const state = () => ({
  pieChartDates: []
})
export const actions = {
  async fetchPieCharts({ commit }) {
    const res = await this.$axios.$get('/api/v1/pie_charts', {
      headers: {
        'access-token': localStorage.getItem('access-token'),
        uid: localStorage.getItem('uid'),
        client: localStorage.getItem('client'),
      },
    }).then((res) => {
      console.log('===4===')
      console.log(res)
      // return { res: res }
      return res 
    })
    if (res && res.length !== 0) {
      return  res
    }
    
    // commit('setPieCharts', res)
  }
}