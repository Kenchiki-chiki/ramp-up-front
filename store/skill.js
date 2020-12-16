export const state = () => ({
  skillName: ""
})

export const actions = {
  async addSkills({ commit }, skillName) {
    const res = await this.$axios.$post('http://localhost:3000/api/v1/skills', skillName , {
      headers: {
          'access-token': localStorage.getItem('access-token'),
          uid: localStorage.getItem('uid'),
          client: localStorage.getItem('client'),
        },
    })
    const saveSkill = res.data
    commit('addSkills', saveSkill) 
    return saveSkill
  }
  
}

export const mutations = {
  addSkills(state, saveSkill) {
    const skillName = state.skillName.concat(saveSkill)
    state.skillName =skillName
  }
}