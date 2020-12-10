export const state = () => ({
  skillName: []
})

export const actions = {
  async addSkills({ commit }, skillName) {
    const res = await axios().post('http://localhost:3000/api/v1/skills', skillName)
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