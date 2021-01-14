export const state = () => ({
  thatDayTotalStudyTimes: []
})

export const actions = {
  async fetchThatDayStudyTimes({ commit }, date) {
    console.log('===2===')
    console.log(date)
    const res = await this.$axios.$get('/api/v1/calendars',  {
      params:{date},
      headers: {
        'access-token': localStorage.getItem('access-token'),
        uid: localStorage.getItem('uid'),
        client: localStorage.getItem('client'),
      },
    })
    console.log('===3===')
    console.log(res)
    commit('fetchThatDayStudyTimes', res)
  }
}

export const mutations = {
  fetchThatDayStudyTimes(state, payload) {
    state.thatDayTotalStudyTimes = [0]
    console.log('===4===')
    console.log(payload)
    const thatDayStudyTimes = state.thatDayTotalStudyTimes.concat(payload)
    console.log(thatDayStudyTimes)
    const thatDayTotalStudyTimes = thatDayStudyTimes.reduce(function(sum, element) {
      return sum + element
    })
    state.thatDayTotalStudyTimes = thatDayTotalStudyTimes
    console.log(state.thatDayTotalStudyTimes)
    console.log('===5===')
  }
}

export const getters = {
  thatDayStudyTimes(state) {
    console.log('===getters===')
    console.log(state.thatDayTotalStudyTimes)
    return state.thatDayTotalStudyTimes
  }
}