export const state = () => ({
  chartDates: []
})
export const actions = {
  async fetchCharts({ commit }) {
    console.log('===3===')
    const res = await this.$axios.$get('/api/v1/charts', {
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
    
    commit('setCharts', res)
  }
}
export const mutations = {
  setCharts(state, payload) {
    console.log('===5===')
    console.log(payload)
    console.log(state.chartDates)
    state.chartDates = state.chartDates.concat(payload)
    console.log(state.chartDates)
  }
}

export const getters = {
  charts(state) {
    return state.chartDates
  }
}


