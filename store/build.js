export const state = () => ({
  totalStudyTimes: []
})

export const actions = {
  async addStudyTimes({ commit }, studyTimes) {
    const res = await this.$axios.$post('http://localhost:8080/api/v1/study_times' ,studyTimes, {
      headers: {
        'access-token': localStorage.getItem('access-token'),
        uid: localStorage.getItem('uid'),
        client: localStorage.getItem('client'),
      },
    })
    commit('addStudyTimes', res)
    return res
  },
  async fetchStudyTimes({ commit }) {
    console.log('===3===')
    const res = await this.$axios.$get('http://localhost:8080/api/v1/study_times', {
      headers: {
        'access-token': localStorage.getItem('access-token'),
        uid: localStorage.getItem('uid'),
        client: localStorage.getItem('client'),
      },
    })
    commit('setStudyTimes', res)
  }
}

export const mutations = {
  addStudyTimes(state, saveStudyTimes) {
    const studyTimes = state.totalStudyTimes.concat(saveStudyTimes)
    const totalStudyTimes = studyTimes.reduce(function(sum, element) {
      return sum + element
    })
    state.totalStudyTimes = totalStudyTimes
  },
  setStudyTimes(state, payload) {
    console.log('===4===')
    console.log(payload)
    const studyTimes = state.totalStudyTimes.concat(payload)
    const totalStudyTimes = studyTimes.reduce(function(sum, element) {
      return sum + element
    })
    state.totalStudyTimes = totalStudyTimes
    console.log(state.totalStudyTimes)
  }
}

export const getters = {
  content(state) {
    return state.totalStudyTimes
  }
}