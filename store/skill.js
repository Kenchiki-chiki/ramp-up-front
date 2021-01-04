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
    })
    commit('addSkills', res) 
    return res
  },
  async fetchSkills({ commit }) {
    // console.log('===3===')
    const res = await this.$axios.$get('/api/v1/skills', {
      headers: {
        'access-token': localStorage.getItem('access-token'),
        uid: localStorage.getItem('uid'),
        client: localStorage.getItem('client'),
      },
    })
    // console.log('===4===')
    // console.log(res)
    commit('setSkills', res)
  }
  
}

export const mutations = {
  addSkills(state, saveSkill) {
    const skills = state.skills.concat(saveSkill)
    state.skills =skills
  },
  setSkills(state, payload) {
    // console.log('===5===')
    // console.log(payload)
    state.skills = payload
    // console.log(state.skills)
  }
}

export const getters = {
  skills(state) {
    return state.skills
  },
}