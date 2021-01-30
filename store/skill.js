export const state = () => ({
  skills: [],
})

export const actions = {
  async addSkills({ commit }, skills) {
    const res = await this.$axios.$post('/api/v1/skills', skills , {
      headers: {
          'access-token': localStorage.getItem('access-token'),
          uid: localStorage.getItem('uid'),
          client: localStorage.getItem('client'),
        },
    }).catch(() => {
      return { errors: ['エラーが発生しました'] }
    })
    if (res.errors) {
      return {
        errors: res.errors
      }
    } else{
      commit('addSkills', res) 
      return {}
    }
  },
  async fetchSkills({ commit }) {
    const res = await this.$axios.$get('/api/v1/skills', {
      headers: {
        'access-token': localStorage.getItem('access-token'),
        uid: localStorage.getItem('uid'),
        client: localStorage.getItem('client'),
      },
    })
    commit('setSkills', res)
  },
  // const url = `/api/v1/tasks/${taskId}`
  // const res = await this.$axios.$delete(url)
  async deleteSkill({ commit }, skillID) {
    const url =  `/api/v1/skills/${skillID}`
    const res = await this.$axios.$delete(url, {
      headers: {
        'access-token': localStorage.getItem('access-token'),
        uid: localStorage.getItem('uid'),
        client: localStorage.getItem('client'),
      },
    })
  }
  
  
}

export const mutations = {
  addSkills(state, saveSkill) {
    const skills = state.skills.concat(saveSkill)
    state.skills =skills
  },
  setSkills(state, payload) {
    state.skills = []
    const skills = state.skills.concat(payload)
    state.skills = skills
  }
}

export const getters = {
  skills(state) {
    return state.skills
  },
}