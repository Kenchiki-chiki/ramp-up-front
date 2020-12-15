export const state = () => ({
  skillName: ""
})

export const actions = {
  async addSkills({ commit }, skillName) {
    console.log('====2==')
    const res = await this.$axios.$post('http://localhost:3000/api/v1/skills', skillName)
    const saveSkill = res.data
    commit('addSkills', saveSkill) 
    return saveSkill
  }
  
}

export const mutations = {
  addSkills(state, saveSkill) {
    console.log('====3==')
    const skillName = state.skillName.concat(saveSkill)
    state.skillName =skillName
  }
}