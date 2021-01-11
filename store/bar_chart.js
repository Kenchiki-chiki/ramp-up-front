export const state = () => ({
  chartDates: []
})
export const actions = {
  async fetchBarCharts({ commit }) {
    const res = await this.$axios.$get('/api/v1/bar_charts', {
      headers: {
        'access-token': localStorage.getItem('access-token'),
        uid: localStorage.getItem('uid'),
        client: localStorage.getItem('client'),
      },
    }).then((res) => {
      // return { res: res }
      return res 
    })
    if (res && res.length !== 0) {
      return  res
    }
    
    commit('setBarCharts', res)
  }
}
export const mutations = {
  setBarCharts(state, payload) {
    state.chartDates = state.chartDates.concat(payload)
  }
}

export const getters = {
  charts(state) {
    return state.chartDates
  }
}


