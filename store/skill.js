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
  },
  // const url = `/api/v1/tasks/${taskId}`
  // const res = await this.$axios.$delete(url)
  async deleteSkill({ commit }, skillID) {
    console.log('===2===')
    console.log(skillID)
    const url =  `/api/v1/skills/${skillID}`
    const res = await this.$axios.$delete(url, {
      headers: {
        'access-token': localStorage.getItem('access-token'),
        uid: localStorage.getItem('uid'),
        client: localStorage.getItem('client'),
      },
    })
    console.log('===3===')
    console.log(res)
  }
  
  
}

export const mutations = {
  addSkills(state, saveSkill) {
    console.log('===4===')
    console.log(saveSkill)
    console.log(state.skills)
    const skills = state.skills.concat(saveSkill)
    console.log(skills)
    state.skills =skills
    console.log(state.skills)
  },
  setSkills(state, payload) {
    state.skills = []
    const skills = state.skills.concat(payload)
    console.log('===5===')
    console.log(payload)
    state.skills = skills
    console.log(state.skills)
  }
}

export const getters = {
  skills(state) {
    return state.skills
  },
}