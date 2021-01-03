export const state = () => ({
  totalStudyTimes: []
})

export const actions = {
  async addStudyTimes({ commit }, studyTimes) {
    console.log('===2===')
    console.log(studyTimes)
    const res = await this.$axios.$post('http://localhost:8080/api/v1/study_times' ,studyTimes, {
      headers: {
        'access-token': localStorage.getItem('access-token'),
        uid: localStorage.getItem('uid'),
        client: localStorage.getItem('client'),
      },
    }).catch(() => {
      return { errors: ['エラーが発生しました'] }
    })
    if (res.errors && res.errors.length !== 0) {
      console.log('===3===')
      console.log(res)
      console.log(res.errors)
      return {
        errors: res.errors
      }
    } else{
      commit('addStudyTimes', res)
      return {}
    }
    
    
   
  },
  async fetchStudyTimes({ commit }) {
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
    // console.log('===4===')
    // console.log(saveStudyTimes)
    const studyTimes = state.totalStudyTimes.concat(saveStudyTimes)
    // console.log('===5===')
    // console.log(studyTimes)
    const totalStudyTimes = studyTimes.reduce(function(sum, element) {
      return sum + element
    })
    // console.log('===6===')
    // console.log(totalStudyTimes)
    state.totalStudyTimes = totalStudyTimes
  },
  setStudyTimes(state, payload) {
    const studyTimes = state.totalStudyTimes.concat(payload)
    const totalStudyTimes = studyTimes.reduce(function(sum, element) {
      return sum + element
    })
    state.totalStudyTimes = totalStudyTimes
    // console.log(state.totalStudyTimes)
  }
}

export const getters = {
  content(state) {
    return state.totalStudyTimes
  }
}