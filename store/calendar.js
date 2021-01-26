export const state = () => ({
  thatDayTotalStudyTimes: [],
  allStudyTimes: []
})

export const actions = {
  async fetchThatDayStudyTimes({ commit }, date) {
    const res = await this.$axios.$get('/api/v1/calendars',  {
      params:{date},
      headers: {
        'access-token': localStorage.getItem('access-token'),
        uid: localStorage.getItem('uid'),
        client: localStorage.getItem('client'),
      },
    })
    commit('fetchThatDayStudyTimes', res)
  },
  async fetchAllStudytimes({ commit }) {
    const res = await this.$axios.$get('api/v1/all_study_times', {
      headers: {
        'access-token': localStorage.getItem('access-token'),
        uid: localStorage.getItem('uid'),
        client: localStorage.getItem('client'),
      },
    })
    commit('setAllStudyTimes', res)
    return res
  }
}

export const mutations = {
  fetchThatDayStudyTimes(state, payload) {
    state.thatDayTotalStudyTimes = [0]
    const thatDayStudyTimes = state.thatDayTotalStudyTimes.concat(payload)
    const thatDayTotalStudyTimes = thatDayStudyTimes.reduce(function(sum, element) {
      return sum + element
    })
    state.thatDayTotalStudyTimes = thatDayTotalStudyTimes
  },
  setAllStudyTimes(state, payload) {
    state.allStudyTimes = state.allStudyTimes.concat(payload)    
  }
}

export const getters = {
  thatDayStudyTimes(state) {
    if (isNaN(state.thatDayTotalStudyTimes) === false) {
      return state.thatDayTotalStudyTimes
    } else{
    }
  },
  allStudyTimes(state) {
    return state.allStudyTimes
  }
}