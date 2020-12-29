export const state = () => ({
  totalStudyTimes: []
})

export const actions = {
  async addStudyTimes({ commit }, studyTimes) {
    console.log('===2===')
    const res = await this.$axios.$post('http://localhost:8080/api/v1/study_times' ,studyTimes, {
      headers: {
        'access-token': localStorage.getItem('access-token'),
        uid: localStorage.getItem('uid'),
        client: localStorage.getItem('client'),
      },
    })
    console.log('===3===')
    console.log(res)
    commit('addStudyTimes', res)
    return res
  } 
}

export const mutations = {
  addStudyTimes(state, saveStudyTimes) {
    console.log('===4===')
    console.log(saveStudyTimes)
    const studyTimes = state.totalStudyTimes.concat(saveStudyTimes)
    console.log('===5===')
    console.log(studyTimes)
    const totalStudyTimes = studyTimes.reduce(function(sum, element) {
      return sum + element
    })
    state.totalStudyTimes = totalStudyTimes
    console.log('===5===')
    console.log(totalStudyTimes)
    console.log(state.totalStudyTimes)
  }
}

export const getters = {
  content(state) {
    return state.totalStudyTimes
  }
}