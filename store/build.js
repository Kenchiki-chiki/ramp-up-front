export const state = () => ({
  totalStudyTimes: []
})

export const actions = {
  async addStudyTimes({ commit }, studyTimes) {
    const res = await this.$axios.$post('/api/v1/study_times' ,studyTimes, {
      headers: {
        'access-token': localStorage.getItem('access-token'),
        uid: localStorage.getItem('uid'),
        client: localStorage.getItem('client'),
      },
    }).catch(() => {
      return { errors: ['エラーが発生しました'] }
    })
    if (res.errors && res.errors.length !== 0) {

      return {
        errors: res.errors
      }
    } else{
      commit('addStudyTimes', res)
      return {}
    }
    
    
   
  },
  async fetchStudyTimes({ commit }) {
    const res = await this.$axios.$get('/api/v1/study_times', {
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
    // state.totalStudyTimes = state.totalStudyTimes.concat(saveStudyTimes)
    // state.totalStudyTimes = studyTimes
    // const totalStudyTimes = studyTimes.reduce(function(sum, element) {
    //   return sum + element
    // })
    // state.totalStudyTimes = totalStudyTimes
  },
  setStudyTimes(state, payload) {
      state.totalStudyTimes = [0]
      const studyTimes = state.totalStudyTimes.concat(payload)
      const totalStudyTimes = studyTimes.reduce(function(sum, element) {
        return sum + element
      })
      
      state.totalStudyTimes = totalStudyTimes
      
    
  }
}

export const getters = {
  content(state) {
    return state.totalStudyTimes
  }
}